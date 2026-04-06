import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/azseza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/azer-ltifi-528284120/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:azeer.ltifi@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-credit">Designed & Built by Azer Ltifi</p>
        <p className="footer-copyright">&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
