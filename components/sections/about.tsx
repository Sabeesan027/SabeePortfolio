"use client";

import * as React from "react";
import Image from "next/image";
import { animate } from "animejs";
import { Compass, ShieldCheck, Rocket, MapPin } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { SpringTiltCard } from "@/components/motion/SpringTiltCard";
import { AnimatedDivider } from "@/components/motion/AnimatedDivider";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const PHILOSOPHY_ICONS = [Compass, ShieldCheck, Rocket];

const METRIC_TARGETS = [
  { end: 7, suffix: "+", decimals: 0 },
  { end: 100, suffix: "%", decimals: 0 },
  { end: 99.9, suffix: "%", decimals: 1 },
  { end: 24, suffix: "/7", decimals: 0 },
];

export function AboutSection() {
  const metricsRef = React.useRef<HTMLDivElement>(null);
  const [displayValues, setDisplayValues] = React.useState<string[]>(
    PROFILE.metrics.map((m) => m.value)
  );
  const hasCounted = React.useRef(false);

  React.useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCounted.current) {
            hasCounted.current = true;
            METRIC_TARGETS.forEach((target, idx) => {
              const counter = { val: 0 };
              animate(counter, {
                val: target.end,
                duration: 1400,
                delay: idx * 120,
                ease: "outExpo",
                onUpdate: () => {
                  setDisplayValues((prev) => {
                    const next = [...prev];
                    const formatted =
                      target.decimals > 0
                        ? counter.val.toFixed(target.decimals)
                        : Math.round(counter.val).toString();
                    next[idx] = `${formatted}${target.suffix}`;
                    return next;
                  });
                },
              });
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center mb-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About & Philosophy"
              title="Turning Operational Complexity into"
              highlight="Clean Software"
              description={PROFILE.headline}
            />
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <SpringTiltCard tiltIntensity={4} className="p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-cyan-400/35 bg-[#0D1117] shadow-[0_0_28px_rgba(6,182,212,0.18)] sm:h-36 sm:w-36">
                  <Image
                    src={PROFILE.profileImage}
                    alt={PROFILE.fullName}
                    width={288}
                    height={288}
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090A0F]/45 via-transparent to-transparent"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <Badge variant="teal" className="mb-2 font-mono text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                    Lead Developer
                  </Badge>
                  <h3 className="text-lg font-bold tracking-tight text-slate-50">
                    {PROFILE.fullName}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-cyan-300/90">
                    {PROFILE.brandTag}
                  </p>
                  <p className="mt-2 inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    {PROFILE.location}
                  </p>
                </div>
              </div>
            </SpringTiltCard>
          </Reveal>
        </div>

        {/* Anime.js Animated Metrics Row */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6"
        >
          {PROFILE.metrics.map((metric, idx) => (
            <SpringTiltCard key={metric.label} tiltIntensity={4} className="p-6 h-full">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                {metric.label}
              </div>
              <div className="mt-2 font-mono text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
                {displayValues[idx] ?? metric.value}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {metric.detail}
              </p>
            </SpringTiltCard>
          ))}
        </div>

        {/* Anime.js SVG Hairline Circuit Divider */}
        <AnimatedDivider className="mb-8" />

        {/* Engineering Philosophy Pillars wrapped in SpringTiltCard */}
        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROFILE.philosophyPoints.map((point, index) => {
            const Icon = PHILOSOPHY_ICONS[index] ?? Compass;
            return (
              <StaggerItem key={point.title}>
                <SpringTiltCard className="p-6 h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {point.description}
                  </p>
                </SpringTiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
