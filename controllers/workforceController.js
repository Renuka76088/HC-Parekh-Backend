const Vacancy = require('../models/Vacancy');

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
