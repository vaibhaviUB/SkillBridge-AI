import React from 'react';
import { Link } from 'react-router-dom';

interface InterviewCardProps {
  type: 'hr' | 'technical';
  title: string;
  description: string;
  icon: string;
  questions: string[];
  duration: string;
  buttonLabel: string;
  color: string;
}

/**
 * InterviewCard Component
 * Displays interview type selection card with details
 */
const InterviewCard: React.FC<InterviewCardProps> = ({
  type,
  title,
  description,
  icon,
  questions,
  duration,
  buttonLabel,
  color,
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
  };

  const bgColorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    purple: 'bg-purple-50 border-purple-200',
    green: 'bg-green-50 border-green-200',
    orange: 'bg-orange-50 border-orange-200',
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  const selectedBgColor = bgColorClasses[color as keyof typeof bgColorClasses] || bgColorClasses.blue;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Card Header with Gradient */}
      <div className={`bg-gradient-to-r ${selectedColor} p-6 text-white`}>
        <div className="flex items-center space-x-4">
          <div className="text-5xl">{icon}</div>
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-white/90 text-sm mt-1">{description}</p>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Sample Questions */}
        <div className={`rounded-xl p-4 mb-6 border ${selectedBgColor}`}>
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sample Questions:
          </h4>
          <ul className="space-y-2">
            {questions.slice(0, 3).map((question, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                {question}
              </li>
            ))}
          </ul>
        </div>

        {/* Info Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {questions.length} Questions
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {duration}
            </div>
          </div>
        </div>

        {/* Start Button */}
        <Link
          to={`/interview/session?type=${type}`}
          className={`w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${selectedColor} shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
        >
          <span>{buttonLabel}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default InterviewCard;
