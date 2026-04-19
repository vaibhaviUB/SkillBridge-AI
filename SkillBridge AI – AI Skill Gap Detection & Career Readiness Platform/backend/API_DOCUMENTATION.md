# SkillBridge AI API Documentation

Complete API documentation for the SkillBridge AI backend.

## Base URL
```
http://localhost:5000/api
```

## Authentication
Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

---

## 🔐 Authentication Endpoints

### POST /api/auth/signup
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "userType": "Student"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "userType": "Student"
  }
}
```

### POST /api/auth/login
Login to existing account.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "userType": "Student"
  }
}
```

### GET /api/auth/me
Get current user profile (Protected).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "userType": "Student",
    "skills": [...],
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

## 📚 Course Endpoints

### GET /api/courses
Get all courses with optional filtering.

**Query Parameters:**
- `category` - Filter by category (Prompt Engineering, AI Tools, etc.)
- `level` - Filter by level (Beginner, Intermediate, Advanced)
- `search` - Search by title/description
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

**Example:**
```
GET /api/courses?category=AI+Tools&level=Beginner&page=1&limit=10
```

**Response:**
```json
{
  "success": true,
  "count": 10,
  "total": 50,
  "page": 1,
  "pages": 5,
  "data": [
    {
      "_id": "...",
      "title": "Prompt Engineering Basics",
      "description": "Learn the fundamentals...",
      "category": "Prompt Engineering",
      "level": "Beginner",
      "duration": "2 hours",
      "modules": [...],
      "enrolledStudents": 150,
      "rating": 4.5
    }
  ]
}
```

### GET /api/courses/:id
Get single course by ID.

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "Prompt Engineering Basics",
    "description": "...",
    "modules": [...]
  }
}
```

### POST /api/courses/:id/enroll
Enroll in a course (Protected).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully enrolled in course",
  "data": {
    "courseId": "...",
    "courseTitle": "Prompt Engineering Basics"
  }
}
```

### GET /api/courses/enrolled
Get user's enrolled courses (Protected).

**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "...",
      "course": {...},
      "progress": 45,
      "modulesCompleted": 5,
      "enrolledAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### PUT /api/courses/:id/progress
Update course progress (Protected).

**Request Body:**
```json
{
  "moduleId": "module123",
  "completed": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Progress updated successfully",
  "data": {
    "progress": 60,
    "modulesCompleted": 6
  }
}
```

---

## 📝 Assessment Endpoints

### POST /api/assessment
Submit assessment results (Protected).

**Request Body:**
```json
{
  "assessmentType": "AI Knowledge",
  "totalQuestions": 10,
  "answers": [
    {
      "questionId": "q1",
      "question": "What is Prompt Engineering?",
      "selectedOption": "A",
      "correctOption": "A",
      "timeSpent": 30
    }
  ],
  "timeTaken": 900,
  "startTime": "2024-01-01T10:00:00.000Z",
  "endTime": "2024-01-01T10:15:00.000Z"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Assessment submitted successfully",
  "data": {
    "assessmentId": "...",
    "score": 80,
    "percentage": 80,
    "correctAnswers": 8,
    "totalQuestions": 10,
    "feedback": {
      "overall": "Excellent! You are interview ready.",
      "strengths": ["Strong AI knowledge"],
      "weaknesses": [],
      "recommendations": ["Consider advanced AI courses"]
    },
    "skillBreakdown": {
      "promptEngineering": 85,
      "aiTools": 80,
      "automation": 75,
      "technicalKnowledge": 80
    }
  }
}
```

### GET /api/assessment/history
Get user's assessment history (Protected).

**Query Parameters:**
- `limit` - Number of results (default: 10)
- `page` - Page number (default: 1)

**Response:**
```json
{
  "success": true,
  "count": 10,
  "total": 25,
  "page": 1,
  "pages": 3,
  "data": [
    {
      "_id": "...",
      "assessmentType": "AI Knowledge",
      "score": 80,
      "percentage": 80,
      "totalQuestions": 10,
      "correctAnswers": 8,
      "createdAt": "2024-01-01T10:15:00.000Z"
    }
  ]
}
```

### GET /api/assessment/stats
Get assessment statistics (Protected).

**Response:**
```json
{
  "success": true,
  "data": {
    "totalAttempts": 25,
    "avgScore": 75.5,
    "bestScore": 95,
    "worstScore": 45,
    "totalTimeSpent": 22500,
    "recentTrend": [
      { "score": 80, "date": "2024-01-01T10:15:00.000Z" },
      { "score": 75, "date": "2024-01-02T10:15:00.000Z" }
    ]
  }
}
```

### GET /api/assessment/latest
Get latest assessment (Protected).

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "assessmentType": "AI Knowledge",
    "score": 80,
    "percentage": 80,
    ...
  }
}
```

---

## 🎤 Interview Endpoints

### POST /api/interview
Submit mock interview (Protected).

**Request Body:**
```json
{
  "interviewType": "Technical",
  "totalQuestions": 5,
  "answers": [
    {
      "questionId": "q1",
      "question": "What is Prompt Engineering?",
      "answer": "Prompt engineering is the process of designing and optimizing prompts..."
    }
  ],
  "timeTaken": 600,
  "startTime": "2024-01-01T10:00:00.000Z",
  "endTime": "2024-01-01T10:10:00.000Z"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Interview submitted successfully",
  "data": {
    "interviewId": "...",
    "totalScore": 42,
    "percentage": 84,
    "overallFeedback": {
      "communication": {
        "score": 9,
        "feedback": "Excellent communication skills."
      },
      "technicalKnowledge": {
        "score": 8,
        "feedback": "Strong technical understanding."
      },
      "confidence": {
        "score": 8,
        "feedback": "Showed great confidence."
      },
      "overall": "Excellent! You are interview ready.",
      "strengths": ["Clear communication", "Strong technical knowledge"],
      "areasForImprovement": [],
      "recommendations": ["Start applying for jobs"]
    },
    "jobReadiness": {
      "score": 84,
      "level": "Excellent"
    }
  }
}
```

### GET /api/interview/history
Get interview history (Protected).

**Query Parameters:**
- `limit` - Number of results (default: 10)
- `page` - Page number (default: 1)
- `type` - Filter by type (HR or Technical)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "total": 10,
  "page": 1,
  "pages": 2,
  "data": [
    {
      "_id": "...",
      "interviewType": "Technical",
      "totalScore": 42,
      "percentage": 84,
      "createdAt": "2024-01-01T10:10:00.000Z"
    }
  ]
}
```

### GET /api/interview/stats
Get interview statistics (Protected).

**Response:**
```json
{
  "success": true,
  "data": {
    "overall": {
      "totalInterviews": 10,
      "avgScore": 78.5,
      "bestScore": 92
    },
    "byType": {
      "HR": {
        "count": 5,
        "avgScore": 80,
        "bestScore": 90
      },
      "Technical": {
        "count": 5,
        "avgScore": 77,
        "bestScore": 92
      }
    }
  }
}
```

---

## 🏥 Health Check

### GET /api/health
Check API health status.

**Response:**
```json
{
  "status": "OK",
  "message": "SkillBridge AI API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### GET /api
Get API information and all endpoints.

**Response:**
```json
{
  "name": "SkillBridge AI API",
  "version": "1.0.0",
  "description": "AI Skill Gap Detection & Career Readiness Platform",
  "endpoints": { ... }
}
```

---

## Error Responses

All errors follow this format:

```json
{
  "success": false,
  "error": "Error message here"
}
```

### Common Error Codes
- `400` - Bad Request (invalid input)
- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

---

## Rate Limiting
Currently no rate limiting is implemented. This will be added in future versions.

---

## CORS
CORS is enabled for the frontend URL specified in `.env` (default: http://localhost:5173).

---

## Testing with cURL

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123","userType":"Student"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Get Courses
```bash
curl http://localhost:5000/api/courses
```

### Submit Assessment (with token)
```bash
curl -X POST http://localhost:5000/api/assessment \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"assessmentType":"AI Knowledge","totalQuestions":10,"answers":[...]}'
```

---

## Support
For API support, contact: support@skillbridge-ai.com
