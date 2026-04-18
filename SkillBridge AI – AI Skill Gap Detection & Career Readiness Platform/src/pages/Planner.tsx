import { useState } from 'react';

/**
 * Planner Page - AI Learning Path Planner
 * Allows users to plan their AI learning journey
 */
export default function Planner() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  // Learning paths data
  const learningPaths = [
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering',
      description: 'Master the art of crafting effective prompts for AI models',
      duration: '4 weeks',
      modules: 12,
      level: 'Beginner',
      color: 'from-violet-500 to-purple-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      id: 'ai-tools',
      title: 'AI Tools Mastery',
      description: 'Learn to use popular AI tools for productivity and automation',
      duration: '6 weeks',
      modules: 18,
      level: 'Intermediate',
      color: 'from-indigo-500 to-blue-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 'automation',
      title: 'Automation Workflows',
      description: 'Build automated workflows using AI and no-code tools',
      duration: '8 weeks',
      modules: 24,
      level: 'Advanced',
      color: 'from-blue-500 to-cyan-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: 'ml-fundamentals',
      title: 'ML Fundamentals',
      description: 'Understand machine learning concepts and applications',
      duration: '10 weeks',
      modules: 30,
      level: 'Intermediate',
      color: 'from-cyan-500 to-teal-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 'ai-interviews',
      title: 'AI Interview Prep',
      description: 'Prepare for technical interviews with AI-focused questions',
      duration: '4 weeks',
      modules: 15,
      level: 'All Levels',
      color: 'from-emerald-500 to-green-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'real-world-ai',
      title: 'Real-World AI Projects',
      description: 'Build portfolio projects with practical AI applications',
      duration: '12 weeks',
      modules: 36,
      level: 'Advanced',
      color: 'from-orange-500 to-red-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-violet-50">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Learning Path Planner
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your AI learning path and create a personalized roadmap to bridge your skill gap
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {learningPaths.map((path) => (
            <div
              key={path.id}
              onClick={() => setSelectedPath(path.id)}
              className={`cursor-pointer bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                selectedPath === path.id
                  ? 'border-violet-500 shadow-lg shadow-violet-100'
                  : 'border-gray-100 hover:border-violet-200'
              }`}
            >
              {/* Card Header */}
              <div className={`p-6 bg-gradient-to-r ${path.color} rounded-t-2xl`}>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white mb-4">
                  {path.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{path.title}</h3>
                <p className="text-white/80 text-sm">{path.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    path.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    path.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    path.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {path.level}
                  </span>
                  <span className="text-sm text-gray-500">{path.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold">{path.modules}</span> modules
                  </span>
                  <button className="text-violet-600 font-medium text-sm hover:text-violet-700 transition-colors">
                    {selectedPath === path.id ? 'Selected ✓' : 'Select Path →'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Path Details */}
        {selectedPath && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Selected Learning Path
              </h2>
              <button
                onClick={() => setSelectedPath(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="bg-violet-50 rounded-xl p-6 mb-6">
              <p className="text-violet-700">
                🎯 Great choice! This learning path will help you build practical AI skills 
                that are in high demand. Start your journey by creating an account or logging in.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
                Start Learning Path
              </button>
              <button className="flex-1 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300">
                View Detailed Curriculum
              </button>
            </div>
          </div>
        )}

        {/* Coming Soon Notice */}
        {!selectedPath && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Select a learning path above to get started with your personalized AI journey
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
