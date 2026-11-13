"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar } from "lucide-react";
import { EDUCATION } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpringTiltCard } from "@/components/motion/SpringTiltCard";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

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
    <section ref={sectionRef} id="education" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#14B8A6" />
              </linearGradient>
            </defs>
            {/* Background track */}
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="1000"
              stroke="rgba(255,255,255,0.08)"
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

          <div className="space-y-6">
            {EDUCATION.map((item, idx) => {
              const isLit = idx < litCount;
              return (
                <div key={item.id} className="relative">
                  {/* Milestone Node illuminated as the beam passes */}
                  <span
                    className={cn(
                      "absolute -left-[1.72rem] top-7 flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-500 sm:-left-[2.52rem]",
                      isLit
                        ? "border-cyan-300 bg-cyan-400/25 shadow-[0_0_20px_rgba(6,182,212,0.85)] scale-110"
                        : "border-white/20 bg-[#0D1117]"
                    )}
                  >
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-colors duration-300",
                        isLit ? "bg-cyan-300" : "bg-slate-600"
                      )}
                    />
                  </span>

                  <SpringTiltCard
                    tiltIntensity={3.5}
                    className={cn(
                      "p-6 sm:p-7 transition-all duration-500",
                      isLit && "border-cyan-400/35 bg-white/[0.04]"
                    )}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-500/10 text-cyan-300">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-100 sm:text-xl">
                            {item.institution}
                          </h3>
                          <p className="text-sm font-medium text-cyan-300">
                            {item.degree}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          variant={item.status === "Current" ? "teal" : "glass"}
                        >
                          {item.status}
                        </Badge>
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400">
                          <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm leading-relaxed text-slate-400">
                        {item.focus}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.highlights.map((hl) => (
                          <Badge key={hl} variant="glass" className="text-xs">
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
