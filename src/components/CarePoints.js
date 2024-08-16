import React from 'react';
import './ResearchOptions.css';

const CarePoints = () => {
  return (
    <section className="research-section">
      <div className="research-column">
        
        <div className="research-item">
          <ol style={{ listStyleType: 'none'}}>
            <li>
            As you shop for and tour communities, your family may find the monthly pricing confusing and challenging to compare. Some communities may charge an all-inclusive fee for rent and services, while other communities may charge individually for only the services needed. As a first step, it’s important to understand that there are three typical ways that a community will charge.
            </li>
          </ol>
        </div>
        <div className="research-item">
          <ul>
            <li>
            <strong>Care points or fee-for-service.</strong> This typically refers to charging for monthly rent plus individually for the care services that the resident will receive.
            </li>
            <li><strong>Care levels.</strong> Some communities will offer three or four levels of care, and the more care your parent needs, the higher level a family will pay for in addition to monthly rent.</li>
            <li><strong>All-inclusive.</strong> Some communities opt to charge a single fee per month that includes the price of rent, and all care and services offered.</li>
          </ul>
        </div>
        <div className="research-item">
          <ol style={{ listStyleType: 'none'}}>
            <li>
            This variety of pricing options can make the task of comparing costs from community to community more difficult. It can make budgeting for families more confusing. As a consumer, you will need to ask a lot of detailed questions to understand how the pricing works and how pricing can change as your parent’s needs change with age.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default CarePoints;
