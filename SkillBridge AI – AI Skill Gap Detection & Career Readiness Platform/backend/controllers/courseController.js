/**
 * Course Controller
 * Handles all course-related operations
 */

const Course = require('../models/Course');
const User = require('../models/User');

// ============================================
// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
// ============================================
exports.getAllCourses = async (req, res) => {
  try {
    const { category, level, search, page = 1, limit = 10 } = req.query;
    
    // Build query
    let query = { isPublished: true };
    
    if (category) {
      query.category = category;
    }
    
    if (level) {
      query.level = level;
    }
    
    if (search) {
      query.$text = { $search: search };
    }
    
    // Pagination
    const skip = (page - 1) * limit;
    
    const courses = await Course.find(query)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });
    
    const total = await Course.countDocuments(query);
    
    res.json({
      success: true,
      count: courses.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      data: courses,
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching courses',
    });
  }
};

// ============================================
// @desc    Get single course by ID
// @route   GET /api/courses/:id
// @access  Public
// ============================================
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
      });
    }
    
    res.json({
      success: true,
      data: course,
    });
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching course',
    });
  }
};

// ============================================
// @desc    Create new course
// @route   POST /api/courses
// @access  Private/Admin
// ============================================
exports.createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      level,
      duration,
      modules,
      instructor,
      tags,
      prerequisites,
      learningOutcomes,
    } = req.body;
    
    // Validate required fields
    if (!title || !description || !category || !level) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields (title, description, category, level)',
      });
    }
    
    const course = await Course.create({
      title,
      description,
      category,
      level,
      duration,
      modules: modules || [],
      instructor: instructor || 'SkillBridge AI Team',
      tags: tags || [],
      prerequisites: prerequisites || [],
      learningOutcomes: learningOutcomes || [],
    });
    
    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: course,
    });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while creating course',
    });
  }
};

// ============================================
// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private/Admin
// ============================================
exports.updateCourse = async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
      });
    }
    
    course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    
    res.json({
      success: true,
      message: 'Course updated successfully',
      data: course,
    });
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while updating course',
    });
  }
};

// ============================================
// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private/Admin
// ============================================
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
      });
    }
    
    await course.deleteOne();
    
    res.json({
      success: true,
      message: 'Course deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while deleting course',
    });
  }
};

// ============================================
// @desc    Enroll in course
// @route   POST /api/courses/:id/enroll
// @access  Private
// ============================================
exports.enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found',
      });
    }
    
    const user = await User.findById(req.user._id);
    
    // Check if already enrolled
    if (user.enrolledCourses.some(c => c.course.toString() === req.params.id)) {
      return res.status(400).json({
        success: false,
        error: 'Already enrolled in this course',
      });
    }
    
    // Add course to user's enrolled courses
    user.enrolledCourses.push({
      course: course._id,
      enrolledAt: new Date(),
      progress: 0,
      modulesCompleted: 0,
    });
    
    // Increment enrolled students count
    course.enrolledStudents += 1;
    
    await user.save();
    await course.save();
    
    res.json({
      success: true,
      message: 'Successfully enrolled in course',
      data: {
        courseId: course._id,
        courseTitle: course.title,
      },
    });
  } catch (error) {
    console.error('Error enrolling in course:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while enrolling in course',
    });
  }
};

// ============================================
// @desc    Get user's enrolled courses
// @route   GET /api/courses/enrolled
// @access  Private
// ============================================
exports.getEnrolledCourses = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('enrolledCourses.course');
    
    const enrolledCourses = user.enrolledCourses.map(enrollment => ({
      ...enrollment.toObject(),
      course: enrollment.course,
    }));
    
    res.json({
      success: true,
      count: enrolledCourses.length,
      data: enrolledCourses,
    });
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching enrolled courses',
    });
  }
};

// ============================================
// @desc    Update course progress
// @route   PUT /api/courses/:id/progress
// @access  Private
// ============================================
exports.updateProgress = async (req, res) => {
  try {
    const { moduleId, completed } = req.body;
    const user = await User.findById(req.user._id);
    
    const enrollment = user.enrolledCourses.find(
      e => e.course.toString() === req.params.id
    );
    
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        error: 'Not enrolled in this course',
      });
    }
    
    // Update module completion
    if (completed && !enrollment.modulesCompletedList?.includes(moduleId)) {
      if (!enrollment.modulesCompletedList) {
        enrollment.modulesCompletedList = [];
      }
      enrollment.modulesCompletedList.push(moduleId);
      enrollment.modulesCompleted = enrollment.modulesCompletedList.length;
      
      // Calculate progress percentage
      const course = await Course.findById(req.params.id);
      enrollment.progress = Math.round(
        (enrollment.modulesCompleted / course.modules.length) * 100
      );
    }
    
    await user.save();
    
    res.json({
      success: true,
      message: 'Progress updated successfully',
      data: {
        progress: enrollment.progress,
        modulesCompleted: enrollment.modulesCompleted,
      },
    });
  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while updating progress',
    });
  }
};

// ============================================
// @desc    Get recommended courses
// @route   GET /api/courses/recommended
// @access  Private
// ============================================
exports.getRecommendedCourses = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    // Get courses based on user's weak skills from assessments
    // For now, return popular courses
    const courses = await Course.find({ isPublished: true })
      .sort({ enrolledStudents: -1, rating: -1 })
      .limit(6);
    
    res.json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.error('Error fetching recommended courses:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching recommended courses',
    });
  }
};
