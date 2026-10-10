import React from 'react';
import { GraduationCap, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About = () => {
  const { about } = PORTFOLIO_DATA;
  const { education } = about;

  return (
    <section id="about" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Background &amp; Education</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 tracking-tight">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            My academic foundation, coursework, and technical interests as an undergraduate cybersecurity student.
          </p>
        </div>

        {/* 2-Column Grid: Bio & Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am an undergraduate student pursuing a <strong className="font-semibold text-slate-900 dark:text-white">Bachelor of Science in Cybersecurity</strong> at Capital University of Science and Technology (CUST). My academic focus centers on understanding core operating system architectures, network protocols, defensive controls, and foundational cryptography.
            </p>
            <p>
              Alongside formal cybersecurity coursework, I develop applied software utilities and prototypes in Python, React, and Linux environments. I enjoy building practical tools—such as network traffic sniffers, port scanners, and computer vision experimental models—to ground theoretical concepts in hands-on code.
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              I am actively preparing for entry-level security analyst roles (SOC Tier 1 / Incident Response) and security engineering internships where I can contribute to daily defensive operations, learn from senior practitioners, and continue expanding my practical skill set.
            </p>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900/90 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white">
                  {education.university}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {education.campus}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-baseline py-1 border-b border-slate-50 dark:border-slate-800/40">
                <span className="text-slate-500 dark:text-slate-400 text-xs font-mono uppercase">Degree</span>
                <span className="font-medium text-slate-900 dark:text-slate-200 text-right">{education.degree}</span>
              </div>
              <div className="flex justify-between items-baseline py-1 border-b border-slate-50 dark:border-slate-800/40">
                <span className="text-slate-500 dark:text-slate-400 text-xs font-mono uppercase">Status</span>
                <span className="inline-flex items-center gap-1 font-medium text-emerald-700 dark:text-emerald-400 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {education.status}
                </span>
              </div>
              <div className="flex justify-between items-baseline py-1">
                <span className="text-slate-500 dark:text-slate-400 text-xs font-mono uppercase">Graduation</span>
                <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40 font-semibold">
                  {education.graduationYear}
                </span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Relevant Academic Coursework</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
