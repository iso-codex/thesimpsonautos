import React, { useState } from 'react';
import './TodaysSpecials.css';
import benz1Image from '../images/benz1.png';
import accordImage from '../images/accord 1.png';
import civicImage from '../images/civic t.png';

const TodaysSpecials = () => {
  const [filter, setFilter] = useState('all');

  // Kept original data structure but added mock specs for UI
  const cars = [
    {
      id: 1,
      name: 'Mercedes C Class',
      price: 'GH₵350,000.00',
      image: benz1Image,
      category: 'luxury',
      year: '2023',
      transmission: 'Automatic',
      fuel: 'Petrol',
      mileage: '20 Miles'
    },
    {
      id: 2,
      name: 'Honda Accord',
      price: 'GH₵250,000.00',
      image: accordImage,
      category: 'luxury',
      year: '2022',
      transmission: 'CVT',
      fuel: 'Petrol',
      mileage: '15 Miles'
    },
    {
      id: 3,
      name: 'Honda Civic',
      price: 'GH₵150,000.00',
      image: civicImage,
      category: 'luxury',
      year: '2021',
      transmission: 'Manual',
      fuel: 'Diesel',
      mileage: '2500 Miles'
    }
  ];

  const filteredCars = filter === 'all' ? cars : cars.filter(car => car.category === filter);

  return (
    <section className="section specials-section" id="specials">
      <div className="container">
        <h2 className="section-title">The Most Searched Cars</h2>

        <div className="filter-tabs">
          <button className={`filter-tab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            In Stock
          </button>
          <button className={`filter-tab ${filter === 'sedan' ? 'active' : ''}`} onClick={() => setFilter('sedan')}>
            Sedan
          </button>
          <button className={`filter-tab ${filter === 'suv' ? 'active' : ''}`} onClick={() => setFilter('suv')}>
            SUV
          </button>
          <button className={`filter-tab ${filter === 'convertible' ? 'active' : ''}`} onClick={() => setFilter('convertible')}>
            Convertible
          </button>
        </div>

        <div className="cars-grid">
          {filteredCars.map(car => (
            <div key={car.id} className="car-card">
              <div className="car-image-container">
                <div className="badge">Great Price</div>
                <img src={car.image} alt={car.name} className="car-image" />
                <button className="like-btn">♡</button>
              </div>
              <div className="car-info">
                <h3 className="car-name">{car.name}</h3>
                <p className="car-fullname">{car.name} {car.year} - {car.category}</p>

                <div className="car-specs">
                  <div className="spec-item">
                    <span>⏲️</span> {car.mileage}
                  </div>
                  <div className="spec-item">
                    <span>⛽</span> {car.fuel}
                  </div>
                  <div className="spec-item">
                    <span>⚙️</span> {car.transmission}
                  </div>
                </div>

                <div className="car-footer">
                  <span className="car-price">{car.price}</span>
                  <a href="#details" className="view-details">View Details ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodaysSpecials;
