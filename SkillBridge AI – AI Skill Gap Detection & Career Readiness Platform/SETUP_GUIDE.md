# 🚀 Quick Start Guide - SkillBridge AI

Get your SkillBridge AI application up and running in 5 minutes!

---

## ⚡ Quick Setup (5 Minutes)

### Step 1: Install Dependencies (2 minutes)

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Step 2: Configure Environment (1 minute)

#### Frontend (.env)
The `.env` file is already created with default values:
```env
VITE_API_URL=http://localhost:5000/api
```

#### Backend (backend/.env)
The `backend/.env` file is already created. **Update the MongoDB URI**:

**For Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/skillbridge_ai
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/skillbridge_ai
```

### Step 3: Start MongoDB (if using local)

**Windows:**
```bash
net start MongoDB
```

**macOS:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### Step 4: Start Backend Server (30 seconds)

Open a new terminal:
```bash
cd backend
npm run dev
```

You should see:
```
✅ MongoDB Connected: localhost
============================================
🚀 Server running on port 5000
📡 Environment: development
🔗 API URL: http://localhost:5000/api
🏥 Health Check: http://localhost:5000/api/health
============================================
```

### Step 5: Start Frontend (30 seconds)

Open another terminal:
```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 6: Open in Browser

Navigate to: **http://localhost:5173**

🎉 **You're done!** The application is now running.

---

## 🧪 Test the Application

### 1. Create an Account
1. Click "Get Started" or navigate to `/signup`
2. Fill in the form:
   - Name: `Test User`
   - Email: `test@example.com`
   - Password: `password123`
   - User Type: `Student`
3. Click "Create Account"

### 2. Login
1. Navigate to `/login`
2. Enter credentials:
   - Email: `test@example.com`
   - Password: `password123`
3. Click "Sign In"

### 3. Explore Dashboard
After login, you'll be redirected to the dashboard where you can:
- View your profile
- Browse courses
- Track progress
- Access learning planner

---

## 🔧 Troubleshooting

### ❌ Error: MongoDB Connection Failed

**Solution 1: Check if MongoDB is running**
```bash
# Windows
net start MongoDB

# macOS
brew services list

# Linux
sudo systemctl status mongod
```

**Solution 2: Use MongoDB Atlas**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Update `MONGODB_URI` in `backend/.env`

### ❌ Error: Port 5000 Already in Use

**Solution:** Change the port in `backend/.env`:
```env
PORT=5001
```
Then update `VITE_API_URL` in `.env`:
```env
VITE_API_URL=http://localhost:5001/api
```

### ❌ Error: Cannot Connect to Backend

**Solution:** Check CORS configuration in `backend/.env`:
```env
FRONTEND_URL=http://localhost:5173
```

### ❌ Error: npm install fails

**Solution:** Clear npm cache and try again:
```bash
npm cache clean --force
npm install
```

---

## 📱 Test API Endpoints

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Create User via API
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "API Test User",
    "email": "api@example.com",
    "password": "password123",
    "userType": "Student"
  }'
```

### Login via API
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "api@example.com",
    "password": "password123"
  }'
```

---

## 📂 Project Structure Overview

```
skillbridge-ai/
├── src/              # Frontend React code
├── backend/          # Backend Node.js code
├── public/           # Static assets
├── .env              # Frontend env variables
├── package.json      # Frontend dependencies
└── README.md         # Full documentation
```

---

## 🎯 Next Steps

After getting the application running:

1. **Explore the Dashboard** - Check out all features
2. **Browse Courses** - See available AI courses
3. **Test Authentication** - Try login/logout flow
4. **Read Full Documentation** - See README.md
5. **Start Developing** - Add new features!

---

## 📞 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review [API_TEST_GUIDE.md](backend/API_TEST_GUIDE.md) for API testing
- Open an issue on GitHub for bugs
- Contact support@skillbridgeai.com

---

## ✅ Verification Checklist

Before you're done, verify:

- [ ] Frontend runs on http://localhost:5173
- [ ] Backend runs on http://localhost:5000
- [ ] MongoDB is connected (check backend console)
- [ ] Can create new account
- [ ] Can login with credentials
- [ ] Dashboard loads after login
- [ ] Can navigate between pages
- [ ] No console errors in browser

---

**Happy Coding! 🚀**

Built with ❤️ using MERN Stack
