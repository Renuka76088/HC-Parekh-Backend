const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinary');
const corporateController = require('../controllers/corporateController');

router.get('/tenders', corporateController.getTenders);
router.post('/tenders', corporateController.addTender);
router.delete('/tenders/:id', corporateController.deleteTender);

router.get('/mous', corporateController.getMOUs);
router.post('/mous', corporateController.addMOU);
router.delete('/mous/:id', corporateController.deleteMOU);

router.get('/notices', corporateController.getNotices);
router.post('/notices', corporateController.addNotice);
router.delete('/notices/:id', corporateController.deleteNotice);

module.exports = router;
