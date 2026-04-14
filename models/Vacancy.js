const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, default: 'On Contract' },
  onPayroll: { type: Boolean, default: false },
  description: { type: String, required: true },
  targetSectors: [String],
  requiredPlatforms: [String],
  submissionNotes: [String],
}, { timestamps: true });

module.exports = mongoose.model('Vacancy', VacancySchema);
