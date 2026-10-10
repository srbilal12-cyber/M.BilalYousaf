import React from 'react';
import { Wrench, CheckCircle, Search, Compass, Info } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  const getCategoryIcon = (title) => {
    switch (title) {
      case 'Proficient':
        return <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'Familiar':
        return <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Currently Learning':
        return <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      default:
        return <Wrench className="w-4 h-4 text-slate-500" />;
    }
  };

  const getCategoryBadgeClass = (title) => {
    switch (title) {
      case 'Proficient':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
      case 'Familiar':
        return 'bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/60';
      case 'Currently Learning':
        return 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Wrench className="w-4 h-4" aria-hidden="true" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 tracking-tight">
            Skills &amp; Tooling
          </h2>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <Info className="w-4 h-4 flex-shrink-0 text-slate-400" />
            <span>{skills.note}</span>
          </div>
        </div>

        {/* 3 Group Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.categories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-slate-900/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  {getCategoryIcon(category.title)}
                  <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${getCategoryBadgeClass(
                        category.title
                      )}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/40 text-[11px] font-mono text-slate-400">
                {category.skills.length} competencies listed
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
