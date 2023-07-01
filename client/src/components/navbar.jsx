import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, username } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here...
    setIsAuthenticated(false);
    // Clear any user-related data from local storage or state

    // Redirect to the login page or any other desired route
    navigate("/login");

    // Clear login state from local storage
    localStorage.removeItem("isLoggedIn");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-lg">
              Codespace
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={showMenu ? "hidden" : ""}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18v1H3V5zm0 7h18v-1H3v1zm0 4h18v-1H3v1z"
                />
                <path
                  className={showMenu ? "" : "hidden"}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v1H4V6zm0 5h16v1H4v1zm0 5h16v1H4v1z"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:ml-10">
            <NavLink
              exact
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              Contact Us
            </NavLink>
            {isAuthenticated ? (
              <div className="flex items-center ml-6 space-x-4">
                <p className="text-gray-300">{username}</p>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:bg-gray-700 hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${showMenu ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              exact
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              activeClassName="bg-gray-900 text-white"
            >
              Contact Us
            </NavLink>
            {isAuthenticated ? (
              <div className="pl-3">
                <p className="text-gray-300">{username}</p>
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
