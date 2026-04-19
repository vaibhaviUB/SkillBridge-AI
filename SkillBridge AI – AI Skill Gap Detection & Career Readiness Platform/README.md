# SkillBridge AI 🚀

**AI Skill Gap Detection & Career Readiness Platform**

A comprehensive MERN stack application designed to bridge the gap between AI learning and industry requirements. SkillBridge AI helps engineering students and working professionals master practical AI skills, assess their knowledge, and prepare for technical interviews with AI-powered guidance.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

### Problem Statement
Over 3 lakh tech professionals lost their jobs in 2024 due to lack of AI skills. Engineering students and working professionals struggle in technical interviews due to outdated college curricula and lack of practical AI tool knowledge.

### Solution
SkillBridge AI is an AI-powered career readiness platform that:
1. **LEARN** - Access structured AI learning paths
2. **ASSESS** - Take AI-based skill assessments and mock interviews
3. **PREPARE** - Receive skill-gap reports and interview guidance

---

## ✨ Features

### Frontend Features
- ✅ **Landing Page** - Modern, responsive homepage with CTAs
- ✅ **Authentication** - Login/Signup with validation
- ✅ **Dashboard** - Personalized user dashboard with progress tracking
- ✅ **Course Management** - Browse, enroll, and track AI courses
- ✅ **Learning Planner** - Structured learning paths
- ✅ **Progress Tracking** - Visual progress bars and statistics
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Modern UI** - Clean, professional design with Tailwind CSS

### Backend Features
- ✅ **User Authentication** - JWT-based secure authentication
- ✅ **Password Security** - Bcrypt password hashing
- ✅ **User Management** - CRUD operations for user profiles
- ✅ **Protected Routes** - Middleware for route protection
- ✅ **Error Handling** - Comprehensive error management
- ✅ **CORS Configuration** - Secure cross-origin requests
- ✅ **MongoDB Integration** - Mongoose ODM for database operations

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with TypeScript
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Lucide React** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt.js** - Password hashing
- **Dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

---

## 📁 Project Structure

```
skillbridge-ai/
├── public/                 # Static assets
├── src/                    # Frontend source code
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── dashboard/      # Dashboard components
│   │       ├── Sidebar.tsx
│   │       ├── DashboardCard.tsx
│   │       ├── WelcomeSection.tsx
│   │       ├── ProgressSection.tsx
│   │       └── RecentActivity.tsx
│   │   └── courses/        # Course components
│   │       ├── CourseCard.tsx
│   │       ├── EnrolledCourseCard.tsx
│   │       ├── ModuleList.tsx
│   │       ├── ProgressBar.tsx
│   │       └── CourseTabs.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Landing page
│   │   ├── Login.tsx       # Login page
│   │   ├── Signup.tsx      # Signup page
│   │   ├── Dashboard.tsx   # User dashboard
│   │   ├── Planner.tsx     # Learning planner
│   │   ├── Progress.tsx    # Progress tracking
│   │   └── Courses.tsx     # Course management
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── backend/                # Backend source code
│   ├── config/             # Configuration files
│   │   └── db.js           # Database connection
│   ├── controllers/        # Route controllers
│   │   └── authController.js
│   ├── middleware/         # Custom middleware
│   │   └── authMiddleware.js
│   ├── models/             # Mongoose models
│   │   └── User.js
│   ├── routes/             # API routes
│   │   └── authRoutes.js
│   ├── server.js           # Express server entry
│   ├── .env                # Environment variables
│   └── package.json        # Backend dependencies
├── .env                    # Frontend environment variables
├── .gitignore              # Git ignore rules
├── index.html              # HTML template
├── package.json            # Frontend dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 📦 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn**

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/skillbridge-ai.git
cd skillbridge-ai
```

### Step 2: Install Frontend Dependencies
```bash
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### Step 4: Configure Environment Variables

#### Frontend (.env)
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
```

#### Backend (backend/.env)
Create a `backend/.env` file:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/skillbridge_ai

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### Step 5: Set Up MongoDB

#### Option A: Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

#### Option B: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get connection string
4. Update `MONGODB_URI` in `backend/.env`

---

## 🚀 Running the Application

### Start Backend Server
```bash
cd backend
npm run dev
```
Backend will run on: `http://localhost:5000`

### Start Frontend Development Server
```bash
# From root directory
npm run dev
```
Frontend will run on: `http://localhost:5173`

### Access the Application
Open your browser and navigate to: `http://localhost:5173`

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### 1. Register User
```http
POST /api/auth/signup
Content-Type: application/json

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
  "data": {
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "userType": "Student"
    },
    "token": "jwt_token_here"
  }
}
```

#### 2. Login User
```http
POST /api/auth/login
Content-Type: application/json

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
  "data": {
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "userType": "Student"
    },
    "token": "jwt_token_here"
  }
}
```

#### 3. Get Current User (Protected)
```http
GET /api/auth/me
Authorization: Bearer <token>
```

#### 4. Update Profile (Protected)
```http
PUT /api/auth/update-profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "userType": "Professional"
}
```

#### 5. Logout (Protected)
```http
POST /api/auth/logout
Authorization: Bearer <token>
```

### Health Check
```http
GET /api/health
```

---

## 🔐 Environment Variables

### Frontend (.env)
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000/api` |

### Backend (backend/.env)
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/skillbridge_ai` |
| `JWT_SECRET` | JWT secret key | *(required)* |
| `JWT_EXPIRE` | Token expiration | `7d` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |

---

## 🧪 Testing

### Test API Endpoints with cURL

#### Test Health Check
```bash
curl http://localhost:5000/api/health
```

#### Test Signup
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123","userType":"Student"}'
```

#### Test Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Test with Postman
1. Import the API endpoints
2. Set up environment variables
3. Test authentication flow

---

## 🎨 UI/UX Features

### Design Principles
- **Clean & Modern** - Professional SaaS-style interface
- **Responsive** - Mobile-first design approach
- **Accessible** - WCAG compliant color contrast
- **Consistent** - Unified color scheme and typography

### Color Palette
- **Primary**: Violet (#7C3AED) to Indigo (#4F46E5)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Neutral**: Gray scale

---

## 📱 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero section |
| Login | `/login` | User authentication |
| Signup | `/signup` | User registration |
| Dashboard | `/dashboard` | User dashboard with overview |
| Courses | `/courses` | Browse and enroll in courses |
| Planner | `/planner` | Learning path planner |
| Progress | `/progress` | Track learning progress |

---

## 🔒 Security Features

- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT token-based authentication
- ✅ Protected routes with middleware
- ✅ Input validation on frontend and backend
- ✅ CORS configuration for cross-origin requests
- ✅ Environment variables for sensitive data
- ✅ No password storage in plain text

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Team

- **Project Lead**: SkillBridge AI Team
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB

---

## 📞 Support

For support, email support@skillbridgeai.com or open an issue in the repository.

---

## 🙏 Acknowledgments

- React Team for the amazing library
- Tailwind CSS for the utility-first framework
- MongoDB for the database solution
- All contributors to this project

---

**Built with ❤️ for bridging the AI skill gap**
