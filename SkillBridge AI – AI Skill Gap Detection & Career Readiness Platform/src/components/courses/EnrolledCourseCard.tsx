import React from 'react';
import { Play, CheckCircle, Clock, BookOpen } from 'lucide-react';
import ProgressBar from './ProgressBar';

interface EnrolledCourseCardProps {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalModules: number;
  completedModules: number;
  duration: string;
  lastAccessed?: string;
  onContinue: (courseId: string) => void;
}

const EnrolledCourseCard: React.FC<EnrolledCourseCardProps> = ({
  id,
  title,
  description,
  progress,
  totalModules,
  completedModules,
  duration,
  lastAccessed,
  onContinue
}) => {
  const isCompleted = progress === 100;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          </div>
          {isCompleted && (
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Completed
            </div>
          )}
        </div>

        {/* Progress Section */}
        <div className="mb-4">
          <ProgressBar progress={progress} color={isCompleted ? 'green' : 'blue'} />
          <p className="text-xs text-gray-500 mt-2">
            {completedModules} of {totalModules} modules completed
          </p>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{totalModules} modules</span>
          </div>
          {lastAccessed && (
            <div className="flex items-center gap-1">
              <Play className="w-4 h-4" />
              <span>{lastAccessed}</span>
            </div>
          )}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => onContinue(id)}
          className={`w-full py-2.5 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
            isCompleted
              ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          <Play className="w-4 h-4" />
          {isCompleted ? 'Review Course' : 'Continue Learning'}
        </button>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
