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
  const [activeSection, setActiveSection] = React.useState("");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  // Scroll listener for glass blur header state & active section tracking
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Identify active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3.5 py-2.5 sm:px-5 sm:py-3 transition-all duration-300",
          scrolled
            ? "border-[#DFE7F0] bg-white/85 text-[#102039] shadow-[0_4px_24px_rgba(16,32,57,0.06)] backdrop-blur-xl dark:border-[rgba(85,190,255,0.16)] dark:bg-[#030B16]/85 dark:text-[#F5F9FF] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            : "border-[#DFE7F0]/60 bg-white/65 text-[#102039] backdrop-blur-md dark:border-[rgba(85,190,255,0.1)] dark:bg-[#030B16]/60 dark:text-[#F5F9FF]"
        )}
      >
        {/* Brand Avatar + Monospace Identifier */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#102039] transition-colors dark:text-[#F5F9FF]"
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-xl border border-[#006CE5]/30 bg-[#EEF4FA] transition-colors group-hover:border-[#006CE5]/70 dark:border-[rgba(85,190,255,0.3)] dark:bg-[#071426] dark:group-hover:border-[#00C8FF]/70">
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

        {/* Desktop Links with Active Section Pill */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "text-[#006CE5] dark:text-[#00C8FF]"
                    : "text-[#52647B] hover:text-[#102039] dark:text-[#A1B3C9] dark:hover:text-[#F5F9FF]"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-lg bg-[#EEF4FA] dark:bg-[rgba(85,190,255,0.1)] -z-10"
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Controls: Availability Badge + Theme Switcher + Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-teal-600/25 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 transition-colors hover:border-teal-600/40 hover:bg-teal-100/70 dark:border-teal-400/25 dark:bg-teal-500/10 dark:text-teal-300 dark:hover:border-teal-400/50 dark:hover:bg-teal-500/15"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75 dark:bg-teal-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400" />
            </span>
            Available for Work
          </a>

          {/* Premium Animated Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#DFE7F0] bg-[#F8FAFD] text-[#52647B] shadow-sm transition-all duration-200 hover:border-[#006CE5]/40 hover:bg-[#EEF4FA] hover:text-[#006CE5] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006CE5] dark:border-[rgba(85,190,255,0.18)] dark:bg-[#071426] dark:text-[#A1B3C9] dark:hover:border-[#00C8FF]/50 dark:hover:bg-[#0B1C30] dark:hover:text-[#00C8FF] cursor-pointer"
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
                  <Moon className="h-4 w-4 text-[#006CE5]" />
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#DFE7F0] bg-[#F8FAFD] text-[#102039] transition-colors hover:bg-[#EEF4FA] active:scale-95 md:hidden dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426] dark:text-[#F5F9FF] dark:hover:bg-[#0B1C30]"
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
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[#DFE7F0] bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426]/95"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-[#EEF4FA] text-[#006CE5] font-semibold dark:bg-[rgba(85,190,255,0.12)] dark:text-[#00C8FF]"
                        : "text-[#52647B] hover:bg-[#EEF4FA]/60 hover:text-[#102039] dark:text-[#A1B3C9] dark:hover:bg-white/[0.05] dark:hover:text-[#F5F9FF]"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="mt-2 flex items-center justify-between border-t border-[#DFE7F0] pt-3 dark:border-[rgba(85,190,255,0.16)]">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-xl border border-teal-600/25 bg-teal-50 px-3.5 py-2 text-xs font-medium text-teal-700 dark:border-teal-400/25 dark:bg-teal-500/10 dark:text-teal-300"
                >
                  <span className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400" />
                  Available for Work
                </a>

                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle light/dark theme"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#DFE7F0] bg-[#F8FAFD] px-3 py-2 text-xs font-medium text-[#102039] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30] dark:text-[#F5F9FF]"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-3.5 w-3.5 text-amber-400" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-3.5 w-3.5 text-[#006CE5]" />
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
