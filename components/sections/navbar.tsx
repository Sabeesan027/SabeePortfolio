"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("Home");

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracker
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        if (id === "top" && window.scrollY < 300) {
          setActiveSection("Home");
          break;
        }
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          const match = NAV_LINKS.find((l) => l.href === `#${id}`);
          if (match) setActiveSection(match.label);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-6",
          scrolled
            ? "border-cyan-500/20 bg-[#080D16]/85 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-white/[0.08] bg-[#101B2A]/60 backdrop-blur-md"
        )}
      >
        {/* Brand Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 font-mono text-xs font-black text-[#080D16] shadow-[0_0_15px_rgba(0,213,232,0.4)]">
            S
          </span>
          <span className="font-heading text-sm font-extrabold tracking-wider text-slate-100">
            SABEESAN
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.label;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                  isActive
                    ? "text-[#00D5E8]"
                    : "text-slate-400 hover:text-slate-200"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA: Let's Talk */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-[#00D5E8] shadow-[0_0_15px_rgba(0,213,232,0.15)] transition-all hover:bg-cyan-500 hover:text-[#080D16] hover:shadow-[0_0_20px_rgba(0,213,232,0.4)]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-5xl rounded-2xl border border-cyan-500/20 bg-[#080D16]/95 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-cyan-500/10 hover:text-[#00D5E8]"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 border-t border-white/10 pt-3">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 py-2.5 text-xs font-bold text-[#080D16] shadow-[0_0_18px_rgba(0,213,232,0.3)]"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
