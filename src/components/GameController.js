import React, { forwardRef, useCallback, useEffect } from "react";
import "./GameController.css";

import { Action, actionForKey, actionIsDrop } from "../domain/Input";
import { playerController } from "../domain/PlayerController";

import { useInterval } from "../hooks/useInterval";
import { useDropTime } from "../hooks/useDropTime";
import { useSound } from "../hooks/useSound";

const GameController = forwardRef(
  (
    { board, gameStats, player, setGameOver, setPlayer },
    ref
  ) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
      gameStats
    });
    const playSound = useSound();

    useInterval(() => {
      handleInput({ action: Action.SlowDrop });
    }, dropTime);

    const handleInput = useCallback(({ action }) => {
      playerController({
        action,
        board,
        player,
        setPlayer,
        setGameOver
      });

      // Play appropriate sound effect
      if (action === Action.Rotate) {
        playSound('ROTATE');
      } else if (action === Action.FastDrop || action === Action.SlowDrop) {
        playSound('DROP');
      } else if (action === Action.Left || action === Action.Right) {
        playSound('MOVE');
      }
    }, [board, player, setPlayer, setGameOver, playSound]);

    const onKeyUp = useCallback(({ code }) => {
      const action = actionForKey(code);
      if (actionIsDrop(action)) resumeDropTime();
    }, [resumeDropTime]);

    const onKeyDown = useCallback(({ code }) => {
      const action = actionForKey(code);

      if (action === Action.Pause) {
        if (dropTime) {
          pauseDropTime();
        } else {
          resumeDropTime();
        }
      } else if (action === Action.Quit) {
        setGameOver(true);
      } else {
        if (actionIsDrop(action)) pauseDropTime();
        handleInput({ action });
      }
    }, [dropTime, pauseDropTime, resumeDropTime, setGameOver, handleInput]);

    // Touch controls
    const handleTouchStart = useCallback((e) => {
      const touch = e.touches[0];
      const startX = touch.clientX;
      const startY = touch.clientY;

      const handleTouchMove = (e) => {
        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        if (Math.abs(deltaX) > 30) {
          handleInput({ action: deltaX > 0 ? Action.Right : Action.Left });
          e.preventDefault();
        }
        if (deltaY > 30) {
          handleInput({ action: Action.FastDrop });
          e.preventDefault();
        }
      };

      const handleTouchEnd = (e) => {
        const touch = e.changedTouches[0];
        const deltaY = touch.clientY - startY;
        const deltaX = touch.clientX - startX;

        if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
          handleInput({ action: Action.Rotate });
        }

        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };

      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }, [handleInput]);

    useEffect(() => {
      const handleKeyDown = (e) => onKeyDown(e);
      const handleKeyUp = (e) => onKeyUp(e);

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }, [onKeyDown, onKeyUp]);

    return (
      <div
        className="GameController"
        onTouchStart={handleTouchStart}
        tabIndex={0}
        ref={ref}
      >
        <input
          type="text"
          style={{ opacity: 0, position: 'absolute' }}
          readOnly
        />
      </div>
    );
  }
);

export default GameController;
