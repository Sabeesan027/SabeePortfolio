"use client";

import * as React from "react";
import { User, Mail, PenLine, MessageSquare, Check, Copy, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-cyan-500/10 blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-4 w-1 bg-[#00D5E8] rounded-full" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00D5E8]">
            GET IN TOUCH
          </span>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Info Cards, Socials */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EAF3FF] leading-[1.15]">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-[#00D5E8] to-[#38BDF8] bg-clip-text text-transparent">
                Meaningful Together
              </span>
            </h2>

            <p className="mt-5 text-base text-[#7A8FAD] leading-relaxed">
              Have a project, idea, or opportunity in mind? I&apos;d love to hear from you. Reach out via email or submit the form.
            </p>

            {/* Contact Information Cards */}
            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col gap-3">
              {/* Email Card */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#101B2A]/70 p-4 text-left transition-all hover:border-cyan-500/40 hover:bg-[#101B2A]/90"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A2B3D] text-[#00D5E8] group-hover:bg-cyan-500/20">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-[#EAF3FF]">{PROFILE.email}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400">
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-slate-400 group-hover:text-cyan-400" />}
                </span>
              </button>

              {/* Location Card */}
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#101B2A]/70 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A2B3D] text-[#00D5E8]">
                  <span className="text-base">📍</span>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-[#EAF3FF]">Sri Lanka (Remote Worldwide)</div>
                </div>
              </div>
            </div>

            {/* Connect With Me Row */}
            <div className="mt-8 flex flex-col gap-3">
              <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                Connect with me
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101B2A]/70 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-[#00D5E8]"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101B2A]/70 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-[#00D5E8]"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube Channel"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101B2A]/70 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-[#00D5E8]"
                >
                  <YouTubeIcon className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label="Send Direct Email"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101B2A]/70 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-[#00D5E8]"
                >
                  <MailIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#101B2A]/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#EAF3FF]">
                  Message Sent Successfully!
                </h3>
                <p className="mt-2 text-sm text-[#7A8FAD] max-w-sm">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                  }}
                  className="mt-6 rounded-xl border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-slate-200 hover:bg-white/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#080D16]/60 pl-10 pr-4 py-3 text-sm text-[#EAF3FF] placeholder:text-slate-500 focus:border-[#00D5E8] focus:outline-none focus:ring-1 focus:ring-[#00D5E8] transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#080D16]/60 pl-10 pr-4 py-3 text-sm text-[#EAF3FF] placeholder:text-slate-500 focus:border-[#00D5E8] focus:outline-none focus:ring-1 focus:ring-[#00D5E8] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div className="relative">
                  <PenLine className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#080D16]/60 pl-10 pr-4 py-3 text-sm text-[#EAF3FF] placeholder:text-slate-500 focus:border-[#00D5E8] focus:outline-none focus:ring-1 focus:ring-[#00D5E8] transition-colors"
                  />
                </div>

                {/* Row 3: Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                  <textarea
                    required
                    rows={4}
                    placeholder="Your Message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#080D16]/60 pl-10 pr-4 py-3 text-sm text-[#EAF3FF] placeholder:text-slate-500 focus:border-[#00D5E8] focus:outline-none focus:ring-1 focus:ring-[#00D5E8] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00D5E8] py-3.5 text-sm font-bold text-[#080D16] shadow-[0_0_25px_rgba(0,213,232,0.4)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(0,213,232,0.6)] cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </button>

              </form>
            )}
          </div>

        </div>

      </div>

      {/* Bottom Subtle Wave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 w-full opacity-30"
      >
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-full object-cover">
          <path
            d="M0,40 C320,100 500,10 720,50 C940,90 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="url(#contact-wave-grad)"
          />
          <defs>
            <linearGradient id="contact-wave-grad" x1="0" y1="0" x2="1440" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D5E8" stopOpacity="0.2" />
              <stop offset="1" stopColor="#080D16" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </section>
  );
}
