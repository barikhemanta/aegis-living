import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/navbarLogo.svg';
import './FirstNavbar.css';

const FirstNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="first-navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className={`nav-item-container ${isOpen ? 'open' : ''}`}>
        <ul className="nav-items">
          <li onClick={() => handleMenuClick('begin')}>
            Where to Begin
            <ul className={`dropdown ${activeMenu === 'begin' ? 'open' : ''}`}>
              <li><Link to="/having-the-conversation">Having the Conversation</Link></li>
              <li><Link to="/financial-considerations">Financial Considerations</Link></li>
              <li><Link to="/how-to-choose-a-community">How to Choose a Community</Link></li>
              <li><Link to="/aegis-living-difference">Aegis Living Difference</Link></li>
              <li><Link to="/making-the-move">Making the Move</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </li>
          <li onClick={() => handleMenuClick('services')}>
            Services
            <ul className={`dropdown ${activeMenu === 'services' ? 'open' : ''}`}>
              <li><a href="https://www.aegisliving.com/services/light-assisted-living/">Light Assisted Living</a></li>
              <li><a href="https://www.aegisliving.com/services/assisted-living/">Assisted Living</a></li>
              <li><a href="https://www.aegisliving.com/services/memory-care/">Memory Care</a></li>
              <li><a href="https://www.aegisliving.com/services/respite-care-day-stay/">Respite Care / Day Stay</a></li>
              <li><a href="https://www.aegisliving.com/services/transitional-care/">Transitional Care</a></li>
              <li><a href="https://www.aegisliving.com/services/end-of-life-care/">End-of-Life Care</a></li>
              <li><a href="https://www.aegisliving.com/services/dining/">Dining</a></li>
              <li><a href="https://www.aegisliving.com/services/asian-communities/">Asian Communities</a></li>
              <li><a href="https://www.aegisliving.com/services/activities/">Activities</a></li>
            </ul>
          </li>
          <li onClick={() => handleMenuClick('about')}>
            About Us
            <ul className={`dropdown ${activeMenu === 'about' ? 'open' : ''}`}>
              <li><a href="https://www.aegisliving.com/about/leadership/">Leadership</a></li>
              <li><a href="https://www.aegisliving.com/living-well-with-dr-raj/">Dr. Raj Dasgupta</a></li>
              <li><a href="https://www.aegisliving.com/events/">Events</a></li>
              <li><a href="https://www.aegisliving.com/about/awards/">Awards</a></li>
              <li><a href="https://www.aegisliving.com/about/aegis-livings-commitment-to-sustainability/">Sustainability</a></li>
            </ul>
          </li>
          <li>
            <Link to="/find-location" className="contactus-item">Find a Location</Link>
          </li>
          <li>
            <Link to="/main" className="contactus-item">Contact Us</Link>
          </li>
        </ul>
        <Link to="/main" className="cta-button">SCHEDULE TOUR</Link>
      </div>
      <div className="menu-and-button">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </div>
  );
};

export default FirstNavbar;
