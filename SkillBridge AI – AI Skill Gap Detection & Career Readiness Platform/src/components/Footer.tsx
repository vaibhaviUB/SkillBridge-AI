// SkillBridge AI – Footer Component
// Includes social links, navigation, and copyright info

import { Link } from 'react-router-dom';
import {
  Brain,
  Mail,
  ArrowUpRight,
  Zap,
  Heart,
  Code2,
  MessageSquare,
  Video,
  Users
} from 'lucide-react';

// Footer navigation links
const footerLinks = {
  Platform: [
    { label: 'Home', path: '/' },
    { label: 'AI Planner', path: '/planner' },
    { label: 'Progress Tracker', path: '/progress' },
    { label: 'Login / Signup', path: '/auth' },
  ],
  Resources: [
    { label: 'AI Learning Paths', path: '#' },
    { label: 'Skill Assessments', path: '#' },
    { label: 'Interview Prep', path: '#' },
    { label: 'Skill-Gap Reports', path: '#' },
  ],
  Company: [
    { label: 'About Us', path: '#' },
    { label: 'Blog', path: '#' },
    { label: 'Careers', path: '#' },
    { label: 'Contact', path: '#' },
  ],
};

// Social media links
const socialLinks = [
  { icon: Code2, label: 'GitHub', href: 'https://github.com', color: 'hover:text-white' },
  { icon: MessageSquare, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-cyan-400' },
  { icon: Users, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-400' },
  { icon: Video, label: 'YouTube', href: 'https://youtube.com', color: 'hover:text-red-400' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@skillbridge.ai', color: 'hover:text-indigo-400' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080818] border-t border-white/5 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── Newsletter / CTA Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="glass rounded-2xl p-8 md:p-10 mb-14 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-cyan-600/10 rounded-2xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Ready to bridge your AI skill gap?
              </h3>
              <p className="text-slate-400 text-sm md:text-base">
                Join 10,000+ professionals accelerating their AI career journey.
              </p>
            </div>
            <Link
              to="/auth"
              className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/20 flex-shrink-0"
            >
              <Zap className="w-4 h-4" />
              Start for Free
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── Footer Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold gradient-text">SkillBridge</span>
                <span className="text-[10px] font-semibold text-cyan-400 tracking-widest uppercase">AI Platform</span>
              </div>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              AI-powered career readiness platform bridging the gap between AI learning and industry requirements.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/[0.08] flex items-center justify-center text-slate-500 ${color} transition-all duration-200 hover:bg-white/10 hover:scale-110`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="text-slate-500 text-sm hover:text-indigo-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            © {currentYear} SkillBridge AI. Made with
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            for India's tech future.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-600 text-xs hover:text-slate-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
