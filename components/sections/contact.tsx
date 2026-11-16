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
    <section id="contact" className="relative py-14 sm:py-20 overflow-hidden border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] bg-[#F8FAFD] dark:bg-[#030B16]">
      {/* Radar Telemetry Backdrop Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={CONTACT_BACKDROP_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 dark:opacity-35 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFD] via-transparent to-[#F8FAFD] dark:from-[#030B16] dark:via-transparent dark:to-[#030B16]" />
      </div>

      {/* Atmospheric Spotlight Bleed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[560px] w-[680px] rounded-full bg-[#006CE5]/10 dark:bg-[#00C8FF]/10 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-[380px] w-[460px] rounded-full bg-[#008FCB]/10 dark:bg-[#168BFF]/10 blur-[130px]"
      />

      {/* Concentric Radar Signal Rings in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[720px] w-[720px] opacity-15"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-[#006CE5] dark:border-[#00C8FF]" />
        <div className="absolute inset-20 rounded-full border border-[#DFE7F0] dark:border-[rgba(85,190,255,0.3)]" />
        <div className="absolute inset-40 rounded-full border border-dashed border-[#006CE5] dark:border-[#00C8FF]" />
      </div>

      {/* Giant Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 select-none text-[18vw] font-black uppercase tracking-tighter text-[#102039]/[0.025] dark:text-white/[0.015] whitespace-nowrap"
      >
        CONNECT
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Technical Coordinate Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] dark:bg-[#00C8FF] animate-pulse" />
            <span>SEC // 06 · DIRECT CHANNEL &amp; DISPATCH</span>
          </div>
          <span className="text-[#52647B] dark:text-[#A1B3C9]">GLOBAL AVAILABILITY · HYBRID &amp; REMOTE</span>
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
            <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between border-[#DFE7F0] hover:border-[#006CE5]/40 bg-white/95 dark:border-[rgba(85,190,255,0.16)] dark:hover:border-[#00C8FF]/40 dark:bg-[#071426]/85 backdrop-blur-md">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#006CE5]/25 bg-[#006CE5]/10 px-3 py-1 text-xs font-mono text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF] mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#006CE5] opacity-75 dark:bg-[#00C8FF]" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#006CE5] dark:bg-[#00C8FF]" />
                    </span>
                    Available for Work
                  </div>
                  <h3 className="text-2xl font-bold text-[#102039] dark:text-[#F5F9FF]">
                    Direct Channels
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#52647B] dark:text-[#A1B3C9]">
                    Prefer a quick email or connecting on LinkedIn or GitHub?
                    Reach out directly below.
                  </p>
                </div>

                {/* Copy Email Block */}
                <div className="rounded-2xl border border-[#DFE7F0] bg-[#EEF4FA]/60 p-4.5 hover:border-[#006CE5]/40 transition-colors dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/60 dark:hover:border-[#00C8FF]/30">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9]">
                    <Mail className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF]" />
                    Primary Email
                  </div>
                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="truncate text-sm font-medium text-[#102039] hover:text-[#006CE5] transition-colors font-mono dark:text-[#F5F9FF] dark:hover:text-[#00C8FF]"
                    >
                      {PROFILE.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#DFE7F0] bg-white px-2.5 py-1.5 text-xs font-medium text-[#102039] transition-colors hover:border-[#006CE5]/50 hover:text-[#006CE5] cursor-pointer dark:border-[rgba(85,190,255,0.2)] dark:bg-[#071426] dark:text-[#F5F9FF] dark:hover:border-[#00C8FF]/50 dark:hover:text-[#00C8FF]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF]" />
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
                  <div className="flex items-start gap-3 text-sm text-[#52647B] dark:text-[#A1B3C9]">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#006CE5] dark:text-[#00C8FF]" />
                    <div>
                      <div className="font-medium text-[#102039] dark:text-[#F5F9FF]">
                        {PROFILE.location}
                      </div>
                      <div className="text-xs text-[#52647B] dark:text-[#A1B3C9] mt-0.5">
                        {PROFILE.availability}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#52647B] dark:text-[#A1B3C9] font-mono">
                    <Clock className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF] shrink-0" />
                    <span>Timezone: Asia/Colombo (UTC+05:30)</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)]">
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#DFE7F0] bg-[#EEF4FA] px-4 py-2.5 text-sm font-medium text-[#102039] transition-colors hover:border-[#006CE5]/50 hover:text-[#006CE5] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/70 dark:text-[#F5F9FF] dark:hover:border-[#00C8FF]/50 dark:hover:text-[#00C8FF]"
                >
                  <LinkedInIcon className="h-4 w-4 text-[#006CE5] dark:text-[#00C8FF]" />
                  LinkedIn
                </a>
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#DFE7F0] bg-[#EEF4FA] px-4 py-2.5 text-sm font-medium text-[#102039] transition-colors hover:border-[#006CE5]/50 hover:text-[#006CE5] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/70 dark:text-[#F5F9FF] dark:hover:border-[#00C8FF]/50 dark:hover:text-[#00C8FF]"
                >
                  <GitHubIcon className="h-4 w-4 text-[#006CE5] dark:text-[#00C8FF]" />
                  GitHub
                </a>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Right Static-Compatible Contact Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <SpotlightCard className="p-6 sm:p-8 h-full border-[#DFE7F0] hover:border-[#006CE5]/40 bg-white/95 dark:border-[rgba(85,190,255,0.16)] dark:hover:border-[#00C8FF]/40 dark:bg-[#071426]/85 backdrop-blur-md">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
                  >
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#006CE5]/30 bg-[#006CE5]/15 text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/15 dark:text-[#00C8FF] shadow-[0_4px_24px_rgba(0,108,229,0.25)] dark:shadow-[0_0_24px_rgba(0,200,255,0.3)]">
                      <Check className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#102039] dark:text-[#F5F9FF]">
                      Message Prepared
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-[#52647B] dark:text-[#A1B3C9]">
                      Thanks, {name}. Since this portfolio is statically
                      exported, you can send your prepared message directly via
                      your email client or reset the form.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <a href={mailtoHref}>
                        <Button className="shadow-[0_4px_24px_rgba(0,108,229,0.3)] dark:shadow-[0_0_24px_rgba(0,200,255,0.3)]">
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
                          className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9] mb-2"
                        >
                          <User className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF]" />
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Doe"
                          className="w-full rounded-xl border border-[#DFE7F0] bg-[#EEF4FA]/60 px-4 py-3 text-sm text-[#102039] placeholder:text-[#52647B]/60 focus:bg-white focus:border-[#006CE5] focus:outline-none focus:ring-2 focus:ring-[#006CE5]/20 transition-all dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/60 dark:text-[#F5F9FF] dark:placeholder:text-[#A1B3C9]/50 dark:focus:border-[#00C8FF]/60 dark:focus:ring-[#00C8FF]/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9] mb-2"
                        >
                          <Mail className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF]" />
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className="w-full rounded-xl border border-[#DFE7F0] bg-[#EEF4FA]/60 px-4 py-3 text-sm text-[#102039] placeholder:text-[#52647B]/60 focus:bg-white focus:border-[#006CE5] focus:outline-none focus:ring-2 focus:ring-[#006CE5]/20 transition-all dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/60 dark:text-[#F5F9FF] dark:placeholder:text-[#A1B3C9]/50 dark:focus:border-[#00C8FF]/60 dark:focus:ring-[#00C8FF]/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9] mb-2"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF]" />
                        Project or Opportunity Details
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your product, timeline, or engineering team..."
                        className="w-full resize-none rounded-xl border border-[#DFE7F0] bg-[#EEF4FA]/60 px-4 py-3 text-sm text-[#102039] placeholder:text-[#52647B]/60 focus:bg-white focus:border-[#006CE5] focus:outline-none focus:ring-2 focus:ring-[#006CE5]/20 transition-all dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/60 dark:text-[#F5F9FF] dark:placeholder:text-[#A1B3C9]/50 dark:focus:border-[#00C8FF]/60 dark:focus:ring-[#00C8FF]/20"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                      <span className="text-xs text-[#52647B] dark:text-[#A1B3C9] flex items-center gap-1.5 font-mono">
                        <Sparkles className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF]" />
                        Typically responds within 24 hours.
                      </span>
                      <Button magnetic type="submit" size="lg" className="w-full sm:w-auto shadow-[0_4px_20px_rgba(0,108,229,0.25)] dark:shadow-[0_0_20px_rgba(0,200,255,0.3)]">
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
