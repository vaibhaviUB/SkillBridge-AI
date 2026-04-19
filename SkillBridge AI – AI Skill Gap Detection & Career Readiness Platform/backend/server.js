/**
 * SkillBridge AI Backend Server
 * Node.js + Express server for API endpoints
 * 
 * This is the main entry point for the backend server.
 * Currently set up with basic structure for future API development.
 */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes (placeholders for future implementation)
// const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/users');
// const skillRoutes = require('./routes/skills');
// const assessmentRoutes = require('./routes/assessments');

// Import database configuration
// const { connectDB } = require('./config/database');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ============================================
// MIDDLEWARE
// ============================================

// CORS middleware - Allow frontend to communicate with backend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
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
// DATABASE CONNECTION
// ============================================

/**
 * Connect to MongoDB database
 * Uncomment when MongoDB is configured
 */
// const connectDatabase = async () => {
//   try {
//     await connectDB();
//     console.log('✅ MongoDB connected successfully');
//   } catch (error) {
//     console.error('❌ MongoDB connection failed:', error.message);
//     process.exit(1);
//   }
// };

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
      auth: 'POST /api/auth/login, POST /api/auth/signup',
      users: 'GET /api/users/:id, PUT /api/users/:id',
      skills: 'GET /api/skills, POST /api/skills/assess',
      assessments: 'GET /api/assessments, POST /api/assessments',
    },
  });
});

// ============================================
// AUTHENTICATION ROUTES (Placeholders)
// ============================================

/**
 * User Login
 * POST /api/auth/login
 * 
 * Expected request body:
 * {
 *   email: string,
 *   password: string,
 *   userType: 'student' | 'professional'
 * }
 */
app.post('/api/auth/login', (req, res) => {
  // TODO: Implement login logic with MongoDB
  const { email, password, userType } = req.body;
  
  // Placeholder response
  res.json({
    success: true,
    message: 'Login endpoint - To be implemented',
    data: { email, userType },
  });
});

/**
 * User Signup
 * POST /api/auth/signup
 * 
 * Expected request body:
 * {
 *   name: string,
 *   email: string,
 *   password: string,
 *   userType: 'student' | 'professional'
 * }
 */
app.post('/api/auth/signup', (req, res) => {
  // TODO: Implement signup logic with MongoDB
  const { name, email, password, userType } = req.body;
  
  // Placeholder response
  res.json({
    success: true,
    message: 'Signup endpoint - To be implemented',
    data: { name, email, userType },
  });
});

// ============================================
// ERROR HANDLING
// ============================================

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// ============================================
// SERVER STARTUP
// ============================================

app.listen(PORT, () => {
  console.log('');
  console.log('========================================');
  console.log('  🚀 SkillBridge AI Backend Server');
  console.log('========================================');
  console.log(`  📍 Server running on port ${PORT}`);
  console.log(`  🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`  🔗 API: http://localhost:${PORT}/api`);
  console.log('========================================');
  console.log('');
  
  // Connect to database (uncomment when configured)
  // connectDatabase();
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Rejection:', err);
  // Close server & exit process
  // server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});
