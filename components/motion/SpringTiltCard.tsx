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
  spotlightColor,
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
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "group relative h-full overflow-hidden rounded-2xl border border-[#DFE7F0] bg-white/90 shadow-[0_4px_20px_rgba(16,32,57,0.04)] backdrop-blur-xl transition-all duration-300 hover:border-[#006CE5]/40 hover:shadow-[0_8px_30px_rgba(0,108,229,0.08)] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426]/80 dark:shadow-none dark:hover:border-[#00C8FF]/45 dark:hover:shadow-[0_0_25px_rgba(0,200,255,0.12)]",
          className
        )}
        {...props}
      >
        {/* Dynamic radial spotlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 dark:hidden"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(440px circle at ${coords.x}px ${coords.y}px, ${spotlightColor || "rgba(0, 108, 229, 0.08)"}, transparent 70%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px hidden rounded-2xl transition-opacity duration-300 dark:block"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(440px circle at ${coords.x}px ${coords.y}px, ${spotlightColor || "rgba(0, 200, 255, 0.16)"}, transparent 70%)`,
          }}
        />
        {/* Top border luminescence */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#006CE5]/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:via-[#00C8FF]/45"
        />
        <div className="relative z-10 h-full">{children}</div>
      </animated.div>
    </div>
  );
}

