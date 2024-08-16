import React from 'react';
import "./AegisLivingDifference.css";
import Footer from "../components/Footer";
import FullwidthImage from '../components/FullwidthImage';
import img31 from '../assets/img31.jpg';

const AegisLivingDifference = () => {
  return (
    <div>
       <FullwidthImage src={img31} alt="Description for img31" />
      <h1>Financial Considerations</h1>
      <p>This page provides information about financial considerations for assisted living.</p>
      <Footer />
    </div>
  );
};

export default AegisLivingDifference;
