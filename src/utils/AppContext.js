import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setCartCount(
      cartItems.reduce((acc, item) => acc + item.attributes.quantity, 0)
    );

    let subtotal = 0;
    cartItems.forEach(
      (item) => (subtotal += item.attributes.quantity * item.attributes.price)
    );
    setCartSubTotal(subtotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);

    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);

    if (type === "inc") {
      if (items[index].attributes.quantity === 5) return;

      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;

      items[index].attributes.quantity -= 1;
    }

    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;

// ! ----------------------------------------------- PropTypes
AppContext.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
  products: PropTypes.array,
  setCategories: PropTypes.func,
  setProducts: PropTypes.func,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
  cartCount: PropTypes.number,
  setCartCount: PropTypes.func,
  cartSubTotal: PropTypes.number,
  setCartSubTotal: PropTypes.func,
  handleAddToCart: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
  handleCartProductQuantity: PropTypes.func,
};

// ! ----------------------------------------------- DefaultProps
AppContext.defaultProps = {
  children: null,
  categories: null,
  products: null,
  setCategories: () => {},
  setProducts: () => {},
  cartItems: [],
  setCartItems: () => {},
  cartCount: 0,
  setCartCount: () => {},
  cartSubTotal: 0,
  setCartSubTotal: () => {},
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleCartProductQuantity: () => {},
};
