import React from 'react';
import './Footer.css';

// PUBLIC_INTERFACE
function Footer() {
  return (
    <footer className="footer-main">
      <span>
        &copy; {new Date().getFullYear()} The 3D Portfolio &middot; <a href="#about">About</a> &middot; <a href="#contact">Contact</a>
      </span>
    </footer>
  );
}

export default Footer;
