import './App.css';
import React from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import './App.css';
import ChillContainer from './containers/ChillContainer';
import ResumeContainer from './containers/ResumeContainer';
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';
import NotFound from './components/NotFound';
import linkedInLogo from './media/linkedin-icon.svg';
import gitHubLogo from './media/github-icon.svg';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav id="navbar">
      <NavLink to='/' className="navbar-links">
        <img src={require("./media/logo.png")} alt='' id="logo" />
      </NavLink>
      <div className="nav-links">
        <NavLink to='/' className={`navbar-links ${location.pathname === '/' ? 'active' : ''}`}>
          01. Home
        </NavLink>
        <NavLink to='/chill' className={`navbar-links ${location.pathname === '/chill' ? 'active' : ''}`}>
          02. Play Tetris
        </NavLink>
        <NavLink to='/resume' className={`navbar-links ${location.pathname === '/resume' ? 'active' : ''}`}>
          03. Résumé
        </NavLink>
        <NavLink to='/contact' className={`navbar-links ${location.pathname === '/contact' ? 'active' : ''}`}>
          04. Contact
        </NavLink>
      </div>
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
