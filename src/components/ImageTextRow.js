import React from 'react';
import './ImageTextRow.css';
import img27 from '../assets/img27.jpg'; // Adjust the path to your image

const ImageTextRow = () => {
  return (
    <div className="main-container">
      <div className="image-text-row">
        <div className="image-container">
          <img src={img27} alt="Descriptive Text" />
        </div>
        <div className="text-container">
          <h2>Discover a Rewarding Career</h2>
          <p>Joining the Aegis Living team makes you part of something bigger and better, part of a community who cares for a special group of people: our seniors. It’s an opportunity to grow personally and professionally.</p>
          <a href="#" className="button-link">GO TO CAREERS PAGE</a>
        </div>
      </div>
    </div>
  );
};

export default ImageTextRow;
