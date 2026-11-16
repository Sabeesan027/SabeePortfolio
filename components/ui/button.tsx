"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useSpring, animated } from "@react-spring/web";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006CE5] dark:focus-visible:ring-[#00C8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAFD] dark:focus-visible:ring-offset-[#030B16] disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#006CE5] to-[#008FCB] text-white font-semibold shadow-[0_4px_16px_rgba(0,108,229,0.3)] hover:shadow-[0_8px_24px_rgba(0,108,229,0.4)] dark:from-[#00C8FF] dark:to-[#168BFF] dark:text-[#030B16] dark:shadow-[0_0_24px_rgba(0,200,255,0.35)] dark:hover:shadow-[0_0_32px_rgba(0,200,255,0.6)] hover:brightness-105",
        outline:
          "border border-[#DFE7F0] bg-white/90 text-[#102039] hover:border-[#006CE5]/50 hover:bg-[#EEF4FA] shadow-sm dark:border-[rgba(85,190,255,0.2)] dark:bg-white/[0.03] dark:text-[#F5F9FF] dark:hover:border-[#00C8FF]/40 dark:hover:bg-white/[0.06] backdrop-blur-md",
        ghost: "text-[#52647B] hover:text-[#006CE5] hover:bg-[#EEF4FA] dark:text-[#A1B3C9] dark:hover:text-[#00C8FF] dark:hover:bg-white/[0.05]",
        glow: "relative border border-[#006CE5]/30 bg-[#006CE5]/10 text-[#006CE5] hover:bg-[#006CE5]/15 dark:border-[#00C8FF]/35 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF] dark:hover:bg-[#00C8FF]/20 shadow-[0_2px_12px_rgba(0,108,229,0.1)] dark:shadow-[0_0_20px_rgba(0,200,255,0.15)]",
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
