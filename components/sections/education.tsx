"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, CheckCircle2, Award, BookOpen, Compass } from "lucide-react";
import { EDUCATION } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpringTiltCard } from "@/components/motion/SpringTiltCard";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const EDU_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  bedfordshire: GraduationCap,
  "sliit-city-uni": BookOpen,
  "jaffna-hindu-college": Compass,
};

const EDUCATION_BACKDROP_SRC = "/src/education-backdrop.svg";

export function EducationSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const timelineRef = React.useRef<HTMLDivElement>(null);
  const spinePathRef = React.useRef<SVGLineElement>(null);
  const [litCount, setLitCount] = React.useState(1);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const line = spinePathRef.current;
      const container = timelineRef.current;
      if (!line || !container) return;

      const totalLength = 1000;
      gsap.set(line, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });

      gsap.to(line, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 72%",
          end: "bottom 65%",
          scrub: 0.6,
          onUpdate: (self) => {
            const p = self.progress;
            if (p >= 0.72) setLitCount(3);
            else if (p >= 0.35) setLitCount(2);
            else setLitCount(1);
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="relative py-14 sm:py-20 overflow-hidden border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] bg-[#F8FAFD] dark:bg-[#030B16]">
      {/* Architectural Ledger Backdrop Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={EDUCATION_BACKDROP_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 dark:opacity-35 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFD] via-transparent to-[#F8FAFD] dark:from-[#030B16] dark:via-transparent dark:to-[#030B16]" />
      </div>

      {/* Atmospheric Gradient Light Bleed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-0 h-[520px] w-[500px] rounded-full bg-[#006CE5]/10 dark:bg-[#00C8FF]/10 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 h-[480px] w-[480px] rounded-full bg-[#008FCB]/10 dark:bg-[#168BFF]/10 blur-[140px]"
      />

      {/* Giant Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 select-none text-[17vw] font-black uppercase tracking-tighter text-[#102039]/[0.025] dark:text-white/[0.015] whitespace-nowrap"
      >
        TIMELINE
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Technical Coordinate Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] dark:bg-[#00C8FF]" />
            <span>SEC // 05 · ACADEMIC MILESTONES</span>
          </div>
          <span className="text-[#52647B] dark:text-[#A1B3C9]">COMPUTER SOFTWARE ENGINEERING &amp; MATHEMATICS</span>
        </div>

        <SectionHeading
          eyebrow="Academic Foundation"
          title="Education"
          highlight="Timeline"
          description="Structured academic progression in computer software engineering, full-stack systems, and analytical mathematics."
        />

        <div ref={timelineRef} className="relative pl-8 sm:pl-12">
          {/* GSAP Scroll-Scrubbed Glowing Cyan SVG Spine */}
          <svg
            aria-hidden="true"
            viewBox="0 0 4 1000"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-2.5 top-4 bottom-4 h-[calc(100%-2rem)] w-1 sm:left-4"
          >
            <defs>
              <linearGradient id="edu-spine-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#006CE5" />
                <stop offset="50%" stopColor="#008FCB" />
                <stop offset="100%" stopColor="#00C8FF" />
              </linearGradient>
            </defs>
            {/* Background track */}
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="1000"
              stroke="#DFE7F0"
              className="dark:stroke-[rgba(85,190,255,0.2)]"
              strokeWidth="2"
            />
            {/* Scrubbed glowing cyan beam */}
            <line
              ref={spinePathRef}
              x1="2"
              y1="0"
              x2="2"
              y2="1000"
              stroke="url(#edu-spine-grad)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <div className="space-y-5">
            {EDUCATION.map((item, idx) => {
              const isLit = idx < litCount;
              const EduIcon = EDU_ICON_MAP[item.id] ?? GraduationCap;
              return (
                <div key={item.id} className="relative">
                  {/* Milestone Node illuminated as the beam passes */}
                  <span
                    className={cn(
                      "absolute -left-[1.72rem] top-7 flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-500 sm:-left-[2.52rem]",
                      isLit
                        ? "border-[#006CE5] bg-[#006CE5]/20 shadow-[0_0_16px_rgba(0,108,229,0.5)] dark:border-[#00C8FF] dark:bg-[#00C8FF]/25 dark:shadow-[0_0_24px_rgba(0,200,255,0.8)] scale-110"
                        : "border-[#DFE7F0] bg-[#EEF4FA] dark:border-[rgba(85,190,255,0.2)] dark:bg-[#071426]"
                    )}
                  >
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-colors duration-300",
                        isLit ? "bg-[#006CE5] dark:bg-[#00C8FF]" : "bg-[#52647B] dark:bg-[#A1B3C9]"
                      )}
                    />
                  </span>

                  <SpringTiltCard
                    tiltIntensity={3.5}
                    className={cn(
                      "p-6 sm:p-7 transition-all duration-500 border-[#DFE7F0] bg-white/95 shadow-sm dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426]/85 dark:shadow-none backdrop-blur-md",
                      isLit && "border-[#006CE5]/40 bg-white shadow-[0_8px_30px_rgba(0,108,229,0.08)] dark:border-[#00C8FF]/40 dark:bg-[#071426]/95 dark:shadow-[0_0_30px_rgba(0,200,255,0.12)]"
                    )}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#006CE5]/20 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/25 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF] shadow-[0_4px_16px_rgba(0,108,229,0.1)] dark:shadow-[0_0_16px_rgba(0,200,255,0.15)]">
                          <EduIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-[#102039] dark:text-[#F5F9FF] sm:text-xl">
                              {item.institution}
                            </h3>
                            {item.status === "Current" && (
                              <Award className="h-4 w-4 text-[#006CE5] dark:text-[#00C8FF]" />
                            )}
                          </div>
                          <p className="text-sm font-medium text-[#006CE5] dark:text-[#00C8FF] mt-0.5">
                            {item.degree}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          variant={item.status === "Current" ? "teal" : "glass"}
                          className="font-mono text-xs"
                        >
                          {item.status}
                        </Badge>
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#52647B] dark:text-[#A1B3C9] border border-[#DFE7F0] bg-[#EEF4FA] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/70 px-2.5 py-1 rounded-full">
                          <Calendar className="h-3 w-3 text-[#006CE5] dark:text-[#00C8FF]" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)]">
                      <p className="text-sm leading-relaxed text-[#52647B] dark:text-[#A1B3C9]">
                        {item.focus}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.highlights.map((hl) => (
                          <Badge key={hl} variant="glass" className="text-xs flex items-center gap-1.5 py-1 px-3">
                            <CheckCircle2 className="h-3 w-3 text-[#006CE5] dark:text-[#00C8FF]" />
                            {hl}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </SpringTiltCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
