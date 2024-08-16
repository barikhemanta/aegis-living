import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FirstNavbar from './components/FirstNavbar';
import SecondNavbar from './components/SecondNavbar';
import VideoPlayer from './components/VideoPlayer';
import HomeSecSection from './components/HomeSecSection';
import CarouselComponent from './components/CarouselComponent';
import MeetYourNewHome from './components/MeetYourNewHome';
import HorizontalLine from './components/HorizontalLine';
import ImageCardContainer from './components/ImageCardComponent';
import RightToLeftLine from './components/RightToLeftLine';
import UniqueCarousel from './components/UniqueCarousel';
import Footer from './components/Footer';
import ImageTextRow from './components/ImageTextRow';
import NewsletterSignup from './components/NewsletterSignup';
import EventsComponent from './components/EventsComponent';
import SecondImageCard from './components/SecondImageCard';
import MainComponent from './components/MainComponent';
import HavingTheConversation from './components/HavingTheConversation';
import FinancialConsiderations from './components/FinancialConsiderations';
import HowToChooseACommunity from './components/HowToChooseACommunity';
import AegisLivingDifference from './components/AegisLivingDifference';
import MakingTheMove from './components/MakingTheMove';
import Resources from './components/Resources';
import FindLocation from './components/FindLocation';


function App() {
  return (
    <Router>
      <div>
        <FirstNavbar />
        <SecondNavbar />
        <Routes>
          <Route path="/" element={
            <>
              <VideoPlayer src="https://videos.pexels.com/video-files/17932288/17932288-uhd_2560_1440_30fps.mp4" />
              <HomeSecSection />
              <CarouselComponent />
              <MeetYourNewHome />
              <HorizontalLine />
              <ImageCardContainer />
              <RightToLeftLine />
              <UniqueCarousel />
              <SecondImageCard />
              <EventsComponent />
              <NewsletterSignup />
              <ImageTextRow />
              <Footer />
            </>
          } />
          <Route path="/main" element={<MainComponent />} />
          <Route path="/having-the-conversation" element={<HavingTheConversation />} />
          <Route path="/financial-considerations" element={<FinancialConsiderations />} />
          <Route path="/how-to-choose-a-community" element={<HowToChooseACommunity />} />
          <Route path="/aegis-living-difference" element={<AegisLivingDifference />} />
          <Route path="/making-the-move" element={<MakingTheMove />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/find-location" element={<FindLocation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 