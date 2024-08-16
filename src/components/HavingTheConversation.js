import React from 'react';
import './HavingTheConversation.css';
import Footer from "../components/Footer";
import FullwidthImage from '../components/FullwidthImage';
import AssistedLivingArticle from '../components/AssistedLivingArticle';
import BeforeTheConversation from '../components/BeforeTheConversation';
import ResearchOptions from './ResearchOptions';
import WhatDoYouNeed from './WhatDoYouNeed';
import img28 from '../assets/img28.jpg';
import TalkingPoints from './TalkingPoints';
import TextKnowYourParagraph from './TextKnowYourParagraph';
import TipsForHavingConversation from './TipsForHavingConversation';
import TextBeUnderstanding from './TextBeUnderstanding';
import CommunitySection from './CommunitySection';
import CommunitiesNearby from './CommunitiesNearby';

const HavingTheConversation = () => {
  return (
    <div className="image-top">
      <FullwidthImage src={img28} alt="Description for img28" />
      <div className="section">
        <div className="row">
          <AssistedLivingArticle />
        </div>
      </div>
      <BeforeTheConversation />
      <ResearchOptions />
      <WhatDoYouNeed />
      <TalkingPoints />
      <TextKnowYourParagraph />
      <TipsForHavingConversation />
      <TextBeUnderstanding />
      <CommunitySection />
      <CommunitiesNearby />
      <Footer />
    </div>
  );
};

export default HavingTheConversation;
