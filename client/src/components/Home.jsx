import React from "react";
import Navbar from "./navbar";

function Home() {
  return (
    <div className="bodyWrap">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page!</h1>
        <p className="text-lg">This is the home page of your application.</p>
      </div>
    </div>
  );
}

export default Home;
