"use client";

import * as React from "react";
import { animate } from "animejs";
import { cn } from "@/lib/utils";

interface AnimatedDividerProps {
  className?: string;
}

export function AnimatedDivider({ className }: AnimatedDividerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const pathRef = React.useRef<SVGPathElement>(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const el = containerRef.current;
    const path = pathRef.current;
    if (!el || !path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate(path, {
              strokeDashoffset: [length, 0],
              duration: 1200,
              ease: "outExpo",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("w-full py-2", className)}>
      <svg
        viewBox="0 0 1200 24"
        fill="none"
        preserveAspectRatio="none"
        className="h-6 w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="divider-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
            <stop offset="25%" stopColor="rgba(6, 182, 212, 0.55)" />
            <stop offset="50%" stopColor="rgba(56, 189, 248, 0.85)" />
            <stop offset="75%" stopColor="rgba(20, 184, 166, 0.55)" />
            <stop offset="100%" stopColor="rgba(20, 184, 166, 0)" />
          </linearGradient>
        </defs>
        <path
          d="M0 12 H480 L495 4 L510 20 L525 12 H1200"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
        <path
          ref={pathRef}
          d="M0 12 H480 L495 4 L510 20 L525 12 H1200"
          stroke="url(#divider-cyan)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

