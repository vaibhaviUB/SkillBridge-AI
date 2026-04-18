// SkillBridge AI – Home / Landing Page
// Main landing page with hero, features, how it works, stats, and testimonials sections

import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  Brain,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  ChevronRight,
  PlayCircle,
  Award,
  Users,
  BookOpen,
  BarChart3,
  Shield,
  Sparkles,
  MessageSquare,
  Clock,
  Lightbulb
} from 'lucide-react';

// ── Stats data ──
const stats = [
  { value: '15L+', label: 'Engineering Graduates', sublabel: 'per year in India', icon: Users, color: 'from-indigo-500 to-purple-500' },
  { value: '$6B', label: 'AI Upskilling Market', sublabel: 'by 2027 globally', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
  { value: '3L+', label: 'Jobs Lost in 2024', sublabel: 'due to missing AI skills', icon: Target, color: 'from-cyan-500 to-blue-500' },
  { value: '94%', label: 'Placement Rate', sublabel: 'for our graduates', icon: Award, color: 'from-emerald-500 to-teal-500' },
];

// ── Features data ──
const features = [
  {
    icon: BookOpen,
    title: 'Structured AI Learning Paths',
    description: 'Master prompt engineering, AI tools, automation workflows, and real-world AI applications through curated learning modules.',
    color: 'from-indigo-500/20 to-indigo-600/5',
    iconColor: 'text-indigo-400',
    borderColor: 'border-indigo-500/20',
    badge: 'Learn',
    badgeColor: 'bg-indigo-500/15 text-indigo-400',
  },
  {
    icon: Brain,
    title: 'AI-Based Skill Assessments',
    description: 'Take AI-powered quizzes, coding challenges, and simulated HR interviews to evaluate your real-world readiness.',
    color: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    badge: 'Assess',
    badgeColor: 'bg-purple-500/15 text-purple-400',
  },
  {
    icon: BarChart3,
    title: 'Personalized Skill-Gap Reports',
    description: 'Get detailed skill-gap analysis with improvement suggestions and a step-by-step career roadmap to become industry-ready.',
    color: 'from-cyan-500/20 to-cyan-600/5',
    iconColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    badge: 'Prepare',
    badgeColor: 'bg-cyan-500/15 text-cyan-400',
  },
  {
    icon: MessageSquare,
    title: 'Simulated HR Interviews',
    description: 'Practice with AI-driven interview simulations that adapt to your skill level and provide real-time performance feedback.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    badge: 'Interview',
    badgeColor: 'bg-emerald-500/15 text-emerald-400',
  },
  {
    icon: Lightbulb,
    title: 'Real-World AI Projects',
    description: 'Build portfolio-worthy projects using industry-standard AI tools and frameworks that companies actually use in production.',
    color: 'from-amber-500/20 to-amber-600/5',
    iconColor: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    badge: 'Build',
    badgeColor: 'bg-amber-500/15 text-amber-400',
  },
  {
    icon: Shield,
    title: 'Career Readiness Score',
    description: 'Track your overall career readiness with a dynamic score that updates based on your learning progress and assessment results.',
    color: 'from-pink-500/20 to-pink-600/5',
    iconColor: 'text-pink-400',
    borderColor: 'border-pink-500/20',
    badge: 'Score',
    badgeColor: 'bg-pink-500/15 text-pink-400',
  },
];

// ── How it works steps ──
const steps = [
  {
    number: '01',
    icon: BookOpen,
    title: 'LEARN',
    subtitle: 'Access AI Learning Paths',
    description: 'Users access structured AI learning paths covering prompt engineering, AI tools, automation workflows, and real-world applications.',
    color: 'from-indigo-500 to-purple-600',
    glow: 'shadow-indigo-500/30',
    features: ['Prompt Engineering', 'AI Tools Mastery', 'Automation Workflows', 'Real-World Projects'],
  },
  {
    number: '02',
    icon: Brain,
    title: 'ASSESS',
    subtitle: 'AI-Powered Skill Testing',
    description: 'The platform conducts AI-based skill assessments, quizzes, and simulated HR interviews to evaluate your industry readiness.',
    color: 'from-purple-500 to-pink-600',
    glow: 'shadow-purple-500/30',
    features: ['Adaptive Quizzes', 'Mock Interviews', 'Code Challenges', 'Performance Analytics'],
  },
  {
    number: '03',
    icon: Target,
    title: 'PREPARE',
    subtitle: 'Get Industry-Ready',
    description: 'Based on performance, users receive a skill-gap report, improvement suggestions, and interview preparation guidance.',
    color: 'from-cyan-500 to-blue-600',
    glow: 'shadow-cyan-500/30',
    features: ['Skill-Gap Reports', 'Personalized Roadmap', 'Interview Coaching', 'Job-Ready Certificate'],
  },
];

// ── Testimonials ──
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'SDE at Amazon',
    avatar: '👩🏻‍💻',
    content: 'SkillBridge AI helped me identify exactly which AI skills I was missing. Got my dream job 3 months after joining!',
    rating: 5,
    company: 'Amazon',
    companyColor: 'text-amber-400',
  },
  {
    name: 'Rahul Verma',
    role: 'ML Engineer at Google',
    avatar: '👨🏽‍💻',
    content: 'The personalized skill-gap report was a game changer. I finally knew what to focus on instead of random learning.',
    rating: 5,
    company: 'Google',
    companyColor: 'text-blue-400',
  },
  {
    name: 'Anika Patel',
    role: 'AI Specialist at Microsoft',
    avatar: '👩🏾‍💻',
    content: 'The simulated HR interviews gave me so much confidence. The AI feedback was more detailed than my actual prep coaches!',
    rating: 5,
    company: 'Microsoft',
    companyColor: 'text-cyan-400',
  },
];

// ── Trusted companies ──
const companies = ['Google', 'Microsoft', 'Amazon', 'Infosys', 'TCS', 'Wipro', 'Flipkart', 'Zomato'];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#13112a] to-[#0a0a1a]" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-40" />

        {/* Background hero image */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left – Text Content */}
            <div className="text-center lg:text-left">
              {/* Alert badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 mb-6 text-xs font-medium">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-indigo-300">🚀 Over 3 Lakh Tech Jobs Lost Due to Missing AI Skills</span>
              </div>

              {/* Hero Title */}
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Bridge Your{' '}
                <span className="relative">
                  <span className="gradient-text">AI Skill Gap</span>
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-300">
                  Become Industry-Ready
                </span>
              </h1>

              {/* Hero Description */}
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Learn practical AI skills, assess your knowledge, and prepare for technical interviews with
                <span className="text-indigo-300 font-medium"> AI-powered personalized guidance</span>.
                From prompt engineering to real-world AI workflows.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Link
                  to="/auth"
                  className="btn-primary flex items-center gap-2 text-base px-8 py-4 rounded-xl w-full sm:w-auto justify-center"
                >
                  <Zap className="w-5 h-5" />
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-slate-300 border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-200 w-full sm:w-auto justify-center group">
                  <PlayCircle className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                {['No credit card required', 'Free forever plan', '10,000+ learners'].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Hero Illustration */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md mx-auto">
                {/* Glow ring behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />

                {/* Main illustration card */}
                <div className="relative glass rounded-3xl p-6 border border-indigo-500/20 animate-float">
                  <img
                    src="/images/hero-illustration.png"
                    alt="SkillBridge AI Illustration"
                    className="w-full h-72 object-cover rounded-2xl"
                  />

                  {/* Floating stat cards */}
                  <div className="absolute -top-4 -left-4 glass rounded-xl p-3 border border-indigo-500/30 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">AI Skills</p>
                        <p className="text-emerald-400 text-xs">+47% this month</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 glass rounded-xl p-3 border border-cyan-500/30 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Job Ready</p>
                        <p className="text-cyan-400 text-xs">94% success rate</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 glass rounded-xl p-3 border border-purple-500/30 shadow-lg">
                    <div className="flex flex-col items-center gap-1">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                      <p className="text-white font-bold text-xs">Score</p>
                      <p className="text-purple-400 font-black text-lg leading-none">87</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0f23] to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-16 bg-[#0f0f23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map(({ value, label, sublabel, icon: Icon, color }) => (
              <div key={label} className="glass rounded-2xl p-5 md:p-6 border border-white/5 card-hover text-center">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className={`text-2xl md:text-3xl font-black gradient-text mb-1`}>{value}</p>
                <p className="text-white text-sm font-semibold mb-0.5">{label}</p>
                <p className="text-slate-500 text-xs">{sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROBLEM STATEMENT SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-20 bg-[#0a0a1a] overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem side */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-500/15 text-red-400 border border-red-500/20 mb-5">
                ⚠️ The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                The AI Skills Crisis is
                <span className="text-red-400"> Real & Growing</span>
              </h2>
              <div className="space-y-4">
                {[
                  { stat: '3 Lakh+', text: 'tech professionals lost jobs in 2024 due to lack of AI skills', icon: '📉' },
                  { stat: '78%', text: 'of engineering curricula still focus on outdated theoretical concepts', icon: '📚' },
                  { stat: '92%', text: 'of companies require AI tool proficiency, but colleges don\'t teach it', icon: '🏢' },
                  { stat: '5x', text: 'faster AI adoption rate than skill development in the workforce', icon: '⚡' },
                ].map(({ stat, text, icon }) => (
                  <div key={stat} className="flex items-start gap-4 p-4 rounded-xl bg-white/3 border border-white/5 hover:border-red-500/20 transition-colors duration-200">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <span className="text-red-400 font-bold text-lg">{stat}</span>
                      <span className="text-slate-400 text-sm ml-2">{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution side */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 mb-5">
                ✅ Our Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                SkillBridge AI
                <span className="gradient-text"> Fills the Gap</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                Unlike traditional learning platforms, SkillBridge AI focuses on <strong className="text-white">practical AI tool usage</strong>,
                <strong className="text-white"> skill-gap detection</strong>, and <strong className="text-white">job-readiness evaluation</strong> in one integrated system.
              </p>
              <div className="space-y-3">
                {[
                  'Practical AI skills over theoretical concepts',
                  'Real-time skill gap detection & analysis',
                  'Simulated interviews with AI-powered feedback',
                  'Personalized learning roadmaps',
                  'Industry-aligned curriculum updated weekly',
                  'Direct placement connections with hiring companies',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                Start Bridging the Gap
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-24 bg-[#0f0f23] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Your 3-Step Journey to
              <span className="gradient-text"> AI Career Success</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              A structured, proven process designed to take you from skill-gap to job-ready in record time.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map(({ number, icon: Icon, title, subtitle, description, color, glow, features: stepFeatures }) => (
              <div key={number} className={`relative glass rounded-2xl p-6 border border-white/8 card-hover group overflow-hidden`}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                {/* Step number */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg ${glow}`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`text-5xl font-black text-white/5 leading-none`}>{number}</span>
                </div>

                {/* Content */}
                <div className="mb-1">
                  <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${color} text-white mb-2`}>
                    STEP {number} — {title}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{subtitle}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {stepFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-400">
                      <ChevronRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES GRID SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-24 bg-[#0a0a1a] overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/20 mb-5">
              <Zap className="w-3.5 h-3.5" />
              Platform Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Everything You Need to
              <span className="gradient-text"> Succeed in AI</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              A comprehensive suite of AI-powered tools designed to accelerate your career readiness.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {features.map(({ icon: Icon, title, description, color, iconColor, borderColor, badge, badgeColor }) => (
              <div
                key={title}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${color} border ${borderColor} card-hover group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl glass flex items-center justify-center border ${borderColor}`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${badgeColor}`}>{badge}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-indigo-200 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-24 bg-[#0f0f23] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/20 mb-5">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Loved by
              <span className="gradient-text"> 10,000+ Learners</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
              Join thousands of professionals who've already bridged their AI skill gap.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, avatar, content, rating, company, companyColor }) => (
              <div key={name} className="glass rounded-2xl p-6 border border-white/8 card-hover">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                  "{content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-xl">
                    {avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{name}</p>
                    <p className="text-slate-500 text-xs">
                      {role} •{' '}
                      <span className={companyColor}>{company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUSTED COMPANIES
      ══════════════════════════════════════ */}
      <section className="relative py-16 bg-[#0a0a1a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600 text-xs font-semibold tracking-widest uppercase mb-8">
            Our Learners Work At
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {companies.map((company) => (
              <div
                key={company}
                className="px-5 py-2.5 rounded-xl glass border border-white/5 text-slate-600 text-sm font-semibold hover:text-slate-400 hover:border-white/10 transition-all duration-200"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BUSINESS MODEL SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-20 bg-[#0f0f23] overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Flexible Plans for Every
              <span className="gradient-text"> Career Stage</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'For Students',
                icon: '🎓',
                price: 'Free / ₹999/mo',
                color: 'from-indigo-500/20 to-indigo-600/5',
                border: 'border-indigo-500/25',
                badge: 'Most Popular',
                badgeColor: 'bg-indigo-500 text-white',
                features: ['AI Learning Paths', 'Basic Assessments', 'Skill-Gap Report', 'Community Access'],
              },
              {
                title: 'For Professionals',
                icon: '💼',
                price: '₹2,999/mo',
                color: 'from-purple-500/20 to-purple-600/5',
                border: 'border-purple-500/25',
                badge: 'Best Value',
                badgeColor: 'bg-purple-500 text-white',
                features: ['Everything in Student', 'Mock HR Interviews', 'Job Placement Support', 'Career Coaching'],
              },
              {
                title: 'For Enterprises',
                icon: '🏢',
                price: 'Custom Pricing',
                color: 'from-cyan-500/20 to-cyan-600/5',
                border: 'border-cyan-500/25',
                badge: 'Enterprise',
                badgeColor: 'bg-cyan-500 text-white',
                features: ['Team Training Programs', 'Custom AI Workshops', 'Analytics Dashboard', 'Dedicated Support'],
              },
            ].map(({ title, icon, price, color, border, badge, badgeColor, features: planFeatures }) => (
              <div key={title} className={`glass rounded-2xl p-6 bg-gradient-to-br ${color} border ${border} card-hover relative overflow-hidden`}>
                <span className={`absolute top-4 right-4 px-2.5 py-1 rounded-lg text-xs font-bold ${badgeColor}`}>{badge}</span>
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                <p className="text-2xl font-black gradient-text mb-5">{price}</p>
                <ul className="space-y-2.5 mb-6">
                  {planFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/auth"
                  className="block text-center py-2.5 px-4 rounded-xl text-sm font-semibold border border-white/10 text-white hover:bg-white/5 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-24 bg-[#0a0a1a] overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-10 md:p-14 border border-indigo-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-cyan-600/10 rounded-3xl" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/30">
                <Brain className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Stop Losing Jobs to the
                <span className="gradient-text"> AI Skills Gap</span>
              </h2>

              <p className="text-slate-400 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join 10,000+ engineering students and professionals who are already bridging their AI skill gap
                and landing their dream tech jobs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/auth"
                  className="btn-primary flex items-center gap-2.5 text-base px-8 py-4 rounded-xl w-full sm:w-auto justify-center font-bold"
                >
                  <Zap className="w-5 h-5" />
                  Start Your AI Journey Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <p className="text-slate-600 text-xs mt-6 flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Takes less than 2 minutes to set up. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
