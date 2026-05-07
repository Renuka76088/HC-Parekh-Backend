const Service = require('../models/Service');
const About = require('../models/About');
const Contact = require('../models/Contact');
const ServiceCharge = require('../models/ServiceCharge');
const NoticeSetting = require('../models/NoticeSetting');

// Services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.addService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.status(201).json(newService);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(service);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

// About Us
exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateAbout = async (req, res) => {
  try {
    const about = await About.findOneAndUpdate({}, req.body, { upsert: true, new: true });
    res.json(about);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

// Contact
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate({}, req.body, { upsert: true, new: true });
    res.json(contact);
  } catch (err) { res.status(400).json({ message: err.message }); }
};
// Service Charges
exports.getServiceCharges = async (req, res) => {
  try {
    let charges = await ServiceCharge.findOne();
    if (!charges) {
      // Return default values if nothing in DB yet
      charges = new ServiceCharge();
    }
    res.json(charges);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateServiceCharges = async (req, res) => {
  try {
    const charges = await ServiceCharge.findOneAndUpdate({}, req.body, { upsert: true, new: true });
    res.json(charges);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

// Notice Settings
exports.getNoticeSettings = async (req, res) => {
  try {
    let settings = await NoticeSetting.findOne();
    if (!settings) {
      settings = new NoticeSetting();
    }
    res.json(settings);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateNoticeSettings = async (req, res) => {
  try {
    const settings = await NoticeSetting.findOneAndUpdate({}, req.body, { upsert: true, new: true });
    res.json(settings);
  } catch (err) { res.status(400).json({ message: err.message }); }
};
