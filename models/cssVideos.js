const mongoose = require('mongoose');

const cssVideoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  // Add more fields as needed
}, { collection: 'cssVideos' }); // Specify the collection name as 'cssVideos'

const cssVideos = mongoose.model('cssVideos', cssVideoSchema);

module.exports = cssVideos;
