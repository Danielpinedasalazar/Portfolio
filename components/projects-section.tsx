"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react"; // <-- se añadió Github
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Modern E-Commerce App",
    description:
      "This is a full-stack E-commerce app built on Next.js, in which users will be able to find products such as accessories or computers, it will also have different payment methods between cash on delivery, PayPal and Stripe (For credit and debit cards). It also has an admin section, in which only authorized people can enter. If you are not logged in yet and try to make a purchase, you will be asked to create an account or login at checkout. Below in the experience button you can take a look at this app built with modern technologies.",
    image: "/project-1.jpg?height=300&width=500",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "ZOD",
      "Shadcn",
      "PayPal",
      "Stripe",
      "SQL",
      "Jest",
      "Uploadthing",
      "Recharts",
      "Resend",
    ],
    live: "https://web-app-iota-three.vercel.app",
    github: "https://github.com/Danielpinedasalazar/WebApp.git",
    featured: true,
    category: "Web Development",
  },
  {
    title: "Nests Blogs",
    description:
      "I've developed a complete and scalable REST API for a blogging platform using the NestJS framework, focusing on best practices, security and modular architecture. The API allows users to register, login (with JWT or Google OAuth), create posts, manage media files and consume data documented with Swagger.This project was designed to simulate a real production environment, with support for multiple environments, exception handling, robust data validation, complex database relationships and professional cloud deployment. Unit and end-to-end tests were implemented to ensure system reliability.The backend is now ready to be consumed by any frontend (web or mobile), and is optimized to scale and maintain in large development teams through internal documentation (Compodoc).",
    image: "/project-2.jpg?height=300&width=500",
    technologies: [
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Swagger",
      "Compodoc",
      "JWT",
      "Google OAuth 2.0",
      "Amazon Web Services",
      "Jest",
    ],
    live: "http://ec2-3-138-192-158.us-east-2.compute.amazonaws.com/api#/",
    github: "https://github.com/Danielpinedasalazar/BlogPosts.git",
    featured: true,
    category: "Web Devolpment",
  },
];

export default function ProjectSection() {
  const { theme, setTheme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
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
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />

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

                <CardHeader className="z-10 relative">
                  <CardTitle className="text-white text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/80 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 z-10 relative">
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

                    {/* GitHub */}
                    {project.github && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
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
