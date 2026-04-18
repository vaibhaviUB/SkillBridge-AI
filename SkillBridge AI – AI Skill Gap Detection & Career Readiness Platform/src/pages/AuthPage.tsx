// SkillBridge AI – Login / Signup Page
// Authentication page with tabbed Login and Signup forms, validation, and console logging

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Zap,
  Sparkles,
  ChevronRight,
  Shield
} from 'lucide-react';

// ── Form field types ──
interface LoginForm {
  email: string;
  password: string;
}

interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

// ── Email validation helper ──
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// ── Password strength checker ──
const getPasswordStrength = (password: string): { label: string; color: string; width: string } => {
  if (password.length === 0) return { label: '', color: '', width: '0%' };
  if (password.length < 6) return { label: 'Too Short', color: 'bg-red-500', width: '20%' };
  if (password.length < 8) return { label: 'Weak', color: 'bg-orange-500', width: '40%' };
  if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) return { label: 'Medium', color: 'bg-amber-500', width: '60%' };
  if (!/[!@#$%^&*]/.test(password)) return { label: 'Strong', color: 'bg-emerald-500', width: '80%' };
  return { label: 'Very Strong', color: 'bg-green-500', width: '100%' };
};

export default function AuthPage() {
  // ── State ──
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // Login form state
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' });

  // Signup form state
  const [signupForm, setSignupForm] = useState<SignupForm>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  // Password strength
  const pwStrength = getPasswordStrength(
    activeTab === 'login' ? loginForm.password : signupForm.password
  );

  // ── Validate Login Form ──
  const validateLogin = (): boolean => {
    const newErrors: FormErrors = {};
    if (!loginForm.email) newErrors.email = 'Email is required';
    else if (!isValidEmail(loginForm.email)) newErrors.email = 'Please enter a valid email';
    if (!loginForm.password) newErrors.password = 'Password is required';
    else if (loginForm.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Validate Signup Form ──
  const validateSignup = (): boolean => {
    const newErrors: FormErrors = {};
    if (!signupForm.name.trim()) newErrors.name = 'Full name is required';
    else if (signupForm.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!signupForm.email) newErrors.email = 'Email is required';
    else if (!isValidEmail(signupForm.email)) newErrors.email = 'Please enter a valid email';
    if (!signupForm.password) newErrors.password = 'Password is required';
    else if (signupForm.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!signupForm.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (signupForm.password !== signupForm.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!signupForm.agreeToTerms) newErrors.agreeToTerms = 'Please accept the terms and conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── Handle Login Submit ──
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateLogin()) return;
    // Console log for Task 1 (backend integration in future tasks)
    console.log('🔐 SkillBridge AI – Login Attempt:', {
      email: loginForm.email,
      timestamp: new Date().toISOString(),
      action: 'LOGIN_SUBMIT',
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // ── Handle Signup Submit ──
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateSignup()) return;
    // Console log for Task 1 (backend integration in future tasks)
    console.log('📝 SkillBridge AI – Signup Attempt:', {
      name: signupForm.name,
      email: signupForm.email,
      timestamp: new Date().toISOString(),
      action: 'SIGNUP_SUBMIT',
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // ── Tab Switch Handler ──
  const switchTab = (tab: 'login' | 'signup') => {
    setActiveTab(tab);
    setErrors({});
    setIsSubmitted(false);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  // ── Input Error Component ──
  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? (
      <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
        <AlertCircle className="w-3.5 h-3.5" />
        {errors[field]}
      </p>
    ) : null;

  return (
    <div className="relative min-h-screen bg-[#0a0a1a] flex items-center justify-center overflow-hidden py-12 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-5xl mx-auto">

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-6 justify-center">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-300">{activeTab === 'login' ? 'Login' : 'Sign Up'}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* ── Left Panel – Branding ── */}
          <div className="hidden lg:flex flex-col justify-center">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-indigo-500/30">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-black gradient-text">SkillBridge AI</h2>
                <p className="text-slate-500 text-xs">Career Readiness Platform</p>
              </div>
            </div>

            <h1 className="text-3xl font-black text-white mb-4 leading-tight">
              {activeTab === 'login' ? (
                <>Welcome Back! <span className="gradient-text">Keep Learning.</span></>
              ) : (
                <>Start Your <span className="gradient-text">AI Career Journey.</span></>
              )}
            </h1>

            <p className="text-slate-400 text-base leading-relaxed mb-8">
              {activeTab === 'login'
                ? 'Log back in to continue your AI skill learning journey and track your career readiness progress.'
                : 'Join 10,000+ engineers and professionals who are bridging their AI skill gap and landing dream jobs.'}
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {[
                { icon: '🧠', text: 'AI-powered personalized learning paths' },
                { icon: '📊', text: 'Real-time skill gap detection & analysis' },
                { icon: '🎯', text: 'Simulated HR interviews with AI feedback' },
                { icon: '🏆', text: 'Industry-recognized career readiness certificate' },
                { icon: '💼', text: 'Direct placement support with top companies' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="text-lg">{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              {[
                { icon: Shield, text: '256-bit Encryption' },
                { icon: CheckCircle, text: 'GDPR Compliant' },
                { icon: Sparkles, text: 'AI-Powered' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Icon className="w-3.5 h-3.5 text-indigo-400" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Panel – Auth Form ── */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="glass rounded-3xl border border-white/8 overflow-hidden">

              {/* Tab Switcher */}
              <div className="flex border-b border-white/8">
                <button
                  onClick={() => switchTab('login')}
                  className={`flex-1 py-4 text-sm font-semibold transition-all duration-200 relative ${
                    activeTab === 'login'
                      ? 'text-white bg-indigo-500/10'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Login
                  {activeTab === 'login' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
                  )}
                </button>
                <button
                  onClick={() => switchTab('signup')}
                  className={`flex-1 py-4 text-sm font-semibold transition-all duration-200 relative ${
                    activeTab === 'signup'
                      ? 'text-white bg-indigo-500/10'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  Sign Up
                  {activeTab === 'signup' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
                  )}
                </button>
              </div>

              {/* Form Area */}
              <div className="p-7">
                {/* Success Message */}
                {isSubmitted && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 mb-5">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-emerald-300 text-sm font-semibold">
                        {activeTab === 'login' ? 'Login Successful! 🎉' : 'Account Created! 🎉'}
                      </p>
                      <p className="text-emerald-500 text-xs mt-0.5">
                        {activeTab === 'login'
                          ? 'Check the browser console — backend integration coming in Task 2!'
                          : 'Your data was logged to the console. Backend coming in Task 2!'}
                      </p>
                    </div>
                  </div>
                )}

                {/* ── LOGIN FORM ── */}
                {activeTab === 'login' && (
                  <form onSubmit={handleLoginSubmit} className="space-y-4" noValidate>
                    <div className="text-center mb-5 lg:hidden">
                      <h2 className="text-xl font-bold text-white">Welcome Back!</h2>
                      <p className="text-slate-500 text-sm mt-1">Sign in to continue your journey</p>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500 pointer-events-none w-4 h-4" />
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={loginForm.email}
                          onChange={(e) => {
                            setLoginForm({ ...loginForm, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          className={`input-field pl-10 ${errors.email ? 'input-error' : ''}`}
                          autoComplete="email"
                        />
                      </div>
                      <FieldError field="email" />
                    </div>

                    {/* Password Field */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-sm font-medium text-slate-300">Password</label>
                        <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                          Forgot password?
                        </a>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          value={loginForm.password}
                          onChange={(e) => {
                            setLoginForm({ ...loginForm, password: e.target.value });
                            if (errors.password) setErrors({ ...errors, password: '' });
                          }}
                          className={`input-field pl-10 pr-10 ${errors.password ? 'input-error' : ''}`}
                          autoComplete="current-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                          aria-label="Toggle password visibility"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      <FieldError field="password" />
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        className="w-4 h-4 rounded border-white/20 accent-indigo-500"
                      />
                      <label htmlFor="rememberMe" className="text-sm text-slate-400 cursor-pointer">
                        Remember me for 30 days
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2.5 py-3.5 text-sm font-bold mt-2"
                    >
                      <Zap className="w-4.5 h-4.5 w-4 h-4" />
                      Sign In to SkillBridge AI
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Divider */}
                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/8" />
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-3 bg-[#1a1a3e] text-slate-600">or continue with</span>
                      </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Google', emoji: '🔵' },
                        { label: 'GitHub', emoji: '⚫' },
                      ].map(({ label, emoji }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => console.log(`${label} OAuth – Coming in Task 2`)}
                          className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-slate-400 text-sm font-medium hover:bg-white/5 hover:text-white transition-all duration-200"
                        >
                          <span>{emoji}</span>
                          {label}
                        </button>
                      ))}
                    </div>

                    <p className="text-center text-xs text-slate-600 mt-2">
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={() => switchTab('signup')}
                        className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                      >
                        Create one free
                      </button>
                    </p>
                  </form>
                )}

                {/* ── SIGNUP FORM ── */}
                {activeTab === 'signup' && (
                  <form onSubmit={handleSignupSubmit} className="space-y-4" noValidate>
                    <div className="text-center mb-5 lg:hidden">
                      <h2 className="text-xl font-bold text-white">Create Account</h2>
                      <p className="text-slate-500 text-sm mt-1">Join 10,000+ AI learners</p>
                    </div>

                    {/* Full Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Your full name"
                          value={signupForm.name}
                          onChange={(e) => {
                            setSignupForm({ ...signupForm, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          className={`input-field pl-10 ${errors.name ? 'input-error' : ''}`}
                          autoComplete="name"
                        />
                      </div>
                      <FieldError field="name" />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={signupForm.email}
                          onChange={(e) => {
                            setSignupForm({ ...signupForm, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          className={`input-field pl-10 ${errors.email ? 'input-error' : ''}`}
                          autoComplete="email"
                        />
                      </div>
                      <FieldError field="email" />
                    </div>

                    {/* Password Field */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Min. 8 characters"
                          value={signupForm.password}
                          onChange={(e) => {
                            setSignupForm({ ...signupForm, password: e.target.value });
                            if (errors.password) setErrors({ ...errors, password: '' });
                          }}
                          className={`input-field pl-10 pr-10 ${errors.password ? 'input-error' : ''}`}
                          autoComplete="new-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                          aria-label="Toggle password visibility"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {/* Password strength bar */}
                      {signupForm.password && (
                        <div className="mt-1.5">
                          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${pwStrength.color} rounded-full transition-all duration-300`}
                              style={{ width: pwStrength.width }}
                            />
                          </div>
                          <p className={`text-xs mt-1 ${pwStrength.color.replace('bg-', 'text-')}`}>
                            {pwStrength.label}
                          </p>
                        </div>
                      )}
                      <FieldError field="password" />
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Repeat your password"
                          value={signupForm.confirmPassword}
                          onChange={(e) => {
                            setSignupForm({ ...signupForm, confirmPassword: e.target.value });
                            if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
                          }}
                          className={`input-field pl-10 pr-10 ${errors.confirmPassword ? 'input-error' : ''}`}
                          autoComplete="new-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                          aria-label="Toggle confirm password visibility"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        {/* Password match indicator */}
                        {signupForm.confirmPassword && signupForm.password === signupForm.confirmPassword && (
                          <CheckCircle className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                        )}
                      </div>
                      <FieldError field="confirmPassword" />
                    </div>

                    {/* Terms Checkbox */}
                    <div>
                      <div className="flex items-start gap-2.5">
                        <input
                          type="checkbox"
                          id="agreeToTerms"
                          checked={signupForm.agreeToTerms}
                          onChange={(e) => {
                            setSignupForm({ ...signupForm, agreeToTerms: e.target.checked });
                            if (errors.agreeToTerms) setErrors({ ...errors, agreeToTerms: '' });
                          }}
                          className="w-4 h-4 rounded border-white/20 accent-indigo-500 mt-0.5 flex-shrink-0"
                        />
                        <label htmlFor="agreeToTerms" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                          I agree to the{' '}
                          <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                      <FieldError field="agreeToTerms" />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2.5 py-3.5 text-sm font-bold mt-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      Create My Free Account
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Divider */}
                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/8" />
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-3 bg-[#1a1a3e] text-slate-600">or sign up with</span>
                      </div>
                    </div>

                    {/* Social Signup Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Google', emoji: '🔵' },
                        { label: 'GitHub', emoji: '⚫' },
                      ].map(({ label, emoji }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => console.log(`${label} OAuth – Coming in Task 2`)}
                          className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-slate-400 text-sm font-medium hover:bg-white/5 hover:text-white transition-all duration-200"
                        >
                          <span>{emoji}</span>
                          {label}
                        </button>
                      ))}
                    </div>

                    <p className="text-center text-xs text-slate-600 mt-2">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => switchTab('login')}
                        className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                      >
                        Sign in instead
                      </button>
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Compliance notes */}
            <p className="text-center text-xs text-slate-700 mt-4 flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-indigo-600" />
              Your data is encrypted and never sold. GDPR compliant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
