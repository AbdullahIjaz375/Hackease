import React from "react";
import OverlayPanel from "./OverlayPanel";

const LeftOverlayPanel = ({ children, signIn }) => {
  const translateX = signIn ? "0%" : "-100%";
  return <OverlayPanel translateX={translateX}>{children}</OverlayPanel>;
};

export default LeftOverlayPanel;
