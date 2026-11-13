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
        isCenter ? "mx-auto max-w-2xl text-center mb-12 md:mb-16" : "max-w-2xl mb-12 md:mb-16"
      }
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-[2.65rem] leading-[1.15]">
        {title}{" "}
        {highlight ? (
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-300 bg-clip-text text-transparent">
            {highlight}
          </span>
        ) : null}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

