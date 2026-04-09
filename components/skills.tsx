"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { useTheme } from "./theme-provider";
import { Cpu, Layers, Code2, BarChart2 } from "lucide-react";

const skills = [
  {
    category: "Frontend & Mobile",
    icon: Cpu,
    items: [
      "Next.js",
      "React",
      "React Native",
      "Shadcn UI",
      "TailwindCSS",
      "Framer Motion",
      "Uploadthing",
    ],
  },
  {
    category: "Backend",
    icon: Layers,
    items: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "ZOD",
      "Supabase",
      "Neon",
      "JWT",
      "REST API",
      "NextAuth",
      "Auth0",
    ],
  },
  {
    category: "Languages",
    icon: Code2,
    items: [
      "TypeScript",
      "JavaScript",
      "Java & Spring Boot",
      "SQL",
      "HTML & CSS",
    ],
  },
  {
    category: "Data & ML",
    icon: BarChart2,
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
      "AWS",
      "Azure",
    ],
  },
];

export default function Skills() {
  const { theme, themes } = useTheme();
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span
              className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
            >
              The Tools
            </span>{" "}
            Behind The Code
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies I use to build modern, scalable applications — plus a few
            I'm actively exploring.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl h-full group hover:bg-white/[0.06] hover:border-violet-500/25 hover:shadow-[0_0_30px_rgba(124,58,237,0.10)] transition-all duration-500 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentTheme.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader>
                  <CardTitle className="text-white flex items-center text-base">
                    <div
                      className={`p-2.5 rounded-lg bg-gradient-to-r ${currentTheme.accent} mr-3 shadow-lg flex-shrink-0`}
                    >
                      <skillGroup.icon className="w-4 h-4 text-white" />
                    </div>
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2.5">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="text-white/75 text-sm flex items-center"
                        whileHover={{ x: 5, color: "#ffffff" }}
                      >
                        <motion.div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentTheme.accent} mr-3 flex-shrink-0`}
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
