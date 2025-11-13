import './Footer.css';
import config from '../config.json';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>
              A passionate developer creating beautiful and functional web experiences.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-social">
              <a href={config.social.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={config.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={config.social.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {config.personal.name}. All rights reserved.</p>
          <p>Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

