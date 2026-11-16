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
    <section ref={sectionRef} id="projects" className="relative py-14 sm:py-20 overflow-hidden border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] bg-[#F8FAFD] dark:bg-[#030B16]">
      {/* Architectural Gallery Backdrop Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src={PROJECTS_BACKDROP_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-15 dark:opacity-35 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFD] via-transparent to-[#F8FAFD] dark:from-[#030B16] dark:via-transparent dark:to-[#030B16]" />
      </div>

      {/* Atmospheric Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 h-[520px] w-[560px] rounded-full bg-[#006CE5]/10 dark:bg-[#00C8FF]/10 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-[#008FCB]/10 dark:bg-[#168BFF]/10 blur-[150px]"
      />

      {/* Giant Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 select-none text-[16vw] font-black uppercase tracking-tighter text-[#102039]/[0.025] dark:text-white/[0.015] whitespace-nowrap"
      >
        SHOWCASE
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Technical Coordinate Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-[#52647B] dark:text-[#A1B3C9]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006CE5] dark:bg-[#00C8FF]" />
            <span>SEC // 03 · FEATURED ENGINEERING REPOSITORY</span>
          </div>
          <span className="text-[#52647B] dark:text-[#A1B3C9]">PROD-GRADE SYSTEMS · VERIFIED ARCHITECTURE</span>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8">
          <SectionHeading
            eyebrow="Selected Engineering Work"
            title="Featured"
            highlight="Projects"
            description="Production web platforms, native Android releases, AI computer vision pipelines, and enterprise POS systems."
          />

          {/* Filter Pills with Counts */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-[#DFE7F0] bg-white/90 p-1.5 shadow-[0_4px_20px_rgba(16,32,57,0.04)] backdrop-blur-xl self-start md:mb-8 dark:border-[rgba(85,190,255,0.16)] dark:bg-[#071426]/90 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
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
                      ? "text-white dark:text-[#030B16] font-semibold"
                      : "text-[#52647B] hover:text-[#102039] dark:text-[#A1B3C9] dark:hover:text-[#F5F9FF]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-project-filter"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#006CE5] to-[#008FCB] shadow-[0_4px_16px_rgba(0,108,229,0.35)] dark:from-[#00C8FF] dark:to-[#168BFF] dark:shadow-[0_0_16px_rgba(0,200,255,0.4)]"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                  <span
                    className={cn(
                      "relative z-10 font-mono text-[10px] px-1.5 py-0.2 rounded-full",
                      isActive
                        ? "bg-white/20 text-white dark:bg-[#030B16]/20 dark:text-[#030B16]"
                        : "bg-[#EEF4FA] text-[#52647B] dark:bg-white/[0.06] dark:text-[#A1B3C9]"
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
                  className="h-full cursor-pointer p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:border-[#006CE5]/50 hover:shadow-[0_8px_30px_rgba(0,108,229,0.12)] dark:hover:border-[#00C8FF]/50 dark:hover:shadow-[0_0_36px_rgba(0,200,255,0.18)] bg-white/95 dark:bg-[#071426]/85 backdrop-blur-md"
                >
                  {/* Subtle top accent wash */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b opacity-30 dark:opacity-60",
                      project.accentGradient
                    )}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[#006CE5]/20 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF]">
                          <ProjectIcon className="h-3.5 w-3.5" />
                        </span>
                        <Badge variant="cyan" className="font-mono text-[11px] border-[#006CE5]/25 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF]">
                          {project.badge}
                        </Badge>
                      </div>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#DFE7F0] bg-[#EEF4FA] text-[#52647B] transition-colors group-hover:border-[#006CE5]/50 group-hover:text-[#006CE5] group-hover:bg-[#006CE5]/10 dark:border-[rgba(85,190,255,0.16)] dark:bg-white/[0.04] dark:text-[#A1B3C9] dark:group-hover:border-[#00C8FF]/50 dark:group-hover:text-[#00C8FF]">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-[#102039] dark:text-[#F5F9FF] group-hover:text-[#006CE5] dark:group-hover:text-[#00C8FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-[#006CE5] dark:text-[#00C8FF]">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#52647B] dark:text-[#A1B3C9] line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1 rounded-full border border-[#DFE7F0] bg-[#EEF4FA] px-2.5 py-1 text-[11px] text-[#102039] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30]/70 dark:text-[#F5F9FF]"
                        >
                          <TechIcon name={tech} className="h-3 w-3 text-[#006CE5] dark:text-[#00C8FF] shrink-0" />
                          <span>{tech}</span>
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <Badge variant="glass" className="text-[11px]">
                          +{project.stack.length - 4}
                        </Badge>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-[#006CE5] dark:text-[#00C8FF] group-hover:underline flex items-center gap-1 shrink-0 ml-2">
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
              className="fixed inset-0 bg-[#102039]/60 dark:bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#DFE7F0] bg-white p-6 shadow-2xl sm:p-8 dark:border-[rgba(85,190,255,0.25)] dark:bg-[#071426] dark:shadow-[0_24px_80px_rgba(0,0,0,0.85)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant="cyan" className="font-mono text-xs mb-3 border-[#006CE5]/25 bg-[#006CE5]/10 text-[#006CE5] dark:border-[#00C8FF]/30 dark:bg-[#00C8FF]/10 dark:text-[#00C8FF]">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {selectedProject.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold tracking-tight text-[#102039] dark:text-[#F5F9FF] sm:text-3xl">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[#006CE5] dark:text-[#00C8FF] sm:text-sm">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DFE7F0] bg-[#EEF4FA] text-[#102039] transition-colors hover:border-[#006CE5] hover:text-[#006CE5] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30] dark:text-[#F5F9FF] dark:hover:border-[#00C8FF] dark:hover:text-[#00C8FF] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52647B] dark:text-[#A1B3C9]">
                    <Layers3 className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF]" />
                    Overview
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#52647B] dark:text-[#A1B3C9] sm:text-base">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#006CE5]/20 bg-[#EEF4FA]/70 p-4 sm:p-5 dark:border-[rgba(85,190,255,0.2)] dark:bg-[#0B1C30]/60">
                  <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#006CE5] dark:text-[#00C8FF]">
                    <Cpu className="h-3.5 w-3.5" />
                    Architecture & Deployment
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#52647B] dark:text-[#A1B3C9]">
                    {selectedProject.architecture}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#52647B] dark:text-[#A1B3C9] mb-3">
                    Key Engineering Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#102039] dark:text-[#F5F9FF]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#006CE5] dark:text-[#00C8FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#52647B] dark:text-[#A1B3C9] mb-2">
                    Impact
                  </h4>
                  <p className="text-sm leading-relaxed text-[#52647B] dark:text-[#A1B3C9]">
                    {selectedProject.impact}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#52647B] dark:text-[#A1B3C9] mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#DFE7F0] bg-[#EEF4FA] px-3 py-1.5 text-xs text-[#102039] dark:border-[rgba(85,190,255,0.16)] dark:bg-[#0B1C30] dark:text-[#F5F9FF]"
                      >
                        <TechIcon name={tech} className="h-3.5 w-3.5 text-[#006CE5] dark:text-[#00C8FF] shrink-0" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end border-t border-[#DFE7F0] dark:border-[rgba(85,190,255,0.16)] pt-5">
                <Button
                  variant="outline"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Case Study
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
