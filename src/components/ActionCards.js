import React from 'react';
import './ActionCards.css';

const ActionCards = () => {
    return (
        <section className="section action-section">
            <div className="container action-container">

                {/* Card 1: Buying */}
                <div className="action-card buying-card">
                    <div className="action-content">
                        <h3 className="action-title">Are You Looking<br />For a Car?</h3>
                        <p className="action-desc">We are committed to providing our customers with exceptional service.</p>
                        <button className="action-btn buying-btn">
                            Get Started ↗
                        </button>
                    </div>
                    <div className="action-icon-wrapper">
                        {/* Simple car cloud icon representation */}
                        <span style={{ fontSize: '4rem' }}>🚙</span>
                    </div>
                </div>

                {/* Card 2: Selling */}
                <div className="action-card selling-card">
                    <div className="action-content">
                        <h3 className="action-title">Do You Want to<br />Sell a Car?</h3>
                        <p className="action-desc">We are committed to providing our customers with exceptional service.</p>
                        <button className="action-btn selling-btn">
                            Get Started ↗
                        </button>
                    </div>
                    <div className="action-icon-wrapper">
                        {/* Simple money car icon representation */}
                        <span style={{ fontSize: '4rem' }}>💰</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ActionCards;
