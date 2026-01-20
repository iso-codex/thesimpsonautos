import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: 'Special Financing Offers',
            desc: 'Our stress-free finance department that can find financial solutions to save you money.',
            icon: '⏱️'
        },
        {
            id: 2,
            title: 'Trusted Car Dealership',
            desc: 'Our stress-free finance department that can find financial solutions to save you money.',
            icon: '🛡️'
        },
        {
            id: 3,
            title: 'Transparent Pricing',
            desc: 'Our stress-free finance department that can find financial solutions to save you money.',
            icon: '💲'
        },
        {
            id: 4,
            title: 'Expert Car Service',
            desc: 'Our stress-free finance department that can find financial solutions to save you money.',
            icon: '🔧'
        }
    ];

    return (
        <section className="section choose-section">
            <div className="container">
                <h2 className="section-title">Why Choose Us?</h2>
                <div className="features-grid">
                    {features.map(feature => (
                        <div key={feature.id} className="feature-box">
                            <div className="feature-icon-circle">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
