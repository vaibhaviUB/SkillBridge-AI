import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar Component
 * Responsive navigation bar with logo, menu items, and hamburger menu for mobile
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links with their routes
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Planner', path: '/planner' },
    { name: 'Progress', path: '/progress' },
  ];

  // Check if a link is active based on current path
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-violet-300 transition-shadow duration-300">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              SkillBridge AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-violet-100 text-violet-700'
                    : 'text-gray-600 hover:text-violet-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Login/Signup Button */}
            <Link
              to="/login"
              className={`ml-4 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/login') || isActive('/signup')
                  ? 'bg-violet-600 text-white'
                  : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-300'
              }`}
            >
              Login / Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-violet-100 text-violet-700'
                      : 'text-gray-600 hover:text-violet-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className={`mx-4 mt-2 px-4 py-3 rounded-lg text-sm font-medium text-center transition-all duration-200 ${
                  isActive('/login') || isActive('/signup')
                    ? 'bg-violet-600 text-white'
                    : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white'
                }`}
              >
                Login / Signup
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
