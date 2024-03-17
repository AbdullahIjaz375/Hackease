import React from "react";
import Container from "../UI/Container/Container.jsx";
import Paragraph from "../UI/Paragraph.js";
import styled from "styled-components";

const ProductWrapper = styled.div`
  margin: 20px;
  text-align: center;
`;

const ProductName = styled.h2`
  margin: 10px 0;
`;

const ProductPrice = styled.span`
  font-weight: bold;
`;

const Product = ({ product }) => {
  return (
    <Container>
      <ProductWrapper>
        <ProductName>{product.name}</ProductName>
        <Paragraph>{product.description}</Paragraph>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductWrapper>
    </Container>
  );
};
