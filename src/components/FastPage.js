import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FastPage.css';
import Navigation from './Navigation';

const slides = [
  {
    text: 'Fast browsing experience',
    color: '#4285f4',
  },
  {
    text: 'Secure connections',
    color: '#34a853',
  },
  {
    text: 'Personalized settings',
    color: '#fbbc05',
  },
];

const FastPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="fastpage">
      <div className="fastpage-banner">
        <Navigation />
        <h2>
          The{' '}
          <motion.span
            className="fast-text"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              yoyo: Infinity,
              ease: 'easeInOut',
            }}
          >
            fast
          </motion.span>{' '}
          way to do
          <br />
          things online
        </h2>
        <div className="slide-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ backgroundColor: slides[currentSlide].color }}
            >
              <p>{slides[currentSlide].text}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="circle-button prev-button"
            disabled={currentSlide === 0}
          >
            {'<'}
          </button>
          <button
            onClick={nextSlide}
            className="circle-button next-button"
            disabled={currentSlide === slides.length - 1}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FastPage;
