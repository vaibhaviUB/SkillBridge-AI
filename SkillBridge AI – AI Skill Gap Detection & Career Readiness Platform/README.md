# SkillBridge AI – AI Skill Gap Detection & Career Readiness Platform

![SkillBridge AI](https://img.shields.io/badge/SkillBridge-AI-violet)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-orange)

## 📖 Project Overview

**SkillBridge AI** is an AI-powered career readiness platform designed to bridge the gap between AI learning and industry requirements. With over 3 lakh tech professionals losing their jobs in 2024 due to lack of AI skills, this platform helps engineering students and working professionals acquire practical AI knowledge and prepare for technical interviews.

### Problem Statement

- Over 3 lakh tech professionals lost their jobs in 2024 due to lack of AI skills
- Engineering students struggle with technical interviews due to lack of practical AI knowledge
- College curricula remain outdated and focus on theoretical concepts
- Students don't know which AI skills are required by companies

### Solution

SkillBridge AI provides a three-step approach:

1. **LEARN** - Access structured AI learning paths covering prompt engineering, AI tools, automation workflows, and real-world applications
2. **ASSESS** - Take AI-based skill assessments, quizzes, and simulated HR interviews
3. **PREPARE** - Receive personalized skill-gap reports, improvement suggestions, and interview preparation guidance

## 🎯 Target Users

- Final year engineering students
- Fresh graduates
- Working professionals who want to upskill in AI

## 📦 Features (Task 1 & 2)

### Frontend
- ✅ Responsive Navigation Bar with logo and menu items
- ✅ Landing Page with hero section, features, and CTAs
- ✅ **Dashboard Page** - Main user interface after login with sidebar navigation
- ✅ Learning Path Planner with interactive course selection
- ✅ Progress Dashboard with skill tracking and analytics
- ✅ Login Page with email, password, and user type selection
- ✅ Signup Page with form validation and password strength indicator
- ✅ Footer with social links and quick navigation
- ✅ React Router for seamless page navigation
- ✅ Mobile-responsive design with hamburger menu
- ✅ **Dashboard Components** - Reusable Sidebar, WelcomeSection, DashboardCard, ProgressSection, RecentActivity

### Backend
- ✅ Express.js server setup
- ✅ MongoDB connection configuration
- ✅ User model with authentication fields
- ✅ API route placeholders for auth, users, skills, assessments
- ✅ CORS and middleware configuration
- ✅ Error handling middleware

### Dashboard Features (Task 2)
- ✅ **Sidebar Navigation** - Collapsible sidebar with Dashboard, Planner, Progress, Assessments, Interview Prep, and Logout
- ✅ **Welcome Section** - Dynamic greeting based on time, user name, and motivational message
- ✅ **Feature Cards** - 4 core action cards (Learning Path, Skill Assessment, Skill Gap Analysis, Interview Prep)
- ✅ **Progress Overview** - Stats cards showing courses completed, assessments taken, and readiness score with progress bar
- ✅ **Recent Activity** - Activity feed showing user's recent learning activities
- ✅ **Recommendations** - Personalized recommendations for next steps
- ✅ **Mobile Responsive** - Hamburger menu for mobile, full sidebar for desktop

## 🏗️ Project Structure

```
skillbridge-ai/
├── frontend/                    # React Frontend
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Navbar.tsx       # Navigation bar component
│   │   │   ├── Footer.tsx       # Footer component
│   │   │   └── dashboard/       # Dashboard-specific components
│   │   │       ├── Sidebar.tsx              # Dashboard sidebar navigation
│   │   │       ├── DashboardCard.tsx        # Feature card component
│   │   │       ├── WelcomeSection.tsx       # Welcome header component
│   │   │       ├── ProgressSection.tsx      # Progress stats component
│   │   │       └── RecentActivity.tsx       # Activity feed component
│   │   ├── pages/               # Page components
│   │   │   ├── Home.tsx         # Landing page
│   │   │   ├── Dashboard.tsx    # Main dashboard page (Task 2)
│   │   │   ├── Planner.tsx      # Learning path planner
│   │   │   ├── Progress.tsx     # Progress dashboard
│   │   │   ├── Login.tsx        # Login page
│   │   │   └── Signup.tsx       # Signup page
│   │   ├── utils/
│   │   │   └── cn.ts            # Class name utility
│   │   ├── App.tsx              # Main app with routing
│   │   ├── main.tsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── index.html               # HTML template
│   ├── package.json             # Frontend dependencies
│   ├── vite.config.ts           # Vite configuration
│   └── tsconfig.json            # TypeScript configuration
│
├── backend/                     # Node.js Backend
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   └── User.js              # User schema
│   ├── routes/                  # API routes (placeholders)
│   ├── .env.example             # Environment variables template
│   ├── package.json             # Backend dependencies
│   └── server.js                # Express server
│
└── README.md                    # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Frontend Setup

1. **Navigate to the project root:**
   ```bash
   cd skillbridge-ai
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Backend Setup

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Update `.env` with your configuration:**
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/skillbridge-ai
   JWT_SECRET=your-secret-key
   ```

5. **Start the backend server:**
   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

6. **API will be available at:**
   ```
   http://localhost:5000/api
   ```

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero section and features |
| `/planner` | Planner | AI learning path selection and planning |
| `/progress` | Progress | User progress dashboard and skill tracking |
| `/login` | Login | User authentication page |
| `/signup` | Signup | User registration page |

## 🎨 Design Guidelines

### Color Scheme
- **Primary:** Violet (#7C3AED) to Indigo (#4F46E5)
- **Secondary:** Blue, Cyan, Emerald accents
- **Background:** White, Gray-50, Violet-50
- **Text:** Gray-900 (headings), Gray-600 (body)

### Typography
- **Headings:** Bold, tracking-tight
- **Body:** Regular weight, relaxed line-height
- **Buttons:** Semibold, uppercase optional

### Components
- **Buttons:** Rounded-xl, gradient backgrounds, shadow effects
- **Cards:** Rounded-2xl, subtle borders, hover animations
- **Inputs:** Rounded-xl, focus rings, error states
- **Navbar:** Fixed position, backdrop blur, mobile responsive

## 🔌 API Endpoints (Planned)

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `DELETE /api/users/:id` - Delete user account

### Skills & Assessments
- `GET /api/skills` - Get available skills
- `POST /api/skills/assess` - Submit skill assessment
- `GET /api/assessments` - Get user assessments
- `POST /api/assessments` - Create new assessment

### Learning Paths
- `GET /api/paths` - Get all learning paths
- `GET /api/paths/:id` - Get specific learning path
- `POST /api/paths/enroll` - Enroll in a learning path

## 🤖 AI Integration (Future)

The platform will integrate with **Google Gemini AI** for:
- Personalized learning recommendations
- Skill gap analysis
- Interview question generation
- Progress insights and suggestions

### Gemini API Setup (Optional)
```javascript
// Example usage in backend
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const result = await model.generateContent('Generate AI interview questions');
```

## 📊 Business Model

- **Course Subscriptions** - Monthly/annual plans for students
- **Placement Fees** - Commission from hiring companies
- **Enterprise Training** - Corporate AI training programs

## 🎯 Market Opportunity

- 15 lakh engineering graduates per year in India
- AI upskilling market worth $6 billion by 2027
- Growing demand for AI-skilled professionals

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS 4** - Styling framework
- **TypeScript** - Type safety
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📝 Form Validation

### Login Form
- Email format validation
- Password required (min 6 characters)
- User type selection (Student/Professional)

### Signup Form
- Name required (min 2 characters)
- Email format validation
- Password strength indicator
- Password confirmation match
- User type selection
- Terms acceptance

## 🔐 Security Features (Planned)

- Password hashing with bcrypt
- JWT-based authentication
- CORS protection
- Input validation and sanitization
- Rate limiting
- HTTPS enforcement

## 📄 License

MIT License - feel free to use this project for learning and development.

## 👥 Contributors

Built with ❤️ for aspiring AI professionals.

## 📞 Contact

For questions or contributions, please reach out through the project repository.

---

**Note:** This is Task 1 of the SkillBridge AI project. Future tasks will include:
- Task 2: Complete authentication system with JWT
- Task 3: AI skill assessment implementation
- Task 4: Progress tracking and analytics
- Task 5: Gemini AI integration for personalized recommendations
- Task 6: Admin dashboard and content management
