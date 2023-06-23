const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();
dotenv.config();

const dbUrl = process.env.MONGODB_URL; // Read the MongoDB URL from the environment variable

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));

const port = 5000;

app.use(express.json());
app.use(cors());
const authRoutes = require('./routes/auth');
const feedbackRoutes = require('./routes/feedbackRoutes');
const videoRoutes = require('./routes/videos');
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/videos', videoRoutes);

// Add your routes and middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
