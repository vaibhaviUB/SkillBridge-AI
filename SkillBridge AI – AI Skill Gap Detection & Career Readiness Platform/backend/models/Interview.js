/**
 * Interview Model - Mock Interview Results Schema
 * Stores user mock interview attempts and feedback
 */

const mongoose = require('mongoose');

const interviewAnswerSchema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: [true, 'Question text is required'],
  },
  answer: {
    type: String,
    required: [true, 'Answer text is required'],
    maxlength: [2000, 'Answer cannot exceed 2000 characters'],
  },
  score: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  feedback: {
    type: String,
    maxlength: [500, 'Feedback cannot exceed 500 characters'],
  },
  keywords: [String],
  lengthScore: {
    type: String,
    enum: ['too-short', 'adequate', 'detailed'],
    default: 'adequate',
  },
  sentiment: {
    type: String,
    enum: ['positive', 'neutral', 'negative'],
    default: 'neutral',
  },
});

const interviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
    index: true,
  },
  interviewType: {
    type: String,
    enum: ['HR', 'Technical'],
    required: [true, 'Interview type is required'],
  },
  totalQuestions: {
    type: Number,
    required: true,
    default: 5,
  },
  answers: [interviewAnswerSchema],
  totalScore: {
    type: Number,
    required: true,
    min: 0,
    max: 50,
  },
  percentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  timeTaken: {
    type: Number, // in seconds
    default: 0,
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'abandoned'],
    default: 'completed',
  },
  overallFeedback: {
    communication: {
      score: Number,
      feedback: String,
    },
    technicalKnowledge: {
      score: Number,
      feedback: String,
    },
    confidence: {
      score: Number,
      feedback: String,
    },
    overall: String,
    strengths: [String],
    areasForImprovement: [String],
    recommendations: [String],
  },
  jobReadiness: {
    score: Number,
    level: {
      type: String,
      enum: ['Not Ready', 'Needs Practice', 'Moderately Ready', 'Ready', 'Excellent'],
    },
  },
  deviceInfo: {
    browser: String,
    os: String,
    ipAddress: String,
  },
}, {
  timestamps: true,
});

// Indexes for better query performance
interviewSchema.index({ userId: 1, createdAt: -1 });
interviewSchema.index({ interviewType: 1, userId: 1 });

// Calculate percentage and feedback before saving
interviewSchema.pre('save', function(next) {
  // Calculate percentage (max score is 50 = 5 questions * 10 points)
  this.percentage = Math.round((this.totalScore / 50) * 100);
  
  // Generate overall feedback based on score
  const score = this.percentage;
  
  if (score >= 80) {
    this.overallFeedback = {
      communication: {
        score: Math.min(10, Math.round(score / 10)),
        feedback: 'Excellent communication skills. Clear and articulate responses.',
      },
      technicalKnowledge: {
        score: Math.min(10, Math.round(score / 10)),
        feedback: 'Strong technical understanding demonstrated.',
      },
      confidence: {
        score: Math.min(10, Math.round(score / 10)),
        feedback: 'Showed great confidence throughout the interview.',
      },
      overall: 'Excellent! You are interview ready.',
      strengths: [
        'Clear communication',
        'Strong technical knowledge',
        'Confident delivery',
        'Well-structured answers',
      ],
      areasForImprovement: [],
      recommendations: [
        'Start applying for jobs',
        'Consider senior-level positions',
        'Practice behavioral questions',
      ],
    };
    this.jobReadiness = {
      score: score,
      level: 'Excellent',
    };
  } else if (score >= 60) {
    this.overallFeedback = {
      communication: {
        score: Math.min(10, Math.round(score / 12)),
        feedback: 'Good communication. Some answers could be clearer.',
      },
      technicalKnowledge: {
        score: Math.min(10, Math.round(score / 12)),
        feedback: 'Decent technical knowledge with room for improvement.',
      },
      confidence: {
        score: Math.min(10, Math.round(score / 12)),
        feedback: 'Moderate confidence. Work on delivery.',
      },
      overall: 'Good performance! Keep practicing.',
      strengths: [
        'Good understanding of basics',
        'Clear in some responses',
      ],
      areasForImprovement: [
        'Answer structure',
        'Technical depth',
        'Confidence level',
      ],
      recommendations: [
        'Practice more mock interviews',
        'Review technical concepts',
        'Work on answer framing',
      ],
    };
    this.jobReadiness = {
      score: score,
      level: 'Moderately Ready',
    };
  } else if (score >= 40) {
    this.overallFeedback = {
      communication: {
        score: Math.min(10, Math.round(score / 15)),
        feedback: 'Communication needs improvement.',
      },
      technicalKnowledge: {
        score: Math.min(10, Math.round(score / 15)),
        feedback: 'Technical knowledge gaps identified.',
      },
      confidence: {
        score: Math.min(10, Math.round(score / 15)),
        feedback: 'Work on building confidence.',
      },
      overall: 'Needs improvement. Focus on core skills.',
      strengths: [
        'Attempted all questions',
      ],
      areasForImprovement: [
        'Answer length and detail',
        'Technical knowledge',
        'Communication clarity',
        'Confidence',
      ],
      recommendations: [
        'Complete foundational courses',
        'Practice daily',
        'Take more mock interviews',
        'Review basic concepts',
      ],
    };
    this.jobReadiness = {
      score: score,
      level: 'Needs Practice',
    };
  } else {
    this.overallFeedback = {
      communication: {
        score: Math.min(10, Math.round(score / 20)),
        feedback: 'Significant improvement needed in communication.',
      },
      technicalKnowledge: {
        score: Math.min(10, Math.round(score / 20)),
        feedback: 'Major technical knowledge gaps.',
      },
      confidence: {
        score: Math.min(10, Math.round(score / 20)),
        feedback: 'Build confidence through practice.',
      },
      overall: 'Focus on building foundational skills.',
      strengths: [],
      areasForImprovement: [
        'All areas need attention',
        'Start with basics',
        'Practice consistently',
      ],
      recommendations: [
        'Complete beginner courses first',
        'Focus on fundamentals',
        'Practice daily',
        'Take assessment quizzes',
      ],
    };
    this.jobReadiness = {
      score: score,
      level: 'Not Ready',
    };
  }
  
  next();
});

// Static method to get user's interview history
interviewSchema.statics.getUserHistory = async function(userId, limit = 10) {
  return await this.find({ userId, status: 'completed' })
    .sort({ createdAt: -1 })
    .limit(limit)
    .populate('userId', 'name email');
};

// Static method to get user's best interview score
interviewSchema.statics.getUserBestScore = async function(userId) {
  const result = await this.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId), status: 'completed' } },
    { $sort: { percentage: -1 } },
    { $limit: 1 },
    { $project: { percentage: 1, totalScore: 1, interviewType: 1, createdAt: 1 } },
  ]);
  return result[0] || null;
};

// Static method to get interview stats by type
interviewSchema.statics.getUserStatsByType = async function(userId) {
  const result = await this.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId), status: 'completed' } },
    {
      $group: {
        _id: '$interviewType',
        count: { $sum: 1 },
        avgScore: { $avg: '$percentage' },
        bestScore: { $max: '$percentage' },
      },
    },
  ]);
  
  return {
    HR: result.find(r => r._id === 'HR') || { count: 0, avgScore: 0, bestScore: 0 },
    Technical: result.find(r => r._id === 'Technical') || { count: 0, avgScore: 0, bestScore: 0 },
  };
};

module.exports = mongoose.model('Interview', interviewSchema);
