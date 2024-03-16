import React from "react";
import "./AuthContainer.css"; // Make sure to import the CSS file

const AuthContainer = ({ signIn, children }) => {
  // Determine the classes based on the signIn state
  const containerClasses = `auth-container ${
    signIn ? "auth-sign-in" : "auth-sign-up"
  }`;
  const style = signIn ? {} : { transform: "translateX(100%)", opacity: 1 }; // Inline style for dynamic properties

  return (
    <div className={containerClasses} style={style}>
      {children}
    </div>
  );
};

export default AuthContainer;
