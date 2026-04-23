const mongoose = require('mongoose');

const circularSchema = new mongoose.Schema({
  circularNo: {
    type: String,
    required: true
  },
  circularDate: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  kindAttention: {
    type: String
  },
  content: {
    type: String, // HTML content from rich text editor
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Circular', circularSchema);
