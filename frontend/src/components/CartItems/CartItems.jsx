import React, { useEffect, useState } from "react";
import apiRequest from "../../API/api.js";
import "./CartItems.css";

const CartItem = () => {
  const [cartDetails, setCartDetails] = useState({ items: [], totalPrice: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setIsLoading(true);
        const data = await apiRequest("/cart/get-cart");
        setCartDetails(data);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = async (itemId, newQuantity) => {
    try {
      await apiRequest(`/cart/update/${itemId}`, {
        method: "put",
        body: { quantity: newQuantity }, // Include only quantity in body
      });
      const updatedCart = await apiRequest("/cart/get-cart");
      setCartDetails(updatedCart);
    } catch (error) {
      console.error("Failed to update cart item:", error);
      // Handle error gracefully
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await apiRequest(`/cart/remove/${itemId}`, {
        method: "delete",
      }); // No need to send a body with DELETE request
      const updatedCart = await apiRequest("/cart/get-cart");
      setCartDetails(updatedCart);
    } catch (error) {
      console.error("Failed to remove cart item:", error);
      // Handle error gracefully
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="cartitems">
      <div className="cartitems-header">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Description</p>
        <p>Quantity</p>
      </div>

      {cartDetails.items.map((item) => (
        <div key={item.productId._id} className="cartitems-item-row">
          <img
            src={item.productId.photo}
            style={{ height: "40px" }}
            alt={item.productId.name}
          />
          <p>{item.productId.name}</p>
          <p>${item.productId.price}</p>
          <p>{item.quantity}</p>
          <p>{item.productId.description}</p>
          <div className="cartitems-quantity">
            <button
              className="cartitems-minus-button"
              onClick={() =>
                handleQuantityChange(item.productId._id, item.quantity - 1)
              }
            >
              -
            </button>
            <span>{cartDetails[item.productId.id]}</span>
            <button
              className="cartitems-plus-button"
              onClick={() =>
                handleQuantityChange(item.productId._id, item.quantity + 1)
              }
            >
              +
            </button>
          </div>
          <button
            className="cartitems-remove-button"
            onClick={() => handleRemoveItem(item.productId._id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cartitems-total-row">
        <p>Total Price:</p>
        <p>${cartDetails.totalPrice.toFixed(2)}</p>
      </div>

      <button className="cartitems-checkout-button">PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default CartItem;
