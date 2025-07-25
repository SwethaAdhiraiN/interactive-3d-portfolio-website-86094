import React from 'react';
import './About.css';

// PUBLIC_INTERFACE
function About() {
  return (
    <div className="about-container">
      <h2 className="section-title">About Us</h2>
      <p className="about-text">
        We are a team passionate about technology, design, and the three-dimensional web.<br />
        Our mission is to build visually engaging, interactive portfolio sites and applications<br />
        for organizations wanting to stand out in a digital world.
      </p>
      <ul className="about-tags">
        <li><b>Specialities:</b></li>
        <li>• Interactive 3D Apps</li>
        <li>• WebGL & Three.js</li>
        <li>• Creative Coding</li>
        <li>• Minimal, Modern Web UI</li>
        <li>• Responsive Design</li>
      </ul>
    </div>
  );
}

export default About;
