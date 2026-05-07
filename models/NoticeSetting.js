const mongoose = require('mongoose');

const NoticeSettingSchema = new mongoose.Schema({
  providerTitle: { type: String, default: 'Interested Service Providers' },
  providerDescription: { type: String },
  noteTitle: { type: String, default: 'Note :' },
  noteDescription: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('NoticeSetting', NoticeSettingSchema);
