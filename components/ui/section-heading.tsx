import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={
        isCenter ? "mx-auto max-w-2xl text-center mb-8 md:mb-10" : "max-w-2xl mb-8 md:mb-10"
      }
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-[#006CE5]/25 bg-[#006CE5]/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF] mb-3 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] dark:bg-[#00C8FF]" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-[#102039] dark:text-[#F5F9FF] sm:text-4xl lg:text-[2.5rem] leading-[1.15]">
        {title}{" "}
        {highlight ? (
          <span className="bg-gradient-to-r from-[#006CE5] via-[#168BFF] to-[#008FCB] dark:from-[#00C8FF] dark:via-[#168BFF] dark:to-[#00C8FF] bg-clip-text text-transparent">
            {highlight}
          </span>
        ) : null}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-[#52647B] dark:text-[#A1B3C9] sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

