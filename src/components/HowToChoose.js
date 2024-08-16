import React, { useState } from 'react';
import './AssistedLivingArticle.css';
import img38 from '../assets/img38.jpg';

const HowToChoose = () => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    const handleSubmenuClick = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    return (
        <>
            <div className="column main-content">
                <div className="text-module" style={{textWrap:'nowrap'}}>
                    <h1>How to Choose a Community</h1>
                </div>
                <div className="Assisted-Living-divider-bottom"></div>
                <div className="text-module">
                    <h2 style={{lineHeight:2}}>HOW TO CHOOSE THE “RIGHT” ASSISTED LIVING COMMUNITY<br /></h2>
                    <h2>IN THE ARTICLE WE COVER:</h2>
                </div>
                <div className="text-module">
                <ol>
                    <li><a href="#understand-the-different-types-of-care">Different Types of Senior Care</a></li>
                    <li><a href="#consider-lifestyle-needs">Lifestyle Needs</a></li>
                    <li><a href="#determine-location">Determining a Location</a></li>
                    <li><a href="#tour-communities">Touring Communities</a></li>
                    <li><a href="#ask-the-right-questions">Asking the Right Questions</a></li>
                    <li><a href="#meet-the-senior-living-staff">Meeting the Staff</a></li>
                    <li><a href="#understand-what-makes-a-great-senior-living-staff">Understanding What Makes Great Senior Living Staff</a></li>
                </ol>
                    <p>When your family begins their search for assisted living, you are not only seeking a place to live but needed services and assistance for your loved one now and into the future. It’s important to strike a balance between finding a place where your parent or loved one feels at home and comfortable with meeting their care needs and within budget. The top of your list as you research assisted living options is excellent staff, quality care, and comfortable accommodations. But don’t overlook the small touches during your tours that can make a difference for your parent or loved one. Let us help you step-by-step as your family starts the journey of exploring senior care.</p>
                   
                </div>
                <div className="image-container" style={{ width: '714px', marginTop: '20px'}}>
                        <img 
                            src={img38} 
                            alt="A resident talking to an employee outside" 
                            className="responsive-image" 
                            style={{ maxWidth: '100%', height: '357px' }} 
                        />
                    </div>
            </div>
            <div className="column submenu">
                <div className="al-submenu">
                    <div className="al-submenu__top" onClick={toggleSubmenu}>
                        <p>Start Here</p>
                        <button aria-label="open submenu" className="al-submenu__top__arrow">
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    {submenuOpen && (
                        <div className="al-submenu__main">
                            <ul>
                                <li className={`al-submenu__parent ${activeSubmenu === 1 ? 'active' : ''}`}>
                                    <a href="https://www.aegisliving.com/where-to-begin/having-the-conversation/" onClick={() => handleSubmenuClick(1)}>Having the Conversation</a>
                                    <div className="al-submenu__bottom-border"></div>
                                    <button aria-label="reveal Having the Conversation subpages" className="arrow">
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                    <div className={`collapsible ${activeSubmenu === 1 ? 'open' : ''}`}>
                                        <ul className="submenu">
                                            <li><a href="https://www.aegisliving.com/where-to-begin/having-the-conversation/signs-your-parent-needs-care/">Signs Your Parent Needs Care</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/having-the-conversation/planning-for-your-parents-future/">Planning For Your Parent’s Future</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/having-the-conversation/having-the-family-conversation/">Having the Family Conversation</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/having-the-conversation/dealing-with-guilt/">Dealing With Guilt</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={`al-submenu__parent ${activeSubmenu === 2 ? 'active' : ''}`}>
                                    <a href="https://www.aegisliving.com/where-to-begin/financial-considerations/" onClick={() => handleSubmenuClick(2)}>Financial Considerations</a>
                                    <div className="al-submenu__bottom-border"></div>
                                    <button aria-label="reveal Financial Considerations subpages" className="arrow">
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                    <div className={`collapsible ${activeSubmenu === 2 ? 'open' : ''}`}>
                                        <ul className="submenu">
                                            <li><a href="https://www.aegisliving.com/where-to-begin/financial-considerations/average-cost/">Average Cost for Senior Care</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/financial-considerations/helping-parents-financial-plan/">Helping Parents with Financial Planning</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/financial-considerations/long-term-care-insurance/">Long Term Care Insurance</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/financial-considerations/medicare-and-medicaid/">Medicare and Medicaid</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={`al-submenu__parent ${activeSubmenu === 3 ? 'active' : ''}`}>
                                    <a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/" onClick={() => handleSubmenuClick(3)}>How to Choose a Community</a>
                                    <div className="al-submenu__bottom-border"></div>
                                    <button aria-label="reveal How to Choose a Community subpages" className="arrow">
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                    <div className={`collapsible ${activeSubmenu === 3 ? 'open' : ''}`}>
                                        <ul className="submenu">
                                            <li><a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/types-of-care/">Types of Care</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/what-is-assisted-living/">What is Assisted Living</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/what-is-memory-care/">What is Memory Care</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/what-is-respite-care/">What is Respite Care</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/what-is-independent-living/">What is Independent Living</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/what-is-skilled-nursing-care/">Skilled Nursing Care</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/touring-a-community/">Touring a Community</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/questions-to-ask/">Questions to Ask On Your Tour</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/people-to-know/">People to Know</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/how-to-choose-a-community/quality-senior-living-staff/">Quality Senior Living Staff</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={`al-submenu__parent ${activeSubmenu === 4 ? 'active' : ''}`}>
                                    <a href="https://www.aegisliving.com/where-to-begin/moving-in/" onClick={() => handleSubmenuClick(4)}>Moving In</a>
                                    <div className="al-submenu__bottom-border"></div>
                                    <button aria-label="reveal Moving In subpages" className="arrow">
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                    <div className={`collapsible ${activeSubmenu === 4 ? 'open' : ''}`}>
                                        <ul className="submenu">
                                            <li><a href="https://www.aegisliving.com/where-to-begin/moving-in/what-to-pack/">What to Pack</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/moving-in/moving-checklist/">Moving Checklist</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/moving-in/settling-in/">Settling In</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/moving-in/introducing-your-loved-one-to-their-new-home/">Introducing Your Loved One to Their New Home</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default HowToChoose;
