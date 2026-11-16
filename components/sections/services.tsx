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
  cyan: "rgba(0, 200, 255, 0.16)",
  sky: "rgba(22, 139, 255, 0.16)",
  teal: "rgba(0, 108, 229, 0.16)",
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
    <section ref={sectionRef} id="services" className="relative py-14 sm:py-20 overflow-hidden border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] bg-[#F8FAFD] dark:bg-[#030B16]">
      {/* Architectural Blueprint Backdrop Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={SERVICES_BACKDROP_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 dark:opacity-35 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFD] via-transparent to-[#F8FAFD] dark:from-[#030B16] dark:via-transparent dark:to-[#030B16]" />
      </div>

      {/* Atmospheric Glow Bleed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-36 h-[540px] w-[540px] rounded-full bg-[#006CE5]/10 dark:bg-[#00C8FF]/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 h-[480px] w-[500px] rounded-full bg-[#008FCB]/10 dark:bg-[#168BFF]/10 blur-[140px]"
      />

      {/* Giant Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 select-none text-[17vw] font-black uppercase tracking-tighter text-[#102039]/[0.025] dark:text-white/[0.015] whitespace-nowrap"
      >
        CAPABILITIES
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Technical Coordinate Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] dark:bg-[#00C8FF]" />
            <span>SEC // 02 · FULL-CYCLE CAPABILITIES</span>
          </div>
          <span className="text-[#52647B] dark:text-[#A1B3C9]">6 CORE DISCIPLINES · PRODUCTION READY</span>
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
                  className="p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#006CE5]/50 dark:hover:border-[#00C8FF]/50 hover:shadow-[0_8px_30px_rgba(0,108,229,0.12)] dark:hover:shadow-[0_0_36px_rgba(0,200,255,0.18)] group"
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#006CE5]/20 bg-[#006CE5]/10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:border-[#006CE5]/50 dark:border-[#00C8FF]/25 dark:bg-[#00C8FF]/10 dark:group-hover:border-[#00C8FF]/60 shadow-[0_4px_16px_rgba(0,108,229,0.08)] dark:shadow-[0_0_16px_rgba(0,200,255,0.15)]">
                        <LottieServiceIcon
                          type={service.iconName}
                          isHovered={isHovered}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-[#52647B] dark:text-[#A1B3C9] group-hover:text-[#006CE5] dark:group-hover:text-[#00C8FF] transition-colors">
                          0{index + 1}
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#52647B] dark:text-[#A1B3C9] transition-all duration-300 group-hover:text-[#006CE5] dark:group-hover:text-[#00C8FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-[#102039] dark:text-[#F5F9FF] group-hover:text-[#006CE5] dark:group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#52647B] dark:text-[#A1B3C9]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#DFE7F0] bg-[#EEF4FA] px-2.5 py-1 text-xs text-[#102039] transition-colors group-hover:border-[#006CE5]/40 dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/70 dark:text-[#F5F9FF] dark:group-hover:border-[#00C8FF]/40"
                      >
                        <TechIcon name={tag} className="h-3 w-3 text-[#006CE5] dark:text-[#00C8FF] shrink-0" />
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
