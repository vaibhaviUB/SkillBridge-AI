import React from 'react';

interface QuestionPanelProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  questionType: 'hr' | 'technical';
}

/**
 * QuestionPanel Component
 * Displays the current interview question with number indicator
 */
const QuestionPanel: React.FC<QuestionPanelProps> = ({
  questionNumber,
  totalQuestions,
  question,
  questionType,
}) => {
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
      {/* Progress Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-500">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            questionType === 'hr' 
              ? 'bg-blue-100 text-blue-700' 
              : 'bg-purple-100 text-purple-700'
          }`}>
            {questionType === 'hr' ? '🧑‍💼 HR Interview' : '💻 Technical Interview'}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ${
              questionType === 'hr' 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                : 'bg-gradient-to-r from-purple-500 to-purple-600'
            }`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
          {question}
        </h3>
      </div>

      {/* Tips */}
      <div className={`p-4 rounded-xl border ${
        questionType === 'hr' 
          ? 'bg-blue-50 border-blue-200' 
          : 'bg-purple-50 border-purple-200'
      }`}>
        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Tips for this question:
        </h4>
        <ul className="text-sm text-gray-600 space-y-1.5">
          {questionType === 'hr' ? (
            <>
              <li>• Be honest and authentic in your response</li>
              <li>• Use specific examples from your experience</li>
              <li>• Keep your answer concise but comprehensive (2-3 minutes)</li>
            </>
          ) : (
            <>
              <li>• Demonstrate your technical knowledge clearly</li>
              <li>• Include real-world examples if possible</li>
              <li>• Explain your thought process step by step</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default QuestionPanel;
