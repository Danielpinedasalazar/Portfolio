"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
