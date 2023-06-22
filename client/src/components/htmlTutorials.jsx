import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function HTMLTutorials() {
  const [videos, setVideos] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");

  const handleAddVideo = () => {
    if (videoUrl) {
      setVideos((prevVideos) => [...prevVideos, videoUrl]);
      setVideoUrl("");
    }
  };

  return (
    <div className="bodyWrap">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">HTML Tutorials</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter YouTube video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="border border-gray-400 rounded p-2 mr-2"
          />
          <button
            onClick={handleAddVideo}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Video
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <iframe
                title={`YouTube Video ${index + 1}`}
                width="100%"
                height="200"
                src={video}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/html">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HTMLTutorials;
