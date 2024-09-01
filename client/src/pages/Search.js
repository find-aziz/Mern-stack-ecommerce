import React from "react";
import Layout from "./../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/search";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const Search = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Matches</h1>
          <h6>
            {values?.results.length < 1
              ? "No products found."
              : `Found ${values?.results.length} ${
                  values?.results.length === 1 ? "product" : "products"
                }`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
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
                    class="btn btn-more  ms-1"
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
    </Layout>
  );
};

export default Search;
