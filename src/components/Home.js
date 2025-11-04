import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaServer, FaCloud, FaRobot, FaUsersCog } from 'react-icons/fa';
import './Home.css';

const Home = () => {
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

  const highlightCards = [
    {
      title: 'Back-end Craftsmanship',
      description: 'Designing APIs and distributed services with Spring Boot, Django, and PostgreSQL that pair resilience with clean architecture.',
      icon: <FaServer />
    },
    {
      title: 'Cloud-Native Delivery',
      description: 'Automating releases across AWS, GCP, Docker, and Kubernetes to keep features landing safely in production.',
      icon: <FaCloud />
    },
    {
      title: 'Applied AI & NLP',
      description: 'Shipping language-aware experiences that blend machine learning with pragmatic product goals and measurable impact.',
      icon: <FaRobot />
    },
    {
      title: 'Human-Friendly Collaboration',
      description: 'Leading squads, mentoring engineers, and translating complex roadmaps into shared wins for teams and stakeholders.',
      icon: <FaUsersCog />
    }
  ];

  const journeyMilestones = [
    {
      period: '2024 · UBIAI',
      title: 'NLP Specialist & Platform Engineer',
      description: 'Brought AI-powered annotation workflows to life with Angular and Django, while hardening DevOps pipelines on AWS.'
    },
    {
      period: '2023 · Sisal',
      title: 'Experience Engineering',
      description: 'Merged AEM, Java, and Vanilla JS to deliver dynamic, high-traffic content experiences and collaborative authoring tools.'
    },
    {
      period: '2022 · NST Groupe',
      title: 'Global Fisheries Platform',
      description: 'Built a full-stack monitoring suite for the Republic of Congo, blending Angular, Spring Boot, and DevOps automation.'
    }
  ];

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
        <h1>Hi, I'm Azer Ltifi</h1>
        <h2>Full Stack Developer</h2>
        <p>I build things for the web.</p>
        <div className="cta-buttons">
          <Link to="/resume" className="cta-button primary">View My Work</Link>
          <Link to="/contact" className="cta-button secondary">Get In Touch</Link>
        </div>
        <section className={`home-highlights ${isMounted ? 'visible' : ''}`}>
          <h3>What I Bring To The Team</h3>
          <div className="highlight-grid">
            {highlightCards.map((card, index) => (
              <article
                className="highlight-card"
                key={card.title}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="icon-wrapper">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className={`home-journey ${isMounted ? 'visible' : ''}`}>
          <h3>Recent Wins On The Ground</h3>
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
