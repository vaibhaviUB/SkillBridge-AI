import React from 'react';

interface ScoreSummaryProps {
  totalScore: number;
  maxScore: number;
  interviewType: 'hr' | 'technical';
  communicationScore?: number;
  technicalScore?: number;
  confidenceScore?: number;
}

/**
 * ScoreSummary Component
 * Displays overall interview performance summary with circular progress
 */
const ScoreSummary: React.FC<ScoreSummaryProps> = ({
  totalScore,
  maxScore,
  interviewType,
  communicationScore = 0,
  technicalScore = 0,
  confidenceScore = 0,
}) => {
  const percentage = (totalScore / maxScore) * 100;
  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  let performanceLevel = 'Needs Improvement';
  let performanceColor = 'text-orange-600';
  let performanceBg = 'from-orange-500 to-orange-600';
  let performanceIcon = '📚';
  let performanceMessage = "Keep practicing to improve your interview skills.";
  
  if (percentage >= 80) {
    performanceLevel = 'Excellent!';
    performanceColor = 'text-green-600';
    performanceBg = 'from-green-500 to-green-600';
    performanceIcon = '🎉';
    performanceMessage = "Outstanding! You're interview ready!";
  } else if (percentage >= 60) {
    performanceLevel = 'Good Job!';
    performanceColor = 'text-blue-600';
    performanceBg = 'from-blue-500 to-blue-600';
    performanceIcon = '👍';
    performanceMessage = "Great progress! A bit more practice and you'll be ready.";
  } else if (percentage >= 40) {
    performanceLevel = 'Getting There';
    performanceColor = 'text-orange-600';
    performanceBg = 'from-orange-500 to-orange-600';
    performanceIcon = '📈';
    performanceMessage = "You're making progress. Focus on the areas needing improvement.";
  } else {
    performanceLevel = 'Keep Practicing';
    performanceColor = 'text-red-600';
    performanceBg = 'from-red-500 to-red-600';
    performanceIcon = '💪';
    performanceMessage = "Don't give up! Practice more to build confidence.";
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
      {/* Main Score Display */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Overall Performance</h3>
        
        {/* Circular Progress */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="10"
            />
            {/* Progress Circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className={`text-${interviewType === 'hr' ? 'blue' : 'purple'}-500`} stopColor="currentColor" />
                <stop offset="100%" className={`text-${interviewType === 'hr' ? 'blue' : 'purple'}-600`} stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Score Text in Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-4xl font-bold ${performanceColor}`}>{percentage.toFixed(0)}%</span>
            <span className="text-sm text-gray-500 mt-1">{totalScore}/{maxScore}</span>
          </div>
        </div>
        
        {/* Performance Level */}
        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${performanceBg} text-white mb-3`}>
          <span className="text-xl">{performanceIcon}</span>
          <span className="font-semibold">{performanceLevel}</span>
        </div>
        
        <p className="text-gray-600">{performanceMessage}</p>
      </div>
      
      {/* Skill Breakdown */}
      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-semibold text-gray-800 mb-4 text-center">Skill Breakdown</h4>
        
        <div className="space-y-4">
          {/* Communication Skills */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 flex items-center">
                <span className="mr-2">💬</span> Communication Skills
              </span>
              <span className="text-sm font-semibold text-gray-900">{communicationScore}/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${communicationScore * 10}%` }}
              />
            </div>
          </div>
          
          {/* Technical Understanding */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 flex items-center">
                <span className="mr-2">🔧</span> Technical Understanding
              </span>
              <span className="text-sm font-semibold text-gray-900">{technicalScore}/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${technicalScore * 10}%` }}
              />
            </div>
          </div>
          
          {/* Confidence Level */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 flex items-center">
                <span className="mr-2">⭐</span> Confidence Level
              </span>
              <span className="text-sm font-semibold text-gray-900">{confidenceScore}/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-green-500 to-green-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${confidenceScore * 10}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
