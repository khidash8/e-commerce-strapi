import "./Products.scss";
import Product from "./Product/Product";
import PropTypes from "prop-types";

const Products = ({
  innerPage = false,
  headingText = "Popular Products",
  products = [],
}) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.map((item) => (
          <Product key={item.id} item={item} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

// ? PropTypes
Products.propTypes = {
  innerPage: PropTypes.bool,
  headingText: PropTypes.string,
  products: PropTypes.array,
};

// ? DefaultProps
Products.defaultProps = {
  innerPage: false,
  headingText: "Popular Products",
  products: [],
};
