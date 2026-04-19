/**
 * SkillBridge AI Backend Server
 * Node.js + Express + MongoDB Server for Authentication & API
 * 
 * Main entry point for the backend server with full authentication system.
 */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/authRoutes');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ============================================
// DATABASE CONNECTION
// ============================================

/**
 * Connect to MongoDB database
 */
const connectDatabase = async () => {
  try {
    await connectDB();
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    // Don't exit in development - allow server to run without DB for testing
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
};

// ============================================
// MIDDLEWARE
// ============================================

// CORS middleware - Allow frontend to communicate with backend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// JSON parser middleware
app.use(express.json());

// URL encoded parser middleware
app.use(express.urlencoded({ extended: true }));

// Request logging middleware (development)
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });
}

// ============================================
// API ROUTES
// ============================================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'SkillBridge AI API is running',
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'SkillBridge AI API',
    version: '1.0.0',
    description: 'AI Skill Gap Detection & Career Readiness Platform',
    endpoints: {
      health: 'GET /api/health',
      auth: {
        signup: 'POST /api/auth/signup',
        login: 'POST /api/auth/login',
        me: 'GET /api/auth/me (protected)',
        updateProfile: 'PUT /api/auth/update-profile (protected)',
        logout: 'POST /api/auth/logout (protected)',
      },
    },
    documentation: 'https://github.com/skillbridge-ai/api-docs',
  });
});

// Authentication routes
app.use('/api/auth', authRoutes);

// ============================================
// ERROR HANDLING
// ============================================

// 404 Not Found middleware
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
});

// ============================================
// SERVER STARTUP
// ============================================

const startServer = async () => {
  // Connect to database
  await connectDatabase();

  // Start server
  app.listen(PORT, () => {
    console.log('');
    console.log('============================================');
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 API URL: http://localhost:${PORT}/api`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
    console.log('============================================');
    console.log('');
  });
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Rejection:', err);
  // Close server & exit process
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});

// Start the server
startServer();

module.exports = app;
