import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, Html } from '@react-three/drei';
import './App.css';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  // For SPA navigation
  const [page, setPage] = useState("home");
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavigate = (section) => {
    setPage(section);
    let ref = null;
    if (section === "about") ref = aboutRef;
    else if (section === "projects") ref = projectsRef;
    else if (section === "contact") ref = contactRef;
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="portfolio-app">
      <Navbar onNavigate={handleNavigate} current={page} />
      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <Hero3D />
            <div className="hero-text">
              <h1>
                Welcome to <span className="accent">The 3D Portfolio</span>
              </h1>
              <p className="subtitle">
                Showcasing creativity & technology in <b>three dimensions</b>.
              </p>
              <button className="btn-accent" onClick={() => handleNavigate('projects')}>View Projects</button>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects" ref={projectsRef}>
          <Projects />
        </section>

        <section className="about-section" id="about" ref={aboutRef}>
          <About />
        </section>

        <section className="contact-section" id="contact" ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
