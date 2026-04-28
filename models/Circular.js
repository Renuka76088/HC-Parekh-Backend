const mongoose = require('mongoose');

const circularSchema = new mongoose.Schema({
  subject: {
    type: String,
  },
  pdfUrl: {
    type: String,
  },
  publishDate: {
    type: String,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Circular', circularSchema);
