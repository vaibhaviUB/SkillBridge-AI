// Authentication Routes - API Endpoints for Auth Operations
const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  getMe,
  updateProfile,
  logout,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', signup);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', login);

// @route   GET /api/auth/me
// @desc    Get current logged in user
// @access  Private (requires authentication)
router.get('/me', protect, getMe);

// @route   PUT /api/auth/update-profile
// @desc    Update user profile
// @access  Private
router.put('/update-profile', protect, updateProfile);

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Private
router.post('/logout', protect, logout);

module.exports = router;
