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
                            <h4 className="h4-cls">company</h4>
                            <ul>
                                <li><Link to="#">about us</Link></li>
                                <li><Link to="#">our services</Link></li>
                                <li><Link to="#">privacy policy</Link></li>
                                <li><Link to="#">Maternity</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className="h4-cls">get help</h4>
                            <ul>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="#">ECG/END</Link></li>
                                <li><Link to="#">ICU</Link></li>
                                <li><Link to="#">Rehabilitation</Link></li>

                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className="h4-cls">Live Care</h4>
                            <ul>
                                <li><Link to="#">Prime Care</Link></li>
                                <li><Link to="#">Laboratary</Link></li>
                                <li><Link to="#">Imaging</Link></li>
                                <li><Link to="#">Clinics</Link></li>
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