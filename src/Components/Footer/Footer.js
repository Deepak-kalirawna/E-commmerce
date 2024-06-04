import React from "react";
import "./Footer.css";
import FOOTERLOGO from "../Assets/logo_big.png";
import INSTAICON from "../Assets/instagram_icon.png";
import PINTESTERICON from "../Assets/pintester_icon.png";
import WHATSAPPICON from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={FOOTERLOGO} alt="footer-logo" />
        <p>Myntra</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={INSTAICON} alt="icon" />
        </div>
        <div className="footer-icons-container">
          <img src={PINTESTERICON} alt="icon" />
        </div>
        <div className="footer-icons-container">
          <img src={WHATSAPPICON} alt="icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
