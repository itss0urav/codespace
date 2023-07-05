import React from "react";
import Navbar from "./navbar";

function community() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-400 m-2 p-2">
        <div className=" bg-blue-700 text-white text-lg w-20 text-center rounded-lg mt-2 hover:text-gray-200 hover:bg-blue-700 ">
          Threads
        </div>
      </div>
    </div>
  );
}

export default community;
