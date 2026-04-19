import React from 'react';
import { ArrowLeft, Clock, BookOpen, Star, CheckCircle } from 'lucide-react';
import ProgressBar from './ProgressBar';
import ModuleList from './ModuleList';

interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  videoCount: number;
}

interface CourseDetailProps {
  course: {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    duration: string;
    rating: number;
    modules: number;
    enrolledDate: string;
  };
  progress: number;
  completedModules: number;
  totalModules: number;
  modules: Module[];
  onBack: () => void;
  onToggleComplete: (moduleId: string) => void;
  onPlayModule: (moduleId: string) => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({
  course,
  progress,
  completedModules,
  totalModules,
  modules,
  onBack,
  onToggleComplete,
  onPlayModule
}) => {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Courses
      </button>

      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3">
              {course.difficulty}
            </span>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-white/80 max-w-2xl">{course.description}</p>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">{progress}%</div>
              <div className="text-sm text-white/80">Complete</div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Duration</span>
          </div>
          <div className="text-lg font-bold text-gray-800">{course.duration}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm">Modules</span>
          </div>
          <div className="text-lg font-bold text-gray-800">{totalModules}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-sm">Rating</span>
          </div>
          <div className="text-lg font-bold text-gray-800">{course.rating}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm">Completed</span>
          </div>
          <div className="text-lg font-bold text-gray-800">{completedModules}/{totalModules}</div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Progress</h2>
        <ProgressBar progress={progress} size="lg" color={progress === 100 ? 'green' : 'blue'} />
        <p className="text-sm text-gray-600 mt-3">
          {completedModules} of {totalModules} modules completed
          {progress === 100 && (
            <span className="text-green-600 font-semibold ml-2">
              🎉 Course Completed!
            </span>
          )}
        </p>
      </div>

      {/* Modules List */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Course Modules</h2>
        <ModuleList
          modules={modules}
          onToggleComplete={onToggleComplete}
          onPlayModule={onPlayModule}
        />
      </div>
    </div>
  );
};

export default CourseDetail;
