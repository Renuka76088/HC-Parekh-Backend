const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

router.get('/services', contentController.getServices);
router.post('/services', contentController.addService);

router.get('/about', contentController.getAbout);
router.put('/about', contentController.updateAbout);

router.get('/contact', contentController.getContact);
router.put('/contact', contentController.updateContact);

module.exports = router;
