"use client";

import * as React from "react";
import {
  Code2,
  Cpu,
  Lightbulb,
  Terminal,
  Layers,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function AboutSection() {
  const capabilities = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end web and mobile application development.",
      featured: true,
    },
    {
      icon: Cpu,
      title: "System Design",
      description: "Build scalable, secure, and maintainable architectures.",
      featured: false,
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Turn business needs into effective digital solutions.",
      featured: false,
    },
    {
      icon: Terminal,
      title: "Clean Code",
      description: "Focused on quality, reusability, and long-term maintainability.",
      featured: false,
    },
  ];

  const categoryPills = ["Web Apps", "Mobile Apps", "POS Systems", "ERP & Inventory"];

  const stats = [
    {
      icon: Layers,
      value: "5+",
      label: "Major Projects",
    },
    {
      icon: TrendingUp,
      value: "43% ↗",
      label: "Performance Gain",
    },
    {
      icon: ShieldCheck,
      value: "99.9%",
      label: "Production Uptime",
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Learning & Building",
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="h-4 w-1 bg-[#00D5E8] rounded-full" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00D5E8]">
            ABOUT ME
          </span>
        </div>

        {/* 2-Column Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Description & Category Pills */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EAF3FF] leading-[1.15]">
              Turning Ideas into{" "}
              <span className="bg-gradient-to-r from-[#00D5E8] to-[#38BDF8] bg-clip-text text-transparent">
                Scalable Solutions
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#7A8FAD] leading-relaxed">
              I&apos;m a software engineer who enjoys building practical, user-focused digital products. I work across the full stack &mdash; from intuitive interfaces to reliable backend systems &mdash; and turn complex requirements into clean, maintainable solutions.
            </p>

            {/* Category Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {categoryPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-cyan-500/25 bg-[#101B2A]/80 px-4 py-1.5 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm transition-colors hover:border-cyan-400 hover:text-[#00D5E8]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 2x2 Bento Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className={`relative rounded-2xl p-6 transition-all duration-300 ${
                    cap.featured
                      ? "border border-[#00D5E8]/60 bg-gradient-to-b from-cyan-500/15 via-[#101B2A]/90 to-[#101B2A] shadow-[0_0_30px_rgba(0,213,232,0.18)]"
                      : "border border-white/10 bg-[#101B2A]/60 hover:border-white/20 hover:bg-[#101B2A]/90"
                  }`}
                >
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${
                      cap.featured
                        ? "bg-[#00D5E8] text-[#080D16] shadow-[0_0_15px_rgba(0,213,232,0.5)]"
                        : "bg-[#1A2B3D] text-[#00D5E8]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#EAF3FF]">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#7A8FAD] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Full-Width Bottom Stats Banner */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-[#101B2A]/70 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-[#00D5E8]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#EAF3FF] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[#7A8FAD] font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
