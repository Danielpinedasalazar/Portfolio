"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import HeroSection from "@/components/hero-section";
import Experience from "@/components/experience";
import ProjectSection from "@/components/projects-section";
import Navigation from "@/components/navigation";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Background from "@/components/background";

const CursorSpotlight = dynamic(
  () => import("@/components/cursor-spotlight"),
  { ssr: false }
);

export default function PortfolioContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden relative">
      <Background />
      <CursorSpotlight />
      <Navigation />
      <HeroSection />
      <Experience />
      <ProjectSection />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
