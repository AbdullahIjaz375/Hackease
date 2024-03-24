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
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  return (
    <div className="products">
      <h1>Products</h1>
      <div className="product-row">
        {products.map((product) => (
          <Display
            key={product._id}
            name={product.name}
            image={product.photo}
            description={product.description}
            price={product.price}
          />
          // The commented section below is the previous approach before using the Display component.
          // <div key={product._id} className="product">
          //   <img
          //     src={product.photo}
          //     alt={product.name}
          //     style={{ height: "200px" }}
          //   />
          //   <h2>{product.name}</h2>
          //   <p>{product.description}</p>
          //   <p>Price: ${product.price}</p>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
