import React, { useState } from 'react';
import './AssistedLivingArticle.css';

const AssistedLivingArticle = () => {
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
                <div className="text-module">
                    <h1>Having the Conversation: How to Talk to Your Parent About Assisted Living</h1>
                </div>
                <div className="Assisted-Living-divider-bottom"></div>
                <div className="text-module">
                    <h2>IN THE ARTICLE WE SHARE:</h2>
                </div>
                <div className="text-module">
                    <ol>
                        <li><a href="#before-the-conversation">Assessing Your Loved One’s Needs and Options</a></li>
                        <li><a href="#know-your-talking-points">Knowing Your Talking Points</a></li>
                        <li><a href="#tips-for-having-the-conversation">Six Tips for Having the Conversation</a></li>
                    </ol>
                    <p>Is your elder</p>
                    <p>Does any of this sound familiar?</p>
                    <p>Any one of</p>
                    <p>If your parent is</p>
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
                                    <a href="https://www.aegisliving.com/where-to-begin/questions-to-ask/" onClick={() => handleSubmenuClick(4)}>Questions to Ask</a>
                                    <div className="al-submenu__bottom-border"></div>
                                    <button aria-label="reveal Questions to Ask subpages" className="arrow">
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                    <div className={`collapsible ${activeSubmenu === 4 ? 'open' : ''}`}>
                                        <ul className="submenu">
                                            <li><a href="https://www.aegisliving.com/where-to-begin/questions-to-ask/important-questions-to-ask/">Important Questions to Ask</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/questions-to-ask/what-to-look-for-on-a-tour/">What to Look For On a Tour</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/questions-to-ask/questions-to-ask-about-care/">Questions to Ask About Care</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/questions-to-ask/questions-to-ask-about-activities/">Questions to Ask About Activities</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/questions-to-ask/questions-to-ask-about-meals/">Questions to Ask About Meals</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/questions-to-ask/questions-to-ask-about-rooms/">Questions to Ask About Rooms</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={`al-submenu__parent ${activeSubmenu === 5 ? 'active' : ''}`}>
                                    <a href="https://www.aegisliving.com/where-to-begin/senior-living-resources/" onClick={() => handleSubmenuClick(5)}>Senior Living Resources</a>
                                    <div className="al-submenu__bottom-border"></div>
                                    <button aria-label="reveal Senior Living Resources subpages" className="arrow">
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                    <div className={`collapsible ${activeSubmenu === 5 ? 'open' : ''}`}>
                                        <ul className="submenu">
                                            <li><a href="https://www.aegisliving.com/where-to-begin/senior-living-resources/senior-care-resources/">Senior Care Resources</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/senior-living-resources/state-resources/">State Resources</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/senior-living-resources/resources-for-family-caregivers/">Resources for Family Caregivers</a></li>
                                            <li><a href="https://www.aegisliving.com/where-to-begin/senior-living-resources/financial-resources/">Financial Resources</a></li>
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
export default AssistedLivingArticle;
