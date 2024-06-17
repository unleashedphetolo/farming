import React, { useState, useEffect, useMemo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'; // Import the CSS file

import cattle from '../images/cattle.jpg';
import land from '../images/land.jpg';
import Chickens from '../images/chicken.jpg';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const imageTexts = useMemo(() => [
    "Best Cattle for Sale",
    "Best Vegetables for Sale",
    "Best Chickens for Sale",
  ], []);

  const images = useMemo(() => [cattle, land, Chickens], []);

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
        <div className="home-image-container">
          <img
            src={images[currentSlide]}
            alt={`Home Theme ${currentSlide + 1}`}
            className="home-image"
          />
          
          <div className="image-overlay">
            <h2 className="image-text">{displayedText}</h2>
          </div>
        </div>

        <a href="/Products">   
          <button 
            variant='primary'
            className="quote-button"
            onMouseEnter={(e) => (e.target.style.transform = 'translateY(-5px)')}
        onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')}
          >
            Explore More
          </button>
        </a>
      </div><div className="home-content">
            <p>Fresh farm products directly from our farm to your table.</p>
          </div>
    </div>
  );
}

export default Home;
