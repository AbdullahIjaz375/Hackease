import React from "react";
import "./Overlay.css"; // Import CSS styles

const OverlayComponents = ({ signIn, children, position }) => {
  const translateX =
    position === "left" ? (signIn ? "0%" : "-100%") : signIn ? "100%" : "0%";

  return (
    <div className={`overlay-container ${signIn ? "sign-in" : ""}`}>
      <div className="overlay">
        <div
          className="overlay-panel"
          style={{ transform: `translateX(${translateX})` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default OverlayComponents;
