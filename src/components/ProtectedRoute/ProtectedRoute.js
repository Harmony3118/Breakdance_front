import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const expirationTime = localStorage.getItem("expirationTime");
  const currentTime = new Date().getTime();

  if (isAuthenticated && expirationTime && currentTime < expirationTime) {
    return <Component />;
  } else {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("expirationTime");
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
