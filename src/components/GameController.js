import React, { forwardRef } from "react";
import "./GameController.css";

import { Action, actionForKey, actionIsDrop } from "../domain/Input";
import { playerController } from "../domain/PlayerController";

import { useInterval } from "../hooks/useInterval";
import { useDropTime } from "../hooks/useDropTime";

const GameController = forwardRef(
  (
    { board, gameStats, player, setGameOver, setPlayer },
    ref
  ) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
      gameStats
    });
    useInterval(() => {
      handleInput({ action: Action.SlowDrop });
    }, dropTime);

    const onKeyUp = ({ code }) => {
      const action = actionForKey(code);
      if (actionIsDrop(action)) resumeDropTime();
    };

    const onKeyDown = ({ code }) => {
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
    };

    const handleInput = ({ action }) => {
      playerController({
        action,
        board,
        player,
        setPlayer,
        setGameOver
      });
    };

    return (
      <input
        className="GameController"
        type="text"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        ref={ref}
      />
    );
  }
);

export default GameController;
