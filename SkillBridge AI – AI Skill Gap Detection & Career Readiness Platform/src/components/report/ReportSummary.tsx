import React from 'react';

interface ReportSummaryProps {
  overallScore: number;
  strengths: string[];
  weaknesses: string[];
  message: string;
}

const ReportSummary: React.FC<ReportSummaryProps> = ({ 
  overallScore, 
  strengths,
  weaknesses,
  message 
}) => {
  const getReadinessLevel = (score: number) => {
    if (score >= 80) return { text: 'Job Ready', color: 'text-green-600' };
    if (score >= 60) return { text: 'Moderately Ready', color: 'text-yellow-600' };
    return { text: 'Needs Improvement', color: 'text-red-600' };
  };

  const readiness = getReadinessLevel(overallScore);

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-4">Overall Assessment</h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Readiness Level */}
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-white/80 text-sm mb-1">Job Readiness</p>
          <p className={`text-2xl font-bold ${readiness.color}`}>{readiness.text}</p>
        </div>
        
        {/* Strengths Count */}
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-white/80 text-sm mb-1">Strengths</p>
          <p className="text-2xl font-bold text-green-300">{strengths.length} Areas</p>
        </div>
        
        {/* Weaknesses Count */}
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-white/80 text-sm mb-1">Areas to Improve</p>
          <p className="text-2xl font-bold text-yellow-300">{weaknesses.length} Areas</p>
        </div>
      </div>
      
      {/* Summary Message */}
      <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm mb-6">
        <p className="text-white/90 leading-relaxed">{message}</p>
      </div>
      
      {/* Key Focus Areas */}
      {weaknesses.length > 0 && (
        <div>
          <p className="text-white/80 text-sm mb-2">Focus Areas:</p>
          <div className="flex flex-wrap gap-2">
            {weaknesses.map((weakness, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-white/20 rounded-full text-sm"
              >
                {weakness}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportSummary;
