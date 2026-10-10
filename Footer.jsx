import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer = () => {
  const { personal, links } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity & Status */}
          <div className="text-center sm:text-left space-y-1">
            <p className="font-heading font-semibold text-slate-900 dark:text-slate-200">
              {personal.name}
            </p>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              BS Cybersecurity Undergraduate • CUST Islamabad
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${links.email}`}
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <span className="w-px h-5 bg-slate-300 dark:bg-slate-700" aria-hidden="true"></span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400 dark:text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p>
            Designed with WCAG AA compliance &bull; Clean modern typography
          </p>
        </div>

      </div>
    </footer>
  );
};
