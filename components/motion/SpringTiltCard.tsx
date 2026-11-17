"use client";

import * as React from "react";
import { useSpring, animated } from "@react-spring/web";
import { cn } from "@/lib/utils";

interface SpringTiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
  tiltIntensity?: number;
  children: React.ReactNode;
}

export function SpringTiltCard({
  className,
  spotlightColor = "rgba(6, 182, 212, 0.16)",
  tiltIntensity = 6,
  children,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  ...props
}: SpringTiltCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const [springStyles, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { tension: 260, friction: 22 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(e);
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    const px = (x / rect.width - 0.5) * 2; // -1 to 1
    const py = (y / rect.height - 0.5) * 2; // -1 to 1

    api.start({
      rotateX: -py * tiltIntensity,
      rotateY: px * tiltIntensity,
      scale: 1.012,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(e);
    setIsHovered(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(e);
    setIsHovered(false);
    api.start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <animated.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: springStyles.scale.to(
            (s) =>
              `rotateX(${springStyles.rotateX.get()}deg) rotateY(${springStyles.rotateY.get()}deg) scale(${s})`
          ),
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        }}
        className={cn(
          "group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D1117]/85 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40",
          className
        )}
        {...props}
      >
        {/* Soft, perfectly feathered top-edge ambient radial glow (no hard edges) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_90%_40%_at_50%_0%,rgba(6,182,212,0.14),transparent_72%)] opacity-75 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Dynamic cyan radial spotlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(440px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 70%)`,
          }}
        />

        {/* Top border luminescence */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-t-2xl"
        />

        <div className="relative z-10 flex h-full flex-col justify-between">{children}</div>
      </animated.div>
    </div>
  );
}

