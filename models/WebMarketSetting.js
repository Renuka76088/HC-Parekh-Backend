const mongoose = require('mongoose');

const webMarketSettingSchema = new mongoose.Schema({
  endUsers: [{
    authorizedOfficial: { type: String, required: true },
    assessCode: { type: String, required: true }
  }],
  serviceProviders: [{
    authorizedOfficial: { type: String, required: true },
    assessCode: { type: String, required: true }
  }]
}, { timestamps: true });

module.exports = mongoose.model('WebMarketSetting', webMarketSettingSchema);
