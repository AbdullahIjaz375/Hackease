import React, { createContext, useContext, useState, useEffect } from "react";

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
  const [user, setUser] = useState({ token: null }); // Initialize with token property

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
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
