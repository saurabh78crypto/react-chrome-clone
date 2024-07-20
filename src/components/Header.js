import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import chromeLogo from '../images/chrome_logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={chromeLogo} alt="Chrome Logo" className="header-logo" />
        <span className="logo-text">chrome</span>
      </div>
      <nav>
        <NavLink exact to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/browser-by-google" className="nav-link disabled" >
          The Browser by Google
        </NavLink>
        <NavLink to="/features" className="nav-link disabled" >
          Features
        </NavLink>
        <NavLink to="/support" className="nav-link disabled" >
          Support
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
