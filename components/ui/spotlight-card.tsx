"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
  children: React.ReactNode;
}

export function SpotlightCard({
  className,
  spotlightColor,
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
        "group relative overflow-hidden rounded-2xl border border-[#DFE7F0] bg-white/90 shadow-[0_4px_20px_rgba(16,32,57,0.04)] backdrop-blur-xl transition-all duration-300 hover:border-[#006CE5]/40 hover:shadow-[0_8px_30px_rgba(0,108,229,0.08)] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426]/80 dark:shadow-none dark:hover:border-[#00C8FF]/45 dark:hover:shadow-[0_0_25px_rgba(0,200,255,0.12)]",
        className
      )}
      {...props}
    >
      {/* Cursor-tracking radial spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 dark:hidden"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, ${spotlightColor || "rgba(0, 108, 229, 0.08)"}, transparent 70%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px hidden rounded-2xl transition-opacity duration-300 dark:block"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, ${spotlightColor || "rgba(0, 200, 255, 0.16)"}, transparent 70%)`,
        }}
      />
      {/* Subtle top hairline shimmer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#006CE5]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:via-[#00C8FF]/40"
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

