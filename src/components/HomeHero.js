import React from 'react';
import './HomeHero.css';

const HomeHero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <h1 className="hero-title">Find Your Dream Car</h1>

                <div className="search-pill">
                    <div className="search-group">
                        <label>Used Cars</label>
                        <span className="dropdown-icon">▼</span>
                    </div>
                    <div className="divider"></div>
                    <div className="search-group">
                        <label>Any Makes</label>
                        <span className="dropdown-icon">▼</span>
                    </div>
                    <div className="divider"></div>
                    <div className="search-group">
                        <label>Any Models</label>
                        <span className="dropdown-icon">▼</span>
                    </div>
                    <div className="divider"></div>
                    <div className="search-group">
                        <label>All Prices</label>
                        <span className="dropdown-icon">▼</span>
                    </div>
                    <button className="search-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>

                <div className="hero-image-wrapper">
                    <img
                        src="https://pngimg.com/d/tesla_car_PNG47.png"
                        alt="White Tesla Model S"
                        className="hero-image"
                    />
                </div>
            </div>
            <div className="hero-bg-gradient"></div>
        </section>
    );
};

export default HomeHero;
