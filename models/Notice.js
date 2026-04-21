const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  projectLocations: [String],
  projectLocationsHeading: { type: String, default: 'Project Locations' },
  targetSectors: [String],
  targetSectorsHeading: { type: String, default: 'Target Sectors' },
  ourRequirements: [String],
  ourRequirementsHeading: { type: String, default: 'Our Requirements' },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Notice', NoticeSchema);
