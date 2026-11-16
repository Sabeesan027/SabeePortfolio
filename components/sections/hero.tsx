"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
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

const HERO_CUTOUT_SRC = "/src/staning%20png%20hero%20sec.png";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] w-full overflow-hidden pt-28 pb-16 flex flex-col justify-between"
    >
      {/* Background Ambience & Cyan Atmospheric Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/4 h-[500px] w-[500px] rounded-full bg-[#00D5E8]/10 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-10 h-[600px] w-[600px] rounded-full bg-[#00D5E8]/15 blur-[170px]"
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#101B2A]/70 px-4 py-1.5 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md mb-6">
              <span>👋</span>
              <span>Hello, I&apos;m</span>
            </div>

            {/* Giant Name */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#EAF3FF] leading-[1.05]">
              SABEESAN
            </h1>

            {/* Sub-headline with Electric Cyan Gradient */}
            <h2 className="mt-3 font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-200">
              Full-Stack Software{" "}
              <span className="bg-gradient-to-r from-[#00D5E8] via-[#38BDF8] to-[#00D5E8] bg-clip-text text-transparent">
                Engineer &amp; Builder
              </span>
            </h2>

            {/* Description Text */}
            <p className="mt-5 max-w-xl text-base sm:text-lg text-[#7A8FAD] leading-relaxed">
              I design and develop scalable web, mobile, and enterprise solutions with a focus on clean architecture, performance, and real-world impact.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00D5E8] px-6 py-3.5 text-sm font-bold text-[#080D16] shadow-[0_0_30px_rgba(0,213,232,0.45)] transition-all duration-300 hover:bg-[#38BDF8] hover:shadow-[0_0_40px_rgba(0,213,232,0.65)] hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#101B2A]/80 px-6 py-3.5 text-sm font-semibold text-[#EAF3FF] backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#1A2B3D] hover:-translate-y-0.5"
              >
                <Briefcase className="h-4 w-4 text-[#00D5E8]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101B2A]/60 text-slate-400 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-[#00D5E8]"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101B2A]/60 text-slate-400 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-[#00D5E8]"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube Channel"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101B2A]/60 text-slate-400 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-[#00D5E8]"
              >
                <YouTubeIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Send Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#101B2A]/60 text-slate-400 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-[#00D5E8]"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            </div>

            {/* Status indicator */}
            <div className="mt-6 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-400/90 tracking-wide">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Right Column: Standing Cutout + Neon Portal + Floating Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[480px] sm:min-h-[580px] lg:min-h-[640px]"
          >
            {/* Tilted Glowing Neon Cyan Portal Frame */}
            <div
              className="absolute inset-x-6 sm:inset-x-12 inset-y-6 sm:inset-y-8 rounded-3xl border-2 border-[#00D5E8]/60 bg-gradient-to-b from-[#00D5E8]/10 via-[#101B2A]/40 to-transparent shadow-[0_0_50px_rgba(0,213,232,0.35)] -rotate-3 transition-transform duration-700 hover:rotate-0"
              style={{
                backdropFilter: "blur(12px)",
              }}
            />

            {/* Back Glow Flare */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#00D5E8]/25 blur-[90px] top-1/4"
            />

            {/* Sabeesan Standing Cutout */}
            <div className="relative z-20 w-[280px] sm:w-[350px] lg:w-[380px] h-[460px] sm:h-[540px] lg:h-[600px] flex items-end justify-center">
              <Image
                src={HERO_CUTOUT_SRC}
                alt="Sabeesan Gnanavel - Full-Stack Software Engineer"
                width={420}
                height={640}
                priority
                className="h-full w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] filter contrast-[1.03] select-none"
              />
            </div>

            {/* Floating Code Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -right-2 sm:right-0 top-16 sm:top-20 z-30 hidden sm:block rounded-xl border border-cyan-400/30 bg-[#080D16]/90 p-4 font-mono text-xs shadow-[0_15px_35px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-1.5 pb-2.5 border-b border-white/10 mb-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <p className="text-slate-400">
                <span className="text-cyan-400">const</span> developer = &#123;
              </p>
              <p className="pl-4 text-slate-300">
                name: <span className="text-amber-300">&quot;Sabeesan&quot;</span>,
              </p>
              <p className="pl-4 text-slate-300">
                role: <span className="text-cyan-300">&quot;Full-Stack Engineer&quot;</span>,
              </p>
              <p className="pl-4 text-slate-300">
                build: () =&gt; <span className="text-emerald-300">&quot;Scalable Apps&quot;</span>
              </p>
              <p className="text-slate-400">&#125;;</p>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Flowing Cyan Digital Wave / Particle Graphic at Base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 sm:h-44 w-full overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-top opacity-40"
        >
          <path
            d="M0,160 C320,300 420,80 720,180 C1020,280 1180,100 1440,190 L1440,280 L0,280 Z"
            fill="url(#cyan-wave-grad)"
          />
          <path
            d="M0,190 C360,110 520,260 860,140 C1200,20 1320,210 1440,160"
            stroke="#00D5E8"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <path
            d="M0,220 C280,150 480,280 780,180 C1080,80 1280,230 1440,200"
            stroke="#38BDF8"
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
          />
          <defs>
            <linearGradient id="cyan-wave-grad" x1="0" y1="0" x2="1440" y2="280" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D5E8" stopOpacity="0.25" />
              <stop offset="0.5" stopColor="#101B2A" stopOpacity="0.5" />
              <stop offset="1" stopColor="#080D16" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-20 mt-6 flex flex-col items-center justify-center gap-1 text-slate-500">
        <div className="flex h-7 w-4.5 items-start justify-center rounded-full border border-slate-600 p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-[#00D5E8]"
          />
        </div>
        <span className="font-mono text-[11px] tracking-wider uppercase text-slate-400">
          Scroll to explore
        </span>
      </div>

    </section>
  );
}
