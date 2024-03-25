import React, { useState, useEffect } from "react";
import "./Item.css";
import apiRequest from "../../API/api"; // Import the apiRequest function
import Display from "../Display/Display.jsx";

const Item = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiRequest("/shop/get-products");
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <div className="product-row">
        {products.map((product) => (
          <Display
            key={product._id}
            productId={product._id}
            name={product.name}
            image={product.photo}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Item;
