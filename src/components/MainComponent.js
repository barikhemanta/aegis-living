import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MainComponent.css';
import ScheduleTourForm from './ScheduleTourForm';
import ContactUsForm from './ContactUsForm';

const MainComponent = () => {
  const location = useLocation();
  const [showScheduleTour, setShowScheduleTour] = useState(true);
  const [showContactUs, setShowContactUs] = useState(false);

  useEffect(() => {
    if (location.state && location.state.showContactUs) {
      setShowScheduleTour(false);
      setShowContactUs(true);
    }
  }, [location.state]);

  const handleScheduleTourClick = () => {
    setShowScheduleTour(true);
    setShowContactUs(false);
  };

  const handleContactUsClick = () => {
    setShowScheduleTour(false);
    setShowContactUs(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const subMainOne = document.querySelector('.sub-main-one');
      const bounding = subMainOne.getBoundingClientRect();
      if (bounding.top <= 0) {
        subMainOne.classList.add('sticky');
      } else {
        subMainOne.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main-div">
      <div className="submain-div">
        <div className="sub-main-one">
          <button
            className={showScheduleTour ? 'active' : ''}
            onClick={handleScheduleTourClick}
          >
            SCHEDULE TOUR {showScheduleTour ? '▲' : '▼'}
          </button>
          <button
            className={showContactUs ? 'active' : ''}
            onClick={handleContactUsClick}
          >
            CONTACT US {showContactUs ? '▲' : '▼'}
          </button>
        </div>
        <div className="sub-main-two">
          {showScheduleTour && <ScheduleTourForm />}
          {showContactUs && <ContactUsForm />}
        </div>
        <div className="privacy-link">
          <p className="privacy-link-text">
            <a href="/privacy-policy/" target="_blank">Click here</a> for Aegis Living’s Privacy Policy regarding information you may provide us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
