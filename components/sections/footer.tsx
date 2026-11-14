import { PROFILE } from "@/data/portfolio";
import { Terminal, ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#090A0F] py-8 overflow-hidden">
      {/* Background subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-arch-grid opacity-20 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-400">
            <Terminal className="h-4 w-4" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold tracking-widest text-slate-100">
                {PROFILE.wordmark}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span className="font-mono text-[11px] text-teal-300">SYSTEM NORMAL</span>
            </div>
            <p className="mt-0.5 text-xs text-slate-500">
              {PROFILE.fullName} · {PROFILE.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <a href="#about" className="hover:text-cyan-300 transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-cyan-300 transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">
            Projects
          </a>
          <a href="#stack" className="hover:text-cyan-300 transition-colors">
            Stack
          </a>
          <a href="#education" className="hover:text-cyan-300 transition-colors">
            Education
          </a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>© {year} {PROFILE.brandTag}</span>
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
