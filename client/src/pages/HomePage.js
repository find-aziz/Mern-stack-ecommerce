import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import "../../src/styles/pages/home.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filters`,
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Shop Now - Timeless Pieces"}>
      <img
        src="/images/hero-banner.jpg"
        className="banner-img"
        alt="banner image"
        width={"100%"}
      />
      <div className="container-fluid row ">
        
        <div className="">
          <h4>Filter By Category</h4>
          <div className="d-flex flex-wrap flex-row">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4>Filter By Price</h4>
          <div>
            <Radio.Group className="d-flex flex-wrap flex-row" onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          <div className="d-flex flex-row">
            <button
              className="btn btn-filter"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
          </div>
        </div>
        <h1 className="text-center" style={{ marginTop: '20px' }}>"Explore Our Featured Range"</h1>
        <div>
          <div className="d-flex flex-wrap justify-content-evenly">
            {products?.map((p) => (
              <div className="item-container">
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
                    class="btn btn-more ms-1"
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
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-show-more"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    viewBox="0 -960 960 960"
                    width="40"
                  >
                    <path d="M198.667-326.667Q178-363.334 169-401q-9-37.667-9-77 0-132 94-226.333 94-94.334 226-94.334h31.001l-74.667-74.667L481-918l152.667 152.667L481-612.667 435.667-658l74-74H480q-104.667 0-179 74.5Q226.666-583 226.666-478q0 28 5.667 53.667 5.667 25.666 15 49l-48.666 48.666ZM477.667-40 325-192.666l152.667-152.667 44.666 44.666L447.666-226H480q104.667 0 179-74.5Q733.334-375 733.334-480q0-28-5.334-53.667-5.333-25.666-16-49l48.667-48.666q20.666 36.667 30 74.333Q800-519.333 800-480q0 132-94 226.333-94 94.334-226 94.334h-32.334l74.667 74.667L477.667-40Z" />
                  </svg>
                ) : (
                  "Show More"
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
