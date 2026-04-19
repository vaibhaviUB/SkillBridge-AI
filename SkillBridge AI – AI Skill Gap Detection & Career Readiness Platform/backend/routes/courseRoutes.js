/**
 * Course Routes
 * All routes related to courses and learning paths
 */

const express = require('express');
const router = express.Router();
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollCourse,
  getEnrolledCourses,
  updateProgress,
  getRecommendedCourses,
} = require('../controllers/courseController');
const { protect, optional } = require('../middleware/authMiddleware');

// ============================================
// Public Routes (No authentication required)
// ============================================

// Get all courses (with filtering and pagination)
// GET /api/courses
router.get('/', getAllCourses);

// Get single course by ID
// GET /api/courses/:id
router.get('/:id', getCourseById);

// ============================================
// Protected Routes (Authentication required)
// ============================================

// Get recommended courses for user
// GET /api/courses/recommended
router.get('/recommended/for-you', protect, getRecommendedCourses);

// Get user's enrolled courses
// GET /api/courses/enrolled
router.get('/enrolled', protect, getEnrolledCourses);

// Enroll in a course
// POST /api/courses/:id/enroll
router.post('/:id/enroll', protect, enrollCourse);

// Update course progress
// PUT /api/courses/:id/progress
router.put('/:id/progress', protect, updateProgress);

// ============================================
// Admin Routes (Admin authentication required)
// ============================================

// Create new course
// POST /api/courses
router.post('/', protect, createCourse);

// Update course
// PUT /api/courses/:id
router.put('/:id', protect, updateCourse);

// Delete course
// DELETE /api/courses/:id
router.delete('/:id', protect, deleteCourse);

module.exports = router;
