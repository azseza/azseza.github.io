import { useState, useCallback, useEffect, useRef } from 'react';

const LINE_POINTS = [40, 100, 300, 1200];

export const useGameStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);
  const lastRowsClearedRef = useRef(0);

  const calcScore = useCallback(() => {
    if (rowsCleared > 0 && rowsCleared !== lastRowsClearedRef.current) {
      // Calculate points based on number of lines cleared and current level
      const points = LINE_POINTS[Math.min(rowsCleared - 1, LINE_POINTS.length - 1)] * (level + 1);
      
      // Update score and rows with bounds checking
      setScore(prev => {
        const newScore = prev + points;
        return Math.min(newScore, 999999); // Cap score at 999,999
      });
      
      setRows(prev => {
        const newRows = prev + rowsCleared;
        return Math.min(newRows, 999); // Cap rows at 999
      });

      lastRowsClearedRef.current = rowsCleared;
    }
  }, [level, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared]);

  // Reset lastRowsCleared when rowsCleared is 0
  useEffect(() => {
    if (rowsCleared === 0) {
      lastRowsClearedRef.current = 0;
    }
  }, [rowsCleared]);

  return [score, setScore, rows, setRows, level, setLevel];
}; 
