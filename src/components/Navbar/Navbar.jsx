/* eslint-disable react/prop-types */
import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import CartDropdown from "../CartDropdown/CartDropdown";

const Navbar = ({ quantity, setQuantity, price, setPrice, showCartItem, setShowCartItem }) => {
  const [menu, setMenu] = useState("women");
  const [openMenu, setOpenMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="navbar">
      {openMenu ? (
        <div
          className="overlay-container"
          onClick={() => setOpenMenu(false)}></div>
      ) : (
        ""
      )}
      <div className="navbar-left">
        <div className="menu-icon">
          <img
            src={assets.icon_menu}
            alt=""
            onClick={() => setOpenMenu(true)}
          />
        </div>
        <div className="logo">
          <img src={assets.logo} alt="logo" />
        </div>
        <div className={`navbar-menu ${openMenu ? "active" : ""}`}>
          <img
            src={assets.icon_close}
            alt=""
            className="menu-close"
            onClick={() => setOpenMenu(false)}
          />
          <li>
            <a
              href="#"
              onClick={() => setMenu("collections")}
              className={menu === "collections" ? "active" : ""}>
              Collections
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setMenu("men")}
              className={menu === "men" ? "active" : ""}>
              Men
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setMenu("women")}
              className={menu === "women" ? "active" : ""}>
              Women
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setMenu("about")}
              className={menu === "about" ? "active" : ""}>
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setMenu("contact")}
              className={menu === "contact" ? "active" : ""}>
              Contact
            </a>
          </li>
        </div>
      </div>
      <div className="navbar-right">
        <div className="cart-icon">
          <img
            src={assets.icon_cart}
            alt=""
            onClick={() => setShowCart(!showCart)}
          />
          <div className="dot">{showCartItem ? quantity : "1"}</div>
          {showCart && (
            <CartDropdown
              quantity={quantity}
              setQuantity={setQuantity}
              price={price}
              setPrice={setPrice}
              showCartItem={showCartItem}
              setShowCartItem={setShowCartItem}
            />
          )}
        </div>
        <img src={assets.img_avater} alt="" className="avatar-img" />
      </div>
    </div>
  );
};

export default Navbar;
