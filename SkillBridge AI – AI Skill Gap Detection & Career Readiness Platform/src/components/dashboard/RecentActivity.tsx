import React from 'react';

interface Activity {
  id: number;
  type: 'course' | 'assessment' | 'interview' | 'achievement';
  title: string;
  description: string;
  time: string;
  icon: string;
  color: string;
}

interface RecentActivityProps {
  activities?: Activity[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities = defaultActivities }) => {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">🕐 Recent Activity</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className={`w-10 h-10 rounded-full ${colorClasses[activity.color]} flex items-center justify-center flex-shrink-0`}>
              <span className="text-lg">{activity.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-800 font-medium truncate">{activity.title}</p>
              <p className="text-gray-500 text-sm truncate">{activity.description}</p>
              <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Default activities for demo
const defaultActivities: Activity[] = [
  {
    id: 1,
    type: 'course',
    title: 'Completed: Prompt Engineering Basics',
    description: 'Finished Module 1 of AI Fundamentals',
    time: '2 hours ago',
    icon: '✅',
    color: 'green',
  },
  {
    id: 2,
    type: 'assessment',
    title: 'Assessment: AI Tools Quiz',
    description: 'Scored 85% in AI Tools assessment',
    time: '5 hours ago',
    icon: '📝',
    color: 'blue',
  },
  {
    id: 3,
    type: 'course',
    title: 'Started: Automation Workflows',
    description: 'Beginning Module 3 of learning path',
    time: '1 day ago',
    icon: '🚀',
    color: 'purple',
  },
  {
    id: 4,
    type: 'achievement',
    title: 'Achievement Unlocked!',
    description: '7-Day Learning Streak',
    time: '2 days ago',
    icon: '🏆',
    color: 'orange',
  },
];

export default RecentActivity;
