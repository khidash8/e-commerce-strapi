import "./Cart.scss";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/AppContext";
import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose className="close-btn" />
            <span className="text">close</span>
          </span>
        </div>

        {/* Empty cart */}
        {/* <div className="empty-cart">
          <BsCartX />
          <span>No products in the cart.</span>
          <button className="return-cta">RETURN TO SHOP</button>
        </div> */}

        {/* Cart with Items */}
        <CartItem />
        <div className="cart-footer">
          <div className="subtotal">
            <span className="text">Subtotal:</span>
            <span className="text total">&#8377;1000</span>
          </div>
          <div className="button">
            <button className="checkout-cta">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  setShowCart: PropTypes.func,
};
