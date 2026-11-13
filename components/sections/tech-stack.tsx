"use client";

import * as React from "react";
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
    <section ref={sectionRef} id="stack" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Technical Arsenal"
          title="Technologies &"
          highlight="Engineering Stack"
          description="A versatile toolkit spanning reactive frontends, native Android, hardened backend APIs, relational/NoSQL databases, and Linux VPS DevOps."
        />

        {/* GSAP Dual-Track Velocity Marquee */}
        <div className="space-y-3 mb-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div ref={track1Ref} className="flex w-max">
            {row1Items.map((item, idx) => (
              <div
                key={`r1-${item}-${idx}`}
                className="mx-2 flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-mono text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200 sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                {item}
              </div>
            ))}
          </div>

          <div ref={track2Ref} className="flex w-max">
            {row2Items.map((item, idx) => (
              <div
                key={`r2-${item}-${idx}`}
                className="mx-2 flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-mono text-slate-300 transition-colors hover:border-teal-400/40 hover:text-teal-200 sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400/80" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Categorized 4-Pillar Grid */}
        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = ICON_MAP[category.iconName];
            return (
              <StaggerItem key={category.id}>
                <SpringTiltCard tiltIntensity={4} className="p-6 sm:p-7 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">
                        {category.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-slate-400">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="glass" className="py-1.5 px-3">
                        {skill}
                      </Badge>
                    ))}
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
