import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stage, Layer, Rect } from 'react-konva';
import { TETROMINOS, BOARD_WIDTH, BOARD_HEIGHT, BLOCK_SIZE } from '../utils/tetromino';
import { checkCollision, createBoard } from '../utils/gameHelpers';
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';
import { useSound } from '../hooks/useSound';
import './Tetris.css';

const Tetris = () => {
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

  const playSound = useSound();
  const [blockSize, setBlockSize] = useState(BLOCK_SIZE);
  const gameBoardRef = useRef(null);
  const isStrudelMode = mode === 'strudel';

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

  useEffect(() => {
    if (rowsCleared > 0) {
      playSound('CLEAR');
    }
  }, [rowsCleared, playSound]);

  useEffect(() => {
    if (gameOver) {
      playSound('GAME_OVER');
    }
  }, [gameOver, playSound]);

  const movePlayer = useCallback((dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
      playSound('MOVE');
    }
  }, [player, stage, updatePlayerPos, playSound]);

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
      playSound('DROP');
    }
  }, [player, stage, rows, level, updatePlayerPos, setLevel, playSound, isPaused]);

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
    playSound('DROP');
  }, [gameOver, isPaused, player, stage, updatePlayerPos, setDropTime, level, playSound]);

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
          playSound('ROTATE');
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
  }, [gameOver, movePlayer, dropPlayer, playerRotate, stage, hardDrop, playSound, togglePause, startGame]);

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
      playSound('ROTATE');
      return;
    }

    if (absX > absY) {
      movePlayer(deltaX > 0 ? 1 : -1);
    } else if (deltaY > 0) {
      dropPlayer();
    }

    touchStartRef.current = null;
  }, [gameOver, movePlayer, dropPlayer, playerRotate, stage, playSound]);

  useEffect(() => {
    if (!isStrudelMode) {
      startGame();
    } else {
      setDropTime(null);
      setIsPaused(false);
    }
  }, [isStrudelMode, startGame]);

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
            Classic Tetris
          </button>
          <button
            type="button"
            className={`mode-button ${isStrudelMode ? 'active' : ''}`}
            onClick={() => setMode('strudel')}
          >
            Strudel Jam
          </button>
        </div>
        <span className="mode-status">
          Mode: {isStrudelMode ? 'Strudel Jam' : 'Classic Tetris'}
        </span>
        <span className="mode-hint">
          {isStrudelMode
            ? 'Live-code beats right here in the browser.'
            : 'Drop blocks, clear lines, and chase a high score.'}
        </span>
      </div>
      {isStrudelMode ? (
        <div className="strudel-wrapper">
          <h3 className="strudel-heading">Strudel Live Coding IDE</h3>
          <iframe
            title="Strudel Live Coding IDE"
            src="https://strudel.cc/?embed=1"
            className="strudel-iframe"
            allow="autoplay; microphone; clipboard-read; clipboard-write"
            loading="lazy"
          />
          <p className="strudel-note">
            Tip: type a pattern like <code>d1 $ sound "bd sn"</code> and hit Shift+Enter to play.
          </p>
        </div>
      ) : (
        <>
          <div className="game-info">
            <div className="stat">
              <span className="label">Score</span>
              <span className="value">{score}</span>
            </div>
            <div className="stat">
              <span className="label">Rows</span>
              <span className="value">{rows}</span>
            </div>
            <div className="stat">
              <span className="label">Level</span>
              <span className="value">{level}</span>
            </div>
            <button
              type="button"
              className={`pause-button ${isPaused ? 'resume' : ''}`}
              onClick={togglePause}
            >
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          </div>
          {isPaused && <div className="paused">Paused</div>}
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
              <h2>Game Over!</h2>
              <p>Final Score: {score}</p>
              <button onClick={startGame}>Play Again</button>
              <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Tetris;
