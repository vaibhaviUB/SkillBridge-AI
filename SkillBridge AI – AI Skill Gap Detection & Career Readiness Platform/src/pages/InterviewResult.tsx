import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ScoreSummary from '../components/interview/ScoreSummary';
import FeedbackCard from '../components/interview/FeedbackCard';

/**
 * Interview Result Page
 * Displays interview results with detailed feedback for each answer
 */
const InterviewResult: React.FC = () => {
  const navigate = useNavigate();
  const [interviewData, setInterviewData] = useState<any>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(true);

  useEffect(() => {
    // Get interview data from localStorage
    const data = localStorage.getItem('interviewData');
    
    if (!data) {
      navigate('/interview');
      return;
    }

    const parsedData = JSON.parse(data);
    setInterviewData(parsedData);

    // Calculate scores and feedback (mock AI evaluation)
    calculateResults(parsedData);
  }, [navigate]);

  // Mock AI evaluation logic
  const calculateResults = (data: any) => {
    const newScores: number[] = [];
    const newFeedback: string[] = [];

    data.answers.forEach((answer: string) => {
      const answerLength = answer.trim().length;
      const hasKeywords = checkKeywords(answer, data.type);
      
      // Calculate score based on answer quality
      let score = 5; // Base score
      
      if (answerLength > 300) score += 3;
      else if (answerLength > 150) score += 2;
      else if (answerLength > 50) score += 1;
      
      if (hasKeywords) score += 2;
      
      // Cap at 10
      score = Math.min(score, 10);
      newScores.push(score);

      // Generate feedback
      let feedbackText = '';
      
      if (answerLength < 50) {
        feedbackText = "Your answer is too short. Try to elaborate more with specific examples and details.";
      } else if (answerLength < 150) {
        feedbackText = "Good start, but your answer could be more detailed. Add real-world examples to strengthen your response.";
      } else if (answerLength < 300) {
        feedbackText = "Good explanation! Consider adding more industry-specific examples to make it even stronger.";
      } else {
        feedbackText = "Excellent! Comprehensive answer with good detail and structure.";
      }

      if (!hasKeywords && answerLength > 50) {
        feedbackText += " Try to include relevant technical keywords.";
      }

      newFeedback.push(feedbackText);
    });

    setScores(newScores);
    setFeedback(newFeedback);
    setIsCalculating(false);
  };

  // Check for relevant keywords in answer
  const checkKeywords = (answer: string, type: string): boolean => {
    const lowerAnswer = answer.toLowerCase();
    
    if (type === 'technical') {
      const technicalKeywords = ['ai', 'machine learning', 'model', 'data', 'algorithm', 'automation', 'prompt', 'llm', 'tool', 'system'];
      return technicalKeywords.some(keyword => lowerAnswer.includes(keyword));
    } else {
      const hrKeywords = ['experience', 'skill', 'team', 'project', 'learn', 'grow', 'challenge', 'result', 'achieve', 'work'];
      return hrKeywords.some(keyword => lowerAnswer.includes(keyword));
    }
  };

  if (isCalculating || !interviewData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Analyzing your interview...</p>
        </div>
      </div>
    );
  }

  const totalScore = scores.reduce((sum, score) => sum + score, 0);
  const maxScore = scores.length * 10;
  const percentage = (totalScore / maxScore) * 100;

  // Calculate category scores
  const communicationScore = Math.round(percentage / 10);
  const technicalScore = interviewData.type === 'technical' ? Math.round(percentage / 10) : Math.round(percentage / 12);
  const confidenceScore = Math.min(10, Math.round(scores.filter(s => s >= 7).length / scores.length * 10));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className={`py-12 text-white ${
        interviewData.type === 'hr' 
          ? 'bg-gradient-to-r from-blue-600 to-blue-700' 
          : 'bg-gradient-to-r from-purple-600 to-purple-700'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {interviewData.type === 'hr' ? '🧑‍💼' : '💻'} Interview Results
          </h1>
          <p className="text-lg text-white/90">
            {interviewData.type === 'hr' ? 'HR' : 'Technical'} Interview Performance Analysis
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center">
          <div className="text-5xl mb-4">
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : percentage >= 40 ? '📈' : '💪'}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {percentage >= 80 ? 'Outstanding Performance!' : 
             percentage >= 60 ? 'Great Job!' : 
             percentage >= 40 ? 'Good Progress!' : 'Keep Practicing!'}
          </h2>
          <p className="text-gray-600">
            You scored <span className="font-bold text-violet-600">{totalScore} out of {maxScore}</span> ({percentage.toFixed(0)}%)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Score Summary - Left Column */}
          <div className="lg:col-span-1">
            <ScoreSummary
              totalScore={totalScore}
              maxScore={maxScore}
              interviewType={interviewData.type}
              communicationScore={communicationScore}
              technicalScore={technicalScore}
              confidenceScore={confidenceScore}
            />

            {/* Quick Stats */}
            <div className="mt-6 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Interview Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Interview Type</span>
                  <span className="text-sm font-medium text-gray-800 capitalize">{interviewData.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Questions</span>
                  <span className="text-sm font-medium text-gray-800">{interviewData.questions.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Time Spent</span>
                  <span className="text-sm font-medium text-gray-800">
                    {Math.floor(interviewData.timeSpent / 60)}m {interviewData.timeSpent % 60}s
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Date</span>
                  <span className="text-sm font-medium text-gray-800">
                    {new Date(interviewData.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Feedback - Right Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Detailed Feedback</h3>
              <p className="text-gray-600 text-sm">Review your answers and AI-generated feedback for each question</p>
            </div>

            {/* Feedback Cards */}
            <div className="space-y-4">
              {interviewData.questions.map((question: string, index: number) => (
                <FeedbackCard
                  key={index}
                  questionNumber={index + 1}
                  question={question}
                  userAnswer={interviewData.answers[index]}
                  feedback={feedback[index]}
                  score={scores[index]}
                  maxScore={10}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">What's Next?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/interview')}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Retake Interview</span>
            </button>

            <Link
              to="/interview"
              className="flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-violet-600 bg-violet-50 hover:bg-violet-100 border-2 border-violet-200 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span>Try Different Type</span>
            </Link>

            <Link
              to="/dashboard"
              className="flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Go to Dashboard</span>
            </Link>
          </div>
        </div>

        {/* Improvement Tips */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Tips for Improvement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">1.</span>
              <p className="text-gray-700 text-sm">Practice answering questions out loud to improve fluency</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">2.</span>
              <p className="text-gray-700 text-sm">Use the STAR method (Situation, Task, Action, Result) for behavioral questions</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">3.</span>
              <p className="text-gray-700 text-sm">Research common interview questions in your field</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 font-bold">4.</span>
              <p className="text-gray-700 text-sm">Record yourself and review to identify areas for improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewResult;
