const express = require("express");
const router = express.Router();
const Video = require("../models/Video");

// Save a new video
router.post("/", (req, res) => {
  const { url } = req.body;

  const video = new Video({
    url,
  });

  video
    .save()
    .then(() => res.status(201).json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, error: err }));
});

// Get all videos
router.get("/", (req, res) => {
  Video.find()
    .then((videos) => res.json(videos))
    .catch((err) => res.status(400).json({ error: err }));
});

module.exports = router;
