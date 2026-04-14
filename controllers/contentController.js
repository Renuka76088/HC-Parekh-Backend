const Service = require('../models/Service');
const About = require('../models/About');
const Contact = require('../models/Contact');

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
