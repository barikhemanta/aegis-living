import React from 'react';
import "./MakingTheMove.css";
import Footer from "../components/Footer";
import FullwidthImage from '../components/FullwidthImage';
import img32 from '../assets/img32.jpg';

const MakingTheMove = () => {
  return (
    <div>
     <FullwidthImage src={img32} alt="Description for img32" />
      <h1>Financial Considerations</h1>
      <p>This page provides information about financial considerations for assisted living.</p>
      <Footer />
    </div>
  );
};

export default MakingTheMove;
