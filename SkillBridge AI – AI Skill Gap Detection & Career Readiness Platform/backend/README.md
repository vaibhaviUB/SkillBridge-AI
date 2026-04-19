# SkillBridge AI Backend

Complete backend server for SkillBridge AI - AI Skill Gap Detection & Career Readiness Platform.

## 🚀 Features

- **User Authentication** - JWT-based secure authentication
- **Course Management** - Full CRUD operations for learning paths
- **Assessment System** - Quiz submission and history tracking
- **Mock Interviews** - Interview practice with AI feedback
- **Skill Tracking** - User skill development monitoring
- **Progress Analytics** - Detailed performance statistics

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js                 # Database connection
├── models/
│   ├── User.js               # User schema
│   ├── Course.js             # Course/Learning path schema
│   ├── Assessment.js         # Assessment/Quiz schema
│   └── Interview.js          # Mock interview schema
├── controllers/
│   ├── authController.js     # Authentication logic
│   ├── courseController.js   # Course operations
│   ├── assessmentController.js # Assessment operations
│   └── interviewController.js # Interview operations
├── routes/
│   ├── authRoutes.js         # Auth endpoints
│   ├── courseRoutes.js       # Course endpoints
│   ├── assessmentRoutes.js   # Assessment endpoints
│   └── interviewRoutes.js    # Interview endpoints
├── middleware/
│   └── authMiddleware.js     # JWT verification
├── server.js                 # Main server file
├── .env                      # Environment variables
├── .env.example              # Environment template
└── package.json              # Dependencies
```

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcryptjs
- **Validation:** express-validator

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup Steps

1. **Navigate to backend folder:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create .env file:**
```bash
cp .env.example .env
```

4. **Update .env with your values:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/skillbridge_ai
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
```

5. **Start the server:**

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/update-profile` - Update profile (protected)
- `POST /api/auth/logout` - Logout (protected)

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (admin)
- `PUT /api/courses/:id` - Update course (admin)
- `DELETE /api/courses/:id` - Delete course (admin)
- `POST /api/courses/:id/enroll` - Enroll in course (protected)
- `GET /api/courses/enrolled` - Get enrolled courses (protected)
- `PUT /api/courses/:id/progress` - Update progress (protected)

### Assessments
- `POST /api/assessment` - Submit assessment (protected)
- `GET /api/assessment/history` - Get assessment history (protected)
- `GET /api/assessment/stats` - Get assessment stats (protected)
- `GET /api/assessment/latest` - Get latest assessment (protected)
- `GET /api/assessment/:id` - Get assessment by ID (protected)

### Interviews
- `POST /api/interview` - Submit interview (protected)
- `GET /api/interview/history` - Get interview history (protected)
- `GET /api/interview/stats` - Get interview stats (protected)
- `GET /api/interview/latest` - Get latest interview (protected)
- `GET /api/interview/:id` - Get interview by ID (protected)

### Health Check
- `GET /api/health` - Check API health
- `GET /api` - API information

## 🔐 Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Getting a Token

1. Register or login via `/api/auth/signup` or `/api/auth/login`
2. Receive token in response
3. Include token in subsequent requests

## 📊 Data Models

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  userType: String (Student/Professional),
  skills: [{ name, level, score }],
  enrolledCourses: [{ course, progress, modulesCompleted }],
  createdAt: Date
}
```

### Course
```javascript
{
  title: String,
  description: String,
  category: String,
  level: String (Beginner/Intermediate/Advanced),
  duration: String,
  modules: [{ title, content, contentType, duration }],
  instructor: String,
  enrolledStudents: Number,
  rating: Number,
  isPublished: Boolean
}
```

### Assessment
```javascript
{
  userId: ObjectId (ref: User),
  assessmentType: String,
  totalQuestions: Number,
  correctAnswers: Number,
  score: Number,
  percentage: Number,
  answers: [{ question, selectedOption, correctOption, isCorrect }],
  timeTaken: Number,
  feedback: { overall, strengths, weaknesses, recommendations },
  skillBreakdown: { promptEngineering, aiTools, automation, technicalKnowledge }
}
```

### Interview
```javascript
{
  userId: ObjectId (ref: User),
  interviewType: String (HR/Technical),
  totalQuestions: Number,
  answers: [{ question, answer, score, feedback }],
  totalScore: Number,
  percentage: Number,
  overallFeedback: { communication, technicalKnowledge, confidence, overall },
  jobReadiness: { score, level }
}
```

## 🧪 Testing

### Test Health Check
```bash
curl http://localhost:5000/api/health
```

### Test Registration
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "userType": "Student"
  }'
```

### Test Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Test Get Courses
```bash
curl http://localhost:5000/api/courses
```

## 🔒 Security Features

- **Password Hashing** - bcrypt with 10 salt rounds
- **JWT Authentication** - Secure token-based auth
- **Token Expiration** - 7-day token validity
- **Protected Routes** - Middleware verification
- **Input Validation** - Mongoose schema validation
- **CORS Configuration** - Restricted origins
- **Environment Variables** - Secret management

## 📈 Error Handling

All errors return consistent JSON format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

### Common Error Codes
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## 🌍 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment | development |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/skillbridge_ai |
| `JWT_SECRET` | JWT signing secret | (required) |
| `JWT_EXPIRE` | Token expiration | 7d |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:5173 |

## 📝 Development

### Run in Development Mode
```bash
npm run dev
```

This uses nodemon for auto-restart on file changes.

### Run in Production Mode
```bash
npm start
```

## 📚 Additional Documentation

- [API Documentation](./API_DOCUMENTATION.md) - Complete API reference
- [API Test Guide](./API_TEST_GUIDE.md) - Testing examples

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For support, email: support@skillbridge-ai.com

---

**SkillBridge AI Backend** - Empowering careers through AI skill development
