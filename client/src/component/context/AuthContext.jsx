import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  // initialize from localStorage (lazy initializer)
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  // Keep in sync with other tabs/windows
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "token") {
        setToken(e.newValue);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
