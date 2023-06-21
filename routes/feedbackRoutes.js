// backend/routes/feedbackRoutes.js
const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// Create a new feedback
router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  const newFeedback = new Feedback({ name, email, message });

  newFeedback
    .save()
    .then(() => res.json("Feedback submitted successfully!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
