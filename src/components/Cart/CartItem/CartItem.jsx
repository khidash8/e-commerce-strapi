import { Context } from "../../../utils/AppContext";
import { MdClose } from "react-icons/md";
import ProdImg from "../../../assets/products/earbuds-prod-1.webp";
import { useContext } from "react";
import "./CartItem.scss";

const CartItem = () => {
  const { handleRemoveFromCart, cartItems, handleCartProductQuantity } =
    useContext(Context);

  return (
    <div className="cart-products">
      {cartItems?.map((item) => (
        <div key={item.id} className="search-result-item">
          <div className="image-container">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item?.attributes?.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                <span>
                  &#8377;{item.attributes.price * item.attributes.quantity}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
