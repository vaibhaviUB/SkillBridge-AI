/**
 * Assessment Routes
 * All routes related to quizzes and assessments
 */

const express = require('express');
const router = express.Router();
const {
  submitAssessment,
  getAssessmentHistory,
  getAssessmentById,
  getAssessmentStats,
  getLatestAssessment,
} = require('../controllers/assessmentController');
const { protect } = require('../middleware/authMiddleware');

// All routes require authentication
router.use(protect);

// ============================================
// Assessment Routes
// ============================================

// Submit assessment
// POST /api/assessment
router.post('/', submitAssessment);

// Get user's assessment history
// GET /api/assessment/history
router.get('/history', getAssessmentHistory);

// Get assessment statistics
// GET /api/assessment/stats
router.get('/stats', getAssessmentStats);

// Get latest assessment
// GET /api/assessment/latest
router.get('/latest', getLatestAssessment);

// Get single assessment by ID
// GET /api/assessment/:id
router.get('/:id', getAssessmentById);

module.exports = router;
