const mongoose = require('mongoose');

const endUserEnquirySchema = new mongoose.Schema({
  name: String,
  address: String,
  contactNo: String,
  email: String,
  website: String,
  category: String, // Individual / Business
  natureOfBusiness: String,
  itServicesRequired: [String],
  otherService: String,
  tenureRequired: String,
  budget: String,
  membershipType: String,
  authorizedOfficial: String,
  assessCode: String
}, { timestamps: true });

module.exports = mongoose.model('EndUserEnquiry', endUserEnquirySchema);
