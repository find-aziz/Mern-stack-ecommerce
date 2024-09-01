import React from "react";
import Layout from "../components/Layout/Layout";

const ServicePage = () => {
  // List of brand names
  const brands = [
    "Rolex",
    "Audemars-Piguet",
    "Breitling",
    "A.-Lange-&-Sohne",
    "Casio",
    "Panerai",
    "Tudor",
    "Breguet",
    "OMEGA",
    "Jaeger-LeCoultre",
    "Seiko",
    "TAG-Heuer",
    "Timex",
    "CITIZEN",
    "Hublot",
    "Zenith",
  ];

  return (
    <Layout title={"Service - Timeless Pieces"}>
      <div className="service-page-container">
        <h1>Brands We Service</h1>
        <p>
          Timeless Pieces proudly offers expert servicing for prestigious watch
          brands including Rolex, Omega, TAG Heuer, Patek Philippe, and Audemars
          Piguet. Trust our skilled technicians to maintain the integrity and
          functionality of your cherished timepieces.
        </p>
        <div className="brands-container">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card">
              <div className="brand-image-container">
                <img
                  src={`/images/topbrand/${brand}.jpg`}
                  alt={brand}
                  className="brand-image"
                />
              </div>
              <div className="brand-info">
                <h2>{brand}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServicePage;
