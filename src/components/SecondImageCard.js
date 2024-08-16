import React from 'react';
import img1 from '../assets/img24.jpg';
import img2 from '../assets/img25.jpg';
import img3 from '../assets/img26.jpg';
import './SecondImageCard.css';

const SecondImageCardItem = ({ imageSrc, heading, paragraph }) => {
  return (
    <div className="second-image-card">
      <img src={imageSrc} alt="Card" className="second-card-image" />
      <div className="second-card-text">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        <button className="read-more-button">READ MORE</button>
      </div>
    </div>
  );
};

const SecondImageCard = () => {
  const cards = [
    {
      imageSrc: img1,
      heading: 'FINANCIAL CONSIDERATIONS',
      paragraph: 'We can help you better understand the costs associated with assisted living and memory care.'
    },
    {
      imageSrc: img2,
      heading: 'HAVING THE CONVERSATION',
      paragraph: 'The first step can sometimes be the hardest. But don’t worry. We are here for your family every step of the way.'
    },
    {
      imageSrc: img3,
      heading: 'MAKING THE MOVE',
      paragraph: 'Moving your senior loved one, who may be leaving a family home or downsizing, will come with a few unique challenges.'
    },
  ];

  return (
    <div className="second-image-card-section">
      <h2 className="second-section-heading">Not Sure Where to Begin? We’re Here to Help.</h2>
      <button className="get-started-here">GET STARTED HERE</button>
      <div className="second-image-card-container">
        {cards.map((card, index) => (
          <SecondImageCardItem
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

export default SecondImageCard;
