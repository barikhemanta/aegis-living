import React from 'react';
import img1 from '../assets/img24.jpg';
import img2 from '../assets/img25.jpg';
import img3 from '../assets/img26.jpg';
import './ImageCardComponent.css';

const ImageCard = ({ imageSrc, heading, paragraph }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-text">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

const ImageCardContainer = () => {
  const cards = [
    {
      imageSrc: img1,
      heading: 'RELAXED LIVING',
      paragraph: 'With your cooking, transportation, housekeeping, and laundry taken care of, you can fully revel and relax. Our concierge is always on hand to assist however needed.'
    },
    {
      imageSrc: img2,
      heading: 'COMPREHENSIVE CARE',
      paragraph: 'Enjoy the comfort of a well-maintained environment with our dedicated staff taking care of all your needs.'
    },
    {
      imageSrc: img3,
      heading: 'CHEF-PREPARED MEALS',
      paragraph: 'Experience luxury like never before with our top-notch facilities and personalized services.'
    },
  ];

  return (
    <div className="image-card-section">
      <h2 className="section-heading">Make Every Day Remarkable</h2>
      <div className="image-card-container">
        {cards.map((card, index) => (
          <ImageCard
            key={index}
            imageSrc={card.imageSrc}
            heading={card.heading}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCardContainer;
