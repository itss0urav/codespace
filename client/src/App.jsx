import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/about";
import { AuthContext } from "./context/AuthContext"; // Update the import statement
function App() {
  const { isAuthenticated } = useContext(AuthContext); // Access the isAuthenticated state

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Home /> : <Login />} // Render the Home component if authenticated, otherwise render the Login component
        />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
