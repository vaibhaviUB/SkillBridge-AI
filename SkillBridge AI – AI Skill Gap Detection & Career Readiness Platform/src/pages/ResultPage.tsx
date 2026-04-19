import { useNavigate, useLocation } from 'react-router-dom';
import ResultCard from '../components/assessment/ResultCard';
import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface LocationState {
  score: number;
  totalQuestions: number;
  percentage: number;
  feedback: string;
  feedbackMessage: string;
  selectedAnswers: (number | null)[];
  questions: Question[];
  duration: string;
}

/**
 * ResultPage Component
 * Displays quiz results with detailed feedback and answer review
 */
export default function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showReview, setShowReview] = useState(false);
  
  const state = location.state as LocationState;

  // Redirect if no state
  if (!state) {
    navigate('/assessment');
    return null;
  }

  const { 
    score, 
    totalQuestions, 
    percentage, 
    feedback, 
    feedbackMessage,
    selectedAnswers,
    questions,
    duration
  } = state;

  const handleRetry = () => {
    navigate('/assessment/quiz');
  };

  const handleBackToAssessment = () => {
    navigate('/assessment');
  };

  const handleGoToCourses = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Assessment Complete! 🎉
          </h1>
          <p className="text-gray-600">Here's how you performed</p>
        </div>

        {/* Result Card */}
        <ResultCard
          score={score}
          totalQuestions={totalQuestions}
          percentage={percentage}
          feedback={feedback}
          feedbackMessage={feedbackMessage}
        />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">{score}/{totalQuestions}</div>
            <div className="text-sm text-gray-600">Correct Answers</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">{percentage}%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">{duration}</div>
            <div className="text-sm text-gray-600">Time Taken</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-gray-800">{totalQuestions - score}</div>
            <div className="text-sm text-gray-600">Incorrect</div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📊 Performance Insights</h2>
          <div className="space-y-3">
            {percentage >= 80 && (
              <>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-gray-700">Excellent understanding of AI fundamentals</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-gray-700">Ready for AI-focused technical interviews</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">→</span>
                  <p className="text-gray-700">Consider exploring advanced AI topics</p>
                </div>
              </>
            )}
            {percentage >= 60 && percentage < 80 && (
              <>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-gray-700">Good grasp of core AI concepts</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">!</span>
                  <p className="text-gray-700">Review areas where you lost points</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">→</span>
                  <p className="text-gray-700">Practice more assessments to improve</p>
                </div>
              </>
            )}
            {percentage >= 40 && percentage < 60 && (
              <>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">!</span>
                  <p className="text-gray-700">Basic understanding present, but needs improvement</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">→</span>
                  <p className="text-gray-700">Focus on prompt engineering and AI tools</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">→</span>
                  <p className="text-gray-700">Complete relevant courses before retrying</p>
                </div>
              </>
            )}
            {percentage < 40 && (
              <>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">!</span>
                  <p className="text-gray-700">Need to build foundational AI knowledge</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">→</span>
                  <p className="text-gray-700">Start with beginner AI courses</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">→</span>
                  <p className="text-gray-700">Learn prompt engineering basics first</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Answer Review Toggle */}
        <div className="mt-8">
          <button
            onClick={() => setShowReview(!showReview)}
            className="w-full bg-white rounded-xl shadow p-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex justify-between items-center"
          >
            <span>{showReview ? 'Hide' : 'Review'} Answers</span>
            <span className="text-gray-500">{showReview ? '↑' : '↓'}</span>
          </button>
        </div>

        {/* Answer Review */}
        {showReview && (
          <div className="mt-4 space-y-4">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div 
                  key={question.id} 
                  className={`bg-white rounded-xl shadow p-4 border-l-4 ${
                    isCorrect ? 'border-green-500' : 'border-red-500'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                      isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {isCorrect ? '✓' : '✗'}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">Q{index + 1}. {question.question}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Your answer: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                          {userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-600">
                          Correct answer: {question.options[question.correctAnswer]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button
            onClick={handleRetry}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            🔄 Retry Assessment
          </button>
          <button
            onClick={handleGoToCourses}
            className="flex-1 bg-white border-2 border-blue-500 text-blue-500 px-6 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all"
          >
            📚 Explore Courses
          </button>
          <button
            onClick={handleBackToAssessment}
            className="flex-1 bg-gray-200 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-all"
          >
            📋 Assessment History
          </button>
        </div>

        {/* Back to Dashboard */}
        <div className="mt-8 text-center">
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
