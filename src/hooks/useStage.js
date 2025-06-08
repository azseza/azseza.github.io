import { useState, useCallback, useEffect, useRef } from 'react';
import { createBoard } from '../utils/gameHelpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createBoard());
  const [rowsCleared, setRowsCleared] = useState(0);
  const isClearingRef = useRef(false);

  const sweepRows = useCallback((newStage) => {
    // Find rows that need to be cleared
    const rowsToClear = newStage.reduce((count, row) => {
      return row.every(cell => cell[0] !== 0) ? count + 1 : count;
    }, 0);

    if (rowsToClear === 0) return newStage;

    // Update rowsCleared state
    setRowsCleared(rowsToClear);

    // Create new stage with cleared rows
    return newStage.reduce((acc, row) => {
      if (row.every(cell => cell[0] !== 0)) {
        // Add empty row at top
        acc.unshift(new Array(newStage[0].length).fill([0, 'clear']));
        return acc;
      }
      acc.push(row);
      return acc;
    }, []);
  }, []);

  useEffect(() => {
    if (!player) return;

    const updateStage = prevStage => {
      // First, clear the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ];
          }
        });
      });

      // Check if we collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer, sweepRows]);

  // Reset rowsCleared after a short delay
  useEffect(() => {
    if (rowsCleared > 0) {
      const timer = setTimeout(() => {
        setRowsCleared(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [rowsCleared]);

  return [stage, setStage, rowsCleared];
}; 