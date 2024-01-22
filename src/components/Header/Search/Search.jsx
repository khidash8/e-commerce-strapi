import "./Search.scss";
import { MdClose } from "react-icons/md";
import ProdImg from "../../../assets/products/earbuds-prod-1.webp";
import PropTypes from "prop-types";

const Search = ({ setSearchModal }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input autoFocus type="text" placeholder="Search for products" />
        <MdClose className="close-btn" onClick={() => setSearchModal(false)} />
      </div>
      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see products you are looking for.
        </div>

        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={ProdImg} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">title</span>
              <span className="desc">description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  setSearchModal: PropTypes.func,
};
