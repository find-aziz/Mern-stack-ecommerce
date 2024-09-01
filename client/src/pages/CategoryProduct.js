import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import "../../src/styles/pages/category-product.css";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout
      title={
        category.name
          ? `${category.name} - Timeless Pieces`
          : "Categories - Timeless Pieces"
      }
    >
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">
          {products?.length === 0
            ? "No products found."
            : `${products?.length} ${
                products?.length === 1 ? "product" : "products"
              } found`}
        </h6>
        <div className="row">
          <div>
            <div className="d-flex flex-wrap justify-content-evenly">
              {products?.map((p) => (
                <div className="item-container" key={p._id}>
                  <div class="main-item">
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      className="item-img-top"
                      alt={p.name}
                    />
                  </div>
                  <div className="item-body">
                    <h5 className="item-title">{p.name}</h5>
                    <p className="item-text-des">
                      {p.description.substring(0, 30)}...
                    </p>
                    <p className="item-text-price">
                      {" "}
                      <sup>₹</sup> {p.price}/-
                    </p>
                    <button
                      className="btn btn-more ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-add-to-cart ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
