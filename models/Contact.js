const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  locations: [{
    city: { type: String, required: true },
    address: { type: String }
  }],
  emails: {
    appointment: { type: String },
    services: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model('Contact', ContactSchema);
