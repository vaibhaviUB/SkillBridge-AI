/**
 * Assessment Model - Quiz Results Schema
 * Stores user assessment attempts and scores
 */

const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: [true, 'Question text is required'],
  },
  selectedOption: {
    type: String,
    required: [true, 'Selected option is required'],
  },
  correctOption: {
    type: String,
    required: [true, 'Correct option is required'],
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
  timeSpent: {
    type: Number, // in seconds
    default: 0,
  },
});

const assessmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
    index: true,
  },
  assessmentType: {
    type: String,
    enum: ['AI Knowledge', 'Technical Skills', 'Prompt Engineering', 'General Aptitude'],
    default: 'AI Knowledge',
  },
  totalQuestions: {
    type: Number,
    required: [true, 'Total questions is required'],
    default: 10,
  },
  correctAnswers: {
    type: Number,
    required: true,
    default: 0,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  percentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  answers: [answerSchema],
  timeTaken: {
    type: Number, // in seconds
    default: 0,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'abandoned'],
    default: 'completed',
  },
  feedback: {
    overall: String,
    strengths: [String],
    weaknesses: [String],
    recommendations: [String],
  },
  skillBreakdown: {
    promptEngineering: {
      type: Number,
      min: 0,
      max: 100,
    },
    aiTools: {
      type: Number,
      min: 0,
      max: 100,
    },
    automation: {
      type: Number,
      min: 0,
      max: 100,
    },
    technicalKnowledge: {
      type: Number,
      min: 0,
      max: 100,
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
assessmentSchema.index({ userId: 1, createdAt: -1 });
assessmentSchema.index({ status: 1, userId: 1 });

// Calculate percentage before saving
assessmentSchema.pre('save', function(next) {
  if (this.totalQuestions > 0) {
    this.percentage = Math.round((this.correctAnswers / this.totalQuestions) * 100);
  }
  
  // Generate feedback based on score
  if (this.percentage >= 80) {
    this.feedback = {
      overall: 'Excellent! You are interview ready.',
      strengths: ['Strong AI knowledge', 'Good problem-solving skills'],
      weaknesses: [],
      recommendations: ['Consider advanced AI courses', 'Start applying for jobs'],
    };
  } else if (this.percentage >= 60) {
    this.feedback = {
      overall: 'Good progress! Keep practicing.',
      strengths: ['Decent understanding of AI concepts'],
      weaknesses: ['Some gaps in technical knowledge'],
      recommendations: ['Review weak areas', 'Take more practice quizzes'],
    };
  } else if (this.percentage >= 40) {
    this.feedback = {
      overall: 'Needs improvement. Focus on core skills.',
      strengths: ['Basic understanding present'],
      weaknesses: ['Significant knowledge gaps', 'Needs more practice'],
      recommendations: ['Complete foundational courses', 'Practice daily'],
    };
  } else {
    this.feedback = {
      overall: 'Focus on building core AI skills.',
      strengths: [],
      weaknesses: ['Major knowledge gaps', 'Needs foundational learning'],
      recommendations: ['Start with beginner courses', 'Focus on basics'],
    };
  }
  
  next();
});

// Static method to get user's assessment history
assessmentSchema.statics.getUserHistory = async function(userId, limit = 10) {
  return await this.find({ userId, status: 'completed' })
    .sort({ createdAt: -1 })
    .limit(limit)
    .populate('userId', 'name email');
};

// Static method to get user's best score
assessmentSchema.statics.getUserBestScore = async function(userId) {
  const result = await this.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId), status: 'completed' } },
    { $sort: { percentage: -1 } },
    { $limit: 1 },
    { $project: { percentage: 1, score: 1, createdAt: 1 } },
  ]);
  return result[0] || null;
};

// Static method to get user's average score
assessmentSchema.statics.getUserAverageScore = async function(userId) {
  const result = await this.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId), status: 'completed' } },
    { $group: { _id: null, avgScore: { $avg: '$percentage' }, count: { $sum: 1 } } },
  ]);
  return result[0] || { avgScore: 0, count: 0 };
};

module.exports = mongoose.model('Assessment', assessmentSchema);
