import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function HTMLPage() {
  return (
    <div className="bodyWrap">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">HTML Fundamentals</h1>
        <p className="text-lg mb-6">
          Here you will learn the basics of HTML, including tags, elements, and structure.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
            Fundamentals
          </button>
          <Link to="/htmlTutorials">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Tutorials
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HTMLPage;
