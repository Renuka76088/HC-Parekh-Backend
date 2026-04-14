const mongoose = require('mongoose');

const MOUSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  points: [String],
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('MOU', MOUSchema);
