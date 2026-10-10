import React from 'react';
import { ArrowDown, FileText, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero = () => {
  const { personal, links } = PORTFOLIO_DATA;

  const headshotSrc = (typeof window !== 'undefined' && window.BILAL_HEADSHOT_BASE64)
    ? window.BILAL_HEADSHOT_BASE64
    : './assets/bilal_headshot.jpg';

  return (
    <section id="hero" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Content */}
          <div className="flex-1 text-center md:text-left space-y-6 max-w-2xl">
            
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.availability}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50 tracking-tight text-balance leading-tight">
                {personal.name}
              </h1>
              <p className="font-heading font-medium text-lg sm:text-xl text-emerald-700 dark:text-emerald-400">
                {personal.role}
              </p>
              <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
                {personal.institution} • Expected {personal.expectedGraduation}
              </p>
            </div>

            {/* 2-Sentence Intro */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
              {personal.intro}
            </p>

            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
              <a
                href={links.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
              </a>

              <a
                href="#hemoscan"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 transition-all focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <span>Featured Project (HemoScan)</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              >
                <span>Contact me &rarr;</span>
              </a>
            </div>

            {/* Quick Profile Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-3 text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/60">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>srbilal12-cyber</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-1.5 text-xs hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1"
                aria-label="Email Muhammad Bilal Yousaf"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Headshot Photo */}
          <div className="flex-shrink-0">
            <div className="relative group">
              {/* Subtle background ambient ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-blue-500/20 blur-sm group-hover:blur transition-all duration-300 pointer-events-none"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-md">
                <img
                  src={headshotSrc}
                  alt="Muhammad Bilal Yousaf - BS Cybersecurity student at CUST"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  width="224"
                  height="224"
                />
              </div>

              {/* Student Affiliation Pill */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
                CUST Student
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
