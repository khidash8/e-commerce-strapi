import "./CartItem.scss";
import { Context } from "../../../utils/AppContext";
import { MdClose } from "react-icons/md";
import ProdImg from "../../../assets/products/earbuds-prod-1.webp";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="search-result-item">
        <div className="image-container">
          <img src={ProdImg} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">title</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">
              <span>&#8377;1234</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
