"use client";

import * as React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Crisp Vector Laptop Mockup with Analytics Dashboard
function LaptopDashboardMockup() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Laptop Screen Bezel */}
      <div className="relative rounded-t-2xl border-4 border-[#2A3B4D] bg-[#0B131E] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
        {/* Webcam */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-slate-700 ring-1 ring-slate-800" />
        
        {/* Screen Display */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#080D16] border border-white/5 font-mono text-[10px]">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#101B2A]/90 px-3 py-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500/70" />
              <span className="h-2 w-2 rounded-full bg-amber-500/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-[10px] text-slate-400 font-sans font-medium">Nirals POS &amp; Restaurant Dashboard</span>
            </div>
            <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] text-emerald-400">Live Production</span>
          </div>

          {/* Dashboard Body */}
          <div className="grid grid-cols-12 h-full p-2.5 gap-2 bg-gradient-to-br from-[#080D16] to-[#0D1826]">
            {/* Sidebar */}
            <div className="col-span-3 border-r border-white/10 pr-2 flex flex-col gap-1.5">
              <div className="h-4 rounded bg-cyan-500/20 text-cyan-300 px-1.5 flex items-center text-[9px] font-sans font-semibold">
                Overview
              </div>
              <div className="h-4 rounded bg-white/5 text-slate-400 px-1.5 flex items-center text-[9px] font-sans">
                Orders &amp; POS
              </div>
              <div className="h-4 rounded bg-white/5 text-slate-400 px-1.5 flex items-center text-[9px] font-sans">
                Inventory
              </div>
              <div className="h-4 rounded bg-white/5 text-slate-400 px-1.5 flex items-center text-[9px] font-sans">
                Analytics
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-span-9 flex flex-col gap-2">
              {/* Mini Stat Cards */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="rounded border border-cyan-500/20 bg-[#101B2A]/80 p-1.5">
                  <div className="text-[8px] text-slate-400 font-sans">Daily Revenue</div>
                  <div className="text-xs font-bold text-cyan-300 font-sans">$4,850.00</div>
                </div>
                <div className="rounded border border-white/10 bg-[#101B2A]/80 p-1.5">
                  <div className="text-[8px] text-slate-400 font-sans">Active Orders</div>
                  <div className="text-xs font-bold text-slate-200 font-sans">142</div>
                </div>
                <div className="rounded border border-white/10 bg-[#101B2A]/80 p-1.5">
                  <div className="text-[8px] text-slate-400 font-sans">Uptime</div>
                  <div className="text-xs font-bold text-emerald-400 font-sans">99.98%</div>
                </div>
              </div>

              {/* Chart / Audio-Wave Visualizer Bar */}
              <div className="rounded border border-cyan-500/20 bg-[#101B2A]/60 p-2 flex flex-col justify-end h-24">
                <div className="text-[8px] text-slate-400 mb-1 font-sans">Real-time Terminal Throughput</div>
                <div className="flex items-end justify-between gap-1 h-16 pt-2">
                  {[35, 55, 40, 75, 60, 85, 95, 70, 65, 80, 100, 75, 60, 90, 85, 95, 60].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-full rounded-t bg-gradient-to-t from-cyan-600 to-[#00D5E8] opacity-80"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base / Keyboard Deck */}
      <div className="relative mx-auto h-3 w-[106%] -translate-x-[3%] rounded-b-xl bg-gradient-to-b from-[#1C2836] to-[#0E1520] border-t border-slate-600 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-14 rounded-b bg-slate-500/40" />
      </div>
    </div>
  );
}

// Construction Preview Card Mockup
function ConstructionMockup() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#101B2A] to-[#0A101A] border border-white/10 p-3 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="font-sans text-[11px] font-semibold text-slate-200">AST Constructions Portal</span>
        </div>
        <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">RSC Next.js</span>
      </div>
      <div className="my-auto grid grid-cols-3 gap-2 py-2">
        <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 p-2 flex flex-col gap-1">
          <div className="h-1.5 w-8 rounded bg-cyan-400/60" />
          <div className="h-1 w-12 rounded bg-slate-500" />
          <div className="mt-2 text-xs font-bold text-white">48+</div>
          <div className="text-[8px] text-slate-400">Sites Active</div>
        </div>
        <div className="rounded-lg bg-[#1A2B3D] border border-white/5 p-2 flex flex-col gap-1">
          <div className="h-1.5 w-8 rounded bg-slate-400" />
          <div className="h-1 w-12 rounded bg-slate-600" />
          <div className="mt-2 text-xs font-bold text-white">100%</div>
          <div className="text-[8px] text-slate-400">SEO Score</div>
        </div>
        <div className="rounded-lg bg-[#1A2B3D] border border-white/5 p-2 flex flex-col gap-1">
          <div className="h-1.5 w-8 rounded bg-slate-400" />
          <div className="h-1 w-12 rounded bg-slate-600" />
          <div className="mt-2 text-xs font-bold text-white">WebP</div>
          <div className="text-[8px] text-slate-400">Galleries</div>
        </div>
      </div>
      <div className="h-2 w-full rounded bg-white/5 overflow-hidden">
        <div className="h-full w-3/4 bg-[#00D5E8]" />
      </div>
    </div>
  );
}

// Inventory Mockup Card
function InventoryMockup() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#101B2A] to-[#0A101A] border border-white/10 p-3 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-sans text-[11px] font-semibold text-slate-200">Inventory ERP Core</span>
        </div>
        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">PostgreSQL</span>
      </div>
      <div className="my-auto flex flex-col gap-1.5 py-1">
        <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1 text-[9px] text-slate-300">
          <span>SKU-9824 Thermal Printer</span>
          <span className="font-bold text-emerald-400">In Stock (120)</span>
        </div>
        <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1 text-[9px] text-slate-300">
          <span>SKU-4412 POS Terminal Unit</span>
          <span className="font-bold text-cyan-400">Synced</span>
        </div>
        <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1 text-[9px] text-slate-300">
          <span>SKU-1029 Barcode Scanner</span>
          <span className="font-bold text-amber-400">Low Stock (8)</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
        <span>ACID Transactions</span>
        <span>Audit Trail Active</span>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState<"All" | "Web" | "Mobile" | "System">("All");

  const categories = ["All", "Web", "Mobile", "System"] as const;

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="h-4 w-1 bg-[#00D5E8] rounded-full" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#00D5E8]">
            FEATURED PROJECTS
          </span>
        </div>

        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EAF3FF]">
            Selected Works
          </h2>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#101B2A]/80 p-1 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#00D5E8] text-[#080D16] font-bold shadow-[0_0_15px_rgba(0,213,232,0.4)]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Top Large Featured Project: SaleSphere / Nirals Restaurant Dashboard */}
        <div className="rounded-3xl border border-white/10 bg-[#101B2A]/60 p-6 sm:p-8 lg:p-10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Crisp Laptop Mockup */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <LaptopDashboardMockup />
            </div>

            {/* Right Column: Project Meta & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono font-medium text-[#00D5E8]">
                Web Application
              </div>

              <h3 className="mt-4 font-heading text-2xl sm:text-3xl font-extrabold text-[#EAF3FF]">
                Nirals Restaurant Dashboard
              </h3>

              <p className="mt-3 text-sm sm:text-base text-[#7A8FAD] leading-relaxed">
                A complete restaurant management system with table management, bookings, menu, staff, and real-time monitoring. Built with multi-terminal support and thermal receipt generation.
              </p>

              {/* Tech Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="rounded-lg border border-white/10 bg-[#1A2B3D] px-3 py-1 font-mono text-xs text-slate-300">
                  Next.js
                </span>
                <span className="rounded-lg border border-white/10 bg-[#1A2B3D] px-3 py-1 font-mono text-xs text-slate-300">
                  Django
                </span>
                <span className="rounded-lg border border-white/10 bg-[#1A2B3D] px-3 py-1 font-mono text-xs text-slate-300">
                  Tailwind CSS
                </span>
                <span className="rounded-lg border border-white/10 bg-[#1A2B3D] px-3 py-1 font-mono text-xs text-slate-300">
                  PostgreSQL
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00D5E8] px-5 py-2.5 text-xs font-bold text-[#080D16] shadow-[0_0_20px_rgba(0,213,232,0.4)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,213,232,0.6)]"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </a>

                <a
                  href="https://github.com/Sabeesan027"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#101B2A] px-5 py-2.5 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-[#00D5E8]"
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                  <span>View Code</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom 2-Column Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: AST Constructions Website */}
          <div className="group rounded-3xl border border-white/10 bg-[#101B2A]/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <ConstructionMockup />

              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-mono font-medium text-[#00D5E8]">
                  Web Application
                </span>
                <a
                  href="https://github.com/Sabeesan027"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="AST Constructions Website Details"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#1A2B3D] text-slate-400 group-hover:border-cyan-500 group-hover:bg-[#00D5E8] group-hover:text-[#080D16] transition-all"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <h4 className="mt-3 font-heading text-xl font-bold text-[#EAF3FF] group-hover:text-cyan-300 transition-colors">
                AST Constructions Website
              </h4>

              <p className="mt-2 text-sm text-[#7A8FAD] leading-relaxed">
                Corporate website with project showcase, enquiry management, and admin dashboard. Engineered with React Server Components, TypeScript, and WebP asset pipeline.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              <span className="rounded-md bg-[#1A2B3D] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                React
              </span>
              <span className="rounded-md bg-[#1A2B3D] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                Django
              </span>
              <span className="rounded-md bg-[#1A2B3D] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                Vite
              </span>
              <span className="rounded-md bg-[#1A2B3D] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                Shadcn UI
              </span>
            </div>
          </div>

          {/* Card 2: Inventory Management System */}
          <div className="group rounded-3xl border border-white/10 bg-[#101B2A]/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
            <div>
              <InventoryMockup />

              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-mono font-medium text-emerald-400">
                  System
                </span>
                <a
                  href="https://github.com/Sabeesan027"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Inventory Management System Details"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#1A2B3D] text-slate-400 group-hover:border-cyan-500 group-hover:bg-[#00D5E8] group-hover:text-[#080D16] transition-all"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <h4 className="mt-3 font-heading text-xl font-bold text-[#EAF3FF] group-hover:text-cyan-300 transition-colors">
                Inventory Management System
              </h4>

              <p className="mt-2 text-sm text-[#7A8FAD] leading-relaxed">
                Web-based inventory solution to manage stock, purchases, and reports efficiently. Features real-time PostgreSQL transactional reconciliation and thermal printing.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              <span className="rounded-md bg-[#1A2B3D] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                Django
              </span>
              <span className="rounded-md bg-[#1A2B3D] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                React
              </span>
              <span className="rounded-md bg-[#1A2B3D] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                PostgreSQL
              </span>
              <span className="rounded-md bg-[#1A2B3D] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                Linux VPS
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
