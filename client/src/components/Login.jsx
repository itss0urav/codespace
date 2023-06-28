import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsAuthenticated(true);
      navigate("/"); // Redirect to the home page
    }
  }, [setIsAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoggingIn(true);
    setError(""); // Clear any previous error message

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );
      const token = response?.data.token;
      console.log("User logged in successfully:", token);

      setIsAuthenticated(true);

      // Store the login state in local storage
      localStorage.setItem("isLoggedIn", "true");

      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error("Login failed:", error);
      setError("Incorrect username or password. Please try again.");
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              id="username"
              className="border border-gray-300 rounded py-2 px-3 w-full"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              className="border border-gray-300 rounded py-2 px-3 w-full"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition-opacity ${
              isLoggingIn ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Logging In..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            New here?{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
