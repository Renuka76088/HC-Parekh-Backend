const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  basePrice: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);
