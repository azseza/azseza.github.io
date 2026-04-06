import React from 'react';
import { useTranslation } from 'react-i18next';
import Tetris from '../components/Tetris';
import './ChillContainer.css';

const ChillContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="chill-container">
      <h2>{t('chill.heading', { defaultValue: 'Take a Break and Chill With Me!' })}</h2>
      <p className="chill-intro">
        {t('chill.intro', { defaultValue: 'Choose between classic Tetris gameplay or live-code music with Strudel using the toggle below.' })}
      </p>
      <div className="game-wrapper">
        <Tetris rows={20} columns={10} />
      </div>
    </div>
  );
};

export default ChillContainer;
