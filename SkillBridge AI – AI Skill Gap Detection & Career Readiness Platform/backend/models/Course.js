/**
 * Course Model - Learning Paths Schema
 * Stores all AI learning courses and their modules
 */

const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Module title is required'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Module content is required'],
  },
  contentType: {
    type: String,
    enum: ['text', 'video', 'quiz', 'project'],
    default: 'text',
  },
  duration: {
    type: String,
    default: '30 mins',
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    default: 0,
  },
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters'],
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters'],
  },
  category: {
    type: String,
    enum: ['Prompt Engineering', 'AI Tools', 'Automation', 'Machine Learning', 'Interview Prep', 'Career Development'],
    required: [true, 'Course category is required'],
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: [true, 'Course level is required'],
    default: 'Beginner',
  },
  duration: {
    type: String,
    required: [true, 'Course duration is required'],
    default: '2 hours',
  },
  modules: [moduleSchema],
  instructor: {
    type: String,
    default: 'SkillBridge AI Team',
  },
  thumbnail: {
    type: String,
    default: '/images/course-default.png',
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
  enrolledStudents: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  reviews: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: Number,
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  tags: [String],
  prerequisites: [String],
  learningOutcomes: [String],
}, {
  timestamps: true, // Adds createdAt and updatedAt
});

// Index for better query performance
courseSchema.index({ category: 1, level: 1 });
courseSchema.index({ title: 'text', description: 'text' });

// Virtual for total modules
courseSchema.virtual('totalModules').get(function() {
  return this.modules.length;
});

// Method to check if course is complete for a user
courseSchema.methods.getProgress = function(userEnrollments) {
  const enrollment = userEnrollments.find(e => e.courseId.toString() === this._id.toString());
  if (!enrollment) return 0;
  
  const completedModules = enrollment.modulesCompleted || 0;
  const totalModules = this.modules.length;
  
  return totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
};

module.exports = mongoose.model('Course', courseSchema);
