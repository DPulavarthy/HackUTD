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
        <i className="fas fa-gas-pump"></i>
        <p>{milesLeft} mi</p>
        </div>
            <div className="percentage-bar">
                <div className="filler" style={{ width: `${percentage}%` }}></div>
            </div>
    </div>
  );
};

export default Home;
