// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  // Check if user is logged in by checking localStorage (or your auth state)
  const user = localStorage.getItem("user");

  if (!user) {
    // Not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // Logged in, render the children components (the protected page)
  return children;
}
