// Container.jsx
import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
