import React from 'react';
import './ResearchOptions.css';

const ResearchOptions = () => {
  return (
    <section className="research-section">
    
        <div className="research-column">
          <div className="research-title">
            <h3>RESEARCH THE OPTIONS</h3>
          </div>
          <div className="research-item">
            <ol>
              <li>Researching a long-term senior care community for your parent may be a new concept for you and your family. Where do you start? Search for communities online in your area and get recommendations from family members and friends who’ve been in a similar situation.</li>
            </ol>
          </div>
          <div className="research-item">
            <ol start="2">
              <li>
                The best way to get a feel for a community is to{' '}
                <a href="/where-to-begin/how-to-choose-a-community/quality-senior-living-staff/">
                  talk with a community staff member
                </a>
                . Learn  firsthand what the community is like. Are the residents engaged in activities? Are the residents happy? How does the staff interact with the residents?
              </li>
            </ol>
          </div>
          <div className="research-item">
            <ol start="3">
              <li>
              Understand the care services available, the associated costs, and the personality of each location by asking a lot of questions. The more prepared you are, the more confident you will be making the important decision of who will care for your aging parent.
              </li>
            </ol>
          </div>
      </div>
    </section>
  );
};

export default ResearchOptions;
