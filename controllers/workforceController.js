const Team = require('../models/Team');
const Vacancy = require('../models/Vacancy');

// Team Members
exports.getTeam = async (req, res) => {
  try {
    const team = await Team.find();
    res.json(team);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.addTeamMember = async (req, res) => {
  try {
    const newMember = new Team({
      ...req.body,
      photoUrl: req.file ? req.file.path : '',
      photoId: req.file ? req.file.filename : '',
    });
    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: 'Team member removed' });
  } catch (err) { res.status(500).json({ message: err.message }); }
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
