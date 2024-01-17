import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userData } from "../services/helpers";
const ProtectedRoutes = () => {
  const { jwt } = userData();
  return jwt ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
