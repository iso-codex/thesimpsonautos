import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleDiscover = () => {
    document.getElementById('specials')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">LUXURY LIFESTYLE SALES</h1>
        <p className="hero-subtitle">Enjoy the most luxurious experience.</p>
        <button className="hero-button" onClick={handleDiscover}>
          DISCOVER
        </button>
      </div>
    </section>
  );
};

export default Hero;
