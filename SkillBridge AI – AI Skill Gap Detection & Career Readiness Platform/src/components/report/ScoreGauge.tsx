import React from 'react';

interface ScoreGaugeProps {
  score: number;
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

const ScoreGauge: React.FC<ScoreGaugeProps> = ({ 
  score, 
  label = 'Job Readiness',
  size = 'large' 
}) => {
  // Calculate color based on score
  const getColor = (score: number) => {
    if (score >= 80) return '#10B981'; // Green
    if (score >= 60) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  const color = getColor(score);
  
  // Calculate stroke dasharray for circular progress
  const radius = size === 'large' ? 50 : size === 'medium' ? 40 : 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-48 h-48'
  };

  const textSizes = {
    small: 'text-2xl',
    medium: 'text-3xl',
    large: 'text-5xl'
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClasses[size]}`}>
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 120 120"
        >
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Score text in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${textSizes[size]} font-bold`} style={{ color }}>
            {score}%
          </span>
        </div>
      </div>
      {label && (
        <p className="mt-3 text-gray-600 font-medium text-center">{label}</p>
      )}
    </div>
  );
};

export default ScoreGauge;
