import React from 'react';
import './BrowseByType.css';

const carTypes = [
    { id: 1, name: 'SUV', icon: '🚙' },
    { id: 2, name: 'Sedan', icon: '🚗' },
    { id: 3, name: 'Hatchback', icon: '🚕' },
    { id: 4, name: 'Coupe', icon: '🏎️' },
    { id: 5, name: 'Hybrid', icon: '🔋' }, // Placeholder icon
    { id: 6, name: 'Convertible', icon: '🚘' },
    { id: 7, name: 'Van', icon: '🚐' },
    { id: 8, name: 'Truck', icon: '🛻' },
    { id: 9, name: 'Electric', icon: '⚡' }
];

const BrowseByType = () => {
    return (
        <section className="section browse-section">
            <div className="container">
                <h2 className="section-title">Browse by Type</h2>
                <div className="types-grid">
                    {carTypes.map((type) => (
                        <div key={type.id} className="type-card">
                            <div className="type-icon">{type.icon}</div>
                            <span className="type-name">{type.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrowseByType;
