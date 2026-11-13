"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES, type ServiceItem } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { LottieServiceIcon } from "@/components/motion/LottieServiceIcon";

gsap.registerPlugin(ScrollTrigger);

const SPOTLIGHT_MAP: Record<ServiceItem["accent"], string> = {
  cyan: "rgba(6, 182, 212, 0.16)",
  sky: "rgba(56, 189, 248, 0.16)",
  teal: "rgba(20, 184, 166, 0.16)",
};

export function ServicesSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".service-bento-card", { opacity: 0, y: 26 });
      ScrollTrigger.batch(".service-bento-card", {
        start: "top 86%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Capabilities & Services"
          title="Engineering Services Built for"
          highlight="Production Scale"
          description="From responsive Next.js web platforms and native Kotlin Android apps to Linux VPS infrastructure and security-hardened APIs."
        />

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
                  className="p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-cyan-400/45 hover:shadow-[0_0_32px_rgba(6,182,212,0.12)]"
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:border-cyan-300/50">
                        <LottieServiceIcon
                          type={service.iconName}
                          isHovered={isHovered}
                        />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-slate-100">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="glass">
                        {tag}
                      </Badge>
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
