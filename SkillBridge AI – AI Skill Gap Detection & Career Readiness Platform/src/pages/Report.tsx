import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScoreGauge from '../components/report/ScoreGauge';
import SkillCard from '../components/report/SkillCard';
import WeakAreaCard from '../components/report/WeakAreaCard';
import SuggestionCard from '../components/report/SuggestionCard';
import ReportSummary from '../components/report/ReportSummary';

interface SkillData {
  name: string;
  score: number;
  status: 'Strong' | 'Average' | 'Weak';
  description: string;
}

interface WeakArea {
  skill: string;
  score: number;
  reason: string;
  impact: string;
}

interface Suggestion {
  skill: string;
  suggestions: string[];
  priority: 'High' | 'Medium' | 'Low';
  courseLink: string;
}

const Report: React.FC = () => {
  // Mock data - In real app, this would come from backend based on user's assessment + interview scores
  const assessmentScore = 70;
  const interviewScore = 65;
  const [jobReadinessScore, setJobReadinessScore] = useState<number>(0);
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [weakAreas, setWeakAreas] = useState<WeakArea[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    // Calculate job readiness score (average of assessment + interview)
    const readiness = Math.round((assessmentScore + interviewScore) / 2);
    setJobReadinessScore(readiness);

    // Generate skill data based on scores
    const skillData: SkillData[] = [
      {
        name: 'Prompt Engineering',
        score: assessmentScore - 10,
        status: assessmentScore - 10 >= 80 ? 'Strong' : assessmentScore - 10 >= 60 ? 'Average' : 'Weak',
        description: 'Ability to craft effective prompts for AI models'
      },
      {
        name: 'AI Tools Usage',
        score: assessmentScore,
        status: assessmentScore >= 80 ? 'Strong' : assessmentScore >= 60 ? 'Average' : 'Weak',
        description: 'Proficiency with ChatGPT, Copilot, and other AI tools'
      },
      {
        name: 'Automation Skills',
        score: assessmentScore - 5,
        status: assessmentScore - 5 >= 80 ? 'Strong' : assessmentScore - 5 >= 60 ? 'Average' : 'Weak',
        description: 'Creating automated workflows using AI'
      },
      {
        name: 'Technical Knowledge',
        score: Math.round((assessmentScore + interviewScore) / 2),
        status: Math.round((assessmentScore + interviewScore) / 2) >= 80 ? 'Strong' : Math.round((assessmentScore + interviewScore) / 2) >= 60 ? 'Average' : 'Weak',
        description: 'Understanding of AI concepts and implementations'
      },
      {
        name: 'Communication Skills',
        score: interviewScore,
        status: interviewScore >= 80 ? 'Strong' : interviewScore >= 60 ? 'Average' : 'Weak',
        description: 'Ability to articulate technical concepts clearly'
      },
      {
        name: 'Problem Solving',
        score: interviewScore + 5,
        status: interviewScore + 5 >= 80 ? 'Strong' : interviewScore + 5 >= 60 ? 'Average' : 'Weak',
        description: 'Analytical thinking and solution design'
      }
    ];
    setSkills(skillData);

    // Identify weak areas (score < 60)
    const weak: WeakArea[] = skillData
      .filter(s => s.score < 60)
      .map(s => ({
        skill: s.name,
        score: s.score,
        reason: s.name.includes('Communication') 
          ? 'Interview responses lacked depth and clarity' 
          : 'Low accuracy in assessment questions',
        impact: s.name.includes('Communication')
          ? 'May struggle in technical interviews'
          : 'Limited ability to leverage AI effectively'
      }));
    setWeakAreas(weak);

    // Generate suggestions for weak areas
    const sugg: Suggestion[] = weak.map(w => ({
      skill: w.skill,
      suggestions: getSuggestionsForSkill(w.skill),
      priority: w.score < 40 ? 'High' : 'Medium',
      courseLink: '/courses'
    }));
    setSuggestions(sugg);
  }, [assessmentScore, interviewScore]);

  const getSuggestionsForSkill = (skill: string): string[] => {
    switch (skill) {
      case 'Prompt Engineering':
        return [
          'Practice writing structured prompts with clear context',
          'Learn prompt engineering frameworks (ROLE, TASK, FORMAT)',
          'Take the "Prompt Engineering Mastery" course',
          'Experiment with different AI models'
        ];
      case 'AI Tools Usage':
        return [
          'Explore different AI tools hands-on',
          'Complete practical projects using AI',
          'Join AI tool communities and forums',
          'Follow AI tool updates and new features'
        ];
      case 'Automation Skills':
        return [
          'Learn Zapier, Make, or similar automation platforms',
          'Practice creating AI-powered workflows',
          'Study real-world automation case studies',
          'Build personal automation projects'
        ];
      case 'Technical Knowledge':
        return [
          'Study AI fundamentals and ML concepts',
          'Read technical documentation and whitepapers',
          'Practice coding with AI APIs',
          'Build AI-powered applications'
        ];
      case 'Communication Skills':
        return [
          'Practice mock interviews regularly',
          'Record and review your interview responses',
          'Learn STAR method for behavioral questions',
          'Join public speaking or toastmasters groups'
        ];
      case 'Problem Solving':
        return [
          'Practice coding challenges on LeetCode, HackerRank',
          'Study system design principles',
          'Work on real-world projects',
          'Participate in hackathons'
        ];
      default:
        return ['Continue learning and practicing'];
    }
  };

  const getSummaryMessage = (score: number): string => {
    if (score >= 80) {
      return "Congratulations! You are well-prepared for AI-related roles. Your strong performance in assessments and interviews demonstrates solid understanding. Continue refining your skills and start applying for positions.";
    } else if (score >= 60) {
      return "You are moderately prepared for AI-related roles. You have a good foundation but should focus on improving your weaker areas. With targeted practice, you can become job-ready soon.";
    } else {
      return "You need significant improvement to be job-ready. Don't worry - with dedicated learning and practice, you can build the required skills. Start with the suggested courses and retake assessments after studying.";
    }
  };

  const strengths = skills.filter(s => s.status === 'Strong').map(s => s.name);
  const weaknesses = skills.filter(s => s.status === 'Weak').map(s => s.name);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Skill Gap Analysis Report
          </h1>
          <p className="text-lg text-gray-600">
            Understand your strengths and improve your weaknesses
          </p>
        </div>

        {/* Top Section: Job Readiness Score */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <ScoreGauge score={jobReadinessScore} label="Job Readiness Score" size="large" />
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Your AI Career Readiness
              </h2>
              <p className="text-gray-600 mb-4 max-w-md">
                This score is calculated based on your assessment performance and 
                mock interview results. It represents your overall preparedness 
                for AI-related job roles.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-600">80-100% Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-sm text-gray-600">60-79% Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm text-gray-600">0-59% Needs Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Summary */}
        <div className="mb-8">
          <ReportSummary 
            overallScore={jobReadinessScore}
            strengths={strengths}
            weaknesses={weaknesses}
            message={getSummaryMessage(jobReadinessScore)}
          />
        </div>

        {/* Skills Analysis Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skill Analysis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                skillName={skill.name}
                score={skill.score}
                status={skill.status}
                description={skill.description}
              />
            ))}
          </div>
        </div>

        {/* Weak Areas Section */}
        {weakAreas.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Areas Needing Improvement
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {weakAreas.map((area, index) => (
                <WeakAreaCard
                  key={index}
                  skillName={area.skill}
                  score={area.score}
                  reason={area.reason}
                  impact={area.impact}
                />
              ))}
            </div>
          </div>
        )}

        {/* Improvement Suggestions */}
        {suggestions.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Improvement Suggestions
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {suggestions.map((suggestion, index) => (
                <SuggestionCard
                  key={index}
                  skillName={suggestion.skill}
                  suggestions={suggestion.suggestions}
                  priority={suggestion.priority}
                  courseLink={suggestion.courseLink}
                />
              ))}
            </div>
          </div>
        )}

        {/* No Weak Areas Message */}
        {weakAreas.length === 0 && (
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center mb-8">
            <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Excellent Performance!</h3>
            <p className="text-green-700">
              You have no significant weak areas. Keep practicing to maintain your skills!
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Explore Courses
          </Link>
          <Link
            to="/assessment"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Retake Assessment
          </Link>
          <Link
            to="/interview"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            Practice Interview
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Report;
