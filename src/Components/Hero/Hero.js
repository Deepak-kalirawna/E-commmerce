import React from "react";
import "./Hero.css";
import HandIcon from "../Assets/hand_icon.png";
import ArrowIcon from "../Assets/arrow.png";
import HeroImage from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={HandIcon} alt="hand-icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={ArrowIcon} alt="arrow=icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={HeroImage} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
