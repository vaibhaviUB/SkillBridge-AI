import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HistoryTable from '../components/assessment/HistoryTable';

interface AssessmentAttempt {
  id: number;
  date: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  status: 'Excellent' | 'Good' | 'Needs Improvement' | 'Poor';
  duration: string;
}

/**
 * Assessment Dashboard Page
 * Entry point for AI skill assessments
 */
export default function Assessment() {
  const navigate = useNavigate();
  const [attempts, setAttempts] = useState<AssessmentAttempt[]>([]);
  const [stats, setStats] = useState({
    totalAttempts: 0,
    averageScore: 0,
    bestScore: 0
  });

  // Load assessment history from localStorage
  useEffect(() => {
    const storedAttempts = localStorage.getItem('assessmentAttempts');
    if (storedAttempts) {
      const parsedAttempts = JSON.parse(storedAttempts);
      setAttempts(parsedAttempts);
      
      // Calculate stats
      if (parsedAttempts.length > 0) {
        const total = parsedAttempts.reduce((sum: number, a: AssessmentAttempt) => sum + a.percentage, 0);
        const best = Math.max(...parsedAttempts.map((a: AssessmentAttempt) => a.percentage));
        setStats({
          totalAttempts: parsedAttempts.length,
          averageScore: Math.round(total / parsedAttempts.length),
          bestScore: best
        });
      }
    }
  }, []);

  const handleStartAssessment = () => {
    navigate('/assessment/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📝 AI Skill Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Evaluate your readiness for AI-driven roles with our comprehensive technical assessment
          </p>
        </div>

        {/* Stats Cards */}
        {attempts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-2">📊</div>
              <div className="text-3xl font-bold text-gray-800">{stats.totalAttempts}</div>
              <div className="text-gray-600">Total Attempts</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-3xl font-bold text-gray-800">{stats.averageScore}%</div>
              <div className="text-gray-600">Average Score</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-3xl font-bold text-gray-800">{stats.bestScore}%</div>
              <div className="text-gray-600">Best Score</div>
            </div>
          </div>
        )}

        {/* Start Assessment Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Test Your AI Knowledge?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Take our 10-question assessment covering prompt engineering, AI tools, automation, and more. 
            You have 15 minutes to complete it.
          </p>
          <button
            onClick={handleStartAssessment}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            🚀 Start Assessment
          </button>
        </div>

        {/* Assessment Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-3xl mb-3">⏱️</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">15 Minutes</h3>
            <p className="text-gray-600 text-sm">Time limit to complete all questions</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">10 Questions</h3>
            <p className="text-gray-600 text-sm">Multiple choice technical questions</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Instant Results</h3>
            <p className="text-gray-600 text-sm">Get immediate feedback and score</p>
          </div>
        </div>

        {/* Previous Results Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">📋 Previous Results</h2>
          <p className="text-gray-600 mb-6">Track your assessment history and improvement over time</p>
        </div>
        
        <HistoryTable attempts={attempts} />

        {/* Back to Dashboard */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
