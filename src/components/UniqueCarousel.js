import React, { useState } from 'react';
import './UniqueCarousel.css'; // Updated CSS file name

// Images from assets
import img1 from '../assets/img1.jpg'; // Updated image file names
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const texts = [
  {
    mainText: "\"I feel very at home here. I feel safe. The staff is very outgoing. The food is incredible. The maintenance is terrific. There is nothing I would change about living here.\"",
    subText1: "Rita G., Resident",
    subText2: "Aegis Living West Seattle"
  },
  {
    mainText: "Main text for slide 2",
    subText1: "First paragraph with three words 2",
    subText2: "Second paragraph with three words 2"
  },
  {
    mainText: "Main text for slide 3",
    subText1: "First paragraph with three words 3",
    subText2: "Second paragraph with three words 3"
  },
  {
    mainText: "Main text for slide 4",
    subText1: "First paragraph with three words 4",
    subText2: "Second paragraph with three words 4"
  },
  {
    mainText: "Main text for slide 5",
    subText1: "First paragraph with three words 5",
    subText2: "Second paragraph with three words 5"
  },
  {
    mainText: "Main text for slide 6",
    subText1: "First paragraph with three words 6",
    subText2: "Second paragraph with three words 6"
  }
];

const UniqueCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="unique-main">
      <h1 className="unique-carousel-heading">Why Our Residents Choose Aegis</h1>
      <div className="unique-carousel-wrapper">
        <button className="unique-carousel-button left" onClick={prevSlide}>
          &lt;
        </button>
        <div className="unique-carousel">
          <div className="unique-carousel-container">
            <div
              className="unique-carousel-slides"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div className="unique-carousel-slide" key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className="unique-carousel-image" />
                  <div className="unique-carousel-text">
                    <p className="main-text">{texts[index].mainText}</p>
                    <div className="sub-texts">
                      <p className="first-para">{texts[index].subText1}</p>
                      <p>{texts[index].subText2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="unique-carousel-button right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default UniqueCarousel;
