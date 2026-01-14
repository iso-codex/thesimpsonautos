import React, { useState } from 'react';
import './TodaysSpecials.css';
import benz1Image from '../images/benz1.png';
import accordImage from '../images/accord 1.png';
import civicImage from '../images/civic t.png';

const TodaysSpecials = () => {
  const [filter, setFilter] = useState('all');

  const cars = [
    {
      id: 1,
      name: 'Mercedes C Class',
      price: 'GH₵350,000.00',
      image: benz1Image,
      category: 'luxury'
    },
    {
      id: 2,
      name: 'Honda Accord',
      price: 'GH₵250,000.00',
      image: accordImage,
      category: 'luxury'
    },
    {
      id: 3,
      name: 'Honda Civic',
      price: 'GH₵150,000.00',
      image: civicImage,
      category: 'luxury'
    }
  ];

  const filteredCars = filter === 'all' ? cars : cars.filter(car => car.category === filter);

  return (
    <section className="specials-section" id="specials">
      <div className="specials-container">
        <h2 className="specials-title">TODAYS SPECIALS</h2>
        <div className="specials-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <span className="filter-icon">🚗</span>
            View All Cars
          </button>
          <button 
            className={`filter-btn ${filter === 'suv' ? 'active' : ''}`}
            onClick={() => setFilter('suv')}
          >
            <span className="filter-icon">🚙</span>
            SUV
          </button>
          <button 
            className={`filter-btn ${filter === 'luxury' ? 'active' : ''}`}
            onClick={() => setFilter('luxury')}
          >
            <span className="filter-icon">🏎️</span>
            Luxury
          </button>
        </div>
        <div className="cars-grid">
          {filteredCars.map(car => (
            <div key={car.id} className="car-card">
              <div className="car-image-container">
                <img src={car.image} alt={car.name} className="car-image" />
              </div>
              <div className="car-info">
                <h3 className="car-name">{car.name}</h3>
                <div className="car-rating">
                  <span className="star">☆</span>
                  <span className="star">☆</span>
                  <span className="star">☆</span>
                  <span className="star">☆</span>
                  <span className="star">☆</span>
                </div>
                <div className="car-price">{car.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodaysSpecials;
