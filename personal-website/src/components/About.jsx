import './About.css';
import config from '../config.json';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            {config.personal.aboutText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="stats">
              <div className="stat">
                <h3>{config.stats.experience}</h3>
                <p>{config.stats.experienceLabel}</p>
              </div>
              <div className="stat">
                <h3>{config.stats.projects}</h3>
                <p>{config.stats.projectsLabel}</p>
              </div>
              <div className="stat">
                <h3>{config.stats.clients}</h3>
                <p>{config.stats.clientsLabel}</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-list">
              {config.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

