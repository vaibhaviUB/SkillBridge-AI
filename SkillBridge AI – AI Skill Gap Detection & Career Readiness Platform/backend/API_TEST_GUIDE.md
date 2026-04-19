# SkillBridge AI API Testing Guide

This guide provides examples for testing the authentication API endpoints using various tools.

---

## 🔧 Testing Tools

You can use any of these tools to test the API:
- **cURL** (Command line)
- **Postman** (GUI application)
- **Thunder Client** (VS Code extension)
- **Insomnia** (GUI application)
- **Browser DevTools** (Network tab)

---

## 📡 Base URL

```
http://localhost:5000/api
```

---

## 1️⃣ Health Check Endpoint

### cURL
```bash
curl http://localhost:5000/api/health
```

### Expected Response
```json
{
  "status": "OK",
  "message": "SkillBridge AI API is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## 2️⃣ User Registration (Signup)

### Endpoint
```
POST /api/auth/signup
```

### cURL
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "userType": "Student"
  }'
```

### Request Body
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "userType": "Student"
}
```

### Success Response (201)
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "65a5b2c3d4e5f6g7h8i9j0k1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "userType": "Student",
      "isActive": true,
      "profileCompleteness": 0,
      "skills": [],
      "enrolledCourses": [],
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Error Responses

**400 - Bad Request (Missing Fields)**
```json
{
  "success": false,
  "message": "Please provide all required fields"
}
```

**400 - Bad Request (Invalid Email)**
```json
{
  "success": false,
  "message": "Please provide a valid email address"
}
```

**400 - Bad Request (Short Password)**
```json
{
  "success": false,
  "message": "Password must be at least 6 characters long"
}
```

**409 - Conflict (User Already Exists)**
```json
{
  "success": false,
  "message": "User with this email already exists"
}
```

---

## 3️⃣ User Login

### Endpoint
```
POST /api/auth/login
```

### cURL
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Success Response (200)
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "65a5b2c3d4e5f6g7h8i9j0k1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "userType": "Student",
      "isActive": true,
      "profileCompleteness": 0,
      "skills": [],
      "enrolledCourses": [],
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Error Responses

**400 - Bad Request (Missing Fields)**
```json
{
  "success": false,
  "message": "Please provide email and password"
}
```

**401 - Unauthorized (Invalid Credentials)**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

**403 - Forbidden (Account Deactivated)**
```json
{
  "success": false,
  "message": "Account is deactivated. Please contact support."
}
```

---

## 4️⃣ Get Current User (Protected Route)

### Endpoint
```
GET /api/auth/me
```

### Headers Required
```
Authorization: Bearer <your_jwt_token>
```

### cURL
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Success Response (200)
```json
{
  "success": true,
  "data": {
    "user": {
      "_id": "65a5b2c3d4e5f6g7h8i9j0k1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "userType": "Student",
      "isActive": true,
      "profileCompleteness": 0,
      "skills": [],
      "enrolledCourses": [],
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  }
}
```

### Error Responses

**401 - Unauthorized (No Token)**
```json
{
  "success": false,
  "message": "Not authorized to access this route. Please login."
}
```

**401 - Unauthorized (Invalid Token)**
```json
{
  "success": false,
  "message": "Invalid token. Please login again."
}
```

**401 - Unauthorized (Token Expired)**
```json
{
  "success": false,
  "message": "Token has expired. Please login again."
}
```

---

## 5️⃣ Update Profile (Protected Route)

### Endpoint
```
PUT /api/auth/update-profile
```

### Headers Required
```
Authorization: Bearer <your_jwt_token>
Content-Type: application/json
```

### cURL
```bash
curl -X PUT http://localhost:5000/api/auth/update-profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Updated Doe",
    "userType": "Professional"
  }'
```

### Request Body
```json
{
  "name": "John Updated Doe",
  "userType": "Professional"
}
```

### Success Response (200)
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "_id": "65a5b2c3d4e5f6g7h8i9j0k1",
      "name": "John Updated Doe",
      "email": "john.doe@example.com",
      "userType": "Professional",
      "isActive": true,
      "profileCompleteness": 0,
      "skills": [],
      "enrolledCourses": [],
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T11:00:00.000Z"
    }
  }
}
```

---

## 6️⃣ Logout (Protected Route)

### Endpoint
```
POST /api/auth/logout
```

### Headers Required
```
Authorization: Bearer <your_jwt_token>
```

### cURL
```bash
curl -X POST http://localhost:5000/api/auth/logout \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Success Response (200)
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## 🧪 Complete Testing Workflow

### Step 1: Start Backend Server
```bash
cd backend
npm run dev
```

### Step 2: Test Health Check
```bash
curl http://localhost:5000/api/health
```

### Step 3: Register New User
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123","userType":"Student"}'
```
**Save the token from response**

### Step 4: Login with User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```
**Save the token from response**

### Step 5: Access Protected Route
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer <TOKEN_FROM_STEP_4>"
```

### Step 6: Update Profile
```bash
curl -X PUT http://localhost:5000/api/auth/update-profile \
  -H "Authorization: Bearer <TOKEN_FROM_STEP_4>" \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Test User"}'
```

### Step 7: Logout
```bash
curl -X POST http://localhost:5000/api/auth/logout \
  -H "Authorization: Bearer <TOKEN_FROM_STEP_4>"
```

---

## 📝 Postman Collection

You can import this JSON into Postman:

```json
{
  "info": {
    "name": "SkillBridge AI API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/api/health"
      }
    },
    {
      "name": "Signup",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"John Doe\",\n  \"email\": \"john@example.com\",\n  \"password\": \"password123\",\n  \"userType\": \"Student\"\n}"
        },
        "url": "http://localhost:5000/api/auth/signup"
      }
    },
    {
      "name": "Login",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"email\": \"john@example.com\",\n  \"password\": \"password123\"\n}"
        },
        "url": "http://localhost:5000/api/auth/login"
      }
    }
  ]
}
```

---

## 🔍 Common Issues & Solutions

### Issue 1: Cannot Connect to Server
**Error**: `ECONNREFUSED`
**Solution**: Ensure backend server is running on port 5000

### Issue 2: MongoDB Connection Failed
**Error**: `MongoServerError: Authentication failed`
**Solution**: Check MONGODB_URI in .env file

### Issue 3: Token Expired
**Error**: `Token has expired`
**Solution**: Login again to get a new token

### Issue 4: CORS Error
**Error**: `Access to fetch blocked by CORS policy`
**Solution**: Ensure FRONTEND_URL in backend/.env matches your frontend URL

---

## 📊 Response Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Successful request |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid input data |
| 401 | Unauthorized | Missing or invalid token |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Resource already exists |
| 500 | Internal Server Error | Server error |

---

**Happy Testing! 🚀**
