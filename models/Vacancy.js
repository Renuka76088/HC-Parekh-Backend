const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema({
  title: { type: String, required: true },
  publishDate: { type: String },
  campaign: { type: String },
  campaignHeading: { type: String, default: 'CAMPAIGN' },
  type: { type: String, default: 'on contract' },
  description: { type: String, required: true },
  descriptionHeading: { type: String, default: 'Job Description' },
  targetSectors: [String],
  targetSectorsHeading: { type: String, default: 'Target Sectors' },
  requiredPlatforms: [String],
  requiredPlatformsHeading: { type: String, default: 'Required Platforms' },
  applyNowTitle: { type: String, default: 'Apply Now' },
  applyNowContent: { type: String },
  quotationInstruction: { type: String },
  emails: [String],
  emailHeading: { type: String, default: 'Email Quotation To:' },
}, { timestamps: true });

module.exports = mongoose.model('Vacancy', VacancySchema);
