import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/about";
import ContactUs from "./components/contact";
import { AuthContext } from "./context/AuthContext"; // Update the import statement
import Html from "./components/html";
import HTMLTutorials from "./components/htmlTutorials";
import Css from "./components/css";
import CssTutorials from "./components/cssTutorials";
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
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/html" element={<Html />} />
        <Route exact path="/htmltutorials" element={<HTMLTutorials />} />
        <Route exact path="/css" element={<Css />} />
        <Route exact path="/csstutorials" element={<CssTutorials />} />
      </Routes>
    </Router>
  );
}

export default App;
