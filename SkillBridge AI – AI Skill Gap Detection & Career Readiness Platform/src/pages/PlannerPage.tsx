// SkillBridge AI – Planner Page
// AI Learning Path Planner – placeholder with preview of upcoming features

import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Brain,
  Code2,
  Zap,
  ArrowRight,
  Clock,
  Star,
  Lock,
  ChevronRight,
  Sparkles,
  Target,
  PlayCircle
} from 'lucide-react';

// ── Learning path modules (preview) ──
const learningPaths = [
  {
    id: 1,
    title: 'Prompt Engineering Mastery',
    description: 'Master the art of crafting effective AI prompts for ChatGPT, Claude, and Gemini.',
    icon: Brain,
    color: 'from-indigo-500 to-purple-600',
    borderColor: 'border-indigo-500/25',
    bgColor: 'from-indigo-500/10 to-indigo-600/5',
    iconColor: 'text-indigo-400',
    level: 'Beginner',
    levelColor: 'bg-emerald-500/15 text-emerald-400',
    duration: '8 hours',
    modules: 12,
    rating: 4.9,
    students: '3,240',
    tags: ['ChatGPT', 'Claude', 'Gemini'],
    locked: false,
  },
  {
    id: 2,
    title: 'AI Tools for Developers',
    description: 'Learn to integrate Copilot, Cursor, and AI APIs into real-world development workflows.',
    icon: Code2,
    color: 'from-purple-500 to-pink-600',
    borderColor: 'border-purple-500/25',
    bgColor: 'from-purple-500/10 to-purple-600/5',
    iconColor: 'text-purple-400',
    level: 'Intermediate',
    levelColor: 'bg-amber-500/15 text-amber-400',
    duration: '12 hours',
    modules: 18,
    rating: 4.8,
    students: '1,920',
    tags: ['GitHub Copilot', 'Cursor', 'OpenAI API'],
    locked: false,
  },
  {
    id: 3,
    title: 'Automation Workflows with AI',
    description: 'Build powerful automated workflows using Make, Zapier, and custom AI integrations.',
    icon: Zap,
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/25',
    bgColor: 'from-cyan-500/10 to-cyan-600/5',
    iconColor: 'text-cyan-400',
    level: 'Intermediate',
    levelColor: 'bg-amber-500/15 text-amber-400',
    duration: '10 hours',
    modules: 15,
    rating: 4.7,
    students: '1,540',
    tags: ['Make.com', 'Zapier', 'n8n'],
    locked: true,
  },
  {
    id: 4,
    title: 'Machine Learning Fundamentals',
    description: 'Understand core ML concepts, models, and how to apply them to real business problems.',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/25',
    bgColor: 'from-emerald-500/10 to-emerald-600/5',
    iconColor: 'text-emerald-400',
    level: 'Advanced',
    levelColor: 'bg-red-500/15 text-red-400',
    duration: '20 hours',
    modules: 24,
    rating: 4.9,
    students: '2,110',
    tags: ['Python', 'TensorFlow', 'Scikit-learn'],
    locked: true,
  },
];

// ── AI tools covered ──
const aiTools = [
  { name: 'ChatGPT', emoji: '🤖', color: 'bg-emerald-500/15 border-emerald-500/25 text-emerald-300' },
  { name: 'Claude', emoji: '🧠', color: 'bg-amber-500/15 border-amber-500/25 text-amber-300' },
  { name: 'Gemini', emoji: '✨', color: 'bg-blue-500/15 border-blue-500/25 text-blue-300' },
  { name: 'Copilot', emoji: '💻', color: 'bg-purple-500/15 border-purple-500/25 text-purple-300' },
  { name: 'Midjourney', emoji: '🎨', color: 'bg-pink-500/15 border-pink-500/25 text-pink-300' },
  { name: 'Make.com', emoji: '⚡', color: 'bg-indigo-500/15 border-indigo-500/25 text-indigo-300' },
  { name: 'LangChain', emoji: '🔗', color: 'bg-cyan-500/15 border-cyan-500/25 text-cyan-300' },
  { name: 'HuggingFace', emoji: '🤗', color: 'bg-yellow-500/15 border-yellow-500/25 text-yellow-300' },
];

export default function PlannerPage() {
  return (
    <div className="relative min-h-screen bg-[#0f0f23] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── Page Header ── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
            <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-300">AI Planner</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <LayoutDashboard className="w-5 h-5 text-white" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                  <Sparkles className="w-3 h-3" />
                  AI-Powered Learning
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
                Your AI Learning{' '}
                <span className="gradient-text">Planner</span>
              </h1>
              <p className="text-slate-400 text-base max-w-2xl">
                Structured AI learning paths designed to bridge your skill gap and make you industry-ready.
                Start with prompt engineering and advance to full AI workflow automation.
              </p>
            </div>

            <Link
              to="/auth"
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-500/20 w-fit"
            >
              <Zap className="w-4 h-4" />
              Unlock All Courses
            </Link>
          </div>
        </div>

        {/* ── Coming Soon Banner ── */}
        <div className="glass rounded-2xl p-5 border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-orange-500/5 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">🚀 Full AI Planner Coming in Task 2</h3>
              <p className="text-slate-400 text-xs mt-0.5">
                AI-personalized learning paths, adaptive assessments, and real-time skill tracking will be fully functional soon.
              </p>
            </div>
          </div>
          <Link
            to="/auth"
            className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition-colors sm:ml-auto"
          >
            Join Waitlist
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── AI Tools Covered ── */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-white mb-4">🛠 AI Tools You'll Master</h2>
          <div className="flex flex-wrap gap-2.5">
            {aiTools.map(({ name, emoji, color }) => (
              <div
                key={name}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-medium ${color} glass`}
              >
                <span>{emoji}</span>
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* ── Learning Path Cards ── */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            Learning Paths
          </h2>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {learningPaths.map(({ id, title, description, icon: Icon, color, borderColor, bgColor, iconColor, level, levelColor, duration, modules, rating, students, tags, locked }) => (
              <div
                key={id}
                className={`relative glass rounded-2xl p-6 border ${borderColor} bg-gradient-to-br ${bgColor} card-hover group overflow-hidden`}
              >
                {/* Lock overlay */}
                {locked && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl z-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-3 border border-white/15">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-semibold text-sm mb-3">Premium Content</p>
                      <Link
                        to="/auth"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition-opacity mx-auto w-fit"
                      >
                        <Zap className="w-3.5 h-3.5" />
                        Unlock Now
                      </Link>
                    </div>
                  </div>
                )}

                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${levelColor}`}>{level}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md text-xs bg-white/5 border border-white/8 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {modules} modules
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" />
                    {students} students
                  </span>
                </div>

                {/* CTA */}
                <button className={`flex items-center gap-2 w-full justify-center py-2.5 px-4 rounded-xl text-sm font-semibold border border-white/10 text-slate-300 hover:bg-white/5 transition-all duration-200 ${iconColor}`}>
                  <PlayCircle className="w-4 h-4" />
                  {locked ? 'Unlock & Start' : 'Start Learning'}
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Upcoming Features Preview ── */}
        <div className="glass rounded-2xl p-8 border border-white/8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-indigo-500/25">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            AI Planner Page — <span className="gradient-text">Coming in Task 2</span>
          </h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            The full AI Planner will feature personalized learning paths powered by Gemini AI,
            adaptive quiz modules, real-time progress tracking, and automated skill-gap detection.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {['AI-Personalized Paths', 'Adaptive Learning', 'Skill Detection', 'Progress Analytics', 'Interview Prep'].map((feature) => (
              <span key={feature} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                ✦ {feature}
              </span>
            ))}
          </div>
          <Link
            to="/auth"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            <Zap className="w-4 h-4" />
            Get Early Access
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
