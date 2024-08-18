import React from 'react';
import '../styles/Footer.css';
import logo from '../asset/LOGO.png';
import { FaArrowUp } from "react-icons/fa6";
import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-container">
      <div className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp size={20} />
      </div>

      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Nessa Logo" />
        </div>

        <div className="subscribe">
          <h3>Subscribe to Nessa to get the latest update via email</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <a className='footer_ref' href=""><span style={{color:'blue'}}>Terms of service</span> and <span style={{color:'blue'}}>privacy note</span></a>
      </div>

      <hr />
      <div className="footer-links">
        <div
        >
          <h4>NEED HELP?</h4>
          <motion.ul
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}>
            <li>Chat with us</li>
            <li>Help Center</li>
            <li>Contact us</li>
          </motion.ul>
        </div>
        <div>
          <h4>USEFUL LINKS</h4>
          <motion.ul
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}> 
            <li>How to buy on Nessa</li>
            <li>Delivery timelines and fees</li>
            <li>How to return a product on Nessa</li>
            <li>Corporate and Bulk Purchases</li>
            <li>Report a Product</li>
            <li>Dispute Resolution Policy</li>
            <li>Returns & Refund terms and conditions</li>
          </motion.ul>
        </div>
        <div>
          <h4>ABOUT NESSA</h4>
          <motion.ul
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}>
            <li>About us</li>
            <li>Testimonials</li>
            <li>Nessa careers</li>
            <li>Terms and Conditions</li>
            <li>Nessa Payment Information Guidelines</li>
            <li>Nessa Store Credit Terms & Conditions</li>
            <li>Privacy Notice</li>
            <li>Cookie Notice</li>
            <li>Stay informed about Corona virus</li>
            <li>Stay Safe</li>
          </motion.ul>
        </div>
        <div>
          <h4>MAKE MONEY WITH NESSA</h4>
          <motion.ul
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}>
            <li>Sell on Nessa</li>
            <li>Vendor Hub</li>
            <li>Service charges</li>
            <li>Become a Sales Consultant</li>
            <li>Become a Logistics Service Partner</li>
          </motion.ul>
        </div>
      </div>

      <div className="footer-social">
        <span>Follow Nessa on</span>
        {/* Add social media icons here */}
      </div>

    </footer>
  );
}

export default Footer;
