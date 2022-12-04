import React from "react";
import { Navigate } from "react-router-dom";
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("auth");

  return token ? <Navigate to="/allUser" /> : children;
};

export default PublicRoute;
