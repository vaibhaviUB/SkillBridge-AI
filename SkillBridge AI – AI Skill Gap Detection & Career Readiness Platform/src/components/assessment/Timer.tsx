import { useEffect, useState } from 'react';

interface TimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
  isActive: boolean;
}

/**
 * Timer Component
 * Displays a countdown timer for the quiz
 */
export default function Timer({ duration, onTimeUp, isActive }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft, onTimeUp]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Determine color based on time remaining
  const getTimeColor = () => {
    if (timeLeft <= 30) return 'text-red-600 bg-red-100 border-red-300';
    if (timeLeft <= 60) return 'text-orange-600 bg-orange-100 border-orange-300';
    return 'text-blue-600 bg-blue-100 border-blue-300';
  };

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 ${getTimeColor()}`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
    </div>
  );
}
