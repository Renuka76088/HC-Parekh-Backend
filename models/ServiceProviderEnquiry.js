const mongoose = require('mongoose');

const serviceProviderEnquirySchema = new mongoose.Schema({
  name: String,
  businessAddress: String,
  contactNo: String,
  email: String,
  websiteUrl: String,
  technicalStaffCount: String,
  itServicesOffered: [String],
  otherServices: String,
  paymentTerms: String,
  membershipType: String,
  authorizedOfficial: String,
  assessCode: String
}, { timestamps: true });

module.exports = mongoose.model('ServiceProviderEnquiry', serviceProviderEnquirySchema);
