const Vacancy = require('../models/Vacancy');
const Team = require('../models/Team');
const TeamSetting = require('../models/TeamSetting');

// Team Settings
exports.getTeamSettings = async (req, res) => {
  try {
    let settings = await TeamSetting.findOne();
    if (!settings) {
      settings = await TeamSetting.create({});
    }
    res.json(settings);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateTeamSettings = async (req, res) => {
  try {
    const settings = await TeamSetting.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(settings);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

// Vacancies
exports.getVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find().sort({ createdAt: -1 });
    res.json(vacancies);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.addVacancy = async (req, res) => {
  try {
    const newVacancy = new Vacancy(req.body);
    await newVacancy.save();
    res.status(201).json(newVacancy);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteVacancy = async (req, res) => {
  try {
    await Vacancy.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vacancy removed' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateVacancy = async (req, res) => {
  try {
    const updated = await Vacancy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Team Members
exports.getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find().sort({ createdAt: 1 });
    res.json(members);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.addTeamMember = async (req, res) => {
  try {
    const newMember = new Team(req.body);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const updated = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: 'Member removed' });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
