import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-tight transition-colors",
  {
    variants: {
      variant: {
        glass:
          "border-slate-200/90 bg-slate-100/90 text-slate-700 hover:border-cyan-500/35 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/35 dark:hover:text-cyan-200",
        cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
        sky: "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
        teal: "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-300",
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

