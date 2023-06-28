import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function Css() {
  const [showFundamentals, setShowFundamentals] = useState(false);

  const handleFundamentalsClick = () => {
    setShowFundamentals(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10">
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4"
            onClick={handleFundamentalsClick}
          >
            Fundamentals
          </button>
          <Link to="/htmlTutorials">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Video Tutorials
            </button>
          </Link>
        </div>

        {showFundamentals && (
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-6">HTML Fundamentals</h1>
            <p className="text-lg mb-6">
              HTML is the standard markup language used for creating web pages.
              It consists of various tags and attributes that define the
              structure and content of a web document.
            </p>
            <p className="text-lg mb-6">
              Here are some examples of HTML tags and containers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h2 className="text-xl font-bold mb-2">Container Tags:</h2>
                <ul className="list-disc ml-4">
                  <li>
                    <code>&lt;div&gt;</code>: Represents a generic container
                    used to group other HTML elements.
                  </li>
                  <li>
                    <code>&lt;span&gt;</code>: Defines a generic inline
                    container.
                  </li>
                  <li>
                    <code>&lt;section&gt;</code>: Represents a standalone
                    section of a document.
                  </li>
                  <li>
                    <code>&lt;article&gt;</code>: Represents a self-contained
                    composition in a document.
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h2 className="text-xl font-bold mb-2">Text Formatting:</h2>
                <ul className="list-disc ml-4">
                  <li>
                    <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Headings
                    of different levels.
                  </li>
                  <li>
                    <code>&lt;p&gt;</code>: Defines a paragraph.
                  </li>
                  <li>
                    <code>&lt;em&gt;</code>: Emphasizes text.
                  </li>
                  <li>
                    <code>&lt;strong&gt;</code>: Indicates strong importance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Css;
