import React from 'react';
import './home.css';
import Header from './components/header.js';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  // Sample data for miles left and max capacity
  const milesLeft = 250; // Replace with actual data
  const maxCapacity = 500; // Replace with actual data

  // Calculate the percentage of miles left
  const percentage = (milesLeft / maxCapacity) * 100;

  return (
    <div className="home-screen">
      <Header />
      <div className="fuel-info">
        <div className="fuel-icon">
        </div>
        <b>{milesLeft} mi</b>
        </div>
        <div className="percentage-bar">
            <div className="filler" style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="car-image"/>
        <div className="container">
      <div className="line"></div>
      <div className="rounded-rectangle">
        {'Suggested Maintenance'}
        <p>&#x1F893;</p>
      </div>
    </div>
    </div>
  );
};

export default Home;
