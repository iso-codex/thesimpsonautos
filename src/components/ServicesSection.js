import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section" id="about">
      <div className="services-container">
        <div className="services-content">
          <h2 className="services-title">LUXURY CAR SALES</h2>
          <p className="services-description">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradise.
          </p>
          <div className="services-features">
            <div className="feature-item">
              <div className="feature-icon">🚗</div>
              <h3 className="feature-title">Motors</h3>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💎</div>
              <h3 className="feature-title">Pick up</h3>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏎️</div>
              <h3 className="feature-title">Luxury</h3>
            </div>
          </div>
        </div>
        <div className="services-gallery">
          <div className="gallery-item gallery-item-1">
            <div className="gallery-overlay"></div>
          </div>
          <div className="gallery-item gallery-item-2">
            <div className="gallery-overlay"></div>
          </div>
          <div className="gallery-item gallery-item-3">
            <div className="gallery-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
