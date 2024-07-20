import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import chromeLogo from '../images/chrome_logo.png'
import Navigation from './Navigation';

const HomePage = () => {
  return (
    <div className="homepage">
      <motion.div
        className="banner"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='logo-container'>
          <img src={chromeLogo} alt="Chrome Logo" />
        </div>
        <h1>The browser 
          <br />
          built to be yours
        </h1>
       
        <Navigation />
        
        <p>Need the Chrome installer? <a href="/download" className='disabled-link'>Download here</a>.</p>
      </motion.div>
    </div>
  );
};

export default HomePage;
