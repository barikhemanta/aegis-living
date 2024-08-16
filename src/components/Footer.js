import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="main-footer">
            <div className="main-container">
                <div id="footer-widgets" className="clearfix">
                    <div className="footer-logo-social">
                        <img
                            decoding="async"
                            width="200"
                            height="66.5"
                            src="https://cdn2.aegisliving.com/wp-content/uploads/2023/06/aegis-living-logo-white.svg"
                            alt="Aegis Living Logo"
                        />
                        <div className="footer-aegis-social">
                            <ul className="et-social-icons">
                                <li className="et-social-icon">
                                    <a href="https://www.facebook.com/AegisLiving" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="et-social-icon">
                                    <a href="https://twitter.com/aegisliving" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="et-social-icon">
                                    <a href="https://www.instagram.com/aegislivingseniors" className="icon">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-widget">
                        <ul className="menu">
                            <li className="footer-widget-list"><a href="https://www.aegisliving.com/privacy-policy/">Privacy Policy</a></li>
                            <li className="footer-widget-list"><a href="https://www.aegisliving.com/ccpa-cpra-policy/">CCPA/CPRA Policy</a></li>
                            <li className="footer-widget-list"><a href="https://www.aegisliving.com/contact/">Contact Us</a></li>
                            <li className="footer-widget-list"><a href="https://www.aegisliving.com/careers/">Careers</a></li>
                            <li className="footer-widget-list"><a href="https://www.aegisliving.com/alerts-updates/">Alerts & Updates</a></li>
                        </ul>
                    </div>
                </div>

                <div id="footer-mid" className="footer-mid-container clearfix">
                    <a href="/cpra-policy-management/">Don’t share my personal information/limit the use of my sensitive personal information.</a>
                    <p>Aegis is committed to adhering to the WCAG and welcomes feedback from users on accessibility issues.</p>
                </div>

                <div id="footer-divider" className="container"></div>

                <div id="footer-bottom" className="container clearfix">
                    <div id="footer-info">
                        415 118th Avenue SE, Bellevue, WA, 98005. Aegis Living © <span id="year">2024</span>. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
