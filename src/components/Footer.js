import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2 className="footer-title">QuoteSnap</h2>
                        <p className="footer-text">
                            Bringing you daily doses of inspiration. Feel free to reach out to us with your favorite quotes!
                        </p>
                    </div>
                    <div className="footer-section links">
                        <h2 className="footer-title">Quick Links</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/quotes">Quotes</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h2 className="footer-title">Contact Us</h2>
                        <div><FaEnvelope /><a href='mailto:aryanak9163@gmail.com'> aryanak9163@gmail.com</a></div>
                        <div><FaPhone /><a href='tel:0918235172505'> +91 8235172505</a></div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} QuoteSnap. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
