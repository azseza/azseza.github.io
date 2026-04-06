import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChillContainer from './containers/ChillContainer';
import ResumeContainer from './containers/ResumeContainer';
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import linkedInLogo from './media/linkedin-icon.svg';
import gitHubLogo from './media/github-icon.svg';
import LanguageSwitcher from './components/LanguageSwitcher';
import { initAnalytics, trackPageview, trackEvent } from './utils/analytics';

const ROUTE_TITLES = {
  '/': 'Azer Ltifi · Full Stack Engineer',
  '/chill': 'Chill With Me · Azer Ltifi',
  '/resume': 'Résumé · Azer Ltifi',
  '/contact': 'Contact · Azer Ltifi',
};

const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageview(`${location.pathname}${location.search}${location.hash}`);
    document.title = ROUTE_TITLES[location.pathname] || 'Azer Ltifi · Full Stack Engineer';
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    const nextState = !menuOpen;
    setMenuOpen(nextState);
    trackEvent({
      action: nextState ? 'open' : 'close',
      category: 'navigation',
      label: 'mobile_menu_toggle'
    });
  };

  return (
    <>
      <a className="skip-to-content" href="#main-content">Skip to content</a>
      <nav id="navbar">
        <NavLink to='/' className="navbar-links">
          <img src={require("./media/logo.png")} alt='Azer Ltifi - Home' id="logo" />
        </NavLink>
        <button
          type="button"
          className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">{t('nav.toggle', { defaultValue: 'Menu' })}</span>
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`} id="primary-navigation">
          <div className="nav-links">
            <NavLink to='/' end className="navbar-links">
              {t('nav.home', { defaultValue: '01. Home' })}
            </NavLink>
            <NavLink to='/chill' className="navbar-links">
              {t('nav.chill', { defaultValue: '02. Chill With Me' })}
            </NavLink>
            <NavLink to='/resume' className="navbar-links">
              {t('nav.resume', { defaultValue: '03. Résumé' })}
            </NavLink>
            <NavLink to='/contact' className="navbar-links">
              {t('nav.contact', { defaultValue: '04. Contact' })}
            </NavLink>
          </div>
          <div className="nav-right">
            <LanguageSwitcher />
            <div id="social-links-div">
              <a href="https://github.com/azseza" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <img src={gitHubLogo} alt='GitHub' className="icons" />
              </a>
              <a href="https://www.linkedin.com/in/azer-ltifi-528284120/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <img src={linkedInLogo} alt='LinkedIn' className="icons" />
              </a>
              <a href="https://x.com/AzeerLtifi" target="_blank" rel="noopener noreferrer" aria-label="X profile">
                <svg viewBox="0 0 24 24" className="icons x-icon" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>
              </a>
              <a href="mailto:azeer.ltifi@gmail.com" aria-label="Send email">
                <img src={require("./media/send.png")} alt='Email' className="icons" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const App = () => {
  return (
    <div id="homepage">
      <Navigation />
      <main id="main-content" className="main-content">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/chill" element={<ChillContainer />} />
          <Route path="/resume" element={<ResumeContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
