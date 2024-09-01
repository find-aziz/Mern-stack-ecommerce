import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import "../../src/styles/pages/product-details.css";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout
      title={
        product.name
          ? `${product.name} - Timeless Pieces`
          : "Product Details - Timeless Pieces"
      }
    >
      <div className="row container product-row-con">
        <div className="col-md-6 align-items-center">
          <div class="main-product">
            <img
              src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
              className="product-img-top"
              alt={product.name}
            />
          </div>
        </div>
        <div className="col-md-6 product-col-con">
          <h1 className="product-name">{product.name}</h1>
          
          <h5 className="product-des">
          <h4 className="product-over">Product Overview: </h4>{product.description}
          </h5>
          <h4 className="product-cat">Category : {product?.category?.name}</h4>
          <div className="price-cart">
            <h3 className="product-price">
              <sup>₹</sup> {product.price}/-
            </h3>
            <button
              className="btn-add-to-cart-product"
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
                toast.success("Item Added to cart");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <hr />
      <h4 className="text-center">Similar Products</h4>
      <div className="row container">
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap justify-content-evenly">
          {relatedProducts?.map((p) => (
            <div className="item-container">
              <div class="main-item">
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p?._id}`}
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
                    localStorage.setItem("cart", JSON.stringify([...cart, p]));
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
    </Layout>
  );
};

export default ProductDetails;
