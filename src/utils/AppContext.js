import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

const AppContext = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export default AppContext;

AppContext.propTypes = {
  children: PropTypes.node,
};

AppContext.defaultProps = {
  children: null,
};
