import React from "react";
import "./Product.scss";
import PropTypes from "prop-types";

const Product = ({ id, item }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img
          src={
            process.env.REACT_APP_DEV_URL +
            item?.attributes?.img?.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{item.attributes.title}</span>
        <span className="price">&#8377;{item.attributes.price}</span>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  id: PropTypes.number,
  item: PropTypes.object,
};
