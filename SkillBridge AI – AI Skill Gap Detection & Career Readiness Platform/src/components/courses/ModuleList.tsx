import React from 'react';
import { CheckCircle, Circle, Play, Lock } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  videoCount: number;
}

interface ModuleListProps {
  modules: Module[];
  onToggleComplete: (moduleId: string) => void;
  onPlayModule: (moduleId: string) => void;
}

const ModuleList: React.FC<ModuleListProps> = ({
  modules,
  onToggleComplete,
  onPlayModule
}) => {
  return (
    <div className="space-y-3">
      {modules.map((module, index) => (
        <div
          key={module.id}
          className={`bg-white rounded-lg border-2 transition-all duration-200 ${
            module.isCompleted
              ? 'border-green-200 bg-green-50'
              : module.isLocked
              ? 'border-gray-100 bg-gray-50 opacity-60'
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <div className="p-4">
            <div className="flex items-start gap-3">
              {/* Module Icon/Checkbox */}
              <button
                onClick={() => !module.isLocked && onToggleComplete(module.id)}
                disabled={module.isLocked}
                className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                  module.isCompleted
                    ? 'bg-green-500 text-white'
                    : module.isLocked
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-400 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {module.isCompleted ? (
                  <CheckCircle className="w-4 h-4" />
                ) : module.isLocked ? (
                  <Lock className="w-3 h-3" />
                ) : (
                  <Circle className="w-4 h-4" />
                )}
              </button>

              {/* Module Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-semibold ${module.isCompleted ? 'text-green-700' : 'text-gray-800'}`}>
                    Module {index + 1}: {module.title}
                  </h4>
                  <span className="text-xs text-gray-500">{module.duration}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{module.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    {module.videoCount} videos
                  </span>
                  {module.isLocked && (
                    <span className="text-orange-500 flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Complete previous module to unlock
                    </span>
                  )}
                </div>
              </div>

              {/* Play Button */}
              {!module.isLocked && (
                <button
                  onClick={() => onPlayModule(module.id)}
                  className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  {module.isCompleted ? 'Review' : 'Start'}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModuleList;
