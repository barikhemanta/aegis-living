import React from 'react';
import './MediCare.css';

const MediCare = () => {
  return (
    <section className="research-section">
      <div className="research-column">
        
        <div className="research-item">
          <ol style={{ listStyleType: 'none'}}>
            <li>
            <strong>Medicare & Medicaid</strong><br />
            Medicare does not cover the cost of assisted living. Still, it can help cover the costs of some services received while living in a community, like medication, preventive medical services, outpatient care, or wellness programs. On the other hand, Medicaid may help cover some expenses of assisted living, but there is an income restriction. Medicaid is administered differently according to the regulations of each state. It is best to work with an eldercare attorney or speak with a free, confidential counselor from SHIP (State Health Insurance Program) to determine what Medicare or Medicaid benefits are available to your parent. Not all assisted living communities, including Aegis Living, accept Medicaid. Check with your community contact to find out.
            </li>
          </ol>
        </div>
        <div className="research-item">
          <ol>
            <li>
            <strong>Long-Term Care Insurance</strong><br />
            Long-term care insurance is different than traditional health insurance. It is designed to cover the costs of services and support when you can no longer care for yourself—whether that is in your home, or at an assisted living community, memory care community, respite care setting, hospice care, or nursing home. The policyholder can select from a range of care options and benefits. Services can include caring for the ADLs, such as bathing, toileting, and dressing; skilled nursing; or occupational, speech, or physical therapy. Long-term care insurance typically covers what is not covered by health insurance, Medicare, or Medicaid.
            </li>
          </ol>
        </div>
        <div className="research-item">
          <ol style={{ listStyleType: 'none'}}>
            <li>
            <strong>Private Pay</strong><br />
            As you assess assisted living and memory care community options, it is good to have a budget in mind of what you can afford. It is best to get a clear understanding of your parent’s finances and assets, as well as if any family members want to contribute, to create a budget. You may need to consider selling or renting your loved one’s home. Like any apartment options or real estate investments, the expenses (or savings) of an assisted living community can be determined by the location and the amenities offered. We encourage you to tour multiple properties to understand and compare costs.
            </li>
          </ol>
        </div>
        <div className="research-item">
          <ol style={{ listStyleType: 'none'}}>
            <li>
           <strong> Veteran’s Benefits</strong><br />
            Under the VA Aid and Attendance Special Pension, also known as the A&A Pension, qualified veterans or their surviving spouses can receive a tax-free monthly sum meant to help defray the costs of assisted living or memory care. Details can be found on the website of the U.S. Department of Veterans Affairs
            <a href="https://www.va.gov/pension/aid-attendance-housebound/" target="_blank" rel="noopener"> here</a>.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default MediCare;
