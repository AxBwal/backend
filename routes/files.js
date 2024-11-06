const express = require('express');
const { uploadFile, uploadToS3 } = require('../controllers/fileController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/upload', authMiddleware, uploadFile, uploadToS3);

module.exports = router;
