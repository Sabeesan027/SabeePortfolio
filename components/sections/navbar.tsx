"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Scroll Spy logic
      const sectionElements = NAV_LINKS.map((link) =>
        document.getElementById(link.id)
      );

      const scrollPosition = window.scrollY + 200;
      let currentSection = "";

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = NAV_LINKS[i].id;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-3.5 sm:px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3.5 py-2.5 transition-all duration-300 sm:px-5 sm:py-3",
          scrolled
            ? "border-white/12 bg-[#090A0F]/85 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-xl"
            : "border-white/[0.08] bg-[#090A0F]/55 backdrop-blur-md"
        )}
      >
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-slate-100"
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-lg border border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all group-hover:border-cyan-300/80 group-hover:scale-105">
            <Image
              src={PROFILE.profileImage}
              alt={PROFILE.fullName}
              width={32}
              height={32}
              className="h-full w-full object-cover object-top"
              priority
            />
          </span>
          <span className="font-mono text-sm tracking-wide group-hover:text-cyan-300 transition-colors">
            {PROFILE.brandTag}
          </span>
        </a>

        {/* Desktop Links with Animated Active Pill Indicator */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors",
                  isActive
                    ? "text-cyan-200 font-medium"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-navbar-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-lg bg-cyan-500/15 border border-cyan-400/35 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Status + Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3.5 py-1.5 text-xs font-mono text-teal-300 shadow-[0_0_16px_rgba(20,184,166,0.15)] transition-all hover:border-teal-400/60 hover:bg-teal-500/20 hover:scale-102"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.9)]" />
            </span>
            Available for Work
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:border-cyan-400/40 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer with Staggered Entrance */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/12 bg-[#0D1117]/95 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-cyan-500/15 border border-cyan-400/30 text-cyan-200"
                        : "text-slate-300 hover:bg-white/[0.06] hover:text-cyan-300"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}
              <div className="mt-2 border-t border-white/10 pt-3">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-teal-400/30 bg-teal-500/10 px-4 py-2.5 text-xs font-mono font-medium text-teal-300"
                >
                  <span className="h-2 w-2 rounded-full bg-teal-400" />
                  Available for Work · Remote / Hybrid
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
