interface ResultCardProps {
  score: number;
  totalQuestions: number;
  percentage: number;
  feedback: string;
  feedbackMessage: string;
}

/**
 * ResultCard Component
 * Displays quiz results with score and feedback
 */
export default function ResultCard({ 
  score, 
  totalQuestions, 
  percentage,
  feedback,
  feedbackMessage 
}: ResultCardProps) {
  // Determine color based on percentage
  const getColorScheme = () => {
    if (percentage >= 80) return {
      bg: 'bg-green-50',
      border: 'border-green-500',
      text: 'text-green-600',
      circle: 'text-green-500'
    };
    if (percentage >= 60) return {
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      text: 'text-blue-600',
      circle: 'text-blue-500'
    };
    if (percentage >= 40) return {
      bg: 'bg-orange-50',
      border: 'border-orange-500',
      text: 'text-orange-600',
      circle: 'text-orange-500'
    };
    return {
      bg: 'bg-red-50',
      border: 'border-red-500',
      text: 'text-red-600',
      circle: 'text-red-500'
    };
  };

  const colors = getColorScheme();

  return (
    <div className={`${colors.bg} rounded-2xl border-2 ${colors.border} p-8 text-center`}>
      {/* Score Circle */}
      <div className="relative w-40 h-40 mx-auto mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - percentage / 100)}`}
            className={colors.circle}
          />
        </svg>
        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-4xl font-bold ${colors.text}`}>{percentage}%</span>
        </div>
      </div>

      {/* Score Text */}
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        {feedback}
      </h3>
      <p className="text-gray-600 mb-4">
        You scored {score} out of {totalQuestions}
      </p>
      <p className={`text-lg font-semibold ${colors.text}`}>
        {feedbackMessage}
      </p>
    </div>
  );
}
