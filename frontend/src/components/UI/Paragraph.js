import React from "react";
import styled from "styled-components";

const ParagraphWrapper = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

const Paragraph = ({ children }) => {
  return <ParagraphWrapper>{children}</ParagraphWrapper>;
};

export default Paragraph;
