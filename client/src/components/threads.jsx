import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./navbar";

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        {isAuthenticated && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Create Post
          </button>
        )}
        <main className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg">
            This is a sample page styled with Tailwind CSS. Feel free to
            customize it for your needs.
          </p>
        </main>

        <footer className="bg-gray-800 text-white w-full py-4 mt-auto">
          <div className="container mx-auto">
            <p className="text-center">
              © {new Date().getFullYear()} codespace. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
