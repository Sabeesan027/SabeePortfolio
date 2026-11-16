"use client";

import * as React from "react";
import { Monitor, Smartphone, ShoppingCart, Layers, ArrowRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      id: "web-dev",
      icon: Monitor,
      title: "Web Development",
      description:
        "Modern, responsive, and high-performance websites and web applications.",
      active: true,
      href: "#projects",
    },
    {
      id: "mobile-dev",
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Android apps and cross-platform solutions with great user experiences.",
      active: false,
      href: "#projects",
    },
    {
      id: "pos-inventory",
      icon: ShoppingCart,
      title: "POS & Inventory Systems",
      description:
        "Business-ready POS and inventory solutions for retail and restaurants.",
      active: false,
      href: "#projects",
    },
    {
      id: "erp-solutions",
      icon: Layers,
      title: "ERP Solutions",
      description:
        "Custom enterprise systems to streamline operations and management.",
      active: false,
      href: "#projects",
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-4 w-1 bg-[#00D5E8] rounded-full" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00D5E8]">
            SERVICES
          </span>
        </div>

        {/* Section Heading Row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EAF3FF]">
            What I Build
          </h2>
          <a
            href="#projects"
            className="group inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase transition-colors hover:text-[#00D5E8]"
          >
            <span>View All Services</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 ${
                  service.active
                    ? "border border-[#00D5E8]/60 bg-gradient-to-b from-cyan-500/15 via-[#101B2A]/90 to-[#101B2A] shadow-[0_0_35px_rgba(0,213,232,0.18)]"
                    : "border border-white/10 bg-[#101B2A]/60 hover:border-cyan-500/40 hover:bg-[#101B2A]/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                }`}
              >
                <div>
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl mb-5 transition-colors ${
                      service.active
                        ? "bg-[#00D5E8] text-[#080D16] shadow-[0_0_15px_rgba(0,213,232,0.4)]"
                        : "bg-[#1A2B3D] text-[#00D5E8] group-hover:bg-cyan-500/20"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#EAF3FF] group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#7A8FAD] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Circular Arrow Button */}
                <div className="mt-8 flex justify-end">
                  <a
                    href={service.href}
                    aria-label={`Learn more about ${service.title}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                      service.active
                        ? "bg-[#00D5E8] text-[#080D16] shadow-[0_0_12px_rgba(0,213,232,0.4)]"
                        : "border border-white/10 bg-[#1A2B3D]/70 text-slate-400 group-hover:border-cyan-500/50 group-hover:bg-[#00D5E8] group-hover:text-[#080D16]"
                    }`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
