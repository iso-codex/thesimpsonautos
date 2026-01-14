import React from 'react';
import './FeaturedSection.css';

const FeaturedSection = () => {
  return (
    <section className="featured-section" id="gallery">
      <div className="featured-container">
        <div className="featured-image-container">
          <div className="featured-image">
            <div className="featured-overlay"></div>
          </div>
        </div>
        <div className="featured-content">
          <h2 className="featured-title">THE SIMPSONS AUTOS</h2>
          <div className="featured-divider">
            <span className="divider-text">Follow us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
