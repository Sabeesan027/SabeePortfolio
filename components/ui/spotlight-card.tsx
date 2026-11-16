"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
  children: React.ReactNode;
}

export function SpotlightCard({
  className,
  spotlightColor = "rgba(6, 182, 212, 0.14)",
  children,
  ...props
}: SpotlightCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [coords, setCoords] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/85 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-md dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-none dark:hover:border-cyan-400/30",
        className
      )}
      {...props}
    >
      {/* Cursor-tracking radial spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {/* Subtle top hairline shimmer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

