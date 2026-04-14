const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  projectLocations: [String],
  targetSectors: [String],
  ourRequirements: [String],
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Notice', NoticeSchema);
