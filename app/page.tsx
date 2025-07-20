"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Globe,
  ArrowRight,
  Star,
  Zap,
  Cpu,
  Layers,
} from "lucide-react";
import Image from "next/image";
import { ParticleField } from "@/components/particle-field";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import CurrentTime from "@/components/current-time";
import ContactSection from "@/components/email-contsct";

function PortfolioContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const { theme, setTheme, themes } = useTheme();
  const currentTheme = themes[theme];

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const projects = [
    {
      title: "Modern E-Commerce App",
      description:
        "Full-stack modern e-commerce app, with a very tech design and user firendly",
      image: "/project-1.jpg?height=300&width=500",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "ZOD",
        "Shadcn",
        "PayPal",
        "Stripe",
      ],
      live: "https://web-app-iota-three.vercel.app",
      featured: true,
      category: "Web Development",
    },
    {
      title: "Performance System",
      description: "This is an app that let you rate tour employees",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Auth0",
        "Atomic Design",
        "Tailwind",
      ],
      live: "",
      featured: true,
      category: "Web Devolpment",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      icon: Cpu,
      items: ["Next.js", "React", "Shadcn", "TailwindCSS"],
    },
    {
      category: "Backend",
      icon: Layers,
      items: ["Next.js", "Prisma", "PostgreSQL", "ZOD", "NestJS"],
    },
    {
      category: "Languages",
      icon: Zap,
      items: [
        "TypeScript",
        "JavaScript",
        "SQL",
        "HTML",
        "Java with SpringBoot",
      ],
    },
    {
      category: "Coming Soon",
      icon: Globe,
      items: [
        "FullStack app with Next.js and NestJs",
        "Python",
        "ReactNative",
        "AWS",
      ],
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-hidden relative transition-all duration-1000"
    >
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className={`absolute inset-0 ${currentTheme.background}`}
          animate={{
            background: [
              currentTheme.background,
              currentTheme.backgroundAlt,
              currentTheme.background,
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Animated Gradient Orbs */}
        <motion.div
          className={`absolute top-0 left-0 w-96 h-96 ${currentTheme.accent} rounded-full blur-3xl opacity-20`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute top-1/2 right-0 w-80 h-80 ${currentTheme.secondary} rounded-full blur-3xl opacity-25`}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-0 left-1/3 w-72 h-72 ${currentTheme.tertiary} rounded-full blur-3xl opacity-30`}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent" />
        <div
          className={`absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20`}
        />
      </div>

      {/* Particle Field */}
      <ParticleField theme={currentTheme} />

      {/* Floating 3D Tech Icon */}

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-40 bg-black/5 backdrop-blur-3xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className={`text-2xl font-bold bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
              whileHover={{ scale: 1.05 }}
            >
              &lt;/Daniel Pineda&gt;
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <motion.div
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${currentTheme.textGradient} group-hover:w-full transition-all duration-300`}
                  />
                </motion.a>
              ))}

              {/* Theme Switcher */}
              <div className="flex items-center space-x-2">
                {Object.keys(themes).map((themeName) => (
                  <motion.button
                    key={themeName}
                    onClick={() => setTheme(themeName)}
                    className={`w-6 h-6 rounded-full border-2 ${
                      theme === themeName ? "border-white" : "border-white/30"
                    } ${themes[themeName].accent.replace(
                      "bg-gradient-to-r",
                      "bg-gradient-to-br"
                    )}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-white/60 text-sm hidden lg:block">
                <CurrentTime />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
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
                  full-stack web and mobile development, passionate about
                  building scalable, real-world applications. I specialize in
                  TypeScript, React, Next.js, and NestJS, with solid backend
                  experience using PostgreSQL, Prisma, and RESTful APIs, and I'm
                  comfortable integrating tools such as Auth0, NextAuth, Stripe,
                  PayPal, and Shadcn UI.
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

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-20 px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-white mb-6">
              <span
                className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
              >
                My Projects
              </span>{" "}
              Right Now
            </h2>
            <p className="text-white/80 text-xl max-w-4xl mx-auto">
              Revolutionary applications that transcend current technological
              limitations and redefine the boundaries of digital reality.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl overflow-hidden group hover:bg-white/10 transition-all duration-500 h-full relative">
                  {/* Fondo visual */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />

                  {/* Imagen */}
                  <div className="relative z-10">
                    <Image
                      src={project.image || "/placeholder.jpg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${currentTheme.accent} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    <Badge className="absolute top-4 right-4 bg-black/50 text-white border-0 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Contenido */}
                  <CardHeader className="z-10 relative">
                    <CardTitle className="text-white text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white/80 text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 z-10 relative">
                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-white/10 text-white/90 border-white/20 hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Botones */}
                    <div className="flex space-x-4">
                      {/* Experience */}
                      <Button
                        asChild
                        size="sm"
                        className={`bg-gradient-to-r ${currentTheme.buttonGradient} text-white border-0 shadow-lg flex items-center gap-2`}
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Experience
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold text-white mb-6">
              <span
                className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
              >
                The Tools
              </span>{" "}
              Behind The Code
            </h2>
            <p className="text-white/80 text-xl max-w-4xl mx-auto">
              Technologies I've use to build modern, scalable applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl h-full group hover:bg-white/10 transition-all duration-500 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentTheme.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${currentTheme.accent} mr-3 shadow-lg`}
                      >
                        <skillGroup.icon className="w-5 h-5 text-white" />
                      </div>
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="text-white/80 text-sm flex items-center group/skill"
                          whileHover={{ x: 5, color: "#ffffff" }}
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentTheme.accent} mr-3`}
                            whileHover={{ scale: 1.5 }}
                          />
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-3xl p-12 border border-white/10 backdrop-blur-xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${currentTheme.accent} opacity-5 animate-pulse`}
            />

            <div className="relative z-10">
              <h2 className="text-6xl font-bold text-white mb-6">
                Let's Build The{" "}
                <span
                  className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
                >
                  Future Together
                </span>
              </h2>
              <p className="text-white/80 text-xl mb-8 max-w-3xl mx-auto">
                I’m open to collaborations, job opportunities, and innovative
                challenges in full-stack development.
              </p>

              <ContactSection />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              © 2025 Software Engineer
            </div>
            <div className="flex space-x-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Danielpinedasalazar",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/daniel-pineda-2b7204341",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-white/60 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
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
