import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact = () => {
  const { links, personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Client-side quick validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xbjnqzkr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Submission failed. Please try again or use direct email.');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Unable to send message via form.'
      });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 tracking-tight">
            Contact &amp; Inquiries
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Interested in discussing cybersecurity internships, junior analyst opportunities, or technical collaboration? Reach out directly.
          </p>
        </div>

        {/* 2-Column Grid: Direct Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links (No phone, no street address) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white">
                Direct Channels
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${links.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Email
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors break-all">
                      {links.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      LinkedIn
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      muhammad-bilal-yousaf-a2a93140b
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 flex-shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      GitHub
                    </span>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      srbilal12-cyber
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Availability: </span>
                {personal.availability}
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900/80 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below or email directly. Messages are routed straight to my primary inbox.
              </p>

              {status.success && (
                <div
                  role="status"
                  className="mb-6 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3 text-emerald-900 dark:text-emerald-200 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Thank you! Message received.</strong>
                    <span>I will get back to you as soon as possible.</span>
                  </div>
                </div>
              )}

              {status.error && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 flex items-start gap-3 text-rose-900 dark:text-rose-200 text-sm"
                >
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="font-semibold block">{status.error}</strong>
                    <span>
                      You can also email me directly at{' '}
                      <a href={`mailto:${links.email}`} className="underline font-mono font-medium">
                        {links.email}
                      </a>
                      .
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="recruiter@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Cybersecurity Internship Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Bilal, we reviewed your profile and HemoScan case study..."
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-y"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    No unsolicited phone contact requested.
                  </p>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm disabled:opacity-60 disabled:cursor-not-allowed transition-all focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    {status.submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
