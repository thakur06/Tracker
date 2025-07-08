const express = require('express');
const router = express.Router();
const { googleAuth, googleAuthCallback } = require('../controllers/authController');

router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback);

module.exports = router; 