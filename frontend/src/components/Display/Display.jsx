import React from "react";
import "./Display.css";
import apiRequest from "../../API/api";

const Display = (props) => {
  const handleAddToCart = async (productId) => {
    const requestBody = {
      productId,
      quantity: 1, // Adjust as needed
    };

    try {
      const response = await apiRequest("/cart/add", {
        method: "post",
        body: requestBody,
      });
      console.log("Product added to cart:", response);
      // Handle successful response (e.g., display confirmation)
    } catch (error) {
      console.error("Error adding product to cart:", error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="product-container">
      <div className="item">
        <img src={props.image} style={{ height: "300px" }}></img>
        <div className="product-description-h2">
          <p>{props.name}</p>
        </div>
        <div className="item-prices"></div>
        <div className="item-price-new">${props.price}</div>
        <div className="product-description">{props.description}</div>
        <button
          className="button"
          onClick={() => handleAddToCart(props.productId)}
        >
          {" "}
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Display;
