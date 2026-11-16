import { PROFILE } from "@/data/portfolio";
import { Terminal, ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#DFE7F0] bg-[#F8FAFD] py-8 overflow-hidden transition-colors duration-500 dark:border-[rgba(85,190,255,0.16)] dark:bg-[#030B16]">
      {/* Background subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-arch-grid opacity-10 dark:opacity-20 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#006CE5]/25 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF]">
            <Terminal className="h-4 w-4" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold tracking-widest text-[#102039] dark:text-[#F5F9FF]">
                {PROFILE.wordmark}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] dark:bg-[#00C8FF]" />
              <span className="font-mono text-[11px] text-[#006CE5] dark:text-[#00C8FF]">SYSTEM NORMAL</span>
            </div>
            <p className="mt-0.5 text-xs text-[#52647B] dark:text-[#A1B3C9]">
              {PROFILE.fullName} · {PROFILE.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-[#52647B] dark:text-[#A1B3C9]">
          <a href="#about" className="hover:text-[#006CE5] dark:hover:text-[#00C8FF] transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-[#006CE5] dark:hover:text-[#00C8FF] transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-[#006CE5] dark:hover:text-[#00C8FF] transition-colors">
            Projects
          </a>
          <a href="#stack" className="hover:text-[#006CE5] dark:hover:text-[#00C8FF] transition-colors">
            Stack
          </a>
          <a href="#education" className="hover:text-[#006CE5] dark:hover:text-[#00C8FF] transition-colors">
            Education
          </a>
          <a href="#contact" className="hover:text-[#006CE5] dark:hover:text-[#00C8FF] transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs text-[#52647B] dark:text-[#A1B3C9]">
          <span>© {year} {PROFILE.brandTag}</span>
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#DFE7F0] bg-white text-[#102039] hover:border-[#006CE5] hover:text-[#006CE5] shadow-sm transition-colors dark:border-[rgba(85,190,255,0.2)] dark:bg-[#071426] dark:text-[#F5F9FF] dark:hover:border-[#00C8FF]/50 dark:hover:text-[#00C8FF]"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
