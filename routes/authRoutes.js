const express = require('express');
const { login, updateCredentials, getMe } = require('../controllers/authController');
const { protect } = require('../config/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/update-credentials', protect, updateCredentials);

module.exports = router;
