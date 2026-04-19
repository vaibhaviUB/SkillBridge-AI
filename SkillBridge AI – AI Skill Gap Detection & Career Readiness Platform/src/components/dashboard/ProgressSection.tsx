import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, color }) => {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-1">{label}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-full ${colorClasses[color]} flex items-center justify-center shadow-md`}>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

interface ProgressSectionProps {
  stats: {
    coursesCompleted: number;
    totalCourses: number;
    assessmentsTaken: number;
    readinessScore: number;
  };
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ stats }) => {
  const progressPercentage = (stats.coursesCompleted / stats.totalCourses) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-6">📊 Your Progress Overview</h3>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          label="Courses Completed"
          value={`${stats.coursesCompleted}/${stats.totalCourses}`}
          icon="📚"
          color="blue"
        />
        <StatCard
          label="Assessments Taken"
          value={stats.assessmentsTaken}
          icon="📝"
          color="purple"
        />
        <StatCard
          label="Readiness Score"
          value={`${stats.readinessScore}%`}
          icon="🎯"
          color="green"
        />
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Learning Progress</span>
          <span className="text-sm font-bold text-blue-600">{progressPercentage.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {stats.totalCourses - stats.coursesCompleted} courses remaining to complete your learning path
        </p>
      </div>
    </div>
  );
};

export default ProgressSection;
