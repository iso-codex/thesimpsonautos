import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TodaysSpecials from './components/TodaysSpecials';
import FeaturedSection from './components/FeaturedSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TodaysSpecials />
      <FeaturedSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
