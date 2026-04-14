const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinary');
const workforceController = require('../controllers/workforceController');

router.get('/team', workforceController.getTeam);
router.post('/team', upload.single('photo'), workforceController.addTeamMember);
router.delete('/team/:id', workforceController.deleteTeamMember);

router.get('/vacancies', workforceController.getVacancies);
router.post('/vacancies', workforceController.addVacancy);
router.delete('/vacancies/:id', workforceController.deleteVacancy);

module.exports = router;
