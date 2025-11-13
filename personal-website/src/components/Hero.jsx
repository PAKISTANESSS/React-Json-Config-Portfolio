import './Hero.css';
import config from '../config.json';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{config.personal.name}</span>
          </h1>
          <p className="hero-subtitle">
            {config.personal.title}
          </p>
          <p className="hero-description">
            {config.personal.description}
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="var(--primary-color)" opacity="0.2"/>
              <circle cx="100" cy="100" r="60" fill="var(--primary-color)" opacity="0.3"/>
              <circle cx="100" cy="100" r="40" fill="var(--primary-color)" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Hero;

