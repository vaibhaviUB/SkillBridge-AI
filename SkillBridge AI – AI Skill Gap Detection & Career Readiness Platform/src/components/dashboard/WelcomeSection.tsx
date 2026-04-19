import React from 'react';

interface WelcomeSectionProps {
  userName?: string;
  userType?: 'Student' | 'Professional';
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ 
  userName = 'User', 
  userType = 'Student' 
}) => {
  // Get current time for dynamic greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getMotivationalMessage = () => {
    if (userType === 'Student') {
      return 'Future AI Engineer 🚀';
    }
    return 'AI Professional 💼';
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white mb-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      {/* Content */}
      <div className="relative z-10">
        <p className="text-blue-100 text-sm font-medium mb-2">{getGreeting()},</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Welcome, {userName} 👋
        </h1>
        <p className="text-xl text-blue-100 mb-4">
          {getMotivationalMessage()}
        </p>
        <p className="text-blue-200 max-w-2xl leading-relaxed">
          Track your AI journey and become industry-ready. Start learning practical AI skills, 
          assess your knowledge, and prepare for technical interviews with AI-powered guidance.
        </p>
        
        {/* Quick Stats */}
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-blue-100 text-sm">Learning Path</span>
            <p className="font-bold text-lg">AI Mastery</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-blue-100 text-sm">Current Level</span>
            <p className="font-bold text-lg">Beginner</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-blue-100 text-sm">Days Active</span>
            <p className="font-bold text-lg">7 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
