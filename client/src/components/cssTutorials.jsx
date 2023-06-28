import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import YouTube from "react-youtube";

function CssTutorials() {
  const [videos, setVideos] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/videos");
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Failed to fetch videos", error);
    }
  };

  const handleAddVideo = async () => {
    if (videoUrl) {
      try {
        const response = await fetch("http://localhost:5000/api/videos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: videoUrl }),
        });

        if (response.ok) {
          setVideoUrl("");
          fetchVideos();
        } else {
          console.error("Failed to add video");
        }
      } catch (error) {
        console.error("Failed to add video", error);
      }
    }
  };

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
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
          {videos.map((video) => (
            <div
              key={video._id}
              className="bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105"
            >
              <YouTube videoId={getVideoId(video.url)} opts={opts} />
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

// Helper function to extract YouTube video ID from the URL
function getVideoId(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
  const match = url.match(regExp);

  if (match && match[2]) {
    return match[2];
  } else {
    return url;
  }
}

export default CssTutorials;
