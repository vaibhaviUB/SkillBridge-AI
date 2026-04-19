import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Planner from './pages/Planner';
import Progress from './pages/Progress';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Assessment from './pages/Assessment';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Interview from './pages/Interview';
import InterviewSession from './pages/InterviewSession';
import InterviewResult from './pages/InterviewResult';
import Report from './pages/Report';
import Profile from './pages/Profile';

/**
 * Main App Component
 * Sets up React Router and renders all pages with Navbar and Footer
 */
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Navigation Bar - Fixed at top */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Home/Landing Page Route */}
            <Route path="/" element={<Home />} />
            
            {/* Dashboard Page Route - Main user interface after login */}
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Planner Page Route - AI Learning Path Planner */}
            <Route path="/planner" element={<Planner />} />
            
            {/* Progress Page Route - Track learning progress */}
            <Route path="/progress" element={<Progress />} />
            
            {/* Login Page Route - User authentication */}
            <Route path="/login" element={<Login />} />
            
            {/* Signup Page Route - User registration */}
            <Route path="/signup" element={<Signup />} />
            
            {/* Assessment Page Routes */}
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/assessment/quiz" element={<QuizPage />} />
            <Route path="/assessment/result" element={<ResultPage />} />
            
            {/* Interview Prep Page Routes */}
            <Route path="/interview" element={<Interview />} />
            <Route path="/interview/session" element={<InterviewSession />} />
            <Route path="/interview/result" element={<InterviewResult />} />
            
            {/* Courses Page Route - AI Learning Hub */}
            <Route path="/courses" element={<Courses />} />
            
            {/* Report Page Route - Skill Gap Analysis */}
            <Route path="/report" element={<Report />} />
            
            {/* Profile Page Route - User Profile Management */}
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        {/* Footer - Fixed at bottom */}
        <Footer />
      </div>
    </Router>
  );
}
