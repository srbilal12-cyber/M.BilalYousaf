import React from 'react';
import { ExternalLink, Github, AlertTriangle, Activity, CheckCircle, HelpCircle, Layers, Lightbulb } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HemoScanCaseStudy = () => {
  const { featuredProject } = PORTFOLIO_DATA;
  const { caseStudy } = featuredProject;

  return (
    <section id="hemoscan" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Activity className="w-4 h-4" aria-hidden="true" />
            <span>Featured Case Study</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 tracking-tight">
                {featuredProject.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
                {featuredProject.subtitle}
              </p>
            </div>

            {/* Project Links */}
            <div className="flex items-center gap-3">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Live Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>Code Repository</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 mr-1">
            Stack:
          </span>
          {featuredProject.techTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Mandatory Medical Disclaimer Banner */}
        <div
          role="note"
          aria-label="Medical research disclaimer"
          className="mb-10 rounded-xl p-4 sm:p-5 bg-amber-500/10 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <strong className="font-heading font-semibold text-amber-800 dark:text-amber-300 block">
                Research Prototype — Not a Medical Device
              </strong>
              <p className="text-amber-700 dark:text-amber-300/90">
                {featuredProject.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Visual Architecture & Interface Preview */}
        <div className="mb-12 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm">
          <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              Optical PPG Signal Pipeline &amp; Interface Preview
            </span>
            <span>SVG Architecture Blueprint</span>
          </div>
          <div className="p-4 sm:p-6 bg-slate-950/90 flex justify-center items-center">
            <img
              src="./assets/hemoscan_preview.svg"
              alt="HemoScan optical signal pipeline diagram and interface preview"
              className="w-full max-w-4xl h-auto rounded-lg shadow-inner"
              loading="lazy"
            />
          </div>
        </div>

        {/* Structured Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 1. Problem */}
          <div className="bg-white dark:bg-slate-900/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-heading font-semibold text-base">
              <HelpCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <h3>1. The Problem</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          {/* 2. Approach */}
          <div className="bg-white dark:bg-slate-900/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-heading font-semibold text-base">
              <Layers className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <h3>2. Engineering Approach</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {caseStudy.approach}
            </p>
          </div>

          {/* 3. Result */}
          <div className="bg-white dark:bg-slate-900/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-heading font-semibold text-base">
              <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <h3>3. Current Prototype Results</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {caseStudy.result}
            </p>
          </div>

          {/* 4. Limitations */}
          <div className="bg-white dark:bg-slate-900/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-heading font-semibold text-base">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <h3>4. Known Limitations &amp; Edge Cases</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {caseStudy.limitations}
            </p>
          </div>

        </div>

        {/* 5. Key Learnings (Full-width banner) */}
        <div className="mt-6 bg-slate-50 dark:bg-slate-900/60 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-heading font-semibold text-base">
            <Lightbulb className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <h3>5. Key Learnings &amp; Engineering Takeaways</h3>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {caseStudy.learned}
          </p>
        </div>

      </div>
    </section>
  );
};
