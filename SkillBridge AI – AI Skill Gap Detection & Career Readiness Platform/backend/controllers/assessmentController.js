/**
 * Assessment Controller
 * Handles all assessment/quiz-related operations
 */

const Assessment = require('../models/Assessment');
const User = require('../models/User');

// ============================================
// @desc    Submit assessment
// @route   POST /api/assessment
// @access  Private
// ============================================
exports.submitAssessment = async (req, res) => {
  try {
    const {
      assessmentType,
      totalQuestions,
      answers,
      timeTaken,
      startTime,
      endTime,
    } = req.body;
    
    // Validate required fields
    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please provide answers',
      });
    }
    
    // Calculate correct answers and score
    let correctAnswers = 0;
    const processedAnswers = answers.map(answer => {
      const isCorrect = answer.selectedOption === answer.correctOption;
      if (isCorrect) {
        correctAnswers++;
      }
      return {
        questionId: answer.questionId,
        question: answer.question,
        selectedOption: answer.selectedOption,
        correctOption: answer.correctOption,
        isCorrect,
        timeSpent: answer.timeSpent || 0,
      };
    });
    
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Calculate skill breakdown based on question categories
    const skillBreakdown = calculateSkillBreakdown(processedAnswers);
    
    // Create assessment record
    const assessment = await Assessment.create({
      userId: req.user._id,
      assessmentType: assessmentType || 'AI Knowledge',
      totalQuestions,
      correctAnswers,
      score,
      percentage: score,
      answers: processedAnswers,
      timeTaken: timeTaken || 0,
      startTime: startTime || new Date(),
      endTime: endTime || new Date(),
      status: 'completed',
      skillBreakdown,
    });
    
    // Update user's skills based on performance
    await updateUserSkills(req.user._id, skillBreakdown);
    
    res.status(201).json({
      success: true,
      message: 'Assessment submitted successfully',
      data: {
        assessmentId: assessment._id,
        score: assessment.score,
        percentage: assessment.percentage,
        correctAnswers: assessment.correctAnswers,
        totalQuestions: assessment.totalQuestions,
        feedback: assessment.feedback,
        skillBreakdown: assessment.skillBreakdown,
      },
    });
  } catch (error) {
    console.error('Error submitting assessment:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while submitting assessment',
    });
  }
};

// ============================================
// @desc    Get user's assessment history
// @route   GET /api/assessment/history
// @access  Private
// ============================================
exports.getAssessmentHistory = async (req, res) => {
  try {
    const { limit = 10, page = 1 } = req.query;
    const skip = (page - 1) * limit;
    
    const assessments = await Assessment.find({
      userId: req.user._id,
      status: 'completed',
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-answers'); // Exclude detailed answers for list view
    
    const total = await Assessment.countDocuments({
      userId: req.user._id,
      status: 'completed',
    });
    
    res.json({
      success: true,
      count: assessments.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      data: assessments,
    });
  } catch (error) {
    console.error('Error fetching assessment history:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching assessment history',
    });
  }
};

// ============================================
// @desc    Get single assessment details
// @route   GET /api/assessment/:id
// @access  Private
// ============================================
exports.getAssessmentById = async (req, res) => {
  try {
    const assessment = await Assessment.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    
    if (!assessment) {
      return res.status(404).json({
        success: false,
        error: 'Assessment not found',
      });
    }
    
    res.json({
      success: true,
      data: assessment,
    });
  } catch (error) {
    console.error('Error fetching assessment:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching assessment',
    });
  }
};

// ============================================
// @desc    Get assessment statistics
// @route   GET /api/assessment/stats
// @access  Private
// ============================================
exports.getAssessmentStats = async (req, res) => {
  try {
    const stats = await Assessment.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(req.user._id),
          status: 'completed',
        },
      },
      {
        $group: {
          _id: null,
          totalAttempts: { $sum: 1 },
          avgScore: { $avg: '$percentage' },
          bestScore: { $max: '$percentage' },
          worstScore: { $min: '$percentage' },
          totalTimeSpent: { $sum: '$timeTaken' },
        },
      },
    ]);
    
    const result = stats[0] || {
      totalAttempts: 0,
      avgScore: 0,
      bestScore: 0,
      worstScore: 0,
      totalTimeSpent: 0,
    };
    
    // Get score trend (last 5 assessments)
    const recentAssessments = await Assessment.find({
      userId: req.user._id,
      status: 'completed',
    })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('percentage createdAt');
    
    res.json({
      success: true,
      data: {
        ...result,
        recentTrend: recentAssessments.map(a => ({
          score: a.percentage,
          date: a.createdAt,
        })),
      },
    });
  } catch (error) {
    console.error('Error fetching assessment stats:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching assessment stats',
    });
  }
};

// ============================================
// @desc    Get latest assessment
// @route   GET /api/assessment/latest
// @access  Private
// ============================================
exports.getLatestAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findOne({
      userId: req.user._id,
      status: 'completed',
    }).sort({ createdAt: -1 });
    
    if (!assessment) {
      return res.json({
        success: true,
        message: 'No assessments found',
        data: null,
      });
    }
    
    res.json({
      success: true,
      data: assessment,
    });
  } catch (error) {
    console.error('Error fetching latest assessment:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching latest assessment',
    });
  }
};

// ============================================
// Helper: Calculate skill breakdown from answers
// ============================================
function calculateSkillBreakdown(answers) {
  // Map questions to skill categories (simplified logic)
  const skillCategories = {
    promptEngineering: [],
    aiTools: [],
    automation: [],
    technicalKnowledge: [],
  };
  
  answers.forEach((answer, index) => {
    // Simple categorization based on question index
    // In production, this would be based on question metadata
    if (index < 3) {
      skillCategories.promptEngineering.push(answer.isCorrect);
    } else if (index < 5) {
      skillCategories.aiTools.push(answer.isCorrect);
    } else if (index < 7) {
      skillCategories.automation.push(answer.isCorrect);
    } else {
      skillCategories.technicalKnowledge.push(answer.isCorrect);
    }
  });
  
  // Calculate percentage for each skill
  const calculatePercentage = (arr) => {
    if (arr.length === 0) return 0;
    const correct = arr.filter(Boolean).length;
    return Math.round((correct / arr.length) * 100);
  };
  
  return {
    promptEngineering: calculatePercentage(skillCategories.promptEngineering),
    aiTools: calculatePercentage(skillCategories.aiTools),
    automation: calculatePercentage(skillCategories.automation),
    technicalKnowledge: calculatePercentage(skillCategories.technicalKnowledge),
  };
}

// ============================================
// Helper: Update user skills based on assessment
// ============================================
async function updateUserSkills(userId, skillBreakdown) {
  try {
    const user = await User.findById(userId);
    
    if (!user.skills) {
      user.skills = [];
    }
    
    // Update or add skills based on assessment performance
    const skillMap = {
      promptEngineering: 'Prompt Engineering',
      aiTools: 'AI Tools',
      automation: 'Automation',
      technicalKnowledge: 'Technical Knowledge',
    };
    
    Object.entries(skillBreakdown).forEach(([key, score]) => {
      const skillName = skillMap[key];
      const existingSkill = user.skills.find(s => s.name === skillName);
      
      if (existingSkill) {
        // Update existing skill level
        if (score >= 80) {
          existingSkill.level = 'Advanced';
        } else if (score >= 60) {
          existingSkill.level = 'Intermediate';
        } else {
          existingSkill.level = 'Beginner';
        }
      } else if (score > 0) {
        // Add new skill
        user.skills.push({
          name: skillName,
          level: score >= 80 ? 'Advanced' : score >= 60 ? 'Intermediate' : 'Beginner',
          score: score,
        });
      }
    });
    
    await user.save();
  } catch (error) {
    console.error('Error updating user skills:', error);
    // Don't throw - this is a non-critical operation
  }
}

// Import mongoose for aggregation
const mongoose = require('mongoose');
