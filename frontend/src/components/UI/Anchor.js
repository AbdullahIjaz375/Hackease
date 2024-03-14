import React from "react";
import styled from "styled-components";

const AnchorWrapper = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const Anchor = ({ href, children }) => {
  return <AnchorWrapper href={href}>{children}</AnchorWrapper>;
};

export default Anchor;
