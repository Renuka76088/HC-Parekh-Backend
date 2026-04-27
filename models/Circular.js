const mongoose = require('mongoose');

const circularSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  pdfUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Circular', circularSchema);
