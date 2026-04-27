const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const { upload } = require('../config/cloudinary');

router.post('/upload', upload.single('file'), (req, res) => {
  if (req.file && req.file.path) {
    res.json({ secure_url: req.file.path });
  } else {
    res.status(400).json({ message: 'Upload failed' });
  }
});

router.get('/services', contentController.getServices);
router.post('/services', contentController.addService);
router.put('/services/:id', contentController.updateService);
router.delete('/services/:id', contentController.deleteService);

router.get('/about', contentController.getAbout);
router.put('/about', contentController.updateAbout);

router.get('/contact', contentController.getContact);
router.put('/contact', contentController.updateContact);

module.exports = router;
