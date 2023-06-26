import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function HTMLPage() {
  const [showFundamentals, setShowFundamentals] = useState(false);

  const handleFundamentalsClick = () => {
    setShowFundamentals(true);
  };

  return (
    <div className="bodyWrap">
      <Navbar />
      <div className="container mx-auto py-10">
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
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
          <>
            <h1 className="text-4xl font-bold mb-6">HTML Fundamentals</h1>
            <p className="text-lg mb-6">
              HTML is the standard markup language used for creating web pages.
              It consists of various tags and attributes that define the
              structure and content of a web document.
            </p>
            <p className="text-lg mb-6">
              Here are some examples of HTML tags and attributes:
            </p>
            <ul className="list-disc ml-8 mb-6">
              <li>
                <code>&lt;a&gt;</code>: Creates a hyperlink. Attributes like
                <code>href</code> specify the URL to link to.
              </li>
              <li>
                <code>&lt;img&gt;</code>: Displays an image on the page.
                Attributes like <code>src</code> and <code>alt</code> are used
                to specify the image source and alternative text, respectively.
              </li>
              <li>
                <code>&lt;table&gt;</code>: Defines a table. It contains rows
                (<code>&lt;tr&gt;</code>) and cells (<code>&lt;td&gt;</code> or
                <code>&lt;th&gt;</code>).
              </li>
              <li>
                <code>&lt;form&gt;</code>: Creates an HTML form. Attributes like
                <code>action</code> and <code>method</code> specify the form's
                action URL and submission method.
              </li>
              <li>
                <code>&lt;input&gt;</code>: Represents an input field in a form.
                Attributes like <code>type</code> (e.g., text, checkbox, radio)
                and <code>name</code> are used to define input types and names.
              </li>
              <li>
                <code>&lt;button&gt;</code>: Defines a clickable button.
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default HTMLPage;
