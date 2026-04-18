// SkillBridge AI – Main Application Entry Point
// Handles routing between all pages using React Router

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlannerPage from './pages/PlannerPage';
import ProgressPage from './pages/ProgressPage';
import AuthPage from './pages/AuthPage';
import './index.css';

export default function App() {
  return (
    <Router>
      {/* Fixed Navbar on top */}
      <Navbar />

      {/* Main content area */}
      <main className="min-h-screen">
        <Routes>
          {/* Home / Landing Page */}
          <Route path="/" element={<HomePage />} />

          {/* Planner Page */}
          <Route path="/planner" element={<PlannerPage />} />

          {/* Progress Page */}
          <Route path="/progress" element={<ProgressPage />} />

          {/* Login / Signup Page */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Catch-all: redirect to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}
