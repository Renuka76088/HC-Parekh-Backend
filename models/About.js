const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  birthPlace: { type: String },
  motherTongue: { type: String },
  fatherRelation: { type: String },
  govExperience: [String],
  corpExperience: [{
    title: { type: String },
    description: { type: String }
  }],
  ethics: [String],
  socialServices: [{
    title: { type: String },
    description: { type: String }
  }]
}, { timestamps: true });

module.exports = mongoose.model('About', AboutSchema);
