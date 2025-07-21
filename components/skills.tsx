"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { useTheme } from "./theme-provider";
import { Cpu, Layers, Zap, Globe } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Cpu,
    items: [
      "Next.js",
      "React",
      "Shadcn",
      "TailwindCSS",
      "Uploadthing",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    icon: Layers,
    items: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "ZOD",
      "NestJS",
      "Suoabase",
      "Neon",
      "JWT",
      "Rest API",
      "Next-Auth",
      "Auth0",
    ],
  },
  {
    category: "Languages",
    icon: Zap,
    items: [
      "TypeScript",
      "JavaScript",
      "SQL",
      "HTML",
      "Java with Spring Boot",
      "CSS",
    ],
  },
  {
    category: "In Process",
    icon: Globe,
    items: [
      "Azure",
      "Python",
      "React Native",
      "AWS",
      "Angular",
      "Rust",
      "Go",
      "Swift",
    ],
  },
];

export default function Skills() {
  const { theme, setTheme, themes } = useTheme();
  const currentTheme = themes[theme];
  return (
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
            Technologies I've use to build modern, scalable applications. And
            also some others laguages that I'm starting with
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
  );
}
