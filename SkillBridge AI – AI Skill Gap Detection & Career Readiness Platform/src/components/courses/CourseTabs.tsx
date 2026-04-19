import React from 'react';
import { BookOpen, Bookmark } from 'lucide-react';

interface CourseTabsProps {
  activeTab: 'all' | 'my';
  onTabChange: (tab: 'all' | 'my') => void;
  allCoursesCount: number;
  myCoursesCount: number;
}

const CourseTabs: React.FC<CourseTabsProps> = ({
  activeTab,
  onTabChange,
  allCoursesCount,
  myCoursesCount
}) => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-xl inline-flex">
      <button
        onClick={() => onTabChange('all')}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
          activeTab === 'all'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <BookOpen className="w-4 h-4" />
        All Courses
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          activeTab === 'all' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
        }`}>
          {allCoursesCount}
        </span>
      </button>
      <button
        onClick={() => onTabChange('my')}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
          activeTab === 'my'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <Bookmark className="w-4 h-4" />
        My Courses
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          activeTab === 'my' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
        }`}>
          {myCoursesCount}
        </span>
      </button>
    </div>
  );
};

export default CourseTabs;
