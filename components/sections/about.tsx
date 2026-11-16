"use client";

import * as React from "react";
import Image from "next/image";
import { animate } from "animejs";
import {
  Compass,
  ShieldCheck,
  Rocket,
  MapPin,
  Sparkles,
  Layers,
  Laptop2,
  Server,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { SpringTiltCard } from "@/components/motion/SpringTiltCard";
import { AnimatedDivider } from "@/components/motion/AnimatedDivider";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const PHILOSOPHY_ICONS = [Compass, ShieldCheck, Rocket];
const METRIC_ICONS = [Layers, Laptop2, Server, Shield];

const METRIC_TARGETS = [
  { end: 7, suffix: "+", decimals: 0 },
  { end: 100, suffix: "%", decimals: 0 },
  { end: 99.9, suffix: "%", decimals: 1 },
  { end: 24, suffix: "/7", decimals: 0 },
];

const ABOUT_BACKDROP_SRC = "/src/about-backdrop.jpg";

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
    <section id="about" className="relative py-14 sm:py-20 overflow-hidden border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] bg-[#F8FAFD] dark:bg-[#030B16]">
      {/* Architectural Studio Backdrop Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={ABOUT_BACKDROP_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 dark:opacity-35 transition-opacity duration-700"
        />
        {/* Soft edge fade into canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFD] via-transparent to-[#F8FAFD] dark:from-[#030B16] dark:via-transparent dark:to-[#030B16]" />
      </div>

      {/* Atmospheric Ambient Glow Bleed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 h-[480px] w-[520px] rounded-full bg-[#006CE5]/10 dark:bg-[#00C8FF]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 h-[360px] w-[420px] rounded-full bg-[#008FCB]/10 dark:bg-[#168BFF]/10 blur-[120px]"
      />

      {/* Giant Architectural Ghost Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none text-[16vw] font-black uppercase tracking-tighter text-[#102039]/[0.025] dark:text-white/[0.02] whitespace-nowrap"
      >
        PHILOSOPHY
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Technical Coordinate & Status Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] dark:bg-[#00C8FF]" />
            <span>SEC // 01 · ENGINEERING MINDSET</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 text-[#52647B] dark:text-[#A1B3C9]">
            <span>JAFFNA NODE · LAT 9.66° N // LON 80.02° E</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center mb-8">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About & Philosophy"
              title="Turning Operational Complexity into"
              highlight="Clean Software"
              description={PROFILE.headline}
            />
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <SpringTiltCard tiltIntensity={4} className="p-5 sm:p-6 border-[#DFE7F0] bg-white/95 dark:border-[rgba(85,190,255,0.2)] dark:bg-[#071426]/85">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-[#006CE5]/25 bg-[#EEF4FA] shadow-[0_4px_20px_rgba(0,108,229,0.12)] sm:h-36 sm:w-36 dark:border-[#00C8FF]/40 dark:bg-[#0B1C30] dark:shadow-[0_0_30px_rgba(0,200,255,0.2)]">
                  <Image
                    src={PROFILE.profileImage}
                    alt={PROFILE.fullName}
                    width={288}
                    height={288}
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102039]/40 via-transparent to-transparent dark:from-[#030B16]/60"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <Badge variant="teal" className="mb-2.5 font-mono text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] dark:bg-[#00C8FF] animate-pulse" />
                    Lead Developer
                  </Badge>
                  <h3 className="text-xl font-bold tracking-tight text-[#102039] dark:text-[#F5F9FF]">
                    {PROFILE.fullName}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-[#006CE5] dark:text-[#00C8FF]">
                    {PROFILE.brandTag}
                  </p>
                  <p className="mt-2.5 inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#52647B] dark:text-[#A1B3C9]">
                    <MapPin className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF] shrink-0" />
                    {PROFILE.location}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono text-[#006CE5] dark:text-[#00C8FF]">
                    <Sparkles className="h-3 w-3 text-[#006CE5] dark:text-[#00C8FF]" />
                    Available for Global Opportunities
                  </div>
                </div>
              </div>
            </SpringTiltCard>
          </Reveal>
        </div>

        {/* Anime.js Animated Metrics Row with Category Icons */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6"
        >
          {PROFILE.metrics.map((metric, idx) => {
            const MetricIcon = METRIC_ICONS[idx] ?? Layers;
            return (
              <SpringTiltCard key={metric.label} tiltIntensity={4} className="p-6 h-full relative group">
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#006CE5]/20 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/25 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF]">
                    <MetricIcon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] text-[#52647B] dark:text-[#A1B3C9]">0{idx + 1}</span>
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#006CE5] dark:text-[#00C8FF] mb-1">
                  {metric.label}
                </div>
                <div className="font-mono text-3xl font-bold tracking-tight text-[#102039] sm:text-4xl dark:text-[#F5F9FF] bg-gradient-to-br from-[#102039] via-[#168BFF] to-[#006CE5] dark:from-white dark:via-[#F5F9FF] dark:to-[#00C8FF] bg-clip-text text-transparent">
                  {displayValues[idx] ?? metric.value}
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#52647B] dark:text-[#A1B3C9]">
                  {metric.detail}
                </p>
              </SpringTiltCard>
            );
          })}
        </div>

        {/* Anime.js SVG Hairline Circuit Divider */}
        <AnimatedDivider className="mb-6" />

        {/* Engineering Philosophy Pillars */}
        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROFILE.philosophyPoints.map((point, index) => {
            const Icon = PHILOSOPHY_ICONS[index] ?? Compass;
            return (
              <StaggerItem key={point.title}>
                <SpringTiltCard className="p-6 sm:p-7 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#006CE5]/25 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/25 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#52647B] dark:text-[#A1B3C9]">
                        PILLAR 0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#102039] dark:text-[#F5F9FF]">
                      {point.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#52647B] dark:text-[#A1B3C9]">
                      {point.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] flex items-center justify-between text-[11px] font-mono text-[#006CE5] dark:text-[#00C8FF]">
                    <span>Verified Pattern</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF]" />
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
