import { useState, useEffect } from 'react';

const HIGH_SCORE_KEY = 'tetris_high_score';

export const useHighScore = () => {
  const [highScore, setHighScore] = useState(() => {
    const savedScore = localStorage.getItem(HIGH_SCORE_KEY);
    return savedScore ? parseInt(savedScore, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(HIGH_SCORE_KEY, highScore.toString());
  }, [highScore]);

  const updateHighScore = (score) => {
    if (score > highScore) {
      setHighScore(score);
      return true;
    }
    return false;
  };

  return [highScore, updateHighScore];
}; 