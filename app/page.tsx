import { ScrollProgress } from "@/components/ui/scroll-progress";
import { LoadingScreen } from "@/components/motion/LoadingScreen";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { ProjectsSection } from "@/components/sections/projects";
import { TechStackSection } from "@/components/sections/tech-stack";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#090A0F] text-slate-100">
      <CustomCursor />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TechStackSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
