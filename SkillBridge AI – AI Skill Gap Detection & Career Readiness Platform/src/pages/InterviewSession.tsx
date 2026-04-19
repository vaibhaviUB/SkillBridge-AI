import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import QuestionPanel from '../components/interview/QuestionPanel';
import AnswerInput from '../components/interview/AnswerInput';

/**
 * Interview Session Page
 * Interactive interview flow where users answer questions
 */
const InterviewSession: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const interviewType = (searchParams.get('type') as 'hr' | 'technical') || 'hr';

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

  const questions = interviewType === 'hr' ? hrQuestions : technicalQuestions;
  const totalQuestions = questions.length;

  // State Management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(totalQuestions).fill(''));
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle answer change
  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  // Navigate to next question
  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Navigate to previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Submit interview
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Store interview data in localStorage for result page
    const interviewData = {
      type: interviewType,
      answers: answers,
      questions: questions,
      timestamp: new Date().toISOString(),
      timeSpent: 15 * 60 - timeRemaining,
    };
    
    localStorage.setItem('interviewData', JSON.stringify(interviewData));
    
    // Navigate to result page
    setTimeout(() => {
      navigate('/interview/result');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header with Timer */}
      <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Button */}
            <button
              onClick={() => navigate('/interview')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">Exit Interview</span>
            </button>

            {/* Timer */}
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              timeRemaining < 180 
                ? 'bg-red-100 text-red-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-mono font-bold text-lg">{formatTime(timeRemaining)}</span>
            </div>

            {/* Progress */}
            <div className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {totalQuestions}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Warning for exiting */}
        <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Your progress is saved automatically. You can return to previous questions.
          </p>
        </div>

        {/* Question Panel */}
        <div className="mb-6">
          <QuestionPanel
            questionNumber={currentQuestion + 1}
            totalQuestions={totalQuestions}
            question={questions[currentQuestion]}
            questionType={interviewType}
          />
        </div>

        {/* Answer Input */}
        <div className="mb-6">
          <AnswerInput
            value={answers[currentQuestion]}
            onChange={handleAnswerChange}
            placeholder="Type your detailed answer here. Aim for 150-300 characters..."
            maxLength={1000}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous</span>
          </button>

          {/* Next/Submit Button */}
          {currentQuestion === totalQuestions - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center space-x-2 px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Interview</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center space-x-2 px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <span>Next Question</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          )}
        </div>

        {/* Question Navigator */}
        <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Question Navigator</h3>
          <div className="flex flex-wrap gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
                  index === currentQuestion
                    ? 'bg-violet-600 text-white shadow-md'
                    : answers[index].trim()
                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            <span className="inline-block w-3 h-3 bg-green-100 rounded mr-1"></span> Answered
            <span className="inline-block w-3 h-3 bg-violet-600 rounded ml-3 mr-1"></span> Current
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterviewSession;
