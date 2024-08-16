import React from 'react';
import './WhatDoYouNeed.css';
import img33 from '../assets/img33.jpg'; // Make sure this path is correct based on your project structure

const WhatDoYouNeed = () => {
  return (
    <div className="section">
      <div className="content">
        <div className="text-container">
          <div className="text-inner">
            <p><strong>What do you need help with?</strong><br />Beyond your loved one’s physical needs, some factors can dramatically affect their quality of life. You want your parent to be safe and healthy, but also happy and thriving. When you’re looking at the big picture of moving your parent into a senior living community, understanding your priorities will help determine your best choice.</p>
            <p><strong>Personal care</strong>. Your parent may find it challenging to perform personal tasks, or what is referred to as the activities of daily living (ADLs). ADLs include dressing, showering, toileting, grooming, and transferring, like moving from a bed to a wheelchair. These daily tasks are often taken for granted but can become monumental efforts with age, frailty, and mobility issues. Your parent may feel embarrassed or vulnerable when needing this kind of care. Assisted living communities train their staff to handle these tasks with sensitivity, dignity, and compassion.</p>
            <p><strong>Healthcare</strong>. With an increase in ailments, pain, fatigue, and illnesses that can happen with age, your parent may be juggling bottles of medications and a calendar filled with medical appointments. The care staff at an assisted living community helps with taking prescriptions correctly, watching for dangerous drug interactions, accompanying residents to doctor’s appointments, and monitoring any changes in health. If your parent’s physical or mental condition changes while living in a community, the care staff can quickly step in and get your parent the necessary help.</p>
            <p><strong>Loneliness</strong>.Seniors living alone can feel very isolated. Close friends, family members, or a spouse may have passed away, decreasing their social circle. Many seniors stop driving at some point. And family members lead busy lives, which makes it a challenge to visit often. An assisted living or memory care community offers opportunities to engage with new neighbors, friends, and care staff throughout the day.</p>
            <p><strong>Nutrition</strong>. Is your parent eating a balanced diet? Is your dad watching his sodium? Is your mom eating fresh fruits and vegetables? Cooking for one can be depressing or difficult, so many seniors opt for readymade microwave dinners. Your parent’s nutrition may suffer when limitations, such as being physically able to lift groceries out of a car, can influence grocery shopping decisions. If your parent is taking easy, meal-making shortcuts or skipping meals altogether, an assisted living community can provide them chef-prepared meals that are not only delicious but packed with nutrition.</p>
            <p><strong>Accessibility</strong>. As your parent gets older, small tasks may be more difficult. House maintenance can quickly become unmanageable and remodeling a home to meet changing needs may be unrealistic. Even if the expense of a remodel is not an issue, some homes cannot accommodate these necessary changes like wider hallways for a wheelchair or a walk-in shower. Assisted living and memory care communities are thoughtfully built for the safety and ease of elderly residents.</p>
            <div className="image-container">
              <img 
                src={img33} 
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

export default WhatDoYouNeed;
