// SkillBridge AI – Progress Page
// Career Readiness Progress Tracker – preview with placeholder data

import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Award,
  Target,
  Brain,
  Code2,
  MessageSquare,
  BarChart3,
  ChevronRight,
  Zap,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  BookOpen
} from 'lucide-react';

// ── Skill Radar Data ──
const skillAreas = [
  { skill: 'Prompt Engineering', score: 72, max: 100, color: 'bg-indigo-500', textColor: 'text-indigo-400', icon: Brain },
  { skill: 'AI Tools Proficiency', score: 58, max: 100, color: 'bg-purple-500', textColor: 'text-purple-400', icon: Code2 },
  { skill: 'Automation Workflows', score: 45, max: 100, color: 'bg-cyan-500', textColor: 'text-cyan-400', icon: Zap },
  { skill: 'ML Fundamentals', score: 30, max: 100, color: 'bg-emerald-500', textColor: 'text-emerald-400', icon: BarChart3 },
  { skill: 'Interview Readiness', score: 65, max: 100, color: 'bg-amber-500', textColor: 'text-amber-400', icon: MessageSquare },
  { skill: 'Project Portfolio', score: 40, max: 100, color: 'bg-pink-500', textColor: 'text-pink-400', icon: Target },
];

// ── Achievement Badges ──
const badges = [
  { name: 'First Login', icon: '🚀', earned: true, color: 'border-emerald-500/30 bg-emerald-500/10' },
  { name: 'Prompt Pro', icon: '🧠', earned: true, color: 'border-indigo-500/30 bg-indigo-500/10' },
  { name: 'Quick Learner', icon: '⚡', earned: true, color: 'border-amber-500/30 bg-amber-500/10' },
  { name: 'AI Explorer', icon: '🔭', earned: false, color: 'border-white/10 bg-white/3' },
  { name: 'Code Master', icon: '💻', earned: false, color: 'border-white/10 bg-white/3' },
  { name: 'Interview Ready', icon: '🎯', earned: false, color: 'border-white/10 bg-white/3' },
];

// ── Recent Activity ──
const recentActivity = [
  { action: 'Completed', item: 'Prompt Engineering Module 3', time: '2 hours ago', icon: CheckCircle, iconColor: 'text-emerald-400' },
  { action: 'Scored 87%', item: 'AI Tools Quiz', time: '1 day ago', icon: Star, iconColor: 'text-amber-400' },
  { action: 'Started', item: 'Automation Workflows Path', time: '2 days ago', icon: BookOpen, iconColor: 'text-indigo-400' },
  { action: 'Earned Badge', item: 'Quick Learner Achievement', time: '3 days ago', icon: Award, iconColor: 'text-purple-400' },
  { action: 'Completed', item: 'AI Tools Proficiency Module 1', time: '4 days ago', icon: CheckCircle, iconColor: 'text-emerald-400' },
];

// ── Upcoming Assessments ──
const upcomingAssessments = [
  { title: 'Prompt Engineering Final Test', date: 'Tomorrow', difficulty: 'Medium', icon: Brain, color: 'text-indigo-400' },
  { title: 'AI Tools Practical Assessment', date: 'In 3 days', difficulty: 'Hard', icon: Code2, color: 'text-purple-400' },
  { title: 'Mock HR Interview Session', date: 'Next Week', difficulty: 'Expert', icon: MessageSquare, color: 'text-cyan-400' },
];

export default function ProgressPage() {
  const overallScore = 52; // Career readiness score out of 100

  return (
    <div className="relative min-h-screen bg-[#0f0f23] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-20 left-0 w-[350px] h-[350px] bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-cyan-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── Page Header ── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
            <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-300">Progress Tracker</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/20">
              <Sparkles className="w-3 h-3" />
              Career Readiness Tracker
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Your Progress{' '}
            <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-slate-400 text-base max-w-2xl">
            Track your AI skill development, monitor your career readiness score, and identify gaps to focus on.
          </p>
        </div>

        {/* ── Coming Soon Notice ── */}
        <div className="glass rounded-2xl p-5 border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-indigo-500/5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">📊 Full Analytics Coming in Task 2</h3>
              <p className="text-slate-400 text-xs mt-0.5">
                Real-time progress tracking with AI-powered skill gap analysis and personalized recommendations.
              </p>
            </div>
          </div>
          <Link to="/auth" className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors sm:ml-auto">
            Sign Up for Access
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── Top Stats Row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Career Readiness', value: `${overallScore}%`, icon: Shield, color: 'from-indigo-500 to-purple-500', sub: '+12% this week' },
            { label: 'Modules Completed', value: '7/24', icon: BookOpen, color: 'from-emerald-500 to-teal-500', sub: '3 in progress' },
            { label: 'Assessment Score', value: '74/100', icon: Target, color: 'from-amber-500 to-orange-500', sub: 'Avg. last 5 tests' },
            { label: 'Badges Earned', value: '3/12', icon: Award, color: 'from-purple-500 to-pink-500', sub: '9 more to unlock' },
          ].map(({ label, value, icon: Icon, color, sub }) => (
            <div key={label} className="glass rounded-2xl p-5 border border-white/8 card-hover text-center">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-3`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-xl md:text-2xl font-black gradient-text mb-0.5">{value}</p>
              <p className="text-white text-xs font-semibold mb-0.5">{label}</p>
              <p className="text-slate-500 text-xs">{sub}</p>
            </div>
          ))}
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          {/* ── Career Readiness Score Card ── */}
          <div className="lg:col-span-1 glass rounded-2xl p-6 border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/5">
            <h2 className="text-base font-bold text-white mb-5 flex items-center gap-2">
              <Shield className="w-4 h-4 text-indigo-400" />
              Career Readiness Score
            </h2>

            {/* Circular Progress */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-36 h-36">
                <svg className="w-36 h-36 -rotate-90" viewBox="0 0 144 144">
                  {/* Background circle */}
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="12"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${(overallScore / 100) * 377} 377`}
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-white">{overallScore}</span>
                  <span className="text-xs text-slate-500">out of 100</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-4">
              <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/15 text-amber-400">
                🔥 Developing — Keep Going!
              </span>
            </div>

            <p className="text-slate-500 text-xs text-center leading-relaxed">
              Complete more modules and assessments to increase your career readiness score.
            </p>
          </div>

          {/* ── Skill Breakdown ── */}
          <div className="lg:col-span-2 glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-base font-bold text-white mb-5 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              Skill Area Breakdown
              <span className="ml-auto text-xs text-slate-500 font-normal">Sample Preview</span>
            </h2>
            <div className="space-y-4">
              {skillAreas.map(({ skill, score, max, color, textColor, icon: Icon }) => (
                <div key={skill}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${textColor}`} />
                      <span className="text-sm text-slate-300 font-medium">{skill}</span>
                    </div>
                    <span className={`text-sm font-bold ${textColor}`}>{score}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${color} rounded-full transition-all duration-700`}
                      style={{ width: `${(score / max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/5">
              <p className="text-xs text-slate-600 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span className="text-indigo-400 font-medium">AI Insight:</span>
                Focus on "Automation Workflows" and "ML Fundamentals" to boost your career readiness score by 20+ points.
              </p>
            </div>
          </div>
        </div>

        {/* ── Second Content Row ── */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          {/* Recent Activity */}
          <div className="lg:col-span-2 glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-base font-bold text-white mb-5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              Recent Activity
            </h2>
            <div className="space-y-3">
              {recentActivity.map(({ action, item, time, icon: Icon, iconColor }, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/3 transition-colors duration-200">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className={`w-4 h-4 ${iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white">
                      <span className="text-slate-400">{action}: </span>
                      <span className="font-medium">{item}</span>
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="glass rounded-2xl p-6 border border-white/8">
            <h2 className="text-base font-bold text-white mb-5 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Badges
              <span className="ml-auto text-xs text-slate-600">3 / 12</span>
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {badges.map(({ name, icon, earned, color }) => (
                <div
                  key={name}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border ${color} ${!earned ? 'opacity-40' : ''} transition-opacity duration-200`}
                  title={name}
                >
                  <span className="text-2xl">{icon}</span>
                  <p className="text-xs text-slate-400 text-center leading-tight font-medium">{name}</p>
                  {earned && <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Upcoming Assessments ── */}
        <div className="glass rounded-2xl p-6 border border-white/8 mb-8">
          <h2 className="text-base font-bold text-white mb-5 flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-400" />
            Upcoming Assessments
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {upcomingAssessments.map(({ title, date, difficulty, icon: Icon, color }) => (
              <div key={title} className="p-4 rounded-xl bg-white/3 border border-white/5 hover:border-indigo-500/25 transition-colors duration-200 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{date}</p>
                    <span className={`text-xs font-semibold ${
                      difficulty === 'Medium' ? 'text-amber-400' :
                      difficulty === 'Hard' ? 'text-red-400' : 'text-purple-400'
                    }`}>{difficulty}</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-white mb-3">{title}</p>
                <button className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/25 transition-colors duration-200">
                  Prepare Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Full Progress CTA ── */}
        <div className="glass rounded-2xl p-8 border border-white/8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-indigo-600/5 to-cyan-600/8 rounded-2xl" />
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-500/25">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Progress Tracker — <span className="gradient-text">Full Features in Task 2</span>
            </h3>
            <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
              The complete Progress Dashboard will include AI-generated skill gap reports, weekly learning streaks,
              detailed analytics, and personalized improvement recommendations.
            </p>
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-white hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              <Zap className="w-4 h-4" />
              Start Tracking Progress
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
