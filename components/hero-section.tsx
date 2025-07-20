"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Zap, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useTheme } from "./theme-provider";

export default function HeroSection() {
  const { theme, setTheme, themes } = useTheme();
  const currentTheme = themes[theme];
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge
                  className={`bg-gradient-to-r ${currentTheme.badgeGradient} text-white border-0 shadow-lg ${currentTheme.shadow}`}
                >
                  <Zap className="w-3 h-3 mr-1" />
                  Software Developer
                </Badge>
              </motion.div>

              <motion.h1
                className="text-6xl lg:text-8xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Meet The
                <motion.span
                  className={`block bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Developer
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-white/80 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I'm a Systems Engineering student with strong skills in
                full-stack web and mobile development, passionate about building
                scalable, real-world applications. I specialize in TypeScript,
                React, Next.js, and NestJS, with solid backend experience using
                PostgreSQL, Prisma, and RESTful APIs, and I'm comfortable
                integrating tools such as Auth0, NextAuth, Stripe, PayPal, and
                Shadcn UI.
              </motion.p>
            </div>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Danielpinedasalazar",
                  label: "Code Repository",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/daniel-pineda-2b7204341",
                  label: "Professional Network",
                },
                {
                  icon: Mail,
                  href: "mailto:daniel.pineda73@eia.edu.co",
                  label: "Direct Communication",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-white/60 hover:text-white transition-colors group relative"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-96 h-96 mx-auto">
              {/* Multiple rotating gradient rings */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${currentTheme.accent} rounded-full blur-3xl opacity-30`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className={`absolute inset-4 bg-gradient-to-r ${currentTheme.secondary} rounded-full blur-2xl opacity-25`}
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className={`absolute inset-8 bg-gradient-to-r ${currentTheme.tertiary} rounded-full blur-xl opacity-40`}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <div className="relative w-full h-full bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-full border border-white/10 overflow-hidden backdrop-blur-sm">
                <Image
                  src="/placeholder-user.jpg?height=384&width=384"
                  alt="Profile"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${currentTheme.overlay}`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
