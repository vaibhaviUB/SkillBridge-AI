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
            
            {/* Interview Prep Page Route - Future feature */}
            <Route path="/interview" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-gray-800 mb-4">🎤 Interview Preparation</h1><p className="text-gray-600">AI mock interviews coming soon!</p></div></div>} />
            
            {/* Courses Page Route - AI Learning Hub */}
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>

        {/* Footer - Fixed at bottom */}
        <Footer />
      </div>
    </Router>
  );
}
