const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  bio: { type: String },
  photoUrl: { type: String },
  photoId: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Team', TeamSchema);
