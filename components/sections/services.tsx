"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, type ServiceItem } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TechIcon } from "@/components/ui/tech-icon";
import { LottieServiceIcon } from "@/components/motion/LottieServiceIcon";

gsap.registerPlugin(ScrollTrigger);

const SPOTLIGHT_MAP: Record<ServiceItem["accent"], string> = {
  cyan: "rgba(6, 182, 212, 0.18)",
  sky: "rgba(56, 189, 248, 0.18)",
  teal: "rgba(20, 184, 166, 0.18)",
};

const SERVICES_BACKDROP_SRC = "/src/services-backdrop.svg";

export function ServicesSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".service-bento-card", { opacity: 0, y: 28 });
      ScrollTrigger.batch(".service-bento-card", {
        start: "top 86%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-14 sm:py-20 overflow-hidden border-t border-white/[0.05]">
      {/* Crisp Architectural Blueprint Backdrop Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={SERVICES_BACKDROP_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090A0F] via-transparent to-[#090A0F]" />
      </div>

      {/* Atmospheric Cyan / Sky Glow Bleed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-36 h-[540px] w-[540px] rounded-full bg-cyan-500/12 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 h-[480px] w-[500px] rounded-full bg-sky-500/10 blur-[140px]"
      />

      {/* Giant Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 select-none text-[17vw] font-black uppercase tracking-tighter text-white/[0.015] whitespace-nowrap"
      >
        CAPABILITIES
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Technical Coordinate Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-slate-500">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>SEC // 02 · FULL-CYCLE CAPABILITIES</span>
          </div>
          <span className="text-slate-500">6 CORE DISCIPLINES · PRODUCTION READY</span>
        </div>

        <SectionHeading
          eyebrow="Capabilities & Services"
          title="Engineering Services Built for"
          highlight="Production Scale"
          description="From responsive Next.js web platforms and native Kotlin Android apps to Linux VPS infrastructure and security-hardened APIs."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`service-bento-card ${service.span}`}
              >
                <SpotlightCard
                  spotlightColor={SPOTLIGHT_MAP[service.accent]}
                  className="relative p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-cyan-400/50 hover:shadow-[0_0_36px_rgba(6,182,212,0.18)] group bg-[#0D1117]/80 backdrop-blur-md"
                >
                  {/* Architectural corner crosshair ticks */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-2 right-2 font-mono text-[10px] text-white/20 transition-colors group-hover:text-cyan-400/60"
                  >
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-2 left-2 font-mono text-[10px] text-white/20 transition-colors group-hover:text-cyan-400/60"
                  >
                    +
                  </span>

                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:border-cyan-300/60 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] shadow-[0_0_16px_rgba(6,182,212,0.12)]">
                        <LottieServiceIcon
                          type={service.iconName}
                          isHovered={isHovered}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500 group-hover:text-cyan-300 transition-colors">
                          0{index + 1}
                        </span>
                        <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/15">
                          <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-all duration-300 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300 group-hover:border-cyan-500/35 group-hover:bg-cyan-500/[0.04] transition-colors"
                      >
                        <TechIcon name={tag} className="h-3 w-3 text-cyan-400 shrink-0" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
