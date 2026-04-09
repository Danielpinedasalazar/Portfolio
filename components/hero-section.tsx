"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTheme } from "./theme-provider";

const techBadges = [
  {
    label: "TypeScript",
    style: { top: "-20px", left: "50%", transform: "translateX(-50%)" },
    delay: 0,
  },
  { label: "AWS", style: { top: "12%", right: "-96px" }, delay: 0.5 },
  { label: "Python", style: { bottom: "14%", right: "-84px" }, delay: 1.0 },
  {
    label: "Next.js",
    style: { bottom: "-20px", left: "50%", transform: "translateX(-50%)" },
    delay: 1.5,
  },
  { label: "NestJS", style: { bottom: "14%", left: "-80px" }, delay: 2.0 },
  { label: "React", style: { top: "12%", left: "-72px" }, delay: 2.5 },
];

export default function HeroSection() {
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <section
      id="about"
      className="relative pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  Open to International Internships
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I&apos;m
                <span
                  className={`block bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
                >
                  Daniel Pineda
                </span>
              </motion.h1>

              <motion.p
                className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Systems Engineering student specializing in{" "}
                <span className="text-white/85 font-medium">
                  full-stack development and machine learning
                </span>
                . TypeScript, React, Next.js &amp; NestJS in production — plus
                Python for{" "}
                <span className="text-white/85 font-medium">
                  regression, classification, time series &amp; clustering
                </span>
                .
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-violet-500/20"
              >
                <a href="/cv.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>

              <div className="flex items-center gap-5">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Danielpinedasalazar",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/daniel-pineda-2b7204341",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:daniel.pineda73@eia.edu.co",
                    label: "Email",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white/40 hover:text-white transition-colors group relative"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — profile image with floating badges */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            {/* Image container */}
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px]">
              {/* Glow rings */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 blur-3xl opacity-25"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 blur-2xl opacity-20"
                animate={{ scale: [1.1, 1, 1.1], rotate: [360, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              />

              {/* Photo */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-violet-500/20 overflow-hidden backdrop-blur-sm shadow-2xl shadow-violet-900/40">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Daniel Pineda"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent" />
              </div>

              {/* Floating tech badges — desktop only */}
              <div className="hidden lg:block">
                {techBadges.map((badge) => (
                  <motion.div
                    key={badge.label}
                    className="absolute"
                    style={badge.style as React.CSSProperties}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -9, 0],
                    }}
                    transition={{
                      opacity: { delay: badge.delay + 0.8, duration: 0.4 },
                      scale: { delay: badge.delay + 0.8, duration: 0.4 },
                      y: {
                        delay: badge.delay + 0.8,
                        duration: 3.2 + badge.delay * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0d0b1e]/80 border border-violet-500/30 text-white/85 text-[11px] font-medium backdrop-blur-md whitespace-nowrap shadow-lg shadow-violet-900/20">
                      {badge.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
