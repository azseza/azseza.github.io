import React from 'react';
import './GameOver.css';

const GameOver = ({ score, highScore, onRestart }) => {
  return (
    <div className="game-over">
      <div className="game-over-content">
        <h2>Game Over</h2>
        <div className="scores">
          <div className="score-item">
            <span>Score</span>
            <span className="score-value">{score}</span>
          </div>
          <div className="score-item">
            <span>High Score</span>
            <span className="score-value">{highScore}</span>
          </div>
        </div>
        <button onClick={onRestart} className="restart-button">
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver; 