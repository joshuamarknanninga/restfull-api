// routes/auth.js
const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/authController');

// @route   POST /api/auth/register
router.post('/register', registerUser);

// @route   POST /api/auth/login
router.post('/login', authUser);

module.exports = router;
