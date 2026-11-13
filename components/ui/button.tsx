"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useSpring, animated } from "@react-spring/web";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-semibold shadow-[0_0_24px_rgba(6,182,212,0.3)] hover:shadow-[0_0_32px_rgba(6,182,212,0.5)] hover:brightness-110",
        outline:
          "border border-white/12 bg-white/[0.03] text-slate-100 hover:border-cyan-400/40 hover:bg-white/[0.06] backdrop-blur-md",
        ghost: "text-slate-300 hover:text-cyan-300 hover:bg-white/[0.05]",
        glow: "relative border border-cyan-400/35 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-300/60 shadow-[0_0_20px_rgba(6,182,212,0.15)]",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-xl px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  magnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, magnetic = false, children, ...props }, ref) => {
    const [spring, api] = useSpring(() => ({
      x: 0,
      y: 0,
      scale: 1,
      config: { tension: 280, friction: 18 },
    }));

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!magnetic) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.24;
      const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.24;
      api.start({ x: offsetX, y: offsetY, scale: 1.03 });
    };

    const handleMouseLeave = () => {
      if (!magnetic) return;
      api.start({ x: 0, y: 0, scale: 1 });
    };

    if (!magnetic) {
      return (
        <button
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <animated.div
        style={{
          x: spring.x,
          y: spring.y,
          scale: spring.scale,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <button
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </button>
      </animated.div>
    );
  }
);
Button.displayName = "Button";
