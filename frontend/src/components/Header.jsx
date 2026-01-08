import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { companyInfo } from '../mock';

// Import logo image
import logoImage from './images/logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            {!logoError ? (
              <>
                <div className="h-14 w-14 transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md">
                  <img 
                    src={logoImage} 
                    alt="GenYuga Logo" 
                    className="h-full w-full object-contain"
                    onError={() => setLogoError(true)}
                  />
                </div>
                <span className={`font-bold text-base transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  GenYuga
                </span>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">GY</span>
                </div>
                <span className={`font-bold text-base transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  GenYuga
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  isActive(link.path)
                    ? isScrolled
                      ? 'text-primary'
                      : 'text-white font-semibold'
                    : isScrolled
                    ? 'text-slate-700 hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className="hidden md:block px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;