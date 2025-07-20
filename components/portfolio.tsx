"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { useTheme } from "@/components/theme-provider";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/projects-section";
import Navigation from "@/components/navigation";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Background from "@/components/background";

// 👇 Importar dinámicamente ParticleField para evitar usarlo directamente en el server
const ParticleField = dynamic(
  () => import("@/components/particle-field").then((mod) => mod.ParticleField),
  { ssr: false }
);

export default function PortfolioContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-hidden relative transition-all duration-1000"
    >
      <Background />
      <ParticleField theme={currentTheme} />
      <Navigation />
      <HeroSection />
      <ProjectSection />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
