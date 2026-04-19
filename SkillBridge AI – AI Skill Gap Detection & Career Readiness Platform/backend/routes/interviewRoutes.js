/**
 * Interview Routes
 * All routes related to mock interviews
 */

const express = require('express');
const router = express.Router();
const {
  submitInterview,
  getInterviewHistory,
  getInterviewById,
  getInterviewStats,
  getLatestInterview,
} = require('../controllers/interviewController');
const { protect } = require('../middleware/authMiddleware');

// All routes require authentication
router.use(protect);

// ============================================
// Interview Routes
// ============================================

// Submit interview
// POST /api/interview
router.post('/', submitInterview);

// Get user's interview history
// GET /api/interview/history
router.get('/history', getInterviewHistory);

// Get interview statistics
// GET /api/interview/stats
router.get('/stats', getInterviewStats);

// Get latest interview
// GET /api/interview/latest
router.get('/latest', getLatestInterview);

// Get single interview by ID
// GET /api/interview/:id
router.get('/:id', getInterviewById);

module.exports = router;
