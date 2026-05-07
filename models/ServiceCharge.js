const mongoose = require('mongoose');

const ServiceChargeSchema = new mongoose.Schema({
  heroTitle: { type: String, default: 'Service Charges' },
  heroDescription: { type: String, default: 'Understanding our fee structure and professional charges.' },
  variableFeeTitle: { type: String, default: 'Variable Fee Structure' },
  variableFeeDescription: { type: String, default: 'Our Service charges are subject to the nature of Services, Consultation, and Projects. It varies from Sector to Sector, Industry to Industry, as well as the Service Tenure and Professional Responsibilities involved.' },
  noticeTitle: { type: String, default: 'Specific Advertisements' },
  noticeDescription: { type: String, default: 'Our Service Charges are generally clearly mentioned in our each of the Advertisements and Notices for the specific works, tenure, and jurisdiction. Please refer to the specific project documentation for detailed pricing information.' }
}, { timestamps: true });

module.exports = mongoose.model('ServiceCharge', ServiceChargeSchema);
