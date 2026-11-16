"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MonitorSmartphone,
  Server,
  DatabaseZap,
  ShieldAlert,
} from "lucide-react";
import {
  MARQUEE_ROW_1,
  MARQUEE_ROW_2,
  SKILL_CATEGORIES,
  type SkillCategory,
} from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpringTiltCard } from "@/components/motion/SpringTiltCard";
import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/ui/tech-icon";
import { StaggerContainer, StaggerItem } from "@/components/ui/reveal";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP: Record<
  SkillCategory["iconName"],
  React.ComponentType<{ className?: string }>
> = {
  MonitorSmartphone,
  Server,
  DatabaseZap,
  ShieldAlert,
};

const STACK_BACKDROP_SRC = "/src/stack-backdrop.jpg";

export function TechStackSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const track1Ref = React.useRef<HTMLDivElement>(null);
  const track2Ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      if (!track1Ref.current || !track2Ref.current) return;

      const tween1 = gsap.to(track1Ref.current, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      const tween2 = gsap.fromTo(
        track2Ref.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          duration: 32,
          ease: "none",
          repeat: -1,
        }
      );

      // Subtle scroll-velocity acceleration / direction modulation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const dir = self.direction; // 1 = down, -1 = up
          const boost = Math.min(Math.abs(velocity) / 450, 2.5);
          const speed = (1 + boost) * (dir === -1 ? -1 : 1);

          gsap.to([tween1, tween2], {
            timeScale: speed,
            duration: 0.35,
            overwrite: true,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const row1Items = [...MARQUEE_ROW_1, ...MARQUEE_ROW_1];
  const row2Items = [...MARQUEE_ROW_2, ...MARQUEE_ROW_2];

  return (
    <section ref={sectionRef} id="stack" className="relative py-14 sm:py-20 overflow-hidden border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] bg-[#F8FAFD] dark:bg-[#030B16]">
      {/* Circuit & Silicon Motherboard Backdrop Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={STACK_BACKDROP_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 dark:opacity-35 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFD] via-transparent to-[#F8FAFD] dark:from-[#030B16] dark:via-transparent dark:to-[#030B16]" />
      </div>

      {/* Atmospheric Central Cyan / Teal Radial Bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[720px] rounded-full bg-[#006CE5]/10 dark:bg-[#00C8FF]/10 blur-[140px]"
      />

      {/* Giant Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 select-none text-[18vw] font-black uppercase tracking-tighter text-[#102039]/[0.025] dark:text-white/[0.015] whitespace-nowrap"
      >
        ARSENAL
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Technical Coordinate Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] dark:bg-[#00C8FF]" />
            <span>SEC // 04 · TECHNICAL ARSENAL</span>
          </div>
          <span className="text-[#52647B] dark:text-[#A1B3C9]">FULL-STACK · CLOUD DEVOPS · APP SEC</span>
        </div>

        <SectionHeading
          eyebrow="Technical Arsenal"
          title="Technologies &"
          highlight="Engineering Stack"
          description="A versatile toolkit spanning reactive frontends, native Android, hardened backend APIs, relational/NoSQL databases, and Linux VPS DevOps."
        />

        {/* GSAP Dual-Track Velocity Marquee with Dedicated Tech Icons */}
        <div className="relative mb-8 rounded-2xl border border-[#DFE7F0] bg-white/85 py-3 backdrop-blur-md overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] shadow-[0_4px_20px_rgba(16,32,57,0.04)] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426]/70 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <div className="space-y-3">
            <div ref={track1Ref} className="flex w-max">
              {row1Items.map((item, idx) => (
                <div
                  key={`r1-${item}-${idx}`}
                  className="mx-2 flex items-center gap-2 rounded-full border border-[#DFE7F0] bg-white px-4 py-2 text-xs font-mono text-[#102039] transition-colors hover:border-[#006CE5]/50 hover:text-[#006CE5] sm:text-sm shadow-sm dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426]/90 dark:text-[#F5F9FF] dark:hover:border-[#00C8FF]/50 dark:hover:text-[#00C8FF] dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                >
                  <TechIcon name={item} className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div ref={track2Ref} className="flex w-max">
              {row2Items.map((item, idx) => (
                <div
                  key={`r2-${item}-${idx}`}
                  className="mx-2 flex items-center gap-2 rounded-full border border-[#DFE7F0] bg-white px-4 py-2 text-xs font-mono text-[#102039] transition-colors hover:border-[#008FCB]/50 hover:text-[#008FCB] sm:text-sm shadow-sm dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426]/90 dark:text-[#F5F9FF] dark:hover:border-[#168BFF]/50 dark:hover:text-[#00C8FF] dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                >
                  <TechIcon name={item} className="h-3.5 w-3.5 text-[#008FCB] dark:text-[#168BFF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categorized 4-Pillar Grid with Real Tech Icons */}
        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = ICON_MAP[category.iconName];
            return (
              <StaggerItem key={category.id}>
                <SpringTiltCard tiltIntensity={4} className="p-6 sm:p-7 h-full flex flex-col justify-between border-[#DFE7F0] hover:border-[#006CE5]/40 bg-white/95 dark:border-[rgba(85,190,255,0.16)] dark:hover:border-[#00C8FF]/40 dark:bg-[#071426]/85 backdrop-blur-md">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3.5">
                        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#006CE5]/25 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF] shadow-[0_4px_16px_rgba(0,108,229,0.1)] dark:shadow-[0_0_16px_rgba(0,200,255,0.15)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#102039] dark:text-[#F5F9FF]">
                            {category.title}
                          </h3>
                          <p className="mt-0.5 text-xs text-[#52647B] dark:text-[#A1B3C9]">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>
                      <Badge variant="cyan" className="font-mono text-[10px] shrink-0 border-[#006CE5]/25 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF]">
                        {category.skills.length} Techs
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#DFE7F0] bg-[#EEF4FA] px-3 py-1.5 text-xs text-[#102039] hover:border-[#006CE5]/40 hover:text-[#006CE5] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/70 dark:text-[#F5F9FF] dark:hover:border-[#00C8FF]/40 dark:hover:text-[#00C8FF] transition-colors"
                        >
                          <TechIcon name={skill} className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF] shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] flex items-center justify-between text-[11px] font-mono text-[#52647B] dark:text-[#A1B3C9]">
                    <span>PRODUCTION VERIFIED</span>
                    <span className="text-[#006CE5] dark:text-[#00C8FF] font-medium">ACTIVE ARSENAL</span>
                  </div>
                </SpringTiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
