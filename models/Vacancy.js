const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema({
  title: { type: String, required: true },
  experience: { type: String },
  description: { type: String },
  priority: { type: String, enum: ['Low', 'Medium', 'High', 'Urgent'], default: 'Medium' },
}, { timestamps: true });

module.exports = mongoose.model('Vacancy', VacancySchema);
