const express = require('express');
const router = express.Router();
const workforceController = require('../controllers/workforceController');

// Team Settings
router.get('/team-settings', workforceController.getTeamSettings);
router.put('/team-settings', workforceController.updateTeamSettings);

// Vacancy routes
router.get('/vacancies', workforceController.getVacancies);
router.post('/vacancies', workforceController.addVacancy);
router.put('/vacancies/:id', workforceController.updateVacancy);
router.delete('/vacancies/:id', workforceController.deleteVacancy);

// Team routes
router.get('/team', workforceController.getTeamMembers);
router.post('/team', workforceController.addTeamMember);
router.put('/team/:id', workforceController.updateTeamMember);
router.delete('/team/:id', workforceController.deleteTeamMember);

module.exports = router;
