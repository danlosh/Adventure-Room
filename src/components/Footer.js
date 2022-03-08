import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="section footer bg- text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <hr />
            <h6>Quick Links:</h6>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <Link to="/admission">Admission</Link>
            </div>
          </div>
          <div className="col-md-4">
            <hr />
            <h6>Contact Info:</h6>
            <div>
              <p>SouthWest Plaza: 8501 W. Bowles Ave. Littleton, CO 80123</p>
              <p>Located Near Zales Jewelry Store</p>
            </div>
            <div>
              <p>Tel: (720)-630-4555</p>
            </div>
            <div className="social-links">
            <a href="mailto:AdventureRoomDenver@gmail.com?body=My custom mail body">AdventureRoomDenver@gmail.com</a>
            </div>
          </div>
          <div className="col-md-4">
            <hr />
            <h6>Social Media:</h6>
            <div>
            <div>
              <p>@AdventureRoomDenver</p>
              <a
                href="https://www.instagram.com/adventureroominstamuseum/"
                className="insta-social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/adventureroomdenver/"
                className="facebook-social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@adventureroomdenver"
                className="tiktok-social"
              >
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
            </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
