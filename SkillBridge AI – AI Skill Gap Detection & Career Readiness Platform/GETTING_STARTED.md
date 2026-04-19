# 🎯 Getting Started with SkillBridge AI

Welcome to SkillBridge AI! This guide will help you get the application running in minutes.

---

## ⚡ Quick Start (3 Steps)

### 1️⃣ Install Dependencies
```bash
# Frontend
npm install

# Backend
cd backend && npm install && cd ..
```

### 2️⃣ Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### 3️⃣ Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend runs on: http://localhost:5000

**Terminal 2 - Frontend:**
```bash
npm run dev
```
Frontend runs on: http://localhost:5173

🎉 **Done!** Open http://localhost:5173 in your browser.

---

## 📱 First Steps in the App

### Create Your Account
1. Click "Get Started" on the homepage
2. Fill in the signup form:
   - Name: Your name
   - Email: Your email
   - Password: At least 6 characters
   - User Type: Student or Professional
3. Click "Create Account"

### Explore the Dashboard
After signup, you'll see:
- **Welcome Section** - Your personalized greeting
- **Feature Cards** - Learning, Assessment, Skill Gap, Interview Prep
- **Progress Overview** - Track your learning journey
- **Recent Activity** - See your latest actions

### Browse Courses
1. Click "Courses" in the navigation
2. Browse available AI courses
3. Click "Enroll Now" on any course
4. Switch to "My Courses" tab to see enrolled courses
5. Click "Continue Learning" to start

---

## 🗂️ Project Structure

```
skillbridge-ai/
├── src/                    # Frontend React code
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   └── App.tsx            # Main app with routing
├── backend/                # Backend Node.js code
│   ├── config/            # Database config
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Auth middleware
│   ├── models/            # User models
│   ├── routes/            # API routes
│   └── server.js          # Express server
├── .env                    # Frontend env variables
├── README.md              # Full documentation
└── GETTING_STARTED.md     # This file
```

---

## 🧪 Test the API

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Create User
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

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

---

## 🔧 Common Issues

### ❌ MongoDB Connection Error
**Problem:** Can't connect to MongoDB

**Solution:**
1. Check if MongoDB is running
2. Verify `MONGODB_URI` in `backend/.env`
3. Try MongoDB Atlas (cloud) instead

### ❌ Port Already in Use
**Problem:** Port 5000 or 5173 is already in use

**Solution:**
Change port in `backend/.env`:
```env
PORT=5001
```
Update frontend `.env`:
```env
VITE_API_URL=http://localhost:5001/api
```

### ❌ CORS Error
**Problem:** Frontend can't connect to backend

**Solution:**
Check `FRONTEND_URL` in `backend/.env`:
```env
FRONTEND_URL=http://localhost:5173
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [README.md](README.md) | Complete project documentation |
| [SETUP_GUIDE.md](SETUP_GUIDE.md) | Detailed setup instructions |
| [FEATURES_SUMMARY.md](FEATURES_SUMMARY.md) | All implemented features |
| [backend/API_TEST_GUIDE.md](backend/API_TEST_GUIDE.md) | API testing examples |

---

## 🎯 Available Routes

### Public Routes
- `/` - Landing page
- `/login` - Login page
- `/signup` - Signup page

### Protected Routes (Require Login)
- `/dashboard` - User dashboard
- `/courses` - Course browsing
- `/planner` - Learning planner
- `/progress` - Progress tracking

---

## 🛠️ Development Commands

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend
```bash
npm run dev          # Start with nodemon (auto-restart)
npm start            # Start production server
```

---

## 📦 Tech Stack

### Frontend
- React 18 + TypeScript
- Vite (Build tool)
- React Router v6
- Tailwind CSS
- Axios
- Lucide Icons

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt.js

---

## 🎨 Key Features

✅ **Authentication** - Secure login/signup with JWT
✅ **Dashboard** - Personalized user dashboard
✅ **Courses** - Browse, enroll, and track courses
✅ **Progress** - Visual progress tracking
✅ **Responsive** - Works on all devices
✅ **Modern UI** - Clean, professional design

---

## 📞 Need Help?

1. Check the [README.md](README.md) for detailed docs
2. Review [FEATURES_SUMMARY.md](FEATURES_SUMMARY.md) for all features
3. See [API_TEST_GUIDE.md](backend/API_TEST_GUIDE.md) for API testing
4. Open an issue on GitHub for bugs

---

## ✅ Verification Checklist

Before you start developing, verify:

- [ ] Frontend runs without errors
- [ ] Backend runs without errors
- [ ] MongoDB is connected
- [ ] Can create new account
- [ ] Can login successfully
- [ ] Dashboard loads properly
- [ ] Can navigate between pages
- [ ] No console errors

---

## 🚀 Next Steps

1. ✅ **Explore the App** - Try all features
2. ✅ **Read Documentation** - Understand the codebase
3. ✅ **Customize** - Add your own features
4. ✅ **Deploy** - Share with the world!

---

**Happy Coding! 🎉**

Built with ❤️ using MERN Stack

---

**Quick Links:**
- [Full Documentation](README.md)
- [API Testing Guide](backend/API_TEST_GUIDE.md)
- [Features Summary](FEATURES_SUMMARY.md)
