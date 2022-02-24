import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/Selfie1.m4v" autoPlay loop muted />
      <h1>ADVENTURE is only ONE flash away!</h1>
      <p>Come visit us TODAY</p>
      <div className="hero-btns">
      
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
