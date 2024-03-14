import React from "react";
import styled from "styled-components";

const OverlayContainerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${({ signIn }) => (signIn !== true ? `transform: translateX(-100%);` : null)}
`;

const OverlayContainer = ({ signIn, children }) => {
  return (
    <OverlayContainerWrapper signIn={signIn}>
      {children}
    </OverlayContainerWrapper>
  );
};

export default OverlayContainer;
