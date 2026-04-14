const express = require('express');
const router = express.Router();
const workforceController = require('../controllers/workforceController');

// Vacancy routes
router.get('/vacancies', workforceController.getVacancies);
router.post('/vacancies', workforceController.addVacancy);
router.put('/vacancies/:id', workforceController.updateVacancy);
router.delete('/vacancies/:id', workforceController.deleteVacancy);

module.exports = router;
