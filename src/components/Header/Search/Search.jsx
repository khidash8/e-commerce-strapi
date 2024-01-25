import "./Search.scss";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setSearchModal }) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) data = null;

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          value={query}
          onChange={handleSearchChange}
        />
        <MdClose className="close-btn" onClick={() => setSearchModal(false)} />
      </div>
      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see products you are looking for.
        </div>

        <div className="search-results">
          {data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                navigate(`/product/${item.id}`);
                setSearchModal(false);
              }}
            >
              <div className="image-container">
                <img
                  src={
                    item.attributes.img.data[0].attributes.url
                    // process.env.REACT_APP_DEV_URL +
                    // item.attributes.img.data[0].attributes.url
                  }
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  setSearchModal: PropTypes.func,
};
