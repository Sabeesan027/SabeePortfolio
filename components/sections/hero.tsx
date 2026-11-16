"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSpring, animated } from "@react-spring/web";
import {
  ArrowUpRight,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  Terminal,
  Mouse,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type BackdropKey = "obsidian" | "cyan" | "teal";

interface BackdropTheme {
  label: string;
  bg: string;
  spotlight: string;
  ambientRim: string;
  swatch: string;
  wordmarkClass: string;
}

const BACKDROPS: Record<BackdropKey, BackdropTheme> = {
  obsidian: {
    label: "Obsidian",
    bg: "#090A0F",
    spotlight: "rgba(6, 182, 212, 0.28)",
    ambientRim: "rgba(56, 189, 248, 0.20)",
    swatch: "bg-[#111827] border-white/30",
    wordmarkClass: "from-slate-50 via-slate-200/95 to-cyan-400/55",
  },
  cyan: {
    label: "Cyan",
    bg: "#07131A",
    spotlight: "rgba(56, 189, 248, 0.35)",
    ambientRim: "rgba(6, 182, 212, 0.28)",
    swatch: "bg-cyan-500 border-cyan-200/50",
    wordmarkClass: "from-cyan-50 via-sky-200 to-cyan-400/65",
  },
  teal: {
    label: "Teal",
    bg: "#071412",
    spotlight: "rgba(20, 184, 166, 0.32)",
    ambientRim: "rgba(20, 184, 166, 0.26)",
    swatch: "bg-teal-500 border-teal-200/50",
    wordmarkClass: "from-teal-50 via-emerald-100 to-teal-400/65",
  },
};

const BACKDROP_ORDER: BackdropKey[] = ["obsidian", "cyan", "teal"];
const HERO_CUTOUT_SRC = "/src/staning%20png%20hero%20sec.png";
const HERO_BACKDROP_SRC = "/src/hero-backdrop.jpg";

export function HeroSection() {
  const heroRef = React.useRef<HTMLElement>(null);
  const spotlightRef = React.useRef<HTMLDivElement>(null);
  const portraitWrapRef = React.useRef<HTMLDivElement>(null);
  const wordmarkWrapRef = React.useRef<HTMLDivElement>(null);

  const [backdrop, setBackdrop] = React.useState<BackdropKey>("obsidian");
  const [jaffnaTime, setJaffnaTime] = React.useState("12:00");

  // Physically accurate, silky 60fps spring physics for directional cast shadow
  const [motionSpring, api] = useSpring(() => ({
    px: 0,
    py: 0,
    shadowX: 0,
    shadowY: 10,
    skewX: 0,
    scaleY: 1.0,
    wordmarkX: 0,
    config: { tension: 120, friction: 28, mass: 0.9 },
  }));

  // Live Jaffna (Asia/Colombo, UTC+5:30) clock
  React.useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Colombo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setJaffnaTime(formatted);
      } catch {
        setJaffnaTime("IST");
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 30_000);
    return () => clearInterval(timer);
  }, []);

  // GSAP mount choreography + subtle scroll-scrubbed depth separation
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-fade-up", {
        y: 22,
        opacity: 0,
        duration: 0.72,
        stagger: 0.08,
      })
        .from(
          ".hero-portrait-stage",
          {
            y: 38,
            scale: 0.96,
            opacity: 0,
            duration: 0.95,
            ease: "power3.out",
          },
          0.08
        )
        .from(
          ".hero-letter",
          {
            yPercent: 110,
            opacity: 0,
            duration: 0.85,
            stagger: 0.04,
            ease: "power4.out",
          },
          0.18
        );

      // Subtle scroll-linked Z/Y parallax between portrait and oversized wordmark
      if (portraitWrapRef.current && wordmarkWrapRef.current) {
        gsap.to(portraitWrapRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });

        gsap.to(wordmarkWrapRef.current, {
          y: 20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width; // 0..1
    const ny = (e.clientY - rect.top) / rect.height; // 0..1

    // Update spotlight directly via CSS vars for zero-jank 60fps tracking
    if (spotlightRef.current) {
      spotlightRef.current.style.setProperty("--lx", `${(nx * 100).toFixed(2)}%`);
      spotlightRef.current.style.setProperty("--ly", `${(ny * 100).toFixed(2)}%`);
      spotlightRef.current.style.opacity = "1";
    }

    // Directional vector from spotlight to subject center (cx: 0.5, cy: 0.45)
    // When light is to the right (nx > 0.5), shadow falls left (shadowX < 0)
    // When light is above (ny < 0.45), shadow falls downward (shadowY > 0)
    const vx = 0.5 - nx;
    const vy = 0.45 - ny;

    const shadowX = vx * 36;
    const shadowY = Math.max(6, 12 + vy * 22);
    const skewX = vx * -6; // Subtle realistic slant (max -3 to +3 deg)
    const scaleY = 1.0 + Math.abs(vy) * 0.04;

    const px = (nx - 0.5) * 8;
    const py = (ny - 0.5) * 5;

    api.start({
      px,
      py,
      shadowX,
      shadowY,
      skewX,
      scaleY,
      wordmarkX: -px * 0.7,
    });
  };

  const handleMouseLeave = () => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "0.55";
    }
    api.start({
      px: 0,
      py: 0,
      shadowX: 0,
      shadowY: 10,
      skewX: 0,
      scaleY: 1.0,
      wordmarkX: 0,
    });
  };

  const cycleBackdrop = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a, button, input")) return;
    setBackdrop((prev) => {
      const idx = BACKDROP_ORDER.indexOf(prev);
      return BACKDROP_ORDER[(idx + 1) % BACKDROP_ORDER.length];
    });
  };

  const theme = BACKDROPS[backdrop];
  const wordmarkLetters = PROFILE.wordmark.split("");

  return (
    <section
      ref={heroRef}
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={cycleBackdrop}
      style={{ backgroundColor: theme.bg }}
      className="relative flex min-h-[92vh] lg:min-h-screen flex-col justify-between overflow-hidden pt-20 pb-4 transition-colors duration-700 sm:pt-24 sm:pb-5 cursor-crosshair select-none"
    >
      {/* Crisp Architectural Studio Wall Backdrop Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_BACKDROP_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Theme tint & bottom seam fade into #090A0F */}
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{
            background:
              backdrop === "obsidian"
                ? "linear-gradient(to bottom, rgba(9,10,15,0.20) 0%, rgba(9,10,15,0.45) 75%, #090A0F 100%)"
                : backdrop === "cyan"
                  ? "linear-gradient(to bottom, rgba(6,182,212,0.10) 0%, rgba(7,19,26,0.55) 75%, #090A0F 100%)"
                  : "linear-gradient(to bottom, rgba(20,184,166,0.10) 0%, rgba(7,20,18,0.55) 75%, #090A0F 100%)",
          }}
        />
      </div>

      {/* Crisp cursor-reactive studio key light on the wall */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-55 transition-opacity duration-500"
        style={
          {
            "--lx": "50%",
            "--ly": "35%",
            background: `radial-gradient(650px circle at var(--lx) var(--ly), ${theme.spotlight}, transparent 70%)`,
          } as React.CSSProperties
        }
      />

      {/* 3-Zone Editorial Stage */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-6">
          {/* Left Column: Role Headline, 2-Line Bio & Dual CTAs */}
          <div className="order-2 z-30 lg:order-1 lg:col-span-4">
            <div className="hero-fade-up mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-mono text-cyan-300">
              <Terminal className="h-3 w-3" />
              <span>Full-Stack Architect &amp; Systems Engineer</span>
            </div>

            <h1 className="hero-fade-up text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
              Building scalable
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                production systems
              </span>
            </h1>

            <p className="hero-fade-up mt-4 max-w-sm text-sm leading-relaxed text-slate-300 sm:text-base">
              Crafting high-performance web platforms, native Android
              applications, and enterprise systems with Next.js, Django,
              Kotlin, and PostgreSQL.
            </p>

            <div className="hero-fade-up mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="cursor-pointer">
                <Button
                  magnetic
                  className="h-11 rounded-xl border border-cyan-400/30 bg-[#12161F] pl-4 pr-1.5 text-slate-50 shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-400/60 hover:bg-[#171D28] hover:shadow-[0_0_24px_rgba(6,182,212,0.25)]"
                >
                  <span className="font-medium text-sm">Explore Work</span>
                  <span className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 text-slate-950 shadow-sm">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Button>
              </a>

              <a href="#contact" className="cursor-pointer">
                <Button
                  magnetic
                  variant="outline"
                  className="h-11 rounded-xl border-white/15 bg-white/[0.04] px-5 text-slate-100 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/45 hover:bg-white/[0.08]"
                >
                  Get in touch
                </Button>
              </a>
            </div>
          </div>

          {/* Center Column: Standing Cutout Portrait + Physically Accurate Soft Cast Shadow */}
          <div
            ref={portraitWrapRef}
            className="hero-portrait-stage order-1 z-20 flex justify-center lg:order-2 lg:col-span-4"
          >
            <div className="relative h-[380px] w-[300px] sm:h-[460px] sm:w-[380px] lg:h-[540px] lg:w-[440px]">
              {/* Ground Contact Floor Shadow (anchored at shoes) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-4 left-1/2 h-8 w-44 -translate-x-1/2 rounded-[100%] bg-black/75 blur-[10px]"
              />

              {/* Wide Penumbra: Soft atmospheric falloff on the wall behind */}
              <animated.div
                aria-hidden="true"
                style={{
                  transformOrigin: "50% 92%",
                  transform: motionSpring.shadowX.to(
                    (sx) =>
                      `translate3d(${sx * 1.3}px, ${motionSpring.shadowY.get() * 1.15}px, 0) skewX(${motionSpring.skewX.get() * 1.2}deg) scaleY(${motionSpring.scaleY.get()})`
                  ),
                }}
                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
              >
                <Image
                  src={HERO_CUTOUT_SRC}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 520px"
                  className="object-contain object-top scale-[1.26] origin-top brightness-0 opacity-28 blur-[28px]"
                />
              </animated.div>

              {/* Studio Wall Cast Shadow: Smooth, realistic directional silhouette on the wall */}
              <animated.div
                aria-hidden="true"
                style={{
                  transformOrigin: "50% 92%",
                  transform: motionSpring.shadowX.to(
                    (sx) =>
                      `translate3d(${sx}px, ${motionSpring.shadowY.get()}px, 0) skewX(${motionSpring.skewX.get()}deg) scaleY(${motionSpring.scaleY.get()})`
                  ),
                }}
                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
              >
                <Image
                  src={HERO_CUTOUT_SRC}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 520px"
                  className="object-contain object-top scale-[1.26] origin-top brightness-0 opacity-40 blur-[14px]"
                />
              </animated.div>

              {/* Foreground standing portrait with smooth micro-parallax (no harsh drop-shadow) */}
              <animated.div
                style={{
                  transform: motionSpring.px.to(
                    (x) => `translate3d(${x}px, ${motionSpring.py.get()}px, 0)`
                  ),
                }}
                className="relative h-full w-full [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
              >
                <Image
                  src={HERO_CUTOUT_SRC}
                  alt={PROFILE.fullName}
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 520px"
                  className="object-contain object-top scale-[1.26] origin-top drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
                />
              </animated.div>
            </div>
          </div>

          {/* Right Column: Architectural Telemetry & Operational Status Card */}
          <div className="order-3 z-30 flex flex-col lg:col-span-4 lg:items-end">
            <div className="hero-fade-up w-full max-w-xs space-y-3 rounded-2xl border border-white/10 bg-[#0D1117]/75 p-4.5 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-400/40">
              {/* Header Status Beacon */}
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-teal-300">
                    Available for Work
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  NODE // 01
                </span>
              </div>

              {/* Telemetry Rows */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="h-3.5 w-3.5 text-cyan-400" />
                    Local Time
                  </span>
                  <span className="font-mono font-medium text-slate-100">
                    {jaffnaTime} <span className="text-[10px] text-slate-500">(UTC+5:30)</span>
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                    Coordinates
                  </span>
                  <span className="font-mono font-medium text-slate-200">
                    Jaffna, LK · Remote
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
                    Track Record
                  </span>
                  <span className="font-mono font-medium text-teal-300">
                    7+ Systems Shipped
                  </span>
                </div>
              </div>

              {/* Specialization Chips */}
              <div className="pt-2 border-t border-white/[0.07]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "Django", "Kotlin", "PostgreSQL", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Oversized Full-Width Display Wordmark layered gracefully across the lower portrait */}
      <div
        ref={wordmarkWrapRef}
        aria-hidden="true"
        className="pointer-events-none relative z-10 mx-auto w-full max-w-7xl -mt-10 sm:-mt-16 lg:-mt-22 px-2 text-center select-none"
      >
        <animated.div
          style={{
            transform: motionSpring.wordmarkX.to(
              (wx) => `translate3d(${wx}px, 0, 0)`
            ),
          }}
          className="overflow-hidden"
        >
          <div className="flex justify-center text-[15.5vw] font-bold tracking-[-0.055em] leading-[0.82] sm:text-[14vw] xl:text-[11.5rem]">
            {wordmarkLetters.map((char, idx) => (
              <span
                key={`${char}-${idx}`}
                className={cn(
                  "hero-letter inline-block bg-gradient-to-b bg-clip-text text-transparent",
                  theme.wordmarkClass
                )}
              >
                {char}
              </span>
            ))}
          </div>
        </animated.div>
      </div>

      {/* Bottom Interactive Dock & Backdrop Swatch Switcher */}
      <div className="relative z-30 mx-auto mt-2 flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 sm:px-8">
        <div className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0D1117]/80 px-3.5 py-1.5 font-mono text-[11px] text-slate-300 backdrop-blur-md shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Move cursor to direct studio light · Click anywhere to switch theme</span>
        </div>

        <div className="hero-fade-up flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0D1117]/80 px-3.5 py-1.5 backdrop-blur-md shadow-sm">
          <span className="font-mono text-[11px] text-slate-400 mr-1">
            Studio Ambience
          </span>
          {BACKDROP_ORDER.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setBackdrop(key)}
              aria-label={`Switch backdrop to ${BACKDROPS[key].label}`}
              className={cn(
                "h-4 w-4 rounded-full border transition-transform cursor-pointer",
                BACKDROPS[key].swatch,
                backdrop === key
                  ? "scale-125 ring-2 ring-cyan-300/80 ring-offset-2 ring-offset-[#090A0F]"
                  : "opacity-60 hover:opacity-100"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
