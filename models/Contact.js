const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  locations: [{
    city: { type: String },
    address: { type: String },
    mapUrl: { type: String }
  }],
  emails: {
    appointment: [String],
    services: [String]
  }
}, { timestamps: true });

module.exports = mongoose.model('Contact', ContactSchema);
