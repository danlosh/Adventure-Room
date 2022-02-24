import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Welcome To Adventure Room Selfie Museum!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore Denver's Newest Selfie Museum!"
              label="About"
              path="/about"
            />
            <CardItem
            src="images/img-2.jpg"
            text="For Inquiries & Questions"
            label="Contact Us"
            path="/contact"
          />
          <CardItem
              src="images/img-1.jpg"
              text="BUY TICKETS TODAY"
              label="Admission"
              path="/admission"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
