// Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
// Import other pages here

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* Add other routes for different pages */}
        {/* <Route path="/home" component={HomePage} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default RouterComponent;
