import React from 'react';
import './Projects.css';

// PUBLIC_INTERFACE
function Projects() {
  // Placeholder project data
  const projects = [
    {
      title: 'Immersive VR Demo',
      description: 'A showcase of advanced real-time rendering and user interaction in VR environments.',
      link: '#',
      icon: '🟣'
    },
    {
      title: 'Web 3D Configurator',
      description: 'A product configurator with drag and drop 3D models running in the browser.',
      link: '#',
      icon: '🟦'
    },
    {
      title: 'Company Timeline',
      description: 'An animated, interactive timeline of company achievements using 3D transitions.',
      link: '#',
      icon: '🟨'
    },
    {
      title: 'Generative Art Gallery',
      description: 'A curated selection of company experiments in Three.js and generative design.',
      link: '#',
      icon: '🟩'
    }
  ];

  return (
    <div className="projects-grid-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-icon">{proj.icon}</div>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a className="project-link" href={proj.link} target="_blank" rel="noopener noreferrer">
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
