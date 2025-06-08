import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stage, Layer, Rect } from 'react-konva';
import { TETROMINOS, BOARD_WIDTH, BOARD_HEIGHT, BLOCK_SIZE } from '../utils/tetromino';
import { checkCollision, createBoard } from '../utils/gameHelpers';
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';
import './Tetris.css';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [music, setMusic] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const lastDropTimeRef = useRef(null);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const playMusic = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/tetris-theme.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      
      audioRef.current.addEventListener('error', (e) => {
        console.error('Error loading audio:', e);
        setStatus('error');
      });
    }
    
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Audio play failed:', error);
        document.addEventListener('click', () => {
          audioRef.current.play().catch(e => console.log('Audio play failed after click:', e));
        }, { once: true });
      });
    }
  }, []);

  const stopMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    if (!isPaused && !gameOver) {
      playMusic();
    } else {
      stopMusic();
    }
    return () => {
      stopMusic();
    };
  }, [isPaused, gameOver, playMusic, stopMusic]);

  const movePlayer = useCallback((dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }, [player, stage, updatePlayerPos]);

  const keyUp = useCallback(({ keyCode }) => {
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
    playMusic();
  }, [setStage, resetPlayer, setScore, setRows, setLevel, playMusic]);

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
        stopMusic();
        return;
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }, [player, stage, rows, level, updatePlayerPos, setLevel, stopMusic, isPaused]);

  const dropPlayer = useCallback(() => {
    if (!isPaused) {
      setDropTime(null);
      drop();
    }
  }, [drop, isPaused]);

  const move = useCallback(({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      } else if (keyCode === 80) { // 'P' key for pause
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
      }
    }
  }, [gameOver, movePlayer, dropPlayer, playerRotate, stage, isPaused, dropTime, level]);

  useEffect(() => {
    document.addEventListener('keydown', move);
    document.addEventListener('keyup', keyUp);
    return () => {
      document.removeEventListener('keydown', move);
      document.removeEventListener('keyup', keyUp);
    };
  }, [move, keyUp]);

  useInterval(() => {
    if (!isPaused) {
      drop();
    }
  }, dropTime);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const renderBlocks = () => {
    const blocks = [];
    
    // Render stage blocks
    stage.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value[0] !== 0) {
          blocks.push(
            <Rect
              key={`stage-${y}-${x}`}
              x={x * BLOCK_SIZE}
              y={y * BLOCK_SIZE}
              width={BLOCK_SIZE}
              height={BLOCK_SIZE}
              fill={TETROMINOS[value[0]].color}
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
          blocks.push(
            <Rect
              key={`player-${y}-${x}`}
              x={(player.pos.x + x) * BLOCK_SIZE}
              y={(player.pos.y + y) * BLOCK_SIZE}
              width={BLOCK_SIZE}
              height={BLOCK_SIZE}
              fill={TETROMINOS[value].color}
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
      <div className="game-info">
        <div className="score">Score: {score}</div>
        <div className="rows">Rows: {rows}</div>
        <div className="level">Level: {level}</div>
        {isPaused && <div className="paused">PAUSED</div>}
      </div>
      <div className="game-board">
        <Stage width={BOARD_WIDTH * BLOCK_SIZE} height={BOARD_HEIGHT * BLOCK_SIZE}>
          <Layer>
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
    </div>
  );
};

export default Tetris;
