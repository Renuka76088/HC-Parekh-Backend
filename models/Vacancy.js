const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema({
  title: { type: String, required: true },
  campaign: { type: String },
  type: { type: String, default: 'On Contract' },
  description: { type: String, required: true },
  targetSectors: [String],
  targetSectorsHeading: { type: String, default: 'Target Sectors' },
  requiredPlatforms: [String],
  requiredPlatformsHeading: { type: String, default: 'Required Platforms' },
  applyNowTitle: { type: String, default: 'Apply Now' },
  applyNowContent: { type: String },
  quotationInstruction: { type: String },
  emails: [String],
  emailHeading: { type: String, default: 'Email Quotation To:' },
  adminNotes: [String],
  adminNoteHeading: { type: String, default: 'Note' },
  submissionNotes: [String],
}, { timestamps: true });

module.exports = mongoose.model('Vacancy', VacancySchema);
