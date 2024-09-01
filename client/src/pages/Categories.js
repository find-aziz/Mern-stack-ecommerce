import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../../src/styles/pages/categories.css";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories - timeless pieces"}>
      <div className="cat-container">
        <div className="cat-row">
          {categories.map((c) => (
            <div className="cat-col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="cat-btn-primary">
                {c.name}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M402.232-480 218.848-664 261-706.153 487.153-480 261-253.847 218.848-296l183.384-184Zm253.999 0L472.847-664 515-706.153 741.152-480 515-253.847 472.847-296l183.384-184Z" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
