import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-tight transition-colors",
  {
    variants: {
      variant: {
        glass:
          "border-[#DFE7F0] bg-[#EEF4FA] text-[#102039] hover:border-[#006CE5]/40 hover:text-[#006CE5] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/70 dark:text-[#F5F9FF] dark:hover:border-[#00C8FF]/40 dark:hover:text-[#00C8FF]",
        cyan: "border-[#006CE5]/25 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF]",
        sky: "border-[#008FCB]/25 bg-[#008FCB]/10 text-[#008FCB] dark:border-[#168BFF]/30 dark:bg-[#168BFF]/10 dark:text-[#168BFF]",
        teal: "border-[#006CE5]/25 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF]",
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

