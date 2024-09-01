import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/components/layout/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo text-center">
        <img
          src={`${process.env.PUBLIC_URL}/images/LogoHeader.png`}
          alt="Timeless Pieces"
        />
      </div>

      <h5 className="text-center">
        &copy;2024 Timeless Pieces - The watch store. All Rights Reserved
      </h5>
      <div className="social-icons text-center mt-3">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </a>
      </div>
      <p className="text-center mt-3">
        <Link to="/contact">Contact</Link> | <Link to="/service">Services</Link>{" "}
        | <Link to="/policy">Privacy Policy</Link> |{" "}
        <Link to="/about">About</Link>
      </p>
    </div>
  );
};

export default Footer;
