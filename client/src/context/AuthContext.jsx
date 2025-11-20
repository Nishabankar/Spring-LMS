import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
  token: null,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  // Load token & user from localStorage
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Sync across tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "token") setToken(e.newValue);
      if (e.key === "user") {
        setUser(e.newValue ? JSON.parse(e.newValue) : null);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // ✅ FIXED login function → takes BOTH user & token
  const login = (userData, newToken) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));

    setToken(newToken);
    setUser(userData);
  };

  // logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
