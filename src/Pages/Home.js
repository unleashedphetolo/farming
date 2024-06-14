import React, { useState, useEffect, useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cattle from '../images/cattle.jpg';
import land from '../images/land.jpg';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const imageTexts = useMemo(() => [
    "Best Cattle for Sale",
    "Best Vegetables for Sale",
  ], []);

  const images = useMemo(() => [cattle, land], []);

  useEffect(() => {
    if (isTyping) {
      let index = 0;
      const text = imageTexts[currentSlide];
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index += 1;
        if (index === text.length) {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [isTyping, currentSlide, imageTexts]);

  useEffect(() => {
    if (!isTyping) {
      const timeoutId = setTimeout(() => {
        setIsTyping(true);
        setDisplayedText("");
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3000); // Wait for 3 seconds after the typing is complete before changing slide
      return () => clearTimeout(timeoutId);
    }
  }, [isTyping, images.length]);

  return (
    <div>
      <div className="home-container">
        <div className="home-image-container" style={{ position: 'relative', textAlign: 'center' }}>
          <img
            src={images[currentSlide]}
            alt={`Home Theme ${currentSlide + 1}`}
            className="home-image"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="home-content" style={{ marginTop: '20px' }}>
            <p>Fresh farm products directly from our farm to your table.</p>
          </div>
          <div className="image-overlay" style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', color: 'white' }}>
            <h2 className="image-text">{displayedText}</h2>
          </div>
          <button 
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#ff9800',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
            onClick={() => alert('Quote Requested!')}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
