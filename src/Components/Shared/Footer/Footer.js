import React from 'react';
import { Link } from 'react-router-dom';

import "./Footer.css"
const Footer = () => {
    return (
        <div className="">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4 className="h4-cls">ABOUT</h4>
                            <ul>
                                <li><Link to="#">about us</Link></li>
                                <li><Link to="#">our services</Link></li>
                                <li><Link to="#">privacy policy</Link></li>
                                <li><Link to="#">PRESS</Link></li>
                                <li><Link to="#">WORK WITH US</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className="h4-cls">TRAVEL TIPS</h4>
                            <ul>
                                <li><Link to="#">START HERE</Link></li>
                                <li><Link to="#">BLOG</Link></li>
                                <li><Link to="#">DESTINATION</Link></li>
                                <li><Link to="#">TRAVEL INSURANCE</Link></li>

                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className="h4-cls">RESOURCES</h4>
                            <ul>
                                <li><Link to="#">CATEGORIES</Link></li>
                                <li><Link to="#">CITY GUIDES</Link></li>
                                <li><Link to="#">TRAVEL RESOURCES</Link></li>

                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className="h4-cls">follow us</h4>
                            <div className="social-links">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;