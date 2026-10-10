import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'HemoScan', href: '#hemoscan' },
    { name: 'Skills', href: '#skills' },
    { name: 'Practice', href: '#practice' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-slate-900/95 dark:bg-[#090d16]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#"
          className="group inline-flex items-center gap-2 font-heading font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md py-1 transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono text-sm font-bold">
            BY
          </span>
          <span className="tracking-tight">{PORTFOLIO_DATA.personal.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Resume & Theme Toggle) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.links.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60 focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#090d16]/95 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <a
              href={PORTFOLIO_DATA.links.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
