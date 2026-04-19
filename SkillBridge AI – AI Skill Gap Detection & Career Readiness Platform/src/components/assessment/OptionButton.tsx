interface OptionButtonProps {
  option: string;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  showResult?: boolean;
  isCorrect?: boolean;
  userSelected?: boolean;
}

/**
 * OptionButton Component
 * Displays a single option button for multiple choice questions
 */
export default function OptionButton({ 
  option, 
  index, 
  isSelected, 
  onSelect,
  showResult = false,
  isCorrect = false,
  userSelected = false
}: OptionButtonProps) {
  // Determine button styling based on state
  let buttonStyle = 'border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 bg-white';
  
  if (showResult) {
    if (isCorrect) {
      buttonStyle = 'border-2 border-green-500 bg-green-50 text-green-800';
    } else if (userSelected && !isCorrect) {
      buttonStyle = 'border-2 border-red-500 bg-red-50 text-red-800';
    } else {
      buttonStyle = 'border-2 border-gray-200 bg-gray-50 text-gray-500';
    }
  } else if (isSelected) {
    buttonStyle = 'border-2 border-blue-500 bg-blue-50 text-blue-800';
  }

  return (
    <button
      onClick={onSelect}
      disabled={showResult}
      className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center gap-3 ${buttonStyle}`}
    >
      {/* Option Letter */}
      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
        showResult 
          ? isCorrect 
            ? 'bg-green-500 text-white' 
            : userSelected 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-300 text-gray-600'
          : isSelected 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 text-gray-600'
      }`}>
        {String.fromCharCode(65 + index)}
      </span>
      
      {/* Option Text */}
      <span className="flex-grow text-gray-800 font-medium">{option}</span>
      
      {/* Status Icon */}
      {showResult && isCorrect && (
        <span className="text-green-500 text-xl">✓</span>
      )}
      {showResult && userSelected && !isCorrect && (
        <span className="text-red-500 text-xl">✗</span>
      )}
    </button>
  );
}
