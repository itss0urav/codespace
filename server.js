const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
mongoose.connect('<your-mongodb-url>', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error));
  
const port = 5000;

app.use(express.json());
app.use(cors());
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// Add your routes and middleware here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
