import React, { useState } from 'react';
import './header.css';
import 'font-awesome/css/font-awesome.min.css';


const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <div className="car-dropdown">
        <div
          onClick={toggleDropdown}
          className={`dropbtn ${isDropdownOpen ? 'active' : ''} black-text`}
        >
                2023 Prius
          <span className={`triangle ${isDropdownOpen ? 'upside-down' : ''}`}>&#9660;</span>
        </div>
        <div id="myDropdown" className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
          <a>2023 Prius</a>
          <a>Car 2</a>
          <a>Car 3</a>
        </div>
      </div>
      <div className="profile-icon">
        <i className="fa fa-user"></i>
      </div>
    </div>
  );
};

export default Header;
