// OverlayPanel.js
import React from "react";
import styled from "styled-components";

const OverlayPanelWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: ${({ translateX }) => `translateX(${translateX})`};
  transition: transform 0.6s ease-in-out;
`;

const OverlayPanel = ({ children, translateX }) => {
  return (
    <OverlayPanelWrapper translateX={translateX}>
      {children}
    </OverlayPanelWrapper>
  );
};

export default OverlayPanel;
