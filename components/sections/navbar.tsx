"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled
            ? "border-white/12 bg-[#090A0F]/85 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "border-white/[0.08] bg-[#090A0F]/55 backdrop-blur-md"
        )}
      >
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-slate-100"
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-lg border border-cyan-400/35 bg-cyan-500/10 transition-colors group-hover:border-cyan-300/70">
            <Image
              src={PROFILE.profileImage}
              alt={PROFILE.fullName}
              width={32}
              height={32}
              className="h-full w-full object-cover object-top"
              priority
            />
          </span>
          <span className="font-mono text-sm tracking-wide">
            {PROFILE.brandTag}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-slate-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Status + Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-300 transition-colors hover:border-teal-400/50 hover:bg-teal-500/15"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            Available for Work
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/12 bg-[#0D1117]/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 border-t border-white/10 pt-3">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-teal-400/25 bg-teal-500/10 px-4 py-2.5 text-xs font-medium text-teal-300"
                >
                  <span className="h-2 w-2 rounded-full bg-teal-400" />
                  Available for Work
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

