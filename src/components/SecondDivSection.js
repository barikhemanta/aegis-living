import React, { useState, useEffect } from 'react';
import './SecondDivSection.css';

// Import icon images
import icon1 from '../assets/images/light-assisted-living.svg';
import icon2 from '../assets/images/assisted-living.svg';
import icon3 from '../assets/images/transitional-care.svg';

const SecondDivSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const slides = [
    {
      id: 1,
      icon: icon1,
      title: 'LIGHT ASSISTED LIVING',
      subtitle: 'READ MORE',
      flipTitle: 'LIGHT ASSISTED LIVING',
      flipContent: 'Assistance to maintain independence as long as possible without compromising safety.',
      link: '#link1'
    },
    {
      id: 2,
      icon: icon2,
      title: 'ASSISTED LIVING',
      subtitle: 'READ MORE',
      flipTitle: 'Flip Title 2',
      flipContent: 'Content for card 2 goes here. This is a longer description that spans three lines for display purposes.',
      link: '#link2'
    },
    {
      id: 3,
      icon: icon3,
      title: 'TRANSITIONAL CARE',
      subtitle: 'READ MORE',
      flipTitle: 'Flip Title 3',
      flipContent: 'Content for card 3 goes here. This is a longer description that spans three lines for display purposes.',
      link: '#link3'
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener('resize', updateSlidesToShow);

    // Initial check
    updateSlidesToShow();

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - slidesToShow : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - slidesToShow ? 0 : prevIndex + 1));
  };

  return (
    <div className="second-div">
      <button className="nav-button" onClick={handlePrevClick}>&lt;</button>
      <div className="carousel">
        {slides.slice(currentIndex, currentIndex + slidesToShow).map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <div className="front">
                <div className="icon">
                  <img src={slide.icon} alt="icon" />
                </div>
                <p className="slide-title">{slide.title}</p>
                <p className="slide-subtitle">{slide.subtitle}</p>
              </div>
              <div className="back">
                <p className="slide-fliptitle">{slide.flipTitle}</p>
                <p className="slide-flipsubtitle">{slide.flipContent}</p>
                <a href={slide.link} className="learn-more">LEARN MORE</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button" onClick={handleNextClick}>&gt;</button>
    </div>
  );
};

export default SecondDivSection;
