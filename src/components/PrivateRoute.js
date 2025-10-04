import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children, adminOnly = false }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // If adminOnly is true, check if user is tsaadmin@gmail.com
  if (adminOnly && currentUser.email !== "tsaadmin@gmail.com") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;