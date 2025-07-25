import React from 'react';
import './Navbar.css';

// PUBLIC_INTERFACE
function Navbar({ onNavigate, current }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo accent">3D Portfolio</div>
      <ul className="navbar-links">
        <li>
          <button className={current === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</button>
        </li>
        <li>
          <button className={current === 'projects' ? 'active' : ''} onClick={() => onNavigate('projects')}>Projects</button>
        </li>
        <li>
          <button className={current === 'about' ? 'active' : ''} onClick={() => onNavigate('about')}>About</button>
        </li>
        <li>
          <button className={current === 'contact' ? 'active' : ''} onClick={() => onNavigate('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
