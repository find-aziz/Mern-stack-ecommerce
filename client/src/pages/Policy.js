import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Policy - Timeless Pieces"}>
      <div className="policy-page-container">
        <div className="policy-image-container">
          <img src="/images/policy.jpg" alt="Privacy Policy" />
        </div>
        <h1>Privacy Policy</h1>
        <div className="policy-content">
          <h2>Introduction:</h2>
          <p>
            At Timeless Pieces, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines the types of personal data we collect, how we use
            it, and the measures we take to safeguard your information.
          </p>
          <h2>Information We Collect:</h2>
          <p>
            <strong>Personal Information:</strong> When you make a purchase or
            register an account with us, we may collect personal information
            such as your name, email address, shipping address, and payment
            details.
          </p>
          <p>
            <strong>Usage Information:</strong> We gather information about how
            you interact with our website, including your browsing activity,
            pages visited, and preferences.
          </p>
          <p>
            <strong>Cookies:</strong> We use cookies and similar tracking
            technologies to enhance your browsing experience and analyze website
            traffic.
          </p>
          <h2>How We Use Your Information:</h2>
          <p>
            <strong>Order Fulfillment:</strong> We use your personal information
            to process and fulfill orders, communicate order updates, and
            provide customer support.
          </p>
          <p>
            <strong>Marketing Communications:</strong> With your consent, we may
            send you promotional emails about our products, special offers, and
            events. You can opt out of these communications at any time.
          </p>
          <p>
            <strong>Website Optimization:</strong> We analyze usage data to
            improve our website's functionality, personalize content, and
            enhance your shopping experience.
          </p>
          <h2>Data Security:</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, alteration,
            disclosure, or destruction. We utilize encryption technology and
            secure server protocols to safeguard your data.
          </p>
          <h2>Sharing Your Information:</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except where
            required by law or to facilitate order fulfillment (e.g., sharing
            shipping information with logistics partners).
          </p>
          <h2>Your Rights:</h2>
          <p>
            You have the right to access, update, or delete your personal
            information. If you would like to exercise these rights or have any
            questions about our Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@timelesspieces.com">
              privacy@timelesspieces.com
            </a>
            .
          </p>
          <h2>Changes to This Policy:</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be posted on this page, and the effective
            date will be indicated at the top of the policy.
          </p>
          <h2>Consent:</h2>
          <p>
            By using our website and providing your personal information, you
            consent to the collection, use, and disclosure of information as
            described in this Privacy Policy.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
