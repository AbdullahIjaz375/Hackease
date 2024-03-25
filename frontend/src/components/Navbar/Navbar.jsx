import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/icons/user-secret-solid.svg";
import cart from "../../assets/icons/cart-shopping-solid.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width="50px" height="50px" />
        <p onClick={() => navigate("/home")}>
          <strong>Hack</strong>Ease
        </p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            navigate("/home");
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
        {/* <button> Login</button> */}
        <Link to="/cart">
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ height: "40px", color: "#e6738e" }}
          />
        </Link>{" "}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
    // <div className="navbar">
    //   <div className="nav-logo">
    //     <img src={logo} alt="" width="50px" height="50px" />
    //     <p
    //       onClick={() => {
    //         navigate("/home");
    //       }}
    //     >
    //       <strong>Hack</strong>Ease
    //     </p>
    //     <div>
    //       <ul className="nav-menu">
    //         <li
    //           onClick={() => {
    //             navigate("/home");
    //           }}
    //         >
    //           Shop <hr />
    //         </li>
    //         <li
    //           onClick={() => {
    //             setMenu("about");
    //           }}
    //         >
    //           About
    //         </li>
    //         <li
    //           onClick={() => {
    //             setMenu("contact");
    //           }}
    //         >
    //           Contact
    //         </li>

    //         <div className="nav-login-cart">
    //           <button> Login</button>
    //           <Link to="/cart" className="cart-icon">
    //             <FontAwesomeIcon
    //               icon={faShoppingCart}
    //               style={{ height: "40px", color: "#e6738e" }}
    //             />
    //           </Link>{" "}
    //           <div className="nav-cart-count">0</div>
    //         </div>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
