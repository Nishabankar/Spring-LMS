import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext.jsx";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  // ❌ If not logged in → block dashboard
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ✅ If logged in → allow dashboard
  return children;
};

export default PrivateRoute;
