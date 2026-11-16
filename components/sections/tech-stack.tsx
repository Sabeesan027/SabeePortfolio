"use client";

import * as React from "react";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Cloud,
  Wrench,
} from "lucide-react";
import { TechIcon } from "@/components/ui/tech-icon";

export function TechStackSection() {
  const stackCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Django", "Node.js", "REST API"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["Kotlin", "Android", "Cross-Platform"],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Docker", "Git", "Linux VPS"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["VS Code", "GitHub", "Postman"],
    },
  ];

  return (
    <section id="stack" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-4 w-1 bg-[#00D5E8] rounded-full" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00D5E8]">
            TECHNOLOGY STACK
          </span>
        </div>

        {/* Section Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EAF3FF]">
            My Engineering Toolkit
          </h2>
          <p className="max-w-md text-sm text-[#7A8FAD]">
            Technologies I use to design, build, and deploy modern applications.
          </p>
        </div>

        {/* 6 Vertical Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {stackCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#101B2A]/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#101B2A]/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Category Header */}
                <div className="flex flex-col items-start gap-3 border-b border-white/10 pb-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A2B3D] text-[#00D5E8] transition-colors group-hover:bg-cyan-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#EAF3FF] group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                {/* Stack Items */}
                <div className="flex flex-col gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-xs font-medium text-slate-300 group-hover:text-slate-200 transition-colors"
                    >
                      <TechIcon name={skill} className="h-3.5 w-3.5 text-[#00D5E8]/80 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
