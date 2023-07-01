// Import necessary modules and components
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function JavaScript() {
  // State to manage the visibility of JavaScript fundamentals section
  const [showFundamentals, setShowFundamentals] = useState(false);

  // Function to handle the "Fundamentals" button click
  const handleFundamentalsClick = () => {
    setShowFundamentals(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Render the Navbar component */}
      <Navbar />

      <div className="container mx-auto py-10">
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          {/* Button to show JavaScript Fundamentals */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4"
            onClick={handleFundamentalsClick}
          >
            Fundamentals
          </button>

          {/* Button to navigate to video tutorials */}
          <Link to="/htmlTutorials">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Video Tutorials
            </button>
          </Link>
        </div>

        {/* Show JavaScript fundamentals section if showFundamentals is true */}
        {showFundamentals && (
          <div className="mt-8">
            {/* JavaScript Fundamentals section */}
            <h1 className="text-4xl font-bold mb-6">JavaScript Fundamentals</h1>
            <p className="text-lg mb-6">
              JavaScript is a powerful and versatile programming language used
              to add interactivity and dynamic behavior to web pages. It is a
              core technology in web development and essential for creating
              modern web applications.
            </p>
            <p className="text-lg mb-6">
              Here are some fundamental concepts of JavaScript:
            </p>

            {/* Event Handling */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-bold mb-2">Event Handling:</h2>
              <p>
                JavaScript allows you to handle various events, such as button
                clicks, form submissions, and mouse movements. In this code, we
                use the `onClick` event to handle the "Fundamentals" button
                click.
              </p>
            </div>

            {/* State Management */}
            <div className="bg-white rounded-lg p-4 shadow-md mt-4">
              <h2 className="text-xl font-bold mb-2">State Management:</h2>
              <p>
                The `useState` hook in React enables us to manage state within
                functional components. Here, we use `showFundamentals` state to
                toggle the visibility of the JavaScript fundamentals section.
              </p>
            </div>

            {/* Functions */}
            <div className="bg-white rounded-lg p-4 shadow-md mt-4">
              <h2 className="text-xl font-bold mb-2">Functions:</h2>
              <p>
                JavaScript functions are reusable blocks of code that can be
                called with different arguments to perform specific tasks. They
                play a vital role in organizing and modularizing code. Here's an
                example of a simple function:
              </p>
              <pre className="bg-gray-200 p-2 mt-2">
                {`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!`}
              </pre>
            </div>

            {/* Variables */}
            <div className="bg-white rounded-lg p-4 shadow-md mt-4">
              <h2 className="text-xl font-bold mb-2">Variables:</h2>
              <p>
                Variables are used to store data in JavaScript. They can hold
                various data types, such as numbers, strings, arrays, objects,
                etc. Here's an example of declaring and using a variable:
              </p>
              <pre className="bg-gray-200 p-2 mt-2">
                {`let age = 30;
console.log("Age:", age); // Output: Age: 30`}
              </pre>
            </div>

            {/* Loops */}
            <div className="bg-white rounded-lg p-4 shadow-md mt-4">
              <h2 className="text-xl font-bold mb-2">Loops:</h2>
              <p>
                Loops allow you to execute a block of code repeatedly. The most
                commonly used loops in JavaScript are `for` loop and `while`
                loop. Here's an example of a `for` loop that prints numbers from
                1 to 5:
              </p>
              <pre className="bg-gray-200 p-2 mt-2">
                {`for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5`}
              </pre>
            </div>

            {/* Conditionals */}
            <div className="bg-white rounded-lg p-4 shadow-md mt-4">
              <h2 className="text-xl font-bold mb-2">Conditionals:</h2>
              <p>
                Conditionals allow you to make decisions in your code based on
                certain conditions. The most common conditional statement is the
                `if` statement. Here's an example of using an `if` statement to
                check if a number is positive or negative:
              </p>
              <pre className="bg-gray-200 p-2 mt-2">
                {`let number = 5;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
// Output: Positive`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JavaScript;
