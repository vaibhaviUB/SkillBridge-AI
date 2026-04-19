import React from 'react';
import { Link } from 'react-router-dom';
import InterviewCard from '../components/interview/InterviewCard';

/**
 * Interview Page
 * Entry point for mock interview practice
 * Allows users to select between HR and Technical interviews
 */
const Interview: React.FC = () => {
  // HR Interview Questions
  const hrQuestions = [
    "Tell me about yourself and your background",
    "Why are you interested in this position?",
    "What are your greatest strengths?",
    "Describe a challenging situation you faced and how you handled it",
    "Where do you see yourself in 5 years?",
  ];

  // Technical Interview Questions
  const technicalQuestions = [
    "What is Prompt Engineering and why is it important?",
    "Explain what LLM means and how it works",
    "How would you use AI to automate a workflow?",
    "What are the key considerations when implementing AI solutions?",
    "Describe a project where you applied AI skills",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              🎤 Mock Interview Practice
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Simulate real interviews and improve your performance with AI-powered feedback
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Real Questions</h3>
            <p className="text-gray-600 text-sm">Industry-standard interview questions used by top companies</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Feedback</h3>
            <p className="text-gray-600 text-sm">Get instant, personalized feedback on your answers</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Track Progress</h3>
            <p className="text-gray-600 text-sm">Monitor your improvement over multiple practice sessions</p>
          </div>
        </div>

        {/* Interview Type Selection */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Choose Interview Type
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* HR Interview Card */}
            <InterviewCard
              type="hr"
              title="HR Interview"
              description="Practice behavioral and situational questions"
              icon="🧑‍💼"
              questions={hrQuestions}
              duration="15 mins"
              buttonLabel="Start HR Interview"
              color="blue"
            />

            {/* Technical Interview Card */}
            <InterviewCard
              type="technical"
              title="Technical Interview"
              description="Test your AI and technical knowledge"
              icon="💻"
              questions={technicalQuestions}
              duration="15 mins"
              buttonLabel="Start Technical Interview"
              color="purple"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Why Practice Mock Interviews?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Build Confidence</h4>
              <p className="text-sm text-gray-600">Reduce anxiety by practicing common questions</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">💡</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Get Feedback</h4>
              <p className="text-sm text-gray-600">Learn what works and what needs improvement</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">⏱️</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Time Management</h4>
              <p className="text-sm text-gray-600">Practice answering within time limits</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Career Ready</h4>
              <p className="text-sm text-gray-600">Increase your chances of landing the job</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ready to start practicing?</p>
          <Link
            to="/dashboard"
            className="inline-flex items-center space-x-2 text-violet-600 hover:text-violet-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Interview;
