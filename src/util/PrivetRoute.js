import React from "react";
import { Navigate } from "react-router-dom";
const PrivetRoute = ({ children }) => {
  const token = localStorage.getItem("auth");

  return token ? children : <Navigate to="/login" />;
};

export default PrivetRoute;
