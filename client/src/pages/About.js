import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About - Timeless Pieces"}>
      <div className="aboutus-container">
        <div className="aboutus-image">
          <img src="/images/about.jpg" alt="About Us" />
        </div>
        <div className="aboutus-info">
          <h1 className="text-center">About Us</h1>
          <p>Welcome to Timeless Pieces, where time is not just measured but cherished. Founded with a passion for horology and a commitment to excellence, we strive to offer discerning individuals a curated collection of timepieces that blend precision craftsmanship with timeless elegance.</p>
          
          <h2>Our Story</h2>
          <p>At Timeless Pieces, our journey began with a simple yet profound love for watches. It was this passion that inspired us to create a platform where enthusiasts and connoisseurs alike could discover exceptional timepieces that transcend trends and speak to the soul.</p>
          
          <h2>Our Mission</h2>
          <p>Driven by a dedication to quality, innovation, and customer satisfaction, our mission is to provide an unparalleled shopping experience for watch aficionados worldwide. We believe that every watch tells a story and that each timepiece in our collection embodies a legacy of artistry and expertise.</p>
          
          <h2>What Sets Us Apart</h2>
          <p>What sets us apart is our unwavering commitment to authenticity, integrity, and transparency. From the selection of our partners to the presentation of our products, we uphold the highest standards of quality and professionalism. With a meticulous eye for detail and a deep appreciation for the craft, we curate our collection to ensure that every watch meets our exacting standards of excellence.</p>
          
          <h2>Our Promise</h2>
          <p>When you shop with Timeless Pieces, you're not just purchasing a watch; you're investing in a piece of history, a symbol of timeless elegance that will accompany you on life's most meaningful moments. Our promise to you is simple: to provide you with exceptional timepieces, unparalleled service, and an experience that exceeds your expectations.</p>
          
          <h2>Get in Touch</h2>
          <p>Thank you for taking the time to learn about us. We invite you to explore our collection and discover the perfect watch that reflects your style and sophistication. Should you have any questions or need assistance, please don't hesitate to reach out to our dedicated team. We're here to help you find the perfect timepiece that suits your unique journey.</p>
          
          <p>Experience the essence of time with Timeless Pieces.</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
