import { PROFILE } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#090A0F] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <div>
          <span className="font-mono text-sm font-semibold tracking-widest text-slate-100">
            {PROFILE.wordmark}
          </span>
          <p className="mt-1 text-xs text-slate-500">
            {PROFILE.fullName} · {PROFILE.location}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a href="#about" className="hover:text-cyan-300 transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-cyan-300 transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-cyan-300 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">
            Contact
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {year} {PROFILE.brandTag}. Built with Next.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
}

