import React from 'react';
import '../../App.css';
import './HeroSection.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function HeroSection() {
  return (
    <div className='hero-container'>
      <img className="heroimg position-absolute" src='/images/plumber.jpg' alt="/19340" />
      <h1>Best Plumbers Near You</h1>
      <p>Door-Step repair within 45 min</p>
      
    </div>
  );
}

export default HeroSection;