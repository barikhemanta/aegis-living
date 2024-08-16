import React from 'react';
import img34 from '../assets/img34.jpg';
import img35 from '../assets/img35.jpg';
import img36 from '../assets/img36.jpg';
import './CommunitiesNearby.css';

const CommunitiesNearbyItem = ({ imageSrc, heading, paragraph }) => {
  return (
    <div className="communities-nearby-card">
      <img src={imageSrc} alt="Card" className="communities-card-image" />
      <div className="communities-card-text">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        <button className="communities-read-more-button">VIEW COMMUNITY</button>
      </div>
    </div>
  );
};

const CommunitiesNearby = () => {
  const cards = [
    {
      imageSrc: img34,
      heading: 'CARMICHAEL',
      paragraph: '4050 Walnut Ave Carmichael, CA 95608 (916) 231-9427'
    },
    {
      imageSrc: img35,
      heading: 'NAPA',
      paragraph: '2100 Redwood Road Napa, CA 94558 (707) 780-3206'
    },
    {
      imageSrc: img36,
      heading: 'PLEASANT HILL',
      paragraph: '1660 Oak Park Blvd Pleasant Hill, CA 94523 (925) 588-7030'
    },
  ];

  return (
    <div className="communities-nearby-section">
      <h2 className="communities-section-heading">Communities Nearby</h2>
      <div className="communities-nearby-container">
        {cards.map((card, index) => (
          <CommunitiesNearbyItem
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

export default CommunitiesNearby;
