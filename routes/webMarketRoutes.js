const express = require('express');
const router = express.Router();
const webMarketController = require('../controllers/webMarketController');

router.get('/settings', webMarketController.getSettings);
router.put('/settings', webMarketController.updateSettings);

router.post('/end-user', webMarketController.submitEndUser);
router.delete('/end-user/:id', webMarketController.deleteEndUserEnquiry);

router.post('/service-provider', webMarketController.submitServiceProvider);
router.delete('/service-provider/:id', webMarketController.deleteServiceProviderEnquiry);

router.get('/end-user', webMarketController.getEndUserEnquiries);
router.get('/service-provider', webMarketController.getServiceProviderEnquiries);

module.exports = router;
