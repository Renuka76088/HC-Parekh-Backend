const WebMarketSetting = require('../models/WebMarketSetting');
const EndUserEnquiry = require('../models/EndUserEnquiry');
const ServiceProviderEnquiry = require('../models/ServiceProviderEnquiry');

// Settings
exports.getSettings = async (req, res) => {
  try {
    let settings = await WebMarketSetting.findOne();
    if (!settings) {
      settings = await WebMarketSetting.create({
        endUsers: [{ authorizedOfficial: 'HC PAREKH', assessCode: 'HCP123' }],
        serviceProviders: [{ authorizedOfficial: 'HC PAREKH', assessCode: 'HCP456' }]
      });
    }
    // Migration check for old data structure
    if (settings.endUser || settings.serviceProvider) {
      if (settings.endUser && settings.endUsers.length === 0) {
        settings.endUsers.push(settings.endUser);
        delete settings.endUser;
      }
      if (settings.serviceProvider && settings.serviceProviders.length === 0) {
        settings.serviceProviders.push(settings.serviceProvider);
        delete settings.serviceProvider;
      }
      await settings.save();
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
      settings.endUsers = req.body.endUsers || settings.endUsers;
      settings.serviceProviders = req.body.serviceProviders || settings.serviceProviders;
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
    if (!settings) return res.status(401).json({ message: 'Authorization not configured.' });

    const isValid = settings.endUsers.some(user => 
      user.authorizedOfficial === req.body.authorizedOfficial && 
      user.assessCode === req.body.assessCode
    );

    if (!isValid) {
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

exports.updateEndUserEnquiry = async (req, res) => {
  try {
    const enquiry = await EndUserEnquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log(`End-User Enquiry ${req.params.id} updated`);
    res.json(enquiry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEndUserEnquiry = async (req, res) => {
  try {
    await EndUserEnquiry.findByIdAndDelete(req.params.id);
    console.log(`End-User Enquiry ${req.params.id} deleted`);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Service Provider Enquiries
exports.submitServiceProvider = async (req, res) => {
  try {
    const settings = await WebMarketSetting.findOne();
    if (!settings) return res.status(401).json({ message: 'Authorization not configured.' });

    const isValid = settings.serviceProviders.some(provider => 
      provider.authorizedOfficial === req.body.authorizedOfficial && 
      provider.assessCode === req.body.assessCode
    );

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid Authorization Codes for Service Provider.' });
    }

    const enquiry = await ServiceProviderEnquiry.create(req.body);
    console.log('New Service Provider Enquiry submitted');
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

exports.updateServiceProviderEnquiry = async (req, res) => {
  try {
    const enquiry = await ServiceProviderEnquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log(`Service Provider Enquiry ${req.params.id} updated`);
    res.json(enquiry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteServiceProviderEnquiry = async (req, res) => {
  try {
    await ServiceProviderEnquiry.findByIdAndDelete(req.params.id);
    console.log(`Service Provider Enquiry ${req.params.id} deleted`);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
