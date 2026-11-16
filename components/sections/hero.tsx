"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSpring, animated } from "@react-spring/web";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type BackdropKey = "obsidian" | "cyan" | "teal";

interface BackdropTheme {
  label: string;
  darkBg: string;
  lightBg: string;
  darkSpotlight: string;
  lightSpotlight: string;
  swatchDark: string;
  swatchLight: string;
  wordmarkDark: string;
  wordmarkLight: string;
}

const BACKDROPS: Record<BackdropKey, BackdropTheme> = {
  obsidian: {
    label: "Cyber Navy",
    darkBg: "#030B16",
    lightBg: "#F8FAFD",
    darkSpotlight: "rgba(0, 200, 255, 0.22)",
    lightSpotlight: "rgba(0, 108, 229, 0.12)",
    swatchDark: "bg-[#0B1C30] border-[rgba(85,190,255,0.4)]",
    swatchLight: "bg-[#EEF4FA] border-[#006CE5]/40",
    wordmarkDark: "from-[#F5F9FF] via-[#A1B3C9]/90 to-[#00C8FF]/50",
    wordmarkLight: "from-[#DFE7F0] via-[#A1B3C9]/60 to-[#006CE5]/30",
  },
  cyan: {
    label: "Electric Cyan",
    darkBg: "#051324",
    lightBg: "#F0F8FF",
    darkSpotlight: "rgba(0, 200, 255, 0.28)",
    lightSpotlight: "rgba(0, 143, 203, 0.16)",
    swatchDark: "bg-[#00C8FF] border-[#00C8FF]/50",
    swatchLight: "bg-[#008FCB] border-[#008FCB]/40",
    wordmarkDark: "from-[#F5F9FF] via-sky-200 to-[#00C8FF]/65",
    wordmarkLight: "from-sky-200 via-sky-300 to-[#008FCB]/50",
  },
  teal: {
    label: "Cobalt Tech",
    darkBg: "#06152B",
    lightBg: "#F4F8FD",
    darkSpotlight: "rgba(22, 139, 255, 0.28)",
    lightSpotlight: "rgba(22, 139, 255, 0.14)",
    swatchDark: "bg-[#168BFF] border-[#168BFF]/50",
    swatchLight: "bg-[#168BFF] border-[#168BFF]/40",
    wordmarkDark: "from-[#F5F9FF] via-blue-200 to-[#168BFF]/65",
    wordmarkLight: "from-blue-200 via-blue-300 to-[#168BFF]/50",
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

  const { theme: themeMode } = useTheme();
  const [backdrop, setBackdrop] = React.useState<BackdropKey>("obsidian");
  const [jaffnaTime, setJaffnaTime] = React.useState("12:00");

  // Silky 60fps spring physics (zero React re-renders on mousemove)
  const [motionSpring, api] = useSpring(() => ({
    px: 0,
    py: 0,
    shadowX: 0,
    shadowY: 6,
    skewX: 0,
    wordmarkX: 0,
    config: { tension: 90, friction: 28, mass: 1.15 },
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
      px: dx * 8,
      py: dy * 5,
      shadowX: -dx * 16,
      shadowY: -dy * 8 + 6,
      skewX: -dx * 7,
      wordmarkX: -dx * 6,
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
      shadowY: 6,
      skewX: 0,
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

  const currentBg = themeMode === "light" ? theme.lightBg : theme.darkBg;
  const currentSpotlight =
    themeMode === "light" ? theme.lightSpotlight : theme.darkSpotlight;
  const currentWordmarkClass =
    themeMode === "light" ? theme.wordmarkLight : theme.wordmarkDark;

  return (
    <section
      ref={heroRef}
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={cycleBackdrop}
      style={{ backgroundColor: currentBg }}
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
          className="object-cover object-center opacity-40 dark:opacity-85 transition-opacity duration-700"
        />
        {/* Theme tint & bottom seam fade into canvas */}
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{
            background:
              themeMode === "light"
                ? backdrop === "obsidian"
                  ? "linear-gradient(to bottom, rgba(248,250,253,0.45) 0%, rgba(248,250,253,0.88) 75%, #F8FAFD 100%)"
                  : backdrop === "cyan"
                    ? "linear-gradient(to bottom, rgba(240,248,255,0.45) 0%, rgba(240,248,255,0.88) 75%, #F0F8FF 100%)"
                    : "linear-gradient(to bottom, rgba(244,248,253,0.45) 0%, rgba(244,248,253,0.88) 75%, #F4F8FD 100%)"
                : backdrop === "obsidian"
                  ? "linear-gradient(to bottom, rgba(3,11,22,0.3) 0%, rgba(3,11,22,0.68) 75%, #030B16 100%)"
                  : backdrop === "cyan"
                    ? "linear-gradient(to bottom, rgba(5,19,36,0.3) 0%, rgba(5,19,36,0.72) 75%, #051324 100%)"
                    : "linear-gradient(to bottom, rgba(6,21,43,0.3) 0%, rgba(6,21,43,0.72) 75%, #06152B 100%)",
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
            background: `radial-gradient(600px circle at var(--lx) var(--ly), ${currentSpotlight}, transparent 68%)`,
          } as React.CSSProperties
        }
      />

      {/* 3-Zone Editorial Stage */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-start px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-4">
          {/* Left Column: Role Headline, 2-Line Bio & Dual CTAs */}
          <div className="order-2 z-30 lg:order-1 lg:col-span-4">
            <div className="hero-fade-up mb-3 inline-flex items-center gap-2 rounded-full border border-[#006CE5]/25 bg-[#006CE5]/10 px-3 py-1 font-mono text-xs text-[#006CE5] dark:border-[rgba(85,190,255,0.25)] dark:bg-[rgba(0,200,255,0.1)] dark:text-[#00C8FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] animate-pulse dark:bg-[#00C8FF]" />
              Full-Stack &amp; Systems Architect
            </div>

            <h1 className="hero-fade-up text-2xl font-semibold tracking-tight text-[#102039] sm:text-3xl lg:text-[2.35rem] lg:leading-[1.14] dark:text-[#F5F9FF]">
              Full-stack software
              <br />
              <span className="bg-gradient-to-r from-[#006CE5] via-[#008FCB] to-[#168BFF] bg-clip-text text-transparent dark:from-[#00C8FF] dark:via-sky-200 dark:to-[#168BFF]">
                engineer &amp; builder
              </span>
            </h1>

            <p className="hero-fade-up mt-4 max-w-sm text-sm leading-relaxed text-[#52647B] sm:text-base dark:text-[#A1B3C9]">
              Designing and deploying scalable web platforms, native mobile applications, and enterprise microservices with Next.js, Django, Kotlin, and PostgreSQL.
            </p>

            <div className="hero-fade-up mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="cursor-pointer">
                <Button
                  magnetic
                  className="h-11 rounded-[10px] border border-[#102039]/10 bg-[#102039] pl-4 pr-1.5 text-[#F8FAFD] shadow-[0_8px_24px_rgba(16,32,57,0.18)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-[#1E3355] focus-visible:ring-2 focus-visible:ring-[#006CE5] dark:border-[rgba(85,190,255,0.22)] dark:bg-[#071426] dark:text-[#F5F9FF] dark:shadow-[0_8px_24px_rgba(0,0,0,0.6)] dark:hover:border-[#00C8FF]/55 dark:hover:bg-[#0B1C30] dark:focus-visible:ring-[#00C8FF]"
                >
                  <span>See my work</span>
                  <span className="ml-1.5 inline-flex h-8 w-8 items-center justify-center rounded-[7px] bg-gradient-to-br from-[#00C8FF] to-[#168BFF] text-[#030B16]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Button>
              </a>

              <a href="#contact" className="cursor-pointer">
                <Button
                  magnetic
                  variant="outline"
                  className="h-11 rounded-[10px] border-[#DFE7F0] bg-white/80 px-5 text-[#102039] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:border-[#006CE5]/40 hover:bg-[#EEF4FA] focus-visible:ring-2 focus-visible:ring-[#006CE5] dark:border-[rgba(85,190,255,0.18)] dark:bg-[#071426]/60 dark:text-[#F5F9FF] dark:hover:border-[#00C8FF]/50 dark:hover:bg-[#0B1C30] dark:focus-visible:ring-[#00C8FF]"
                >
                  Get in touch
                </Button>
              </a>
            </div>
          </div>

          {/* Center Column: Standing Cutout Portrait + Silky 3D Diffuse Cast Shadow */}
          <div
            ref={portraitWrapRef}
            className="hero-portrait-stage order-1 z-20 flex justify-center lg:order-2 lg:col-span-4"
          >
            <div className="relative h-[430px] w-[320px] sm:h-[510px] sm:w-[390px] lg:h-[570px] lg:w-[430px]">
              {/* Soft Ambient Penumbra Wall Shadow */}
              <animated.div
                aria-hidden="true"
                style={{
                  transformOrigin: "50% 92%",
                  transform: motionSpring.shadowX.to(
                    (sx) =>
                      `translate3d(${sx * 1.15}px, ${motionSpring.shadowY.get()}px, 0) skewX(${motionSpring.skewX.get() * 0.9}deg)`
                  ),
                }}
                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
              >
                <Image
                  src={HERO_CUTOUT_SRC}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 480px"
                  className="object-contain object-bottom brightness-0 opacity-25 blur-[34px] sm:blur-[42px] dark:opacity-35"
                />
              </animated.div>

              {/* Gentle Mid-Depth Silhouette Shadow */}
              <animated.div
                aria-hidden="true"
                style={{
                  transformOrigin: "50% 92%",
                  transform: motionSpring.shadowX.to(
                    (sx) =>
                      `translate3d(${sx * 0.55}px, ${motionSpring.shadowY.get() * 0.6}px, 0) skewX(${motionSpring.skewX.get() * 0.45}deg)`
                  ),
                }}
                className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
              >
                <Image
                  src={HERO_CUTOUT_SRC}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 480px"
                  className="object-contain object-bottom brightness-0 opacity-15 blur-[16px] dark:opacity-25"
                />
              </animated.div>

              {/* Ground Contact Shadow (Floor Ambient Occlusion under feet) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2 left-1/2 h-7 w-3/4 -translate-x-1/2 rounded-[100%] bg-black/35 blur-lg dark:bg-black/60"
              />

              {/* Foreground standing portrait with smooth depth parallax */}
              <animated.div
                style={{
                  transform: motionSpring.px.to(
                    (x) => `translate3d(${x}px, ${motionSpring.py.get()}px, 0)`
                  ),
                }}
                className="relative h-full w-full [mask-image:linear-gradient(to_bottom,black_0%,black_84%,rgba(0,0,0,0.45)_94%,transparent_100%)]"
              >
                <Image
                  src={HERO_CUTOUT_SRC}
                  alt={PROFILE.fullName}
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 480px"
                  className="object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
                />
              </animated.div>
            </div>
          </div>

          {/* Right Column: Telemetry Bento Card (Executive Status & Metrics) */}
          <div className="order-3 z-30 flex flex-col lg:col-span-4 lg:items-end">
            <div className="hero-fade-up w-full max-w-xs space-y-3 rounded-2xl border border-[#DFE7F0] bg-white/90 p-4.5 backdrop-blur-xl shadow-[0_12px_36px_rgba(16,32,57,0.06)] dark:border-[rgba(85,190,255,0.18)] dark:bg-[#071426]/90 dark:shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
              {/* Availability Header */}
              <div className="flex items-center justify-between border-b border-[#DFE7F0] pb-2.5 dark:border-[rgba(85,190,255,0.14)]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9]">
                  Status
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-600/30 bg-teal-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-teal-700 dark:border-teal-400/30 dark:bg-teal-500/10 dark:text-teal-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75 dark:bg-teal-400" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400" />
                  </span>
                  Available for Work
                </span>
              </div>

              {/* Location & Time */}
              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between text-[#52647B] dark:text-[#A1B3C9]">
                  <span>Location</span>
                  <span className="text-[#102039] dark:text-[#F5F9FF] font-medium">Jaffna, LK</span>
                </div>
                <div className="flex items-center justify-between text-[#52647B] dark:text-[#A1B3C9]">
                  <span>Local Time</span>
                  <span className="font-semibold text-[#006CE5] dark:text-[#00C8FF]">
                    {jaffnaTime}{" "}
                    <span className="text-[10px] text-[#52647B] dark:text-[#A1B3C9] font-normal">IST</span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-[#52647B] dark:text-[#A1B3C9]">
                  <span>Engagement</span>
                  <span className="text-[#102039] dark:text-[#F5F9FF] font-medium">Hybrid &amp; Remote</span>
                </div>
              </div>

              {/* Metric Chips */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.14)]">
                <div className="rounded-lg border border-[#DFE7F0] bg-[#EEF4FA]/60 p-2 text-center dark:border-[rgba(85,190,255,0.12)] dark:bg-[#0B1C30]/60">
                  <div className="text-base font-bold text-[#102039] dark:text-[#F5F9FF]">7+</div>
                  <div className="text-[10px] font-mono text-[#52647B] dark:text-[#A1B3C9]">
                    Systems Shipped
                  </div>
                </div>
                <div className="rounded-lg border border-[#DFE7F0] bg-[#EEF4FA]/60 p-2 text-center dark:border-[rgba(85,190,255,0.12)] dark:bg-[#0B1C30]/60">
                  <div className="text-base font-bold text-teal-600 dark:text-teal-300">100%</div>
                  <div className="text-[10px] font-mono text-[#52647B] dark:text-[#A1B3C9]">
                    Type-Safe Code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Oversized Full-Width Display Wordmark layered BEHIND the portrait */}
      <div
        ref={wordmarkWrapRef}
        aria-hidden="true"
        className="pointer-events-none relative z-10 mx-auto w-full max-w-7xl -mt-14 px-2 text-center select-none sm:-mt-20 lg:-mt-28"
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
                  "hero-letter inline-block bg-gradient-to-b bg-clip-text text-transparent transition-all duration-700",
                  currentWordmarkClass
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
        <div className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-[#DFE7F0] bg-white/80 px-3.5 py-1.5 font-mono text-[11px] text-[#52647B] shadow-sm backdrop-blur-md dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426]/80 dark:text-[#A1B3C9]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] dark:bg-[#00C8FF]" />
          Move the light · click for a new backdrop
        </div>

        <div className="hero-fade-up flex items-center gap-2.5 rounded-full border border-[#DFE7F0] bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-md dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426]/80">
          <span className="font-mono text-[11px] text-[#52647B] dark:text-[#A1B3C9] mr-1">
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
                themeMode === "light"
                  ? BACKDROPS[key].swatchLight
                  : BACKDROPS[key].swatchDark,
                backdrop === key
                  ? "scale-125 ring-2 ring-[#006CE5] ring-offset-2 ring-offset-white dark:ring-[#00C8FF] dark:ring-offset-[#030B16]"
                  : "opacity-65 hover:opacity-100"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
