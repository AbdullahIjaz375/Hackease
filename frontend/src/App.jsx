import React from "react";
import RouterComponent from "./Router";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <AuthProvider>
      <RouterComponent />
    </AuthProvider>
  );
};

export default App;
