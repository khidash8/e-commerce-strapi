import "./Category.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.map((item) => (
          <div
            className="category"
            key={item.id}
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item?.attributes?.img?.data?.attributes?.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

Category.propTypes = {
  categories: PropTypes.array,
};

Category.defaultProps = {
  categories: null,
};
