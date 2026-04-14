const mongoose = require('mongoose');

const TenderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  points: [String],
}, { timestamps: true });

module.exports = mongoose.model('Tender', TenderSchema);
