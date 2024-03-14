import React from "react";
import styled from "styled-components";
import Button from "./Button"; // Assuming Button.js is in the same directory

const GhostButtonWrapper = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

const GhostButton = ({ children }) => {
  return <GhostButtonWrapper>{children}</GhostButtonWrapper>;
};

export default GhostButton;
