import React from "react";
import { Navigate } from "react-router-dom";

// Protected Route Component
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // If the user is not authenticated, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
