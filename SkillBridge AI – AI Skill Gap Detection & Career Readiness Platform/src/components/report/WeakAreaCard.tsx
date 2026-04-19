import React from 'react';

interface WeakAreaCardProps {
  skillName: string;
  score: number;
  reason: string;
  impact: string;
}

const WeakAreaCard: React.FC<WeakAreaCardProps> = ({ 
  skillName, 
  score, 
  reason,
  impact 
}) => {
  return (
    <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200 hover:border-red-300 transition-colors">
      <div className="flex items-start gap-3">
        {/* Warning icon */}
        <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-red-800 text-lg">{skillName}</h4>
            <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium">
              {score}%
            </span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-medium">Why:</span>
              <p className="text-red-700 text-sm">{reason}</p>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-red-600 font-medium">Impact:</span>
              <p className="text-red-700 text-sm">{impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeakAreaCard;
