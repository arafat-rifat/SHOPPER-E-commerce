import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      {/* For Logo */}
      <div className="nav-logo">
        <img src={logo} alt="logoicon" />
        <p>SHOPPER</p>
      </div>

      {/* This is For Menu */}

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop{menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          Men{menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          Women{menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids{menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      {/* This is for Login and Cart Icon */}

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="carticon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;