"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// 8-Point Starburst SVG accent inspired by the Envato loading template
function StarburstIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M50 0 L58 35 L90 20 L68 45 L100 50 L68 55 L90 80 L58 65 L50 100 L42 65 L10 80 L32 55 L0 50 L32 45 L10 20 L42 35 Z" />
    </svg>
  );
}

const BOOT_LOGS = [
  "SYS // INITIALIZING SABEESAN.G PORTFOLIO",
  "CONNECTING JAFFNA NODE // LAT 9.66° N · LON 80.02° E",
  "COMPILING CORE ARCHITECTURE // NEXT.JS + TAILWIND",
  "LOADING PHYSICAL SHADOW & STUDIO SPOTLIGHT ENGINE",
  "MOUNTING 3-ZONE EDITORIAL STAGE & TELEMETRY",
  "ALL SYSTEMS OPERATIONAL // LAUNCHING EXPERIENCE",
];

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = React.useState(0);
  const [logIndex, setLogIndex] = React.useState(0);
  const [isDone, setIsDone] = React.useState(false);

  React.useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = "hidden";

    // Progress counter animation from 0 to 100%
    const startTime = performance.now();
    const duration = 2100; // 2.1s duration (cinematic and fast)

    let animationFrameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Non-linear easing (starts fast, slows slightly at 70%, then finishes decisively)
      const ease =
        rawProgress < 0.7
          ? Math.pow(rawProgress / 0.7, 1.2) * 0.7
          : 0.7 + Math.pow((rawProgress - 0.7) / 0.3, 1.6) * 0.3;

      const currentPercent = Math.min(100, Math.floor(ease * 100));
      setProgress(currentPercent);

      // Update telemetry status messages based on percent
      const step = Math.min(
        BOOT_LOGS.length - 1,
        Math.floor((currentPercent / 100) * BOOT_LOGS.length)
      );
      setLogIndex(step);

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = "";
          onComplete?.();
        }, 320);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    const handleSkip = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        setProgress(100);
        setIsDone(true);
        document.body.style.overflow = "";
        onComplete?.();
      }
    };

    window.addEventListener("keydown", handleSkip);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleSkip);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090A0F] overflow-hidden select-none cursor-wait"
        >
          {/* Deep Architectural Perspective Floor Grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
          >
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(6,182,212,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.15) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                transform: "perspective(600px) rotateX(60deg) translateY(-80px)",
                transformOrigin: "center 40%",
              }}
            />
          </div>

          {/* Central Cyan Ambient Light Bloom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[540px] rounded-full bg-cyan-500/15 blur-[120px]"
          />

          {/* Main Card Stage Inspired by Envato Template Frame */}
          <div className="relative z-10 w-full max-w-lg px-4 sm:px-6">
            {/* Top Starburst Floating Accent */}
            <div className="absolute -top-7 -left-3 text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] animate-pulse">
              <StarburstIcon className="h-9 w-9 animate-[spin_12s_linear_infinite]" />
            </div>

            {/* Bottom Starburst Floating Accent */}
            <div className="absolute -bottom-6 -right-2 text-teal-400 drop-shadow-[0_0_12px_rgba(20,184,166,0.8)] animate-pulse">
              <StarburstIcon className="h-10 w-10 animate-[spin_14s_linear_infinite_reverse]" />
            </div>

            {/* Modern HUD Window Capsule Card */}
            <div className="relative rounded-[26px] border-2 border-cyan-400/35 bg-[#0D1117]/90 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(6,182,212,0.18)]">
              {/* Card Header Chrome */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    LOADING
                  </span>
                  <span className="flex gap-1 text-cyan-400 font-bold">
                    <span className="animate-bounce" style={{ animationDelay: "0ms" }}>
                      •
                    </span>
                    <span className="animate-bounce" style={{ animationDelay: "150ms" }}>
                      •
                    </span>
                    <span className="animate-bounce" style={{ animationDelay: "300ms" }}>
                      •
                    </span>
                  </span>
                </div>

                {/* 3 Window Control Squares (From Envato Frame 10s) */}
                <div className="flex items-center gap-1.5">
                  <div
                    className={cn(
                      "h-2 w-2 rounded-xs border border-white/20 transition-all duration-300",
                      progress > 20
                        ? "bg-cyan-400 border-cyan-300 shadow-[0_0_6px_rgba(6,182,212,0.8)]"
                        : "bg-white/10"
                    )}
                  />
                  <div
                    className={cn(
                      "h-2 w-2 rounded-xs border border-white/20 transition-all duration-300",
                      progress > 55
                        ? "bg-sky-400 border-sky-300 shadow-[0_0_6px_rgba(56,189,248,0.8)]"
                        : "bg-white/10"
                    )}
                  />
                  <div
                    className={cn(
                      "h-2 w-2 rounded-xs border border-white/20 transition-all duration-300",
                      progress > 85
                        ? "bg-teal-400 border-teal-300 shadow-[0_0_6px_rgba(20,184,166,0.8)]"
                        : "bg-white/10"
                    )}
                  />
                </div>
              </div>

              {/* Center Brand Identity */}
              <div className="my-6 text-center">
                <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-slate-400 mb-1">
                  Full-Stack Architect
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
                  <span>SABEESAN</span>
                  <span className="text-cyan-400">.G</span>
                </div>
              </div>

              {/* Liquid Pill Progress Capsule (From Envato Template) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                    SYSTEM BOOT
                  </span>
                  <span className="font-bold text-lg text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                    {progress}%
                  </span>
                </div>

                {/* Progress Track */}
                <div className="relative h-7 w-full overflow-hidden rounded-full border border-white/15 bg-black/70 p-1 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">
                  {/* Fluid Filled Bar */}
                  <motion.div
                    className="relative h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-teal-300 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.1 }}
                  >
                    {/* Glowing highlight crest at the head */}
                    <div className="absolute right-0 top-0 bottom-0 w-4 rounded-full bg-white/70 blur-[2px]" />
                  </motion.div>
                </div>
              </div>

              {/* Dynamic Terminal Status Readout */}
              <div className="mt-5 rounded-xl border border-white/[0.06] bg-black/40 px-3.5 py-2.5 flex items-center gap-2">
                <span className="font-mono text-cyan-400 text-xs shrink-0">&gt;</span>
                <span className="font-mono text-[11px] text-slate-300 truncate">
                  {BOOT_LOGS[logIndex]}
                </span>
              </div>
            </div>

            {/* Skip Micro-Hint */}
            <div className="mt-4 text-center">
              <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                PRESS ESC OR CLICK ANYWHERE TO ENTER
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
