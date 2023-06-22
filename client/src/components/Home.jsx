import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function Home() {
  return (
    <div className="bodyWrap">
      <Navbar />
      <div className="overflow-hidden relative">
        <div className="parallax-bg absolute top-0 left-0 w-full h-full"></div>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to My Web Development Courses
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="card bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 w-64 sm:w-72 md:w-80 mx-4 my-4">
                <Link to="/html">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
                    alt="HTML"
                    className="w-full h-auto object-contain rounded"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">HTML</h3>
                    <p className="text-gray-600">
                      Learn the fundamentals of HTML
                    </p>
                  </div>
                </Link>
              </div>
              <div className="card bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 w-64 sm:w-72 md:w-80 mx-4 my-4">
                <Link to="/css">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png?20160530175649"
                    alt="CSS"
                    className="w-full h-auto object-contain rounded"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">CSS</h3>
                    <p className="text-gray-600">
                      Master CSS styling techniques
                    </p>
                  </div>
                </Link>
              </div>
              <div className="card bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 w-64 sm:w-72 md:w-80 mx-4 my-4">
                <Link to="/javascript">
                  <img
                    src="https://learnbatta.com/assets/images/javascript/javascript-logo.png"
                    alt="JavaScript"
                    className="w-full h-auto object-contain rounded"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">JavaScript</h3>
                    <p className="text-gray-600">
                      Explore the power of JavaScript
                    </p>
                  </div>
                </Link>
              </div>
              <div className="card bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 w-64 sm:w-72 md:w-80 mx-4 my-4">
                <Link to="/react">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207"
                    alt="React"
                    className="w-full h-auto object-contain rounded"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">React</h3>
                    <p className="text-gray-600">
                      Build interactive web applications with React
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
