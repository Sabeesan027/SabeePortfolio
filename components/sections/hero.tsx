"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSpring, animated } from "@react-spring/web";
import { ArrowUpRight } from "lucide-react";
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
    spotlight: "rgba(6, 182, 212, 0.26)",
    ambientRim: "rgba(56, 189, 248, 0.22)",
    swatch: "bg-[#111827] border-white/30",
    wordmarkClass: "from-slate-50 via-slate-200/95 to-cyan-400/55",
  },
  cyan: {
    label: "Cyan",
    bg: "#07131A",
    spotlight: "rgba(56, 189, 248, 0.32)",
    ambientRim: "rgba(6, 182, 212, 0.28)",
    swatch: "bg-cyan-500 border-cyan-200/50",
    wordmarkClass: "from-cyan-50 via-sky-200 to-cyan-400/65",
  },
  teal: {
    label: "Teal",
    bg: "#071412",
    spotlight: "rgba(20, 184, 166, 0.30)",
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

  // Silky 60fps spring physics (zero React re-renders on mousemove)
  const [motionSpring, api] = useSpring(() => ({
    px: 0,
    py: 0,
    shadowX: 8,
    shadowY: 6,
    skewX: -5,
    scaleY: 1.02,
    wordmarkX: 0,
    config: { tension: 95, friction: 26, mass: 1.1 },
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
        y: 24,
        opacity: 0,
        duration: 0.72,
        stagger: 0.08,
      })
        .from(
          ".hero-portrait-stage",
          {
            y: 44,
            scale: 0.95,
            opacity: 0,
            duration: 1.0,
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
          y: -36,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });

        gsap.to(wordmarkWrapRef.current, {
          y: 24,
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
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    // Update spotlight directly via CSS vars for zero-jank 60fps tracking
    if (spotlightRef.current) {
      spotlightRef.current.style.setProperty("--lx", `${(nx * 100).toFixed(2)}%`);
      spotlightRef.current.style.setProperty("--ly", `${(ny * 100).toFixed(2)}%`);
      spotlightRef.current.style.opacity = "1";
    }

    const dx = (nx - 0.5) * 2; // -1..1
    const dy = (ny - 0.5) * 2; // -1..1

    api.start({
      px: dx * 10,
      py: dy * 6,
      shadowX: -dx * 20,
      shadowY: -dy * 10 + 6,
      skewX: -dx * 15,
      scaleY: 1.02 - dy * 0.05,
      wordmarkX: -dx * 8,
    });
  };

  const handleMouseLeave = () => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "0.55";
    }
    api.start({
      px: 0,
      py: 0,
      shadowX: 8,
      shadowY: 6,
      skewX: -5,
      scaleY: 1.02,
      wordmarkX: 0,
    });
  };

  const cycleBackdrop = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a, button")) return;
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
      className="relative flex min-h-screen lg:h-screen flex-col justify-between overflow-hidden pt-20 pb-5 transition-colors duration-700 sm:pt-24 sm:pb-6 cursor-crosshair"
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
                ? "linear-gradient(to bottom, rgba(9,10,15,0.22) 0%, rgba(9,10,15,0.45) 75%, #090A0F 100%)"
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
            background: `radial-gradient(600px circle at var(--lx) var(--ly), ${theme.spotlight}, transparent 68%)`,
          } as React.CSSProperties
        }
      />

      {/* 3-Zone Editorial Stage */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-start px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-4">
          {/* Left Column: Role Headline, 2-Line Bio & Dual CTAs */}
          <div className="order-2 z-30 lg:order-1 lg:col-span-4">
            <h1 className="hero-fade-up text-2xl font-medium tracking-tight text-slate-100 sm:text-3xl lg:text-[2.2rem] lg:leading-[1.15]">
              Full-stack software
              <br />
              <span className="text-cyan-300">engineer &amp; builder</span>
            </h1>

            <p className="hero-fade-up mt-4 max-w-sm text-sm leading-relaxed text-slate-300 sm:text-base">
              Designing and deploying scalable web, mobile, and enterprise
              applications with Next.js, Django, Kotlin, and PostgreSQL.
            </p>

            <div className="hero-fade-up mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="cursor-pointer">
                <Button
                  magnetic
                  className="h-11 rounded-[10px] border border-white/15 bg-[#12161F] pl-4 pr-1.5 text-slate-50 shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-cyan-400/55 hover:bg-[#171D28]"
                >
                  <span>See my work</span>
                  <span className="ml-1.5 inline-flex h-8 w-8 items-center justify-center rounded-[7px] bg-gradient-to-br from-cyan-400 to-teal-400 text-slate-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Button>
              </a>

              <a href="#contact" className="cursor-pointer">
                <Button
                  magnetic
                  variant="outline"
                  className="h-11 rounded-[10px] border-white/15 bg-white/[0.04] px-5 text-slate-100 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-cyan-400/45 hover:bg-white/[0.08]"
                >
                  Get in touch
                </Button>
              </a>
            </div>
          </div>

          {/* Center Column: Standing Cutout Portrait + True-Silhouette Cast Shadow */}
          <div
            ref={portraitWrapRef}
            className="hero-portrait-stage order-1 z-10 flex justify-center lg:order-2 lg:col-span-4 lg:mt-2"
          >
            <div className="relative h-[400px] w-[320px] sm:h-[490px] sm:w-[400px] lg:h-[560px] lg:w-[460px]">
              {/* Penumbra: soft wide ambient shadow anchored at feet */}
              <animated.div
                aria-hidden="true"
                style={{
                  transformOrigin: "50% 88%",
                  transform: motionSpring.shadowX.to(
                    (sx) =>
                      `translate3d(${sx * 1.25}px, ${motionSpring.shadowY.get()}px, 0) skewX(${motionSpring.skewX.get() * 1.15}deg) scaleY(${motionSpring.scaleY.get()})`
                  ),
                }}
                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
              >
                <Image
                  src={HERO_CUTOUT_SRC}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 520px"
                  className="object-contain object-top scale-[1.28] origin-top brightness-0 opacity-45 blur-[11px]"
                />
              </animated.div>

              {/* Umbra: crisp, accurate silhouette cast shadow anchored at feet */}
              <animated.div
                aria-hidden="true"
                style={{
                  transformOrigin: "50% 88%",
                  transform: motionSpring.shadowX.to(
                    (sx) =>
                      `translate3d(${sx}px, ${motionSpring.shadowY.get()}px, 0) skewX(${motionSpring.skewX.get()}deg) scaleY(${motionSpring.scaleY.get()})`
                  ),
                }}
                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
              >
                <Image
                  src={HERO_CUTOUT_SRC}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 520px"
                  className="object-contain object-top scale-[1.28] origin-top brightness-0 contrast-200 opacity-75 blur-[2px]"
                />
              </animated.div>

              {/* Foreground standing portrait with spring parallax */}
              <animated.div
                style={{
                  transform: motionSpring.px.to(
                    (x) => `translate3d(${x}px, ${motionSpring.py.get()}px, 0)`
                  ),
                }}
                className="relative h-full w-full [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
              >
                <Image
                  src={HERO_CUTOUT_SRC}
                  alt={PROFILE.fullName}
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 520px"
                  className="object-contain object-top scale-[1.28] origin-top drop-shadow-[0_18px_36px_rgba(0,0,0,0.7)]"
                />
              </animated.div>
            </div>
          </div>

          {/* Right Column: Monospace Availability, Live Clock & Experience */}
          <div className="order-3 z-30 flex flex-col lg:col-span-4 lg:items-end lg:text-right">
            <div className="hero-fade-up space-y-2 font-mono text-xs text-slate-300">
              <div className="inline-flex items-center gap-2 text-slate-100">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                </span>
                Available for work · Hybrid &amp; Remote
              </div>
              <div className="text-slate-400">
                Jaffna, LK · <span className="text-slate-200">{jaffnaTime}</span>
              </div>
              <div className="text-slate-400">
                7+ production systems shipped
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Oversized Full-Width Display Wordmark layered across the lower portrait */}
      <div
        ref={wordmarkWrapRef}
        aria-hidden="true"
        className="pointer-events-none relative z-20 mx-auto w-full max-w-7xl -mt-16 px-2 text-center select-none sm:-mt-24 lg:-mt-32"
      >
        <animated.div
          style={{
            transform: motionSpring.wordmarkX.to(
              (wx) => `translate3d(${wx}px, 0, 0)`
            ),
          }}
          className="overflow-hidden"
        >
          <div className="flex justify-center text-[15.5vw] font-semibold tracking-[-0.055em] leading-[0.84] sm:text-[14vw] xl:text-[11.2rem]">
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

      {/* Bottom Interactive Hint & Backdrop Swatch Switcher */}
      <div className="relative z-30 mx-auto mt-5 flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-8">
        <div className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] text-slate-300 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Move the light · click for a new backdrop
        </div>

        <div className="hero-fade-up flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md">
          <span className="font-mono text-[11px] text-slate-400 mr-1">
            Backdrop
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
                  : "opacity-65 hover:opacity-100"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
