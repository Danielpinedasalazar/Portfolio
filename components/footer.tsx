"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-10 px-4 sm:px-6 lg:px-8 border-t border-white/10 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            © 2026 Daniel Pineda — Built with Next.js & TailwindCSS
          </div>
          <div className="flex space-x-5">
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
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-white/50 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
