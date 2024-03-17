import React from "react";
import Product from "./Product"; // Make sure this path is correct

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
