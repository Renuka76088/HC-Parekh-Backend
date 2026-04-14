const Tender = require('../models/Tender');
const MOU = require('../models/MOU');
const Notice = require('../models/Notice');

// Tenders
exports.getTenders = async (req, res) => {
  try {
    const tenders = await Tender.find().sort({ createdAt: -1 });
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

exports.deleteTender = async (req, res) => {
  try {
    await Tender.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tender deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Similar logic for MOU and Notice... (Simplified for brevity or repetitive check)
// MOUs
exports.getMOUs = async (req, res) => {
  try {
    const mous = await MOU.find().sort({ createdAt: -1 });
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

exports.deleteMOU = async (req, res) => {
  try {
    await MOU.findByIdAndDelete(req.params.id);
    res.json({ message: 'MOU deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

// Notices
exports.getNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
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

exports.deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: 'Notice deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
