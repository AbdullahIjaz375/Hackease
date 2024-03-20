import React, { useState } from "react";
import "./Navbar.css";

import logo from "../../assets/icons/user-secret-solid.svg";
import cart from "../../assets/icons/cart-shopping-solid.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width="50px" height="50px" />
        <p>
          <strong>Hack</strong>Ease
        </p>
        <div>
          <ul className="nav-menu">
            <li
              onClick={() => {
                setMenu("shop");
              }}
            >
              Shop <hr />
            </li>
            <li
              onClick={() => {
                setMenu("about");
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                setMenu("contact");
              }}
            >
              Contact
            </li>
          </ul>
          <div className="nav-login-cart">
            <button> Login</button>
            <img src={cart} alt="" height="50px" width="50px" />
            <div className="nav-cart-count">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
