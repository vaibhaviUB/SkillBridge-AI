/**
 * User Model
 * MongoDB schema for user data
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema Definition
const userSchema = new mongoose.Schema(
  {
    // User's full name
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [50, 'Name cannot exceed 50 characters'],
    },

    // User's email address (unique)
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },

    // User's password (hashed)
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // Don't return password by default
    },

    // User type: student or professional
    userType: {
      type: String,
      enum: ['student', 'professional'],
      required: [true, 'User type is required'],
      default: 'student',
    },

    // User's profile picture URL
    profilePicture: {
      type: String,
      default: '',
    },

    // User's learning progress
    progress: {
      overallProgress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
      },
      completedModules: {
        type: Number,
        default: 0,
      },
      assessmentsCompleted: {
        type: Number,
        default: 0,
      },
      skillScore: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
      },
    },

    // User's enrolled learning paths
    enrolledPaths: [
      {
        pathId: String,
        pathName: String,
        enrolledAt: {
          type: Date,
          default: Date.now,
        },
        progress: {
          type: Number,
          default: 0,
        },
        completedModules: [String],
      },
    ],

    // User's skill assessments
    skills: {
      promptEngineering: { type: Number, default: 0 },
      aiTools: { type: Number, default: 0 },
      automation: { type: Number, default: 0 },
      mlFundamentals: { type: Number, default: 0 },
      interviewPrep: { type: Number, default: 0 },
    },

    // Account status
    isActive: {
      type: Boolean,
      default: true,
    },

    // Email verification status
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Automatically add createdAt and updatedAt fields
    timestamps: true,
  }
);

/**
 * Pre-save middleware to hash password before saving
 */
userSchema.pre('save', async function (next) {
  // Only hash password if it's modified
  if (!this.isModified('password')) {
    return next();
  }

  try {
    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

/**
 * Method to compare password with hashed password
 * @param {string} candidatePassword - Password to compare
 * @returns {Promise<boolean>} - True if passwords match
 */
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

/**
 * Method to get public user data (without sensitive info)
 * @returns {object} - Public user data
 */
userSchema.methods.getPublicProfile = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
