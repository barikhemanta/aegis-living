import React from 'react';
import './ResearchOptions.css';

const IndependentLiving = () => {
  return (
    <section className="research-section">
      <div className="research-column">
        
        <div className="research-item independent-list">
          <ol style={{ listStyleType: 'none'}}>
            <li>
            When considering senior care options for your parent, it’s essential to carefully consider what types of services they may need as they age. And once your parent has moved, your family doesn’t want to move them again. If your parent has issues with memory loss, illness, or frailty, your family may want to research options where they are able to age in place, and services can be increased as needed. As an advocate for their health needs, make sure to ask questions about the levels of care each community is able to offer and how that transition could be made smoothly.
            </li>
            <li>
                <strong>Independent Living.</strong>A housing community for seniors who can manage their healthcare needs themselves or with assistance from family members or a private caregiver. Most are private apartments with a small kitchenette and offer meal plans, housekeeping, activities, and transportation. 
            </li>
            <li><strong>Assisted Living.</strong>An assisted living community offers levels of care and supportive services for seniors who are no longer safe or healthy living on their own. This communal setting provides meals, activities, around-the-clock care, personal assistance, medication management, laundry services, housekeeping, and social interaction throughout the day, while seniors live in private apartments and share common areas.</li>
            <li><strong>Memory Care.</strong>Memory care communities are designed specifically for those diagnosed with Alzheimer’s or other forms of dementia. These secured wings in an assisted living community, or stand-alone communities, offer services and structure by trained caregivers who can accommodate the individual needs and behavioral changes of residents diagnosed with memory loss.</li>
            <li><strong>Respite Care.</strong>Respite care is a short-term stay at an assisted living community. Often ranging from a couple weeks to a month, this type of care offers supervised care in a secure environment and can assist guests with activities of daily living (ADLs) or within a memory care community. This option is needed if a caregiver is traveling, senior is rehabilitating post-hospital or in case of an emergency. Guests will stay in a furnished, private apartment and be able to enjoy the services, activities, and amenities offered at a community. Respite care can also be an excellent option to help with the transition from home to assisted living.</li>
            <li><strong>Skilled Nursing Facility.</strong>A skilled nursing facility, or nursing home, offers 24-hour care from registered nurses and doctors for patients who need frequent or constant medical care due to a terminal illness, post-acute care, or rehabilitation. Often patients will recuperate in a skilled nursing facility after a hospitalization before they are well enough to transition to home or an assisted living community. The difference between skilled nursing and an assisted living community, like Aegis Living, is the required medical attention with doctor’s supervision and that it’s typically a short-term solution.</li>
          </ol>
        </div>
        
      </div>
    </section>
  );
};

export default IndependentLiving;
