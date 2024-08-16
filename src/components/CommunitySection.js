import React from 'react';
import './CommunitySection.css';

const CommunitySection = () => {
  return (
    <section className="community-section-before-the-conversation">
      <div className="community-section-divider-top"></div>
      <div className="community-section-wrapper">
        <div className="community-section-container">
          <div className="community-section-text-content">
            <h2>Ready to Find Your Perfect Community?</h2>
            <p>
              See what Aegis Living has to offer near you! If you’re feeling overwhelmed,
              just give us a call and we’ll be happy to guide you.
            </p>
            <a
              className="community-button"
              href="https://www.aegisliving.com/find-a-location/"
            >
              VIEW ALL COMMUNITIES
            </a>
          </div>
        </div>
      </div>
      <div className="community-section-divider-bottom"></div>
    </section>
  );
};

export default CommunitySection;
