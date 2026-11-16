"use client";

import * as React from "react";
import { GraduationCap, BookOpen, School } from "lucide-react";

export function EducationSection() {
  const educationItems = [
    {
      id: "bedfordshire",
      degree: "BSc (Hons) Software Engineering",
      institution: "University of Bedfordshire (through SLIIT CITY UNI)",
      status: "Undergraduate",
      statusColor: "border-cyan-500/40 bg-cyan-500/10 text-[#00D5E8]",
      period: "2024 – 2027 (Expected)",
      icon: GraduationCap,
    },
    {
      id: "sliit",
      degree: "Higher National Diploma in IT",
      institution: "SLIIT",
      status: "Completed",
      statusColor: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
      period: "2022 – 2024",
      icon: BookOpen,
    },
    {
      id: "jaffna-hindu",
      degree: "High School Diploma, Mathematics",
      institution: "Jaffna Hindu College",
      status: "Completed",
      statusColor: "border-slate-500/40 bg-slate-500/10 text-slate-300",
      period: "2020 – 2022",
      icon: School,
    },
  ];

  return (
    <section id="education" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-4 w-1 bg-[#00D5E8] rounded-full" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00D5E8]">
            EDUCATION
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EAF3FF] mb-12">
          Education Timeline
        </h2>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Glowing Cyan Vertical Line Spine */}
          <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#00D5E8] via-[#00D5E8]/60 to-[#00D5E8]/10 shadow-[0_0_12px_rgba(0,213,232,0.6)]" />

          {/* Education Cards Stack */}
          <div className="flex flex-col gap-6">
            {educationItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative flex items-center">
                  
                  {/* Glowing Node on Spine */}
                  <div className="absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center">
                    <span className="h-3 w-3 rounded-full bg-[#00D5E8] ring-4 ring-[#080D16] shadow-[0_0_10px_rgba(0,213,232,0.8)]" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full rounded-2xl border border-white/10 bg-[#101B2A]/70 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#101B2A]/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      
                      {/* Left: Icon & Institution Details */}
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1A2B3D] text-[#00D5E8]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#EAF3FF]">
                            {item.degree}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#7A8FAD]">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      {/* Right: Status Pill & Date */}
                      <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                        <span
                          className={`rounded-full border px-3 py-1 font-mono text-xs font-semibold ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          {item.period}
                        </span>
                      </div>

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
