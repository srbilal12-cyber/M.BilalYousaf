import React from 'react';
import { Award, Terminal, CheckCircle2, Clock, ExternalLink, Bookmark } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications = () => {
  const { practice } = PORTFOLIO_DATA;

  const getStatusBadge = (status) => {
    if (status.includes('Active')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
          <CheckCircle2 className="w-3 h-3" />
          {status}
        </span>
      );
    }
    if (status.includes('Coursework')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
          <Terminal className="w-3 h-3" />
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
        <Clock className="w-3 h-3" />
        {status}
      </span>
    );
  };

  return (
    <section id="practice" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Award className="w-4 h-4" aria-hidden="true" />
            <span>Practical Experience &amp; Goals</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 tracking-tight">
            Labs, CTFs &amp; Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            {practice.note}
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practice.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  {getStatusBadge(item.status)}
                  <Bookmark className="w-4 h-4 text-slate-400" />
                </div>

                <h3 className="font-heading font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60">
                {item.url && item.url !== '#' ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>{item.linkText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {item.linkText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
