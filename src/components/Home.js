import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaServer, FaCloud, FaRobot, FaUsersCog } from 'react-icons/fa';
import './Home.css';

const ICON_MAP = {
  server: FaServer,
  cloud: FaCloud,
  robot: FaRobot,
  team: FaUsersCog
};

const Home = () => {
  const { t } = useTranslation();
  const [currentSymbol, setCurrentSymbol] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSymbol((prev) => (prev + 1) % 10);
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
          <div className={`symbol tux ${currentSymbol === 0 ? 'active' : ''}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" alt="Linux Tux" />
          </div>
          <div className={`symbol vim ${currentSymbol === 1 ? 'active' : ''}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg" alt="Vim" />
          </div>
          <div className={`symbol docker ${currentSymbol === 2 ? 'active' : ''}`}>
            <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="Docker" />
          </div>
          <div className={`symbol kubernetes ${currentSymbol === 3 ? 'active' : ''}`}>
            <img src="https://kubernetes.io/images/kubernetes-horizontal-color.png" alt="Kubernetes" />
          </div>
          <div className={`symbol git ${currentSymbol === 4 ? 'active' : ''}`}>
            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" />
          </div>
          <div className={`symbol react ${currentSymbol === 5 ? 'active' : ''}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
          </div>
          <div className={`symbol python ${currentSymbol === 6 ? 'active' : ''}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
          </div>
          <div className={`symbol java ${currentSymbol === 7 ? 'active' : ''}`}>
            <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" />
          </div>
          <div className={`symbol spring ${currentSymbol === 8 ? 'active' : ''}`}>
            <img src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg" alt="Spring" />
          </div>
          <div className={`symbol angular ${currentSymbol === 9 ? 'active' : ''}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="Angular" />
          </div>
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
