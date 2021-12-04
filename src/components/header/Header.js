import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, currentUser }] = useStateValue();
  const handleAuthentication = () => {
    if (currentUser) {
      signOut(auth);
    }
  };
  return (
    <div className="header_container">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!currentUser && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {currentUser ? currentUser.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {currentUser ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
