"use client";

import * as React from "react";
import { Heart } from "lucide-react";

export function Footer() {
  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Stack", href: "#stack" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#080D16] py-10 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand Logo & Wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 font-mono text-xs font-black text-[#080D16] shadow-[0_0_15px_rgba(0,213,232,0.4)]">
            S
          </span>
          <span className="font-heading text-sm font-extrabold tracking-wider text-slate-100">
            SABEESAN
          </span>
        </a>

        {/* Center: Footer Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#00D5E8]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Signature */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <span>Built with</span>
          <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
          <span>by Sabeesan</span>
        </div>

      </div>
    </footer>
  );
}
