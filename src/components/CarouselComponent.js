import React, { useState } from 'react';
import './CarouselComponent.css';

// Import images from the assets folder
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

const images = [img1, img2, img3, img4, img5];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  return (
    
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-button prev" onClick={handlePrev}>&lt;</button>
        
        <div className="carousel">
          <img src={images[getPrevIndex()]} alt="Previous" className="carousel-image prev-image" />
          <img src={images[currentIndex]} alt="Current" className="carousel-image current-image" />
          <img src={images[getNextIndex()]} alt="Next" className="carousel-image next-image" />
        </div>
        
        <button className="carousel-button next" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default CarouselComponent;
