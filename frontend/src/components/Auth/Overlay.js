import React from "react";
import styled from "styled-components";

const OverlayWrapper = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${({ signIn }) => (signIn !== true ? `transform: translateX(50%);` : null)}
`;

const Overlay = ({ signIn, children }) => {
  return <OverlayWrapper signIn={signIn}>{children}</OverlayWrapper>;
};

export default Overlay;
