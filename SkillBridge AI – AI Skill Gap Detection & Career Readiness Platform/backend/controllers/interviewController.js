/**
 * Interview Controller
 * Handles all mock interview-related operations
 */

const Interview = require('../models/Interview');
const User = require('../models/User');

// ============================================
// @desc    Submit interview
// @route   POST /api/interview
// @access  Private
// ============================================
exports.submitInterview = async (req, res) => {
  try {
    const {
      interviewType,
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
    
    if (!interviewType || !['HR', 'Technical'].includes(interviewType)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide valid interview type (HR or Technical)',
      });
    }
    
    // Process answers and calculate scores
    const processedAnswers = answers.map(answer => {
      // Analyze answer length
      const answerLength = answer.answer?.trim().length || 0;
      let lengthScore = 'adequate';
      if (answerLength < 50) {
        lengthScore = 'too-short';
      } else if (answerLength > 300) {
        lengthScore = 'detailed';
      }
      
      // Generate score based on answer quality (simplified logic)
      // In production, this would use AI/NLP analysis
      let score = 5; // Base score
      if (answerLength > 100) score += 2;
      if (answerLength > 200) score += 2;
      if (answerLength < 50) score -= 2;
      
      // Check for keywords (simplified)
      const keywords = extractKeywords(answer.answer, interviewType);
      
      // Generate feedback
      let feedback = generateFeedback(answer.answer, lengthScore, interviewType);
      
      return {
        questionId: answer.questionId,
        question: answer.question,
        answer: answer.answer,
        score: Math.min(10, Math.max(0, score)),
        feedback,
        keywords,
        lengthScore,
        sentiment: 'neutral',
      };
    });
    
    // Calculate total score
    const totalScore = processedAnswers.reduce((sum, a) => sum + a.score, 0);
    
    // Create interview record
    const interview = await Interview.create({
      userId: req.user._id,
      interviewType,
      totalQuestions: totalQuestions || answers.length,
      answers: processedAnswers,
      totalScore,
      percentage: Math.round((totalScore / (answers.length * 10)) * 100),
      timeTaken: timeTaken || 0,
      startTime: startTime || new Date(),
      endTime: endTime || new Date(),
      status: 'completed',
    });
    
    // Update user's interview skills
    await updateUserInterviewSkills(req.user._id, interviewType, interview.percentage);
    
    res.status(201).json({
      success: true,
      message: 'Interview submitted successfully',
      data: {
        interviewId: interview._id,
        totalScore: interview.totalScore,
        percentage: interview.percentage,
        overallFeedback: interview.overallFeedback,
        jobReadiness: interview.jobReadiness,
      },
    });
  } catch (error) {
    console.error('Error submitting interview:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while submitting interview',
    });
  }
};

// ============================================
// @desc    Get user's interview history
// @route   GET /api/interview/history
// @access  Private
// ============================================
exports.getInterviewHistory = async (req, res) => {
  try {
    const { limit = 10, page = 1, type } = req.query;
    const skip = (page - 1) * limit;
    
    let query = {
      userId: req.user._id,
      status: 'completed',
    };
    
    if (type && ['HR', 'Technical'].includes(type)) {
      query.interviewType = type;
    }
    
    const interviews = await Interview.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-answers'); // Exclude detailed answers for list view
    
    const total = await Interview.countDocuments(query);
    
    res.json({
      success: true,
      count: interviews.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      data: interviews,
    });
  } catch (error) {
    console.error('Error fetching interview history:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching interview history',
    });
  }
};

// ============================================
// @desc    Get single interview details
// @route   GET /api/interview/:id
// @access  Private
// ============================================
exports.getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    
    if (!interview) {
      return res.status(404).json({
        success: false,
        error: 'Interview not found',
      });
    }
    
    res.json({
      success: true,
      data: interview,
    });
  } catch (error) {
    console.error('Error fetching interview:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching interview',
    });
  }
};

// ============================================
// @desc    Get interview statistics
// @route   GET /api/interview/stats
// @access  Private
// ============================================
exports.getInterviewStats = async (req, res) => {
  try {
    const stats = await Interview.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(req.user._id),
          status: 'completed',
        },
      },
      {
        $group: {
          _id: '$interviewType',
          count: { $sum: 1 },
          avgScore: { $avg: '$percentage' },
          bestScore: { $max: '$percentage' },
        },
      },
    ]);
    
    const hrStats = stats.find(s => s._id === 'HR') || { count: 0, avgScore: 0, bestScore: 0 };
    const techStats = stats.find(s => s._id === 'Technical') || { count: 0, avgScore: 0, bestScore: 0 };
    
    // Get overall stats
    const overallStats = await Interview.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(req.user._id),
          status: 'completed',
        },
      },
      {
        $group: {
          _id: null,
          totalInterviews: { $sum: 1 },
          avgScore: { $avg: '$percentage' },
          bestScore: { $max: '$percentage' },
        },
      },
    ]);
    
    const overall = overallStats[0] || { totalInterviews: 0, avgScore: 0, bestScore: 0 };
    
    res.json({
      success: true,
      data: {
        overall,
        byType: {
          HR: hrStats,
          Technical: techStats,
        },
      },
    });
  } catch (error) {
    console.error('Error fetching interview stats:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching interview stats',
    });
  }
};

// ============================================
// @desc    Get latest interview
// @route   GET /api/interview/latest
// @access  Private
// ============================================
exports.getLatestInterview = async (req, res) => {
  try {
    const interview = await Interview.findOne({
      userId: req.user._id,
      status: 'completed',
    }).sort({ createdAt: -1 });
    
    if (!interview) {
      return res.json({
        success: true,
        message: 'No interviews found',
        data: null,
      });
    }
    
    res.json({
      success: true,
      data: interview,
    });
  } catch (error) {
    console.error('Error fetching latest interview:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while fetching latest interview',
    });
  }
};

// ============================================
// Helper: Extract keywords from answer
// ============================================
function extractKeywords(answer, interviewType) {
  if (!answer) return [];
  
  const hrKeywords = ['experience', 'team', 'challenge', 'learn', 'growth', 'goal', 'skill', 'project'];
  const techKeywords = ['code', 'algorithm', 'system', 'data', 'api', 'database', 'framework', 'tool'];
  
  const keywords = interviewType === 'HR' ? hrKeywords : techKeywords;
  const answerLower = answer.toLowerCase();
  
  return keywords.filter(keyword => answerLower.includes(keyword));
}

// ============================================
// Helper: Generate feedback for answer
// ============================================
function generateFeedback(answer, lengthScore, interviewType) {
  if (!answer || answer.trim().length === 0) {
    return 'No answer provided. Please answer all questions.';
  }
  
  if (lengthScore === 'too-short') {
    return 'Your answer is too short. Try to elaborate more with specific examples and details.';
  }
  
  if (lengthScore === 'detailed') {
    return 'Good detailed answer. Well structured with comprehensive information.';
  }
  
  return 'Good answer. Consider adding more specific examples to strengthen your response.';
}

// ============================================
// Helper: Update user interview skills
// ============================================
async function updateUserInterviewSkills(userId, interviewType, score) {
  try {
    const user = await User.findById(userId);
    
    if (!user) return;
    
    const skillName = interviewType === 'HR' ? 'Communication' : 'Technical Interviewing';
    const existingSkill = user.skills?.find(s => s.name === skillName);
    
    if (existingSkill) {
      // Update existing skill
      if (score >= 80) {
        existingSkill.level = 'Advanced';
      } else if (score >= 60) {
        existingSkill.level = 'Intermediate';
      } else {
        existingSkill.level = 'Beginner';
      }
      existingSkill.score = score;
    } else {
      // Add new skill
      if (!user.skills) user.skills = [];
      user.skills.push({
        name: skillName,
        level: score >= 80 ? 'Advanced' : score >= 60 ? 'Intermediate' : 'Beginner',
        score: score,
      });
    }
    
    await user.save();
  } catch (error) {
    console.error('Error updating user interview skills:', error);
    // Don't throw - this is a non-critical operation
  }
}

// Import mongoose for aggregation
const mongoose = require('mongoose');
