import React from "react";
import Layout from "./../components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <Layout title={"Contact us - Timeless Pieces"}>
      <div className="contactus-container">
        <div className="contactus-image">
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            className="responsive-img"
          />
        </div>
        <div className="contactus-info">
          <h1 className="text-center">Contact Us</h1>
          <p>
            Thank you for considering us. Should you have any inquiries or
            require assistance with our products, please do not hesitate to
            reach out to us. Our dedicated team is available around the clock to
            provide you with the support you need.
          </p>
          <h2>24/7 Support</h2>
          <p>
            Feel free to contact us at any time, day or night. Our commitment to
            exceptional customer service means that whenever you need us, we'll
            be here to assist you.
          </p>
          <h2>How to Reach Us</h2>
          <p>
            For queries or information about our products, you can contact us
            through the following channels:
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} /> Phone: 012-3456789
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email:
            reachout@timelesspieces.com
          </p>
          <p>
            <FontAwesomeIcon icon={faHeadset} /> Toll Free: 1800-0000-0000
          </p>
          <h2>We're Here to Help</h2>
          <p>
            Whether you have questions, need assistance, or simply want to
            provide feedback, we're always ready to listen and assist you in any
            way we can. Your satisfaction is our priority .
          </p>
          <p>
            Thank you for choosing<em>Timeless Pieces</em>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
