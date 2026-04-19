import OptionButton from './OptionButton';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
  showResult?: boolean;
}

/**
 * QuestionCard Component
 * Displays a single quiz question with multiple choice options
 */
export default function QuestionCard({ 
  question, 
  selectedAnswer, 
  onSelectAnswer,
  showResult = false 
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      {/* Question Number and Text */}
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
          Question {question.id}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
          {question.question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            index={index}
            isSelected={selectedAnswer === index}
            onSelect={() => onSelectAnswer(index)}
            showResult={showResult}
            isCorrect={index === question.correctAnswer}
            userSelected={selectedAnswer === index}
          />
        ))}
      </div>
    </div>
  );
}
