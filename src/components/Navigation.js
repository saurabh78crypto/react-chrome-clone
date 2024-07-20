import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="cta-container">
      <Link to="/updates" className="cta-button disabled-link">Updates</Link>
      <Link to="/yours" className="cta-button disabled-link">Yours</Link>
      <Link to="/safe" className="cta-button disabled-link">Safe</Link>
      <Link to="/fast" className="cta-button">Fast</Link>
      <Link to="/by-google" className="cta-button disabled-link">By Google</Link>
    </nav>
  );
};

export default Navigation;
