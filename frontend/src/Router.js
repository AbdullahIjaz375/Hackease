// Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
// Import other pages here

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        {/* Add other routes for different pages */}
        {/* <Route path="/home" component={HomePage} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default RouterComponent;
