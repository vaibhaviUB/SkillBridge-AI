/**
 * Progress Page - Track learning progress and skill assessments
 * Shows user's learning journey, completed modules, and skill gap analysis
 */
export default function Progress() {
  // Sample progress data (will be replaced with real data from backend)
  const progressData = {
    overallProgress: 45,
    completedModules: 18,
    totalModules: 40,
    assessmentsCompleted: 5,
    skillScore: 72,
  };

  // Skills breakdown
  const skills = [
    { name: 'Prompt Engineering', progress: 80, color: 'bg-violet-500' },
    { name: 'AI Tools', progress: 65, color: 'bg-indigo-500' },
    { name: 'Automation', progress: 45, color: 'bg-blue-500' },
    { name: 'ML Fundamentals', progress: 30, color: 'bg-cyan-500' },
    { name: 'Interview Prep', progress: 55, color: 'bg-emerald-500' },
  ];

  // Recent activities
  const recentActivities = [
    {
      type: 'completed',
      title: 'Completed: Introduction to Prompt Engineering',
      date: '2 hours ago',
      icon: '✓',
      color: 'text-green-600 bg-green-100',
    },
    {
      type: 'assessment',
      title: 'Assessment: AI Tools Quiz',
      date: 'Yesterday',
      score: '85%',
      icon: '📝',
      color: 'text-blue-600 bg-blue-100',
    },
    {
      type: 'started',
      title: 'Started: Automation Workflows Module 3',
      date: '2 days ago',
      icon: '▶',
      color: 'text-violet-600 bg-violet-100',
    },
    {
      type: 'achievement',
      title: 'Achievement: First Assessment Completed',
      date: '3 days ago',
      icon: '🏆',
      color: 'text-yellow-600 bg-yellow-100',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Your Progress Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Track your learning journey and monitor your skill development
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Overall Progress</span>
              <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900">{progressData.overallProgress}%</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-violet-600 to-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressData.overallProgress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Modules Done</span>
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {progressData.completedModules}
              <span className="text-lg text-gray-400 font-normal">/{progressData.totalModules}</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">Keep going!</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Assessments</span>
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900">{progressData.assessmentsCompleted}</p>
            <p className="text-sm text-gray-500 mt-2">Completed</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Skill Score</span>
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900">{progressData.skillScore}/100</p>
            <p className="text-sm text-emerald-600 mt-2">↑ 12% this week</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Breakdown */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Skills Breakdown</h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Gap Alert */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-amber-800">Skill Gap Detected</h3>
                  <p className="text-sm text-amber-700 mt-1">
                    Your ML Fundamentals score is below the industry standard. 
                    We recommend completing the ML Fundamentals learning path to improve your job readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                    <span className="text-lg">{activity.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                    {activity.score && (
                      <p className="text-xs font-semibold text-blue-600 mt-1">Score: {activity.score}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <button className="w-full mt-6 py-3 text-violet-600 font-medium hover:bg-violet-50 rounded-lg transition-colors">
              View All Activity →
            </button>
          </div>
        </div>

        {/* Login Prompt for New Users */}
        <div className="mt-8 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Track Your Real Progress</h2>
          <p className="text-violet-100 mb-6 max-w-xl mx-auto">
            Create an account or log in to save your progress, take assessments, 
            and receive personalized skill-gap reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-violet-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
              Create Account
            </button>
            <button className="px-6 py-3 bg-violet-700 text-white font-semibold rounded-xl hover:bg-violet-800 transition-all duration-300">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
