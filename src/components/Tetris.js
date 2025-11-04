import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stage, Layer, Rect } from 'react-konva';
import { useTranslation, Trans } from 'react-i18next';
import { TETROMINOS, BOARD_WIDTH, BOARD_HEIGHT, BLOCK_SIZE } from '../utils/tetromino';
import { checkCollision, createBoard } from '../utils/gameHelpers';
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';
import { trackEvent } from '../utils/analytics';
import './Tetris.css';

const STRUDEL_PATTERNS = [
  {
    id: 'sequential-dub',
    title: 'Sequential Dub Tape',
    pattern: `stack(
  s("bd!2 [bd*4]!2 bd!4").slow(8).bank("SequentialCircuitsDrumtracks"),
  s("~ hh").bank("SequentialCircuitsDrumtracks"),
  n("<[[2 ~] [2 ~] 2 3] [[3 ~] [3 ~] 3 3]>@4 [-1 ~] -1 -1 [0 ~] 0 0 [0 ~] 0 0 [0 ~] 0 0")
    .slow(8)
    .scale("d2:minor")
    .s("gm_lead_8_bass_lead")
).cpm(130)`,
    description: 'Sequential Circuits drums with a modal bass lead—straight from a Strudel songbook sketch.'
  },
  {
    id: 'celestial-waves',
    title: 'Celestial Waves',
    pattern: `stack(
  s("pad").slow(2).room(0.8).size(0.9).gain(0.7),
  n("<0 [3 7] 10 7>").slow(4).scale("c#:lydian").s("supersaw"),
  s("perc:click").slow(8).degradeBy(0.4)
).cpm(92)`,
    description: 'Lydian pads and soft clicks for floating ambient builds.'
  },
  {
    id: 'broken-amen',
    title: 'Broken Amen Sketch',
    pattern: `stack(
  s("amen:1 amen:2 amen:3 amen:4").fast(2).degradeBy(0.25),
  s("bd(3,8)").gain(0.85),
  s("sn:classic").slow(2).rev().gain(0.7),
  s("hh:3").fast(4).gain(0.6)
).cpm(170)`,
    description: 'Fractured amen breaks with responsive hats for jungle or hip-hop freestyles.'
  },
  {
    id: 'desert-caravan',
    title: 'Desert Caravan',
    pattern: `stack(
  n("<0 2 3 5>").slow(6).scale("d:hijaz").s("gm_sitar_107_sitar"),
  s("tabla:na tabla:tin").slow(3),
  s("shaker*4").fast(2).gain(0.4)
).cpm(105)`,
    description: 'Hijaz-flavoured sitar motifs over tabla patterns with gentle shakers.'
  },
  {
    id: 'midnight-keys',
    title: 'Midnight Keys',
    pattern: `stack(
  n("<0 7 5 3>").slow(4).scale("f#:dorian").s("gm_electric_piano_5").legato(0.9),
  s("bd sd~").slow(2).gain(0.75),
  s("hh:closed").fast(4).degradeBy(0.2)
).cpm(96)`,
    description: 'Late-night electric piano voicings with understated boom-bap drums.'
  }
];


const Tetris = () => {
  const { t } = useTranslation();
  const [mode, setMode] = useState('tetris');
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const lastDropTimeRef = useRef(null);
  const touchStartRef = useRef(null);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const [blockSize, setBlockSize] = useState(BLOCK_SIZE);
  const gameBoardRef = useRef(null);
  const [copyFeedback, setCopyFeedback] = useState(null);
  const copyTimeoutRef = useRef(null);
  const codeRefs = useRef({});
  const isStrudelMode = mode === 'strudel';
  const classicLabel = t('tetris.mode.classic', { defaultValue: 'Classic Tetris' });
  const strudelLabel = t('tetris.mode.strudel', { defaultValue: 'Strudel Jam' });
  const activeModeLabel = isStrudelMode ? strudelLabel : classicLabel;
  const modeStatus = t('tetris.mode.status', {
    mode: activeModeLabel,
    defaultValue: `Mode: ${activeModeLabel}`
  });
  const modeHint = isStrudelMode
    ? t('tetris.mode.hintStrudel', { defaultValue: 'Live-code beats right here in the browser.' })
    : t('tetris.mode.hintClassic', { defaultValue: 'Drop blocks, clear lines, and chase a high score.' });
  const patternExample = 'd1 $ sound "bd sn"';
  const copyLabel = t('tetris.mode.copyPattern', { defaultValue: 'Copy pattern' });
  const copiedLabel = t('tetris.mode.copied', { defaultValue: 'Copied!' });
  const manualLabel = t('tetris.mode.copyManual', { defaultValue: 'Select text & press Ctrl+C' });
  const samplesSourceLabel = t('tetris.mode.samplesSource', { defaultValue: 'More Strudel songs on GitHub:' });

  useEffect(() => {
    const MIN_BLOCK_SIZE = 14;
    const MAX_BOARD_WIDTH = 420;
    const HORIZONTAL_PADDING = 48;

    const calculateBlockSize = () => {
      const parentWidth = gameBoardRef.current?.parentElement?.clientWidth ?? window.innerWidth;
      const availableWidth = Math.max(parentWidth - HORIZONTAL_PADDING, BOARD_WIDTH * MIN_BLOCK_SIZE);
      const maxBoardWidth = Math.min(MAX_BOARD_WIDTH, availableWidth);
      const proposedSize = Math.floor(maxBoardWidth / BOARD_WIDTH);
      return Math.max(MIN_BLOCK_SIZE, Math.min(BLOCK_SIZE, proposedSize));
    };

    const applySize = () => {
      setBlockSize(calculateBlockSize());
    };

    applySize();

    const observerTarget = gameBoardRef.current?.parentElement;
    let resizeObserver;
    if (observerTarget && 'ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(applySize);
      resizeObserver.observe(observerTarget);
    }

    window.addEventListener('resize', applySize);
    return () => {
      window.removeEventListener('resize', applySize);
      if (resizeObserver && observerTarget) {
        resizeObserver.unobserve(observerTarget);
      }
    };
  }, []);

  const boardWidth = BOARD_WIDTH * blockSize;
  const boardHeight = BOARD_HEIGHT * blockSize;



  const movePlayer = useCallback((dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }, [player, stage, updatePlayerPos]);

  const keyUp = useCallback((event) => {
    const { keyCode } = event;
    if (!gameOver && !isPaused) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  }, [gameOver, level, isPaused]);

  const startGame = useCallback(() => {
    setStage(createBoard());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
    setIsPaused(false);
    lastDropTimeRef.current = null;
  }, [setStage, resetPlayer, setScore, setRows, setLevel]);

  const drop = useCallback(() => {
    if (isPaused) return;

    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1));
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
        return;
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }, [player, stage, rows, level, updatePlayerPos, setLevel, isPaused]);

  const dropPlayer = useCallback(() => {
    if (!isPaused) {
      setDropTime(null);
      drop();
    }
  }, [drop, isPaused]);

  const hardDrop = useCallback(() => {
    if (isPaused || gameOver) return;

    let dropDistance = 0;
    while (!checkCollision(player, stage, { x: 0, y: dropDistance + 1 })) {
      dropDistance += 1;
    }

    if (dropDistance > 0) {
      updatePlayerPos({ x: 0, y: dropDistance, collided: false });
    }
    updatePlayerPos({ x: 0, y: 0, collided: true });
    setDropTime(1000 / (level + 1));
  }, [gameOver, isPaused, player, stage, updatePlayerPos, setDropTime, level]);

  const togglePause = useCallback(() => {
    setIsPaused(prev => {
      const newPaused = !prev;
      if (newPaused) {
        lastDropTimeRef.current = dropTime;
        setDropTime(null);
      } else {
        setDropTime(lastDropTimeRef.current || 1000 / (level + 1));
      }
      return newPaused;
    });
  }, [dropTime, level, setDropTime]);

  const move = useCallback((event) => {
    const { keyCode, repeat } = event;
    if (repeat) return;

    if ([32, 37, 38, 39, 40, 80].includes(keyCode)) {
      event.preventDefault();
    }

    if (!gameOver) {
      switch (keyCode) {
        case 37:
          movePlayer(-1);
          break;
        case 39:
          movePlayer(1);
          break;
        case 40:
          dropPlayer();
          break;
        case 38:
          playerRotate(stage, 1);
              break;
        case 32:
          hardDrop();
          break;
        case 80:
          togglePause();
          break;
        default:
          break;
      }
    } else if (keyCode === 13) {
      startGame();
    }
  }, [gameOver, movePlayer, dropPlayer, playerRotate, stage, hardDrop, togglePause, startGame]);

  useEffect(() => {
    if (isStrudelMode) {
      return undefined;
    }
    document.addEventListener('keydown', move);
    document.addEventListener('keyup', keyUp);
    return () => {
      document.removeEventListener('keydown', move);
      document.removeEventListener('keyup', keyUp);
    };
  }, [move, keyUp, isStrudelMode]);

  useEffect(() => () => {
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
  }, []);

  useInterval(() => {
    if (!isPaused) {
      drop();
    }
  }, isStrudelMode ? null : dropTime);

  const handleTouchStart = useCallback((event) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback((event) => {
    if (!touchStartRef.current || gameOver) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    const swipeThreshold = 30;

    if (absX < swipeThreshold && absY < swipeThreshold) {
      playerRotate(stage, 1);
      return;
    }

    if (absX > absY) {
      movePlayer(deltaX > 0 ? 1 : -1);
    } else if (deltaY > 0) {
      dropPlayer();
    }

    touchStartRef.current = null;
  }, [gameOver, movePlayer, dropPlayer, playerRotate, stage]);

  useEffect(() => {
    if (!isStrudelMode) {
      startGame();
    } else {
      setDropTime(null);
      setIsPaused(false);
    }
  }, [isStrudelMode, startGame]);

  useEffect(() => {
    if (!isStrudelMode) {
      setCopyFeedback(null);
      const selection = window.getSelection();
      selection?.removeAllRanges();
    }
  }, [isStrudelMode]);

  const handleCopyPattern = useCallback(async (pattern) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(pattern.pattern);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = pattern.pattern;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopyFeedback({ id: pattern.id, type: 'copied' });
      trackEvent({
        action: 'copy_pattern',
        category: 'strudel',
        label: pattern.id
      });
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = setTimeout(() => setCopyFeedback(null), 2000);
      const selection = window.getSelection();
      selection?.removeAllRanges();
    } catch (error) {
      const codeElement = codeRefs.current[pattern.id];
      if (codeElement && window.getSelection) {
        const range = document.createRange();
        range.selectNodeContents(codeElement);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      trackEvent({
        action: 'copy_pattern_manual',
        category: 'strudel',
        label: pattern.id
      });
      setCopyFeedback({ id: pattern.id, type: 'manual' });
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = setTimeout(() => setCopyFeedback(null), 4000);
    }
  }, []);

  const getCopyLabel = (id) => {
    if (!copyFeedback || copyFeedback.id !== id) return copyLabel;
    return copyFeedback.type === 'copied' ? copiedLabel : manualLabel;
  };

  const renderBlocks = () => {
    const blocks = [];
    
    // Render stage blocks
    stage.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value[0] !== 0) {
          const color = TETROMINOS[value[0]]?.color || '255, 255, 255';
          blocks.push(
            <Rect
              key={`stage-${y}-${x}`}
              x={x * blockSize}
              y={y * blockSize}
              width={blockSize}
              height={blockSize}
              fill={`rgba(${color}, ${value[1] === 'merged' ? 1 : 0.85})`}
              stroke="#000"
              strokeWidth={1}
            />
          );
        }
      });
    });

    // Render player blocks
    player.tetromino.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          const color = TETROMINOS[value]?.color || '255, 255, 255';
          blocks.push(
            <Rect
              key={`player-${y}-${x}`}
              x={(player.pos.x + x) * blockSize}
              y={(player.pos.y + y) * blockSize}
              width={blockSize}
              height={blockSize}
              fill={`rgba(${color}, 0.95)`}
              stroke="#000"
              strokeWidth={1}
            />
          );
        }
      });
    });

    return blocks;
  };

  return (
    <div className="tetris-container">
      <div className="mode-toggle">
        <div className="mode-buttons">
          <button
            type="button"
            className={`mode-button ${!isStrudelMode ? 'active' : ''}`}
            onClick={() => setMode('tetris')}
          >
            {classicLabel}
          </button>
          <button
            type="button"
            className={`mode-button ${isStrudelMode ? 'active' : ''}`}
            onClick={() => setMode('strudel')}
          >
            {strudelLabel}
          </button>
        </div>
        <span className="mode-status">{modeStatus}</span>
        <span className="mode-hint">{modeHint}</span>
      </div>
      {isStrudelMode ? (
        <div className="strudel-wrapper">
          <h3 className="strudel-heading">
            {t('tetris.mode.heading', { defaultValue: 'Strudel Live Coding IDE' })}
          </h3>
          <iframe
            title="Strudel Live Coding IDE"
            src="https://strudel.cc/?embed=1"
            className="strudel-iframe"
            allow="autoplay; microphone; clipboard-read; clipboard-write"
            loading="lazy"
          />
          <p className="strudel-note">
            <Trans
              i18nKey="tetris.mode.tip"
              values={{ pattern: patternExample }}
              components={{ code: <code /> }}
              defaults='Tip: type a pattern like <code>{{pattern}}</code> and hit Shift+Enter to play.'
            />
          </p>
          <div className="strudel-playlist">
            <h4>{t('tetris.mode.samplesHeading', { defaultValue: 'Try these patterns' })}</h4>
            <ul>
              {STRUDEL_PATTERNS.map((pattern) => (
                <li key={pattern.id}>
                  <div>
                    <strong>{pattern.title}</strong>
                    <p>{pattern.description}</p>
                    <code
                      ref={(el) => {
                        if (el) {
                          codeRefs.current[pattern.id] = el;
                        } else {
                          delete codeRefs.current[pattern.id];
                        }
                      }}
                    >
                      {pattern.pattern}
                    </code>
                  </div>
                  <button
                    type="button"
                    className="pattern-copy"
                    onClick={() => handleCopyPattern(pattern)}
                  >
                    {getCopyLabel(pattern.id)}
                  </button>
                </li>
              ))}
            </ul>
            <p className="strudel-playlist__source">
              {samplesSourceLabel}{' '}
              <a
                href="https://github.com/eefano/strudel-songs-collection"
                target="_blank"
                rel="noopener noreferrer"
              >
                strudel-songs-collection
              </a>
            </p>
          </div>
          <div className="strudel-community">
            <h4>{t('tetris.mode.freestyleHeading', { defaultValue: 'Freestyle corner' })}</h4>
            <p className="strudel-community__blurb">
              {t('tetris.mode.freestyleDescription', {
                defaultValue: 'Leave a note about your jam and check back soon for recorded freestyles.'
              })}
            </p>
            <div className="freestyle-placeholder">
              <p>{t('tetris.mode.playbackPlaceholder', { defaultValue: 'Freestyle playback arriving soon.' })}</p>
              <button type="button" className="freestyle-button" disabled>
                {t('tetris.mode.playbackCta', { defaultValue: 'Stay tuned' })}
              </button>
            </div>
            <label className="strudel-comments">
              <span>{t('tetris.mode.commentsLabel', { defaultValue: 'Leave a comment' })}</span>
              <textarea
                placeholder={t('tetris.mode.commentsPlaceholder', {
                  defaultValue: 'Share your thoughts, requests, or shout-outs...'
                })}
                disabled
              />
            </label>
            <button type="button" className="comment-submit" disabled>
              {t('tetris.mode.commentsCta', { defaultValue: 'Share (coming soon)' })}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="game-info">
            <div className="stat">
              <span className="label">{t('tetris.stats.score', { defaultValue: 'Score' })}</span>
              <span className="value">{score}</span>
            </div>
            <div className="stat">
              <span className="label">{t('tetris.stats.rows', { defaultValue: 'Rows' })}</span>
              <span className="value">{rows}</span>
            </div>
            <div className="stat">
              <span className="label">{t('tetris.stats.level', { defaultValue: 'Level' })}</span>
              <span className="value">{level}</span>
            </div>
            <button
              type="button"
              className={`pause-button ${isPaused ? 'resume' : ''}`}
              onClick={togglePause}
            >
              {isPaused
                ? t('tetris.resume', { defaultValue: 'Resume' })
                : t('tetris.pause', { defaultValue: 'Pause' })}
            </button>
          </div>
          {isPaused && (
            <div className="paused">
              {t('tetris.pausedOverlay', { defaultValue: 'Paused' })}
            </div>
          )}
          <div
            ref={gameBoardRef}
            className="game-board"
            style={{ width: boardWidth, height: boardHeight }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Stage width={boardWidth} height={boardHeight}>
              <Layer>
                <Rect
                  x={0}
                  y={0}
                  width={boardWidth}
                  height={boardHeight}
                  fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                  fillLinearGradientEndPoint={{ x: boardWidth, y: boardHeight }}
                  fillLinearGradientColorStops={[0, '#0b1c2d', 1, '#102438']}
                />
                {renderBlocks()}
              </Layer>
            </Stage>
          </div>
          {gameOver ? (
            <div className="game-over">
              <h2>{t('tetris.gameOverTitle', { defaultValue: 'Game Over!' })}</h2>
              <p>
                {t('tetris.finalScore', { defaultValue: 'Final Score' })}: {score}
              </p>
              <button onClick={startGame}>
                {t('tetris.playAgain', { defaultValue: 'Play Again' })}
              </button>
              <button onClick={() => navigate('/')}>
                {t('tetris.backHome', { defaultValue: 'Back to Home' })}
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Tetris;
