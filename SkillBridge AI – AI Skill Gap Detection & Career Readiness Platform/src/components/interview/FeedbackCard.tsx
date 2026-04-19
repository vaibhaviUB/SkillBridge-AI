import React, { useState } from 'react';

interface FeedbackCardProps {
  questionNumber: number;
  question: string;
  userAnswer: string;
  feedback: string;
  score: number;
  maxScore: number;
}

/**
 * FeedbackCard Component
 * Displays detailed feedback for each interview question
 */
const FeedbackCard: React.FC<FeedbackCardProps> = ({
  questionNumber,
  question,
  userAnswer,
  feedback,
  score,
  maxScore,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const percentage = (score / maxScore) * 100;
  
  let scoreColor = 'text-red-600';
  let scoreBg = 'bg-red-50';
  let statusText = 'Needs Improvement';
  let statusIcon = '📚';
  
  if (percentage >= 80) {
    scoreColor = 'text-green-600';
    scoreBg = 'bg-green-50';
    statusText = 'Excellent';
    statusIcon = '🎉';
  } else if (percentage >= 60) {
    scoreColor = 'text-blue-600';
    scoreBg = 'bg-blue-50';
    statusText = 'Good';
    statusIcon = '👍';
  } else if (percentage >= 40) {
    scoreColor = 'text-orange-600';
    scoreBg = 'bg-orange-50';
    statusText = 'Average';
    statusIcon = '📈';
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Card Header */}
      <div 
        className="p-4 bg-gray-50 border-b border-gray-200 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${scoreBg} ${scoreColor}`}>
              {questionNumber}
            </span>
            <span className="font-semibold text-gray-800">Question {questionNumber}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`text-lg font-bold ${scoreColor}`}>
              {score}/{maxScore}
            </span>
            <span className={`text-sm px-3 py-1 rounded-full ${scoreBg} ${scoreColor} font-medium`}>
              {statusIcon} {statusText}
            </span>
            <svg 
              className={`w-5 h-5 text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 space-y-4">
          {/* Question */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Question:</h4>
            <p className="text-gray-800 bg-gray-50 p-3 rounded-lg">{question}</p>
          </div>
          
          {/* User Answer */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Your Answer:</h4>
            <p className="text-gray-800 bg-blue-50 p-3 rounded-lg border border-blue-100 whitespace-pre-wrap">
              {userAnswer || <span className="text-gray-400 italic">No answer provided</span>}
            </p>
          </div>
          
          {/* Feedback */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI Feedback:
            </h4>
            <p className="text-gray-800 bg-green-50 p-3 rounded-lg border border-green-100">
              {feedback}
            </p>
          </div>
          
          {/* Improvement Tips */}
          <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
            <h4 className="text-sm font-semibold text-orange-800 mb-2">💡 Improvement Tips:</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              {percentage < 60 && <li>• Try to provide more detailed examples</li>}
              {percentage < 40 && <li>• Focus on explaining your thought process clearly</li>}
              {userAnswer.length < 100 && <li>• Expand your answer with more context</li>}
              {percentage >= 60 && <li>• Great job! Consider adding industry-specific examples</li>}
              {percentage >= 80 && <li>• Excellent answer! You're interview ready!</li>}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;
