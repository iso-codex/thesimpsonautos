import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🚗</span>
          <span className="logo-text">THE SIMPSONS AUTOS</span>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </nav>
        <div className="header-phone">
          <a href="tel:+963997843565" className="phone-link">+233 024-992-37-26</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
