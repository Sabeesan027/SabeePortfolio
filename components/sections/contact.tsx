"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Copy,
  Mail,
  MapPin,
  Send,
  Sparkles,
  User,
  MessageSquare,
  Clock,
} from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

import { PROFILE } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const CONTACT_BACKDROP_SRC = "/src/contact-backdrop.svg";

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name || "Visitor"}`
  )}&body=${encodeURIComponent(
    `${message}\n\n— ${name} (${email})`
  )}`;

  return (
    <section id="contact" className="relative py-14 sm:py-20 overflow-hidden border-t border-white/[0.05]">
      {/* Crisp Radar Telemetry Backdrop Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={CONTACT_BACKDROP_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090A0F] via-transparent to-[#090A0F]" />
      </div>

      {/* Atmospheric Cyan / Sky Spotlight Bleed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[560px] w-[680px] rounded-full bg-cyan-500/12 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-[380px] w-[460px] rounded-full bg-teal-500/10 blur-[130px]"
      />

      {/* Concentric Radar Signal Rings in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[720px] w-[720px] opacity-15"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400" />
        <div className="absolute inset-20 rounded-full border border-white/40" />
        <div className="absolute inset-40 rounded-full border border-dashed border-cyan-400" />
      </div>

      {/* Giant Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 select-none text-[18vw] font-black uppercase tracking-tighter text-white/[0.015] whitespace-nowrap"
      >
        CONNECT
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Technical Coordinate Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-slate-500">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>SEC // 06 · DIRECT CHANNEL &amp; DISPATCH</span>
          </div>
          <span className="text-slate-500">GLOBAL AVAILABILITY · HYBRID &amp; REMOTE</span>
        </div>

        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Build Something"
          highlight="Reliable & Scalable"
          description="Open to Full-Stack Software Engineering roles, freelance/commercial architecture, and hybrid or remote collaborations globally."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Left Info Card */}
          <Reveal className="lg:col-span-2">
            <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between border-white/[0.08] hover:border-cyan-400/40 bg-[#0D1117]/85 backdrop-blur-md">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-500/10 px-3 py-1 text-xs font-mono text-teal-300 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                    </span>
                    Available for Work
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">
                    Direct Channels
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Prefer a quick email or connecting on LinkedIn or GitHub?
                    Reach out directly below.
                  </p>
                </div>

                {/* Copy Email Block */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4.5 hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                    <Mail className="h-3.5 w-3.5 text-cyan-400" />
                    Primary Email
                  </div>
                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="truncate text-sm font-medium text-slate-100 hover:text-cyan-300 transition-colors font-mono"
                    >
                      {PROFILE.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-teal-400" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Location & Timezone info */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <div>
                      <div className="font-medium text-slate-100">
                        {PROFILE.location}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {PROFILE.availability}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <Clock className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                    <span>Timezone: Asia/Colombo (UTC+05:30)</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-white/[0.08]">
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <LinkedInIcon className="h-4 w-4 text-cyan-400" />
                  LinkedIn
                </a>
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <GitHubIcon className="h-4 w-4 text-cyan-400" />
                  GitHub
                </a>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Right Static-Compatible Contact Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <SpotlightCard className="p-6 sm:p-8 h-full border-white/[0.08] hover:border-cyan-400/40 bg-[#0D1117]/85 backdrop-blur-md">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
                  >
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-teal-400/30 bg-teal-500/15 text-teal-300 shadow-[0_0_24px_rgba(20,184,166,0.3)]">
                      <Check className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100">
                      Message Prepared
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-slate-400">
                      Thanks, {name}. Since this portfolio is statically
                      exported, you can send your prepared message directly via
                      your email client or reset the form.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <a href={mailtoHref}>
                        <Button className="shadow-[0_0_24px_rgba(6,182,212,0.3)]">
                          <Mail className="h-4 w-4" />
                          Open in Email Client
                        </Button>
                      </a>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSubmitted(false);
                          setName("");
                          setEmail("");
                          setMessage("");
                        }}
                      >
                        Send Another
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
                        >
                          <User className="h-3.5 w-3.5 text-cyan-400" />
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Doe"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
                        >
                          <Mail className="h-3.5 w-3.5 text-cyan-400" />
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-cyan-400" />
                        Project or Opportunity Details
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your product, timeline, or engineering team..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                      <span className="text-xs text-slate-500 flex items-center gap-1.5 font-mono">
                        <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                        Typically responds within 24 hours.
                      </span>
                      <Button magnetic type="submit" size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        Send Message
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
