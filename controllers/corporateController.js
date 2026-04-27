const Tender = require('../models/Tender');
const MOU = require('../models/MOU');
const Notice = require('../models/Notice');
const Circular = require('../models/Circular');

// Tenders
exports.getTenders = async (req, res) => {
  try {
    const tenders = await Tender.find().sort({ createdAt: 1 });
    res.json(tenders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addTender = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTender = new Tender({
      title,
      description,
      date
    });
    await newTender.save();
    res.status(201).json(newTender);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTender = async (req, res) => {
  try {
    const updatedTender = await Tender.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTender);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTender = async (req, res) => {
  try {
    await Tender.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tender deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// MOUs
exports.getMOUs = async (req, res) => {
  try {
    const mous = await MOU.find().sort({ createdAt: 1 });
    res.json(mous);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.addMOU = async (req, res) => {
  try {
    const newMOU = new MOU(req.body);
    await newMOU.save();
    res.status(201).json(newMOU);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.updateMOU = async (req, res) => {
  try {
    const updatedMOU = await MOU.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMOU);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteMOU = async (req, res) => {
  try {
    await MOU.findByIdAndDelete(req.params.id);
    res.json({ message: 'MOU deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

// Notices
exports.getNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: 1 });
    res.json(notices);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.addNotice = async (req, res) => {
  try {
    const newNotice = new Notice(req.body);
    await newNotice.save();
    res.status(201).json(newNotice);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.updateNotice = async (req, res) => {
  try {
    const updatedNotice = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedNotice);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: 'Notice deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

// Circulars
exports.getCirculars = async (req, res) => {
  try {
    const circulars = await Circular.find().sort({ createdAt: -1 });
    res.json(circulars);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.addCircular = async (req, res) => {
  try {
    console.log('Received Circular Data:', req.body);
    const newCircular = new Circular(req.body);
    await newCircular.save();
    res.status(201).json(newCircular);
  } catch (err) { 
    console.error('Circular Save Error:', err);
    res.status(400).json({ message: err.message }); 
  }
};

exports.updateCircular = async (req, res) => {
  try {
    const updatedCircular = await Circular.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCircular);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteCircular = async (req, res) => {
  try {
    await Circular.findByIdAndDelete(req.params.id);
    res.json({ message: 'Circular deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
