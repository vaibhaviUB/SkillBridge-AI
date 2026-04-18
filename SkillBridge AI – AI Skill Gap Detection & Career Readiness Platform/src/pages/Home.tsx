import { Link } from 'react-router-dom';

/**
 * Home Page - Landing Page for SkillBridge AI
 * Features hero section, features overview, and call-to-action
 */
export default function Home() {
  // Feature cards data
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Learn',
      description: 'Access structured AI learning paths covering prompt engineering, AI tools, automation workflows, and real-world applications.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Assess',
      description: 'Take AI-based skill assessments, quizzes, and simulated HR interviews to evaluate your readiness for the industry.',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Prepare',
      description: 'Receive personalized skill-gap reports, improvement suggestions, and interview preparation guidance.',
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  // Stats data
  const stats = [
    { value: '15 Lakh+', label: 'Engineering Graduates/Year' },
    { value: '$6 Billion', label: 'AI Upskilling Market by 2027' },
    { value: '3 Lakh+', label: 'Tech Jobs Lost in 2024' },
    { value: '100+', 'label': 'AI Skills Covered' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse" />
              AI-Powered Career Readiness Platform
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Bridge Your{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                AI Skill Gap
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Learn practical AI skills, assess your knowledge, and prepare for technical interviews 
              with AI-powered guidance. Join thousands of students and professionals transforming their careers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/signup"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-300 hover:shadow-xl hover:shadow-violet-400 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started Free
              </Link>
              <Link
                to="/planner"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-all duration-300"
              >
                Explore Learning Paths
              </Link>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="mt-16 relative">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-200 border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-white text-sm font-medium ml-4">SkillBridge AI Dashboard</span>
                </div>
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Dashboard Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Skill Progress</h3>
                      <p className="text-3xl font-bold text-violet-600">78%</p>
                      <p className="text-sm text-gray-500 mt-1">+12% this week</p>
                    </div>
                    {/* Dashboard Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Assessments</h3>
                      <p className="text-3xl font-bold text-indigo-600">12</p>
                      <p className="text-sm text-gray-500 mt-1">Completed</p>
                    </div>
                    {/* Dashboard Card 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Job Ready</h3>
                      <p className="text-3xl font-bold text-cyan-600">85%</p>
                      <p className="text-sm text-gray-500 mt-1">Industry Score</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How SkillBridge AI Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our three-step process helps you learn, assess, and prepare for your AI career journey
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Career?
              </h2>
              <p className="text-lg text-violet-100 mb-8 max-w-2xl mx-auto">
                Join thousands of students and professionals who are bridging their AI skill gap 
                and landing their dream jobs.
              </p>
              <Link
                to="/signup"
                className="inline-block px-8 py-4 bg-white text-violet-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Your Journey Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
