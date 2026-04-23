const mongoose = require('mongoose');

const webMarketSettingSchema = new mongoose.Schema({
  endUser: {
    authorizedOfficial: { type: String, default: 'HC PAREKH' },
    assessCode: { type: String, default: 'HCP123' }
  },
  serviceProvider: {
    authorizedOfficial: { type: String, default: 'HC PAREKH' },
    assessCode: { type: String, default: 'HCP456' }
  }
}, { timestamps: true });

module.exports = mongoose.model('WebMarketSetting', webMarketSettingSchema);
