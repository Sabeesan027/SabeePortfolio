"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  X,
  Cpu,
  Sparkles,
  ShoppingBag,
  Smartphone,
  Building2,
  MessageSquareCode,
  Gamepad2,
  Layers,
} from "lucide-react";
import {
  PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpringTiltCard } from "@/components/motion/SpringTiltCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TechIcon } from "@/components/ui/tech-icon";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES: ProjectCategory[] = ["All", "Web", "Mobile", "AI & Systems"];
const PROJECTS_BACKDROP_SRC = "/src/projects-backdrop.jpg";

const PROJECT_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "salesphere-pos": ShoppingBag,
  "naviora-android": Smartphone,
  "virtual-saree-draping": Sparkles,
  "enterprise-construction-web": Building2,
  "whatsapp-automation-bot": MessageSquareCode,
  "eldoria-dragons-heart": Gamepad2,
  "renttent-medicare-plus": Layers,
};

export function ProjectsSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] =
    React.useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] =
    React.useState<ProjectItem | null>(null);

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((project) =>
      project.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  const categoryCounts = React.useMemo(() => {
    return {
      All: PROJECTS.length,
      Web: PROJECTS.filter((p) => p.categories.includes("Web")).length,
      Mobile: PROJECTS.filter((p) => p.categories.includes("Mobile")).length,
      "AI & Systems": PROJECTS.filter((p) =>
        p.categories.includes("AI & Systems")
      ).length,
    };
  }, []);

  // GSAP ScrollTrigger initial reveal + filter stagger choreography
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-grid-item",
        { opacity: 0, scale: 0.94, y: 22 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.065,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section ref={sectionRef} id="projects" className="relative py-14 sm:py-20 overflow-hidden border-t border-white/[0.05]">
      {/* Crisp Architectural Gallery Backdrop Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={PROJECTS_BACKDROP_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090A0F] via-transparent to-[#090A0F]" />
      </div>

      {/* Atmospheric Cyan / Sky Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 h-[520px] w-[560px] rounded-full bg-cyan-500/10 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[150px]"
      />

      {/* Giant Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 select-none text-[16vw] font-black uppercase tracking-tighter text-white/[0.015] whitespace-nowrap"
      >
        SHOWCASE
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Technical Coordinate Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-slate-500">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>SEC // 03 · FEATURED ENGINEERING REPOSITORY</span>
          </div>
          <span className="text-slate-500">PROD-GRADE SYSTEMS · VERIFIED ARCHITECTURE</span>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8">
          <SectionHeading
            eyebrow="Selected Engineering Work"
            title="Featured"
            highlight="Projects"
            description="Production web platforms, native Android releases, AI computer vision pipelines, and enterprise POS systems."
          />

          {/* Filter Pills with Counts */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/[0.1] bg-[#0D1117]/85 p-1.5 backdrop-blur-xl self-start md:mb-8 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count = categoryCounts[category];
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "relative rounded-xl px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer sm:text-sm flex items-center gap-1.5",
                    isActive
                      ? "text-slate-950 font-semibold"
                      : "text-slate-400 hover:text-slate-100"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-project-filter"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_16px_rgba(6,182,212,0.4)]"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                  <span
                    className={cn(
                      "relative z-10 font-mono text-[10px] px-1.5 py-0.2 rounded-full",
                      isActive
                        ? "bg-slate-950/20 text-slate-950"
                        : "bg-white/[0.06] text-slate-400"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with SpringTiltCard */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => {
            const ProjectIcon = PROJECT_ICON_MAP[project.id] ?? Layers3;
            return (
              <div
                key={`${activeCategory}-${project.id}`}
                className={cn(
                  "project-grid-item",
                  index === 0 && activeCategory === "All" ? "md:col-span-2" : ""
                )}
              >
                <SpringTiltCard
                  tiltIntensity={4.5}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  className="h-full cursor-pointer p-6 sm:p-7 group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_36px_rgba(6,182,212,0.18)] bg-[#0D1117]/92 backdrop-blur-md"
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                          <ProjectIcon className="h-3.5 w-3.5" />
                        </span>
                        <Badge variant="cyan" className="font-mono text-[11px] border-cyan-400/30 bg-cyan-500/10">
                          {project.badge}
                        </Badge>
                      </div>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:text-cyan-300 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.25)]">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-slate-50 group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-cyan-400/90">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300"
                        >
                          <TechIcon name={tech} className="h-3 w-3 text-cyan-400 shrink-0" />
                          <span>{tech}</span>
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <Badge variant="glass" className="text-[11px]">
                          +{project.stack.length - 4}
                        </Badge>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400/90 group-hover:underline flex items-center gap-1 shrink-0 ml-2">
                      Case Study
                    </span>
                  </div>
                </SpringTiltCard>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Case-Study Drawer/Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl sm:rounded-3xl border border-cyan-400/35 bg-[#0D1117] p-5 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.85)] overscroll-contain"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant="cyan" className="font-mono text-xs mb-3">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {selectedProject.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-cyan-400 sm:text-sm">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-white cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400">
                    <Layers3 className="h-3.5 w-3.5 text-cyan-400" />
                    Overview
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.04] p-4 sm:p-5">
                  <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300">
                    <Cpu className="h-3.5 w-3.5" />
                    Architecture & Deployment
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {selectedProject.architecture}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    Key Engineering Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                    Impact
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {selectedProject.impact}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1.5 text-xs text-sky-200"
                      >
                        <TechIcon name={tech} className="h-3.5 w-3.5 text-sky-300 shrink-0" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                <span className="font-mono text-[11px] text-slate-500">
                  SYSTEM // VERIFIED PRODUCTION ARCHITECTURE
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="cursor-pointer"
                  >
                    <Button className="h-10 rounded-xl border border-cyan-400/40 bg-[#12161F] px-4 text-xs text-slate-50 hover:bg-[#171D28] hover:border-cyan-300">
                      Discuss This Architecture
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="h-10 rounded-xl"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
