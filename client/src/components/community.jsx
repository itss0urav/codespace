import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function Community() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-400 m-2 p-2 flex flex-wrap justify-center">
        <Link to="/Threads">
          <div className="bg-blue-700 text-white text-lg w-28 text-center rounded-lg m-2 py-2 hover:bg-blue-600 transition-colors duration-300">
            Threads
          </div>
        </Link>
        <Link to="/Updates">
          <div className="bg-blue-700 text-white text-lg w-28 text-center rounded-lg m-2 py-2 hover:bg-blue-600 transition-colors duration-300">
            Updates
          </div>
        </Link>
        <Link to="/Donate">
          <div className="bg-blue-700 text-white text-lg w-28 text-center rounded-lg m-2 py-2 hover:bg-blue-600 transition-colors duration-300">
            Donate
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Community;
