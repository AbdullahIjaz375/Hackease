// In your Components folder, create a file named ProductItem.jsx
import React from "react";
import styled from "styled-components";

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0px;
  margin: 10px;
  width: 300px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const ProductName = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 0.9em;
`;

const ProductItem = ({ product }) => {
  return (
    <ProductCard>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
    </ProductCard>
  );
};

export default ProductItem;
