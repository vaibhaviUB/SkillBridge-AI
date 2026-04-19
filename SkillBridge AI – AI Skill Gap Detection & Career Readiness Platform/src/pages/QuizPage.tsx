import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../components/assessment/QuestionCard';
import Timer from '../components/assessment/Timer';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

/**
 * QuizPage Component
 * Interactive quiz interface with timer and progress tracking
 */
export default function QuizPage() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [startTime] = useState(Date.now());

  // 10 AI Technical Questions
  const questions: Question[] = [
    {
      id: 1,
      question: "What is Prompt Engineering?",
      options: [
        "Writing code for AI models",
        "Crafting effective inputs to get desired outputs from AI models",
        "Building AI hardware",
        "Designing AI user interfaces"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which tool is commonly used for AI automation workflows?",
      options: [
        "Photoshop",
        "Zapier",
        "Excel",
        "PowerPoint"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What does LLM stand for in AI?",
      options: [
        "Low Level Machine",
        "Large Language Model",
        "Linear Learning Module",
        "Local Language Manager"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Which AI model powers ChatGPT?",
      options: [
        "BERT",
        "GPT (Generative Pre-trained Transformer)",
        "ResNet",
        "YOLO"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the primary use of AI in recruitment?",
      options: [
        "Making hiring decisions automatically",
        "Resume screening and candidate matching",
        "Conducting final interviews",
        "Setting salary packages"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "What is AI Automation?",
      options: [
        "Building robots",
        "Using AI to perform repetitive tasks without human intervention",
        "Creating AI models from scratch",
        "Manual data entry"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "In Machine Learning, what is Supervised Learning?",
      options: [
        "Learning without any data",
        "Learning from labeled training data",
        "Learning from unlabeled data",
        "Learning with human supervision only"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "What is an important ethical consideration in AI development?",
      options: [
        "Making AI as complex as possible",
        "Bias and fairness in AI decisions",
        "Using only open-source tools",
        "Avoiding documentation"
      ],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What does NLP stand for in AI?",
      options: [
        "Neural Language Processing",
        "Natural Language Processing",
        "Network Learning Protocol",
        "New Learning Paradigm"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "How is ROI typically measured for AI implementations in business?",
      options: [
        "Number of AI models created",
        "Cost savings, efficiency gains, and revenue improvement",
        "Lines of code written",
        "Number of employees trained"
      ],
      correctAnswer: 1
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Initialize selected answers array
  useEffect(() => {
    setSelectedAnswers(new Array(questions.length).fill(null));
  }, []);

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleTimeUp = () => {
    setIsTimerActive(false);
    handleSubmit();
  };

  const handleSubmit = () => {
    setIsQuizComplete(true);
    setIsTimerActive(false);
    
    // Calculate score
    let score = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });

    const percentage = Math.round((score / questions.length) * 100);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const duration = `${Math.floor(timeTaken / 60)}m ${timeTaken % 60}s`;

    // Determine feedback
    let feedback: string;
    let feedbackMessage: string;
    let status: 'Excellent' | 'Good' | 'Needs Improvement' | 'Poor';

    if (percentage >= 80) {
      feedback = 'Excellent! Interview Ready';
      feedbackMessage = 'You have strong AI knowledge. Keep practicing to stay sharp!';
      status = 'Excellent';
    } else if (percentage >= 60) {
      feedback = 'Good Progress! Keep Practicing';
      feedbackMessage = 'You have a good foundation. Review weak areas to improve.';
      status = 'Good';
    } else if (percentage >= 40) {
      feedback = 'Needs Improvement';
      feedbackMessage = 'Focus on core AI concepts and retake the assessment.';
      status = 'Needs Improvement';
    } else {
      feedback = 'Focus on Core Skills';
      feedbackMessage = 'Start with AI fundamentals and build your knowledge gradually.';
      status = 'Poor';
    }

    // Save attempt to history
    const attempt = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      score,
      totalQuestions: questions.length,
      percentage,
      status,
      duration
    };

    const existingAttempts = JSON.parse(localStorage.getItem('assessmentAttempts') || '[]');
    localStorage.setItem('assessmentAttempts', JSON.stringify([...existingAttempts, attempt]));

    // Navigate to results with state
    navigate('/assessment/result', { 
      state: { 
        score, 
        totalQuestions: questions.length, 
        percentage, 
        feedback,
        feedbackMessage,
        selectedAnswers,
        questions,
        duration
      } 
    });
  };

  const canNavigate = selectedAnswers[currentQuestionIndex] !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              AI Skill Assessment
            </h1>
            <p className="text-gray-600">Question {currentQuestionIndex + 1} of {questions.length}</p>
          </div>
          <Timer duration={900} onTimeUp={handleTimeUp} isActive={isTimerActive && !isQuizComplete} />
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswers[currentQuestionIndex]}
          onSelectAnswer={handleSelectAnswer}
          showResult={false}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ← Previous
          </button>

          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!canNavigate}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                canNavigate
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-lg transform hover:-translate-y-1'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Submit Quiz →
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!canNavigate}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                canNavigate
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transform hover:-translate-y-1'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Next →
            </button>
          )}
        </div>

        {/* Cancel Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              if (confirm('Are you sure you want to quit the quiz? Your progress will be lost.')) {
                navigate('/assessment');
              }
            }}
            className="text-red-600 hover:text-red-800 font-semibold transition-colors"
          >
            Quit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
