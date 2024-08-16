import React from 'react';
import "./FinancialConsiderations.css";
import Footer from "../components/Footer";
import FullwidthImage from '../components/FullwidthImage';
import img29 from '../assets/img29.jpg';
import SeniorLivingArticle from './SeniorLivingArticle';
import PricingModels from './PricingModels';
import CarePoints from './CarePoints';
import AverageCost from './AverageCost';
import AverageCostText from './AverageCostText';
import OptionsToHelp from './OptionsToHelp';
import MediCare from './MediCare';
import OtherOptions from './OtherOptions';
import LifeInsurance from './LifeInsurance';
import CommunitySection from './CommunitySection';
import CommunitiesNearby from './CommunitiesNearby';



const FinancialConsiderations = () => {
  return (
    <div>
       <FullwidthImage src={img29} alt="Description for img28" />
       <div className="section">
        <div className="row">
          <SeniorLivingArticle />
        </div>
      </div>
      <PricingModels />
      <CarePoints />
      <AverageCost />
      <AverageCostText />
      <OptionsToHelp />
      <MediCare />
      <OtherOptions />
      <LifeInsurance />
      <CommunitySection />
      <CommunitiesNearby />
      <Footer />
    </div>
  );
};

export default FinancialConsiderations;
