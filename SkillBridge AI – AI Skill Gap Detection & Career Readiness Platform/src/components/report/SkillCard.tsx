import React from 'react';

interface SkillCardProps {
  skillName: string;
  score: number;
  status: 'Strong' | 'Average' | 'Weak';
  description?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  skillName, 
  score, 
  status,
  description 
}) => {
  // Get color based on status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Strong':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Average':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Weak':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getProgressBarColor = (status: string) => {
    switch (status) {
      case 'Strong':
        return 'bg-green-500';
      case 'Average':
        return 'bg-yellow-500';
      case 'Weak':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getIcon = (status: string) => {
    switch (status) {
      case 'Strong':
        return '✓';
      case 'Average':
        return '~';
      case 'Weak':
        return '!';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-800 text-lg">{skillName}</h4>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(status)}`}>
          {getIcon(status)} {status}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Proficiency</span>
          <span className="font-medium text-gray-800">{score}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-1000 ${getProgressBarColor(status)}`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
      
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default SkillCard;
