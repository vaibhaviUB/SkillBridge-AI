import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import WelcomeSection from '../components/dashboard/WelcomeSection';
import DashboardCard from '../components/dashboard/DashboardCard';
import ProgressSection from '../components/dashboard/ProgressSection';
import RecentActivity from '../components/dashboard/RecentActivity';

// Dashboard feature cards data based on problem statement
const featureCards = [
  {
    title: 'Start Learning AI Skills',
    description: 'Learn prompt engineering, AI tools like ChatGPT, automation workflows, and real-world applications through structured learning paths.',
    icon: '🧠',
    buttonLabel: 'Explore Learning',
    linkTo: '/planner',
    color: 'blue',
  },
  {
    title: 'Test Your Skills',
    description: 'Take AI-based quizzes and assessments to evaluate your knowledge. Get instant feedback and identify areas for improvement.',
    icon: '📊',
    buttonLabel: 'Start Assessment',
    linkTo: '/assessment',
    color: 'purple',
  },
  {
    title: 'View Skill Gap Analysis',
    description: 'Identify missing skills with personalized recommendations. Get a detailed report on what you need to learn to become industry-ready.',
    icon: '📈',
    buttonLabel: 'View Report',
    linkTo: '/progress',
    color: 'green',
  },
  {
    title: 'Prepare for Interviews',
    description: 'Practice HR mock interviews with AI feedback system. Get tips on technical questions and improve your communication skills.',
    icon: '🎤',
    buttonLabel: 'Start Practice',
    linkTo: '/interview',
    color: 'orange',
  },
];

// User stats (would come from backend in real app)
const userStats = {
  coursesCompleted: 2,
  totalCourses: 10,
  assessmentsTaken: 5,
  readinessScore: 65,
};

// User info (would come from authentication context)
const userInfo = {
  name: 'Alex',
  type: 'Student' as 'Student' | 'Professional',
};

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Mobile Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 lg:hidden sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <span className="text-2xl">🌉</span>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SkillBridge AI
              </span>
            </Link>
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 md:p-6 lg:p-8">
          {/* Welcome Section */}
          <WelcomeSection userName={userInfo.name} userType={userInfo.type} />

          {/* Progress Overview */}
          <div className="mb-8">
            <ProgressSection stats={userStats} />
          </div>

          {/* Feature Cards Grid */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🚀 Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featureCards.map((card, index) => (
                <DashboardCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  buttonLabel={card.buttonLabel}
                  linkTo={card.linkTo}
                  color={card.color}
                />
              ))}
            </div>
          </section>

          {/* Recent Activity & Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivity />
            
            {/* Upcoming Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">💡 Recommended For You</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 Next: Advanced Prompt Engineering</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Master complex prompting techniques used by industry professionals.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                    Start Module →
                  </button>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-2">📋 Take Skill Assessment</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    You haven't taken an assessment in 5 days. Track your progress!
                  </p>
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
                    Begin Quiz →
                  </button>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-100">
                  <h4 className="font-semibold text-gray-800 mb-2">🎤 Mock Interview Available</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Practice with AI-powered HR interview simulation.
                  </p>
                  <button className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors">
                    Start Practice →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-8 py-6">
          <div className="px-4 md:px-6 lg:px-8 text-center text-gray-500 text-sm">
            <p>© 2024 SkillBridge AI. All rights reserved.</p>
            <p className="mt-1">Empowering the next generation of AI professionals 🚀</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
