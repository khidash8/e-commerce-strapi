import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  return (
    <Context.Provider
      value={{ categories, setCategories, products, setProducts }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;

// ! PropTypes
AppContext.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.array,
  products: PropTypes.array,
  setCategories: PropTypes.func,
  setProducts: PropTypes.func,
};

AppContext.defaultProps = {
  children: null,
  categories: null,
  products: null,
  setCategories: () => {},
  setProducts: () => {},
};
