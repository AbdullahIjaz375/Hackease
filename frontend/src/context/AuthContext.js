import React, { createContext, useContext, useState, useEffect } from "react";
import { parseJwt } from "../utils/authUtils"; // Update with the correct path to authUtils.js

const AuthContext = createContext();

// Adjust useAuth to provide setToken function
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ token: null });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = parseJwt(token);
      setUser({ token, ...decodedToken });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ token: null });
  };

  const setToken = (token) => {
    setUser((prevUser) => ({ ...prevUser, token }));
  };

  const value = { user, login, logout, setToken }; // Include setToken in value

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
