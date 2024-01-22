import React from "react";
import "./Product.scss";
import ProdImg from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={ProdImg} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">title</span>
        <span className="price">&#8377;299</span>
      </div>
    </div>
  );
};

export default Product;
