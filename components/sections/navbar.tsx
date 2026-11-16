"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { useTheme } from "@/components/theme-provider";
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
  const { theme, toggleTheme } = useTheme();

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
            ? "border-slate-200/80 bg-white/85 text-slate-900 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/12 dark:bg-[#090A0F]/85 dark:text-slate-100 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "border-slate-200/60 bg-white/65 text-slate-900 backdrop-blur-md dark:border-white/[0.08] dark:bg-[#090A0F]/55 dark:text-slate-100"
        )}
      >
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-100"
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-lg border border-cyan-500/40 bg-cyan-500/10 transition-colors group-hover:border-cyan-400/80">
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
              className="rounded-lg px-3 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.05] dark:hover:text-slate-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Controls: Availability + Theme Switcher + Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-700 transition-colors hover:border-teal-500/50 hover:bg-teal-500/20 dark:border-teal-400/25 dark:bg-teal-500/10 dark:text-teal-300 dark:hover:border-teal-400/50 dark:hover:bg-teal-500/15"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75 dark:bg-teal-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400" />
            </span>
            Available for Work
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/90 bg-white/80 text-slate-700 shadow-sm transition-all duration-200 hover:border-cyan-500/50 hover:bg-slate-100 hover:text-cyan-600 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:bg-white/[0.08] dark:hover:text-cyan-300 cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Sun className="h-4 w-4 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Moon className="h-4 w-4 text-cyan-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/90 bg-white/80 text-slate-700 transition-colors hover:bg-slate-100 active:scale-95 md:hidden dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:bg-white/[0.08]"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
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
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden dark:border-white/12 dark:bg-[#0D1117]/95"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-xl border border-teal-500/25 bg-teal-500/10 px-4 py-2 text-xs font-medium text-teal-700 dark:border-teal-400/25 dark:bg-teal-500/10 dark:text-teal-300"
                >
                  <span className="h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-400" />
                  Available for Work
                </a>

                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle light/dark theme"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-3.5 w-3.5 text-amber-400" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-3.5 w-3.5 text-cyan-700" />
                      <span>Dark</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
