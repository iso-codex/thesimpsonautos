import React from 'react';
import './App.css';
import Header from './components/Header';
import HomeHero from './components/HomeHero';
import BrowseByType from './components/BrowseByType';
import ActionCards from './components/ActionCards';
import TodaysSpecials from './components/TodaysSpecials';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <BrowseByType />
      <ActionCards />
      <TodaysSpecials />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
