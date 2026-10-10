import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HemoScanCaseStudy } from './components/HemoScanCaseStudy';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('bilal_portfolio_theme');
      if (storedTheme) return storedTheme;
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('bilal_portfolio_theme', theme);
    } catch (e) {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white transition-colors duration-200">
      {/* Skip to Main Content Link for Keyboard & Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono text-sm"
      >
        Skip to main content
      </a>

      {/* Sticky Top Header Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Semantic Content Landmark */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <HemoScanCaseStudy />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
}
