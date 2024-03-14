import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const Title = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default Title;
