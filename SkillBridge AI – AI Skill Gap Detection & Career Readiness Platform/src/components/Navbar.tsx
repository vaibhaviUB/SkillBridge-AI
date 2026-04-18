// SkillBridge AI – Navbar Component
// Fixed navigation bar with responsive hamburger menu and active link highlighting

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Brain,
  Menu,
  X,
  Home,
  LayoutDashboard,
  TrendingUp,
  LogIn,
  Zap
} from 'lucide-react';

// Navigation links configuration
const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/planner', label: 'Planner', icon: LayoutDashboard },
  { path: '/progress', label: 'Progress', icon: TrendingUp },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position for navbar shadow/bg changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Check if a link is currently active
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ── Fixed Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'navbar-glass shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* ── Logo / Brand ── */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-110">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                {/* Animated glow dot */}
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-cyan-400 rounded-full border-2 border-[#0f0f23] animate-pulse" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold gradient-text tracking-tight">
                  SkillBridge
                </span>
                <span className="text-[10px] font-semibold text-cyan-400 tracking-widest uppercase">
                  AI Platform
                </span>
              </div>
            </Link>

            {/* ── Desktop Navigation Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive(path)
                      ? 'text-indigo-400 bg-indigo-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-colors duration-200 ${isActive(path) ? 'text-indigo-400' : 'text-slate-500 group-hover:text-white'}`} />
                  {label}
                  {/* Active underline indicator */}
                  {isActive(path) && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* ── Desktop CTA Buttons ── */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/auth"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/auth')
                    ? 'text-indigo-400 bg-indigo-500/10'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                to="/auth"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white hover:opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <Zap className="w-4 h-4" />
                Get Started
              </Link>
            </div>

            {/* ── Mobile Hamburger Button ── */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile Dropdown Menu ── */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="navbar-glass border-t border-white/5 px-4 py-4 space-y-1">
            {/* Mobile nav links */}
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(path)
                    ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
                {isActive(path) && (
                  <span className="ml-auto w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                )}
              </Link>
            ))}

            {/* Mobile auth buttons */}
            <div className="pt-3 border-t border-white/5 space-y-2">
              <Link
                to="/auth"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-300 border border-white/10 hover:bg-white/5 transition-all duration-200"
              >
                <LogIn className="w-4 h-4" />
                Login / Sign Up
              </Link>
              <Link
                to="/auth"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white hover:opacity-90 transition-all duration-200"
              >
                <Zap className="w-4 h-4" />
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 md:h-18" />
    </>
  );
}
