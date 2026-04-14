const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  birthPlace: { type: String },
  motherTongue: { type: String },
  fatherRelation: { type: String },
  govExperience: [String],
  corpExperience: [String],
  ethics: [String],
  socialServices: [String],
}, { timestamps: true });

module.exports = mongoose.model('About', AboutSchema);
