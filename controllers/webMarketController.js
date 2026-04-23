const WebMarketSetting = require('../models/WebMarketSetting');
const EndUserEnquiry = require('../models/EndUserEnquiry');
const ServiceProviderEnquiry = require('../models/ServiceProviderEnquiry');

// Settings
exports.getSettings = async (req, res) => {
  try {
    let settings = await WebMarketSetting.findOne();
    if (!settings) {
      settings = await WebMarketSetting.create({
        endUser: { authorizedOfficial: 'HC PAREKH', assessCode: 'HCP123' },
        serviceProvider: { authorizedOfficial: 'HC PAREKH', assessCode: 'HCP456' }
      });
    }
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSettings = async (req, res) => {
  try {
    let settings = await WebMarketSetting.findOne();
    if (!settings) {
      settings = new WebMarketSetting(req.body);
    } else {
      settings.endUser = req.body.endUser || settings.endUser;
      settings.serviceProvider = req.body.serviceProvider || settings.serviceProvider;
    }
    await settings.save();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// End User Enquiries
exports.submitEndUser = async (req, res) => {
  try {
    const settings = await WebMarketSetting.findOne();
    if (!settings || 
        req.body.authorizedOfficial !== settings.endUser.authorizedOfficial || 
        req.body.assessCode !== settings.endUser.assessCode) {
      return res.status(401).json({ message: 'Invalid Authorization Codes for End-User.' });
    }
    const enquiry = await EndUserEnquiry.create(req.body);
    res.status(201).json(enquiry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEndUserEnquiries = async (req, res) => {
  try {
    const enquiries = await EndUserEnquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEndUserEnquiry = async (req, res) => {
  try {
    await EndUserEnquiry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Service Provider Enquiries
exports.submitServiceProvider = async (req, res) => {
  try {
    const settings = await WebMarketSetting.findOne();
    if (!settings || 
        req.body.authorizedOfficial !== settings.serviceProvider.authorizedOfficial || 
        req.body.assessCode !== settings.serviceProvider.assessCode) {
      return res.status(401).json({ message: 'Invalid Authorization Codes for Service Provider.' });
    }
    const enquiry = await ServiceProviderEnquiry.create(req.body);
    res.status(201).json(enquiry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getServiceProviderEnquiries = async (req, res) => {
  try {
    const enquiries = await ServiceProviderEnquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
