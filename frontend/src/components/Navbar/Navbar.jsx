import React from "react";
import "./Navbar.css";

import logo from "../../assets/icons/user-secret-solid.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width="100" height="100" />
        <p>
          <strong>Hack</strong>Ease
        </p>
        <div>
          <ul className="nav-menu">
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="nav-login-cart"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
