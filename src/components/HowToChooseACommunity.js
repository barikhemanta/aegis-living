import React from 'react';
import "./HowToChooseACommunity.css";
import Footer from "../components/Footer";
import FullwidthImage from '../components/FullwidthImage';
import img30 from '../assets/img30.jpg';
import HowToChoose from './HowToChoose';
import UnderstandDifferentCares from './UnderstandDifferentCares';
import IndependentLiving from './IndependentLiving';
import CommunitiesNearby from './CommunitiesNearby';
import CommunitySection from './CommunitySection';
import FinancialMiddlePart from './FinancialMiddlePart';
import ConsiderLifestyle from './ConsiderLifestyle';

const HowToChooseACommunity = () => {
  return (
    <div className="image-top">
       <FullwidthImage src={img30} alt="Description for img28" />
       <div className="section">
        <div className="row">
          <HowToChoose />
        </div>
      </div>
      <UnderstandDifferentCares />
      <IndependentLiving />
      <FinancialMiddlePart />
      <ConsiderLifestyle />
      <CommunitySection />
      <CommunitiesNearby />
      <Footer />
    </div>
  );
};

export default HowToChooseACommunity;
