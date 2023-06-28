import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function Css() {
  const [showFundamentals, setShowFundamentals] = useState(false);

  const handleFundamentalsClick = () => {
    setShowFundamentals(!showFundamentals);
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
            {showFundamentals ? "Hide Fundamentals" : "CSS Fundamentals"}
          </button>
          <Link to="/cssTutorials">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Video Tutorials
            </button>
          </Link>
        </div>

        {showFundamentals && (
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-6">CSS Fundamentals</h1>
            <p className="text-lg mb-6">
              CSS (Cascading Style Sheets) is a styling language used for
              describing the look and formatting of a document written in HTML.
              It allows you to style and customize the appearance of HTML
              elements.
            </p>
            <p className="text-lg mb-6">
              Here are some examples of CSS components and elements:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h2 className="text-xl font-bold mb-2">Selectors:</h2>
                <ul className="list-disc ml-4">
                  <li>
                    <code>element</code>: Selects HTML elements based on their
                    tag name.
                  </li>
                  <li>
                    <code>.class</code>: Selects elements with a specific CSS
                    class.
                  </li>
                  <li>
                    <code>#id</code>: Selects an element with a specific ID.
                  </li>
                  <li>
                    <code>selector1, selector2</code>: Selects multiple elements
                    using comma-separated selectors.
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h2 className="text-xl font-bold mb-2">Properties:</h2>
                <ul className="list-disc ml-4">
                  <li>
                    <code>color</code>: Specifies the text color.
                  </li>
                  <li>
                    <code>font-size</code>: Sets the size of the text.
                  </li>
                  <li>
                    <code>background-color</code>: Sets the background color of
                    an element.
                  </li>
                  <li>
                    <code>margin</code>: Sets the margin around an element.
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6">
              These are just a few examples, and there are many more CSS
              components and properties available for styling web pages.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Css;
