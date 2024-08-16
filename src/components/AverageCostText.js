import React from 'react';
import './WhatDoYouNeed.css';
import img37 from '../assets/img37.jpg';

const AverageCostText = () => {
  return (
    <div className="section">
      <div className="content">
        <div className="text-container">
          <div className="text-inner">
            <p>A second helpful tip to understand is the average cost of assisted living in your state. The average cost is a good baseline to compare against or as a starting point. Of course, some factors will influence differences in price, including the size of the apartment, location of the community within a city or a popular suburb, views from the apartment, or floor level—factors that affect any rental apartment cost.</p>
            <p>The level of care and assistance that your parent may need will also be a factor in the total cost. Assisted living communities include health care oversight and supportive care, like help with the activities of daily living (ADLs). A professional assessment is required before your loved one moves in to determine the appropriate care they need. Assessments evaluate the needs of your loved one, from mobility issues and dietary restrictions to medication management and emotional health. Online resources can provide you with a rough idea of the services you can expect, but the assisted living community will provide the evaluation for the required care. In determining and monitoring staffing levels, Aegis Living considers resident assessments and other factors.</p>
            <div className="image-container">
              <img 
                src={img37} 
                alt="A resident talking to an employee outside" 
                className="responsive-image"
              />
            </div>
             </div>
        </div>
      </div>
    </div>
  );
}

export default AverageCostText;
