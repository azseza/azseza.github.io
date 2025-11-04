import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChillContainer from './containers/ChillContainer';
import ResumeContainer from './containers/ResumeContainer';
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';
import NotFound from './components/NotFound';
import linkedInLogo from './media/linkedin-icon.svg';
import gitHubLogo from './media/github-icon.svg';
import LanguageSwitcher from './components/LanguageSwitcher';
import { initAnalytics, trackPageview, trackEvent } from './utils/analytics';

const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageview(`${location.pathname}${location.search}${location.hash}`);
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
    <nav id="navbar">
      <NavLink to='/' className="navbar-links">
        <img src={require("./media/logo.png")} alt='' id="logo" />
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
          <NavLink to='/' className={`navbar-links ${location.pathname === '/' ? 'active' : ''}`}>
            {t('nav.home', { defaultValue: '01. Home' })}
          </NavLink>
          <NavLink to='/chill' className={`navbar-links ${location.pathname === '/chill' ? 'active' : ''}`}>
            {t('nav.chill', { defaultValue: '02. Chill With Me' })}
          </NavLink>
          <NavLink to='/resume' className={`navbar-links ${location.pathname === '/resume' ? 'active' : ''}`}>
            {t('nav.resume', { defaultValue: '03. Résumé' })}
          </NavLink>
          <NavLink to='/contact' className={`navbar-links ${location.pathname === '/contact' ? 'active' : ''}`}>
            {t('nav.contact', { defaultValue: '04. Contact' })}
          </NavLink>
        </div>
        <div className="nav-right">
          <LanguageSwitcher />
          <div id="social-links-div">
            <a href="https://github.com/azseza" target="_blank" rel="noopener noreferrer">
              <img src={gitHubLogo} alt='Link to github profile' className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/azer-ltifi-528284120/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInLogo} alt='Link to LinkedIn profile' className="icons" />
            </a>
            <a href="https://x.com/AzeerLtifi" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" className="icons x-icon" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
              </svg>
            </a>
            <a href={`mailto:azeer.ltifi@gmail.com`}>
              <img src={require("./media/send.png")} alt='Send me an e-mail' className="icons" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

class App extends React.Component {
  state = {
    forceUpdate: false
  }

  handleForceUpdateTrue = () => {
    this.setState({
      forceUpdate: true
    })
  }

  handleForceUpdateFalse = () => {
    this.setState({
      forceUpdate: false
    })
  }
  
  render() {
    return (
      <div id="homepage">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/chill" element={<ChillContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />} />
            <Route path="/resume" element={<ResumeContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />} />
            <Route path="/contact" element={<ContactContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
