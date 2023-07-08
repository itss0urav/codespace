import React, { useContext } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthContext } from "./context/AuthContext"; // Update the import statement

//components

import HTMLTutorials from "./components/htmlTutorials";
import CssTutorials from "./components/cssTutorials";
import Javascript from "./components/javascript";
import ReactPage from "./components/reactPage";
import Community from "./components/community";
import Register from "./components/Register";
import ContactUs from "./components/contact";
import Updates from "./components/updates";
import Threads from "./components/threads";
import Donate from "./components/donate";
import Login from "./components/Login";
import About from "./components/about";
import Home from "./components/Home";
import Html from "./components/html";
import Css from "./components/css";
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
        <Route exact path="/htmltutorials" element={<HTMLTutorials />} />
        <Route exact path="/csstutorials" element={<CssTutorials />} />
        <Route exact path="/javascript" element={<Javascript />} />
        <Route exact path="/reactPage" element={<ReactPage />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/threads" element={<Threads />} />
        <Route exact path="/updates" element={<Updates />} />
        <Route exact path="/Donate" element={<Donate />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/html" element={<Html />} />
        <Route exact path="/css" element={<Css />} />
      </Routes>
    </Router>
  );
}

export default App;
