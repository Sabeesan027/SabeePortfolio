import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-tight transition-colors",
  {
    variants: {
      variant: {
        glass:
          "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-400/35 hover:text-cyan-200",
        cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
        sky: "border-sky-500/30 bg-sky-500/10 text-sky-300",
        teal: "border-teal-500/30 bg-teal-500/10 text-teal-300",
      },
    },
    defaultVariants: {
      variant: "glass",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

