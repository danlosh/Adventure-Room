import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/Selfie1.m4v" autoPlay loop muted={true} playsinline />
      <h1>ADVENTURE is only ONE flash away!</h1>
      <p>Come visit us TODAY</p>
    </div>
  );
}

export default HeroSection;
