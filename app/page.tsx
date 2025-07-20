"use client";

import { ParticleField } from "@/components/particle-field";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { useRef } from "react";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/projects-section";
import Navigation from "@/components/navigation";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Background from "@/components/background";

function PortfolioContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-hidden relative transition-all duration-1000"
    >
      {/* Dynamic Animated Background */}
      <Background />

      {/* Particle Field */}
      <ParticleField theme={currentTheme} />

      {/* Floating 3D Tech Icon */}

      {/* Navigation */}
      <Navigation />

      <HeroSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
