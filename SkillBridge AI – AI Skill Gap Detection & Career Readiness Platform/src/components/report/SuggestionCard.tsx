import React from 'react';
import { Link } from 'react-router-dom';

interface SuggestionCardProps {
  skillName: string;
  suggestions: string[];
  priority: 'High' | 'Medium' | 'Low';
  courseLink?: string;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ 
  skillName, 
  suggestions,
  priority,
  courseLink 
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Medium':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Low':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-blue-900 text-lg">{skillName}</h4>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(priority)}`}>
          {priority} Priority
        </span>
      </div>
      
      <ul className="space-y-2 mb-4">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-blue-800 text-sm">{suggestion}</span>
          </li>
        ))}
      </ul>
      
      {courseLink && (
        <Link
          to={courseLink}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Go to Course
        </Link>
      )}
    </div>
  );
};

export default SuggestionCard;
