import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/AppContext";
import Cart from "../Cart/Cart";

const Header = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(Context);

  const [scrolling, setScrolling] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const handleScrolling = useCallback(() => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }, [setScrolling]);

  useEffect(() => {
    return window.addEventListener("scroll", handleScrolling);
  }, [handleScrolling]);

  return (
    <>
      <header className={`main-header ${scrolling ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            APECART
          </div>
          <div className="right">
            <TbSearch onClick={() => setSearchModal(true)} />
            <AiOutlineHeart />
            <span className="cart-icon">
              <CgShoppingCart onClick={() => setShowCart(true)} />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {searchModal && <Search setSearchModal={setSearchModal} />}
    </>
  );
};

export default Header;
