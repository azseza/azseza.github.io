import { useCallback } from 'react';

const SOUNDS = {
  ROTATE: '/sounds/rotate.mp3',
  MOVE: '/sounds/move.mp3',
  DROP: '/sounds/drop.mp3',
  CLEAR: '/sounds/clear.mp3',
  GAME_OVER: '/sounds/game-over.mp3'
};

const audioCache = {};

const loadSound = (src) => {
  if (!audioCache[src]) {
    audioCache[src] = new Audio(src);
  }
  return audioCache[src];
};

export const useSound = () => {
  const playSound = useCallback((soundType) => {
    const soundSrc = SOUNDS[soundType];
    if (soundSrc) {
      const audio = loadSound(soundSrc);
      audio.currentTime = 0;
      audio.play().catch(error => {
        console.warn('Failed to play sound:', error);
      });
    }
  }, []);

  return playSound;
}; 