import React from "react";
import "./Display.css";
const Display = (props) => {
  return (
    <div className="product-container">
      <div className="item">
        <img src={props.image} style={{ height: "250px" }}></img>
        <div className="product-description-h2">
          <p>{props.name}</p>
        </div>
        <div className="item-prices">${props.price}</div>
        <div className="item-price-new"></div>
        <div>Description</div>
        <div className="product-description">{props.description}</div>

        <button className="button"> Add to cart</button>
      </div>
    </div>
  );
};

export default Display;
