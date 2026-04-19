import React from 'react';

interface AnswerInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
}

/**
 * AnswerInput Component
 * Textarea for users to type their interview answers
 */
const AnswerInput: React.FC<AnswerInputProps> = ({
  value,
  onChange,
  placeholder = "Type your answer here...",
  maxLength = 1000,
  disabled = false,
}) => {
  const characterCount = value.length;
  const isNearLimit = characterCount > maxLength * 0.9;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <label className="block mb-3">
        <span className="text-sm font-semibold text-gray-700 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Your Answer:
        </span>
      </label>
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        rows={6}
        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none ${
          disabled 
            ? 'bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed' 
            : 'border-gray-200 hover:border-gray-300'
        } ${
          isNearLimit ? 'border-orange-300 focus:ring-orange-500 focus:border-orange-500' : ''
        }`}
      />
      
      {/* Character Counter */}
      <div className="flex items-center justify-between mt-3">
        <span className={`text-sm ${
          isNearLimit ? 'text-orange-600 font-medium' : 'text-gray-500'
        }`}>
          {characterCount} / {maxLength} characters
        </span>
        {isNearLimit && (
          <span className="text-xs text-orange-600 font-medium">
            Approaching limit
          </span>
        )}
      </div>
      
      {/* Helper Text */}
      <p className="text-xs text-gray-500 mt-2">
        💡 Tip: Aim for 150-300 characters for a well-structured answer
      </p>
    </div>
  );
};

export default AnswerInput;
