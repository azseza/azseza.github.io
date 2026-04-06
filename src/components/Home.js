import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaServer, FaCloud, FaRobot, FaUsersCog, FaLinux, FaDocker, FaGitAlt, FaReact, FaPython, FaJava, FaAngular } from 'react-icons/fa';
import { SiVim, SiKubernetes, SiSpring } from 'react-icons/si';
import './Home.css';

const ICON_MAP = {
  server: FaServer,
  cloud: FaCloud,
  robot: FaRobot,
  team: FaUsersCog
};

const TECH_ICONS = [
  { Icon: FaLinux, label: 'Linux' },
  { Icon: SiVim, label: 'Vim' },
  { Icon: FaDocker, label: 'Docker' },
  { Icon: SiKubernetes, label: 'Kubernetes' },
  { Icon: FaGitAlt, label: 'Git' },
  { Icon: FaReact, label: 'React', spin: true },
  { Icon: FaPython, label: 'Python' },
  { Icon: FaJava, label: 'Java' },
  { Icon: SiSpring, label: 'Spring' },
  { Icon: FaAngular, label: 'Angular' },
];

const Home = () => {
  const { t } = useTranslation();
  const [currentSymbol, setCurrentSymbol] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSymbol((prev) => (prev + 1) % TECH_ICONS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const highlightData = t('home.highlights', { returnObjects: true }) || [];
  const highlights = highlightData.map((item) => {
    const Icon = ICON_MAP[item.icon] || FaUsersCog;
    return { ...item, Icon };
  });

  const journeyMilestones = t('home.journey', { returnObjects: true }) || [];

  const highlightsTitle = t('home.highlightsTitle', { defaultValue: 'What I Bring To The Team' });
  const journeyTitle = t('home.journeyTitle', { defaultValue: 'Recent Wins On The Ground' });

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="open-source-symbols">
          {TECH_ICONS.map((tech, index) => (
            <div
              className={`symbol ${currentSymbol === index ? 'active' : ''} ${tech.spin ? 'spin-icon' : ''}`}
              key={tech.label}
            >
              <tech.Icon aria-label={tech.label} />
            </div>
          ))}
        </div>
        <h1>{t('home.greeting', { defaultValue: "Hi, I'm Azer Ltifi" })}</h1>
        <h2>{t('home.role', { defaultValue: 'Full Stack Developer' })}</h2>
        <p>{t('home.tagline', { defaultValue: 'I build things for the web.' })}</p>
        <div className="cta-buttons">
          <Link to="/resume" className="cta-button primary">{t('home.cta.primary', { defaultValue: 'View My Work' })}</Link>
          <Link to="/contact" className="cta-button secondary">{t('home.cta.secondary', { defaultValue: 'Get In Touch' })}</Link>
        </div>
        <section className={`home-highlights ${isMounted ? 'visible' : ''}`}>
          <h3>{highlightsTitle}</h3>
          <div className="highlight-grid">
            {highlights.map((card, index) => {
              const IconComponent = card.Icon || FaUsersCog;
              return (
                <article
                  className="highlight-card"
                  key={`${card.title}-${index}`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="icon-wrapper"><IconComponent /></div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section className={`home-journey ${isMounted ? 'visible' : ''}`}>
          <h3>{journeyTitle}</h3>
          <div className="journey-timeline">
            {journeyMilestones.map((milestone, index) => (
              <div
                className="timeline-item"
                key={milestone.title}
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <span className="timeline-period">{milestone.period}</span>
                <div className="timeline-content">
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
