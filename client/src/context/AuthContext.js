import React, { createContext, useState } from 'react';

// Create the authentication context
export const AuthContext = createContext();

// Create the authentication provider component
export const AuthProvider = ({ children }) => {
  // Define the initial authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Method to log in the user
  const login = () => {
    // Perform login logic here...
    setIsAuthenticated(true);
  };

  // Method to log out the user
  const logout = () => {
    // Perform logout logic here...
    setIsAuthenticated(false);
  };

  // Provide the authentication state and methods to child components
  return (
    <AuthContext.Provider value={{ isAuthenticated,setIsAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
