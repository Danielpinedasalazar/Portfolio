"use client";

import { motion } from "framer-motion";
import ContactSection from "./email-contsct";
import { useTheme } from "./theme-provider";

export default function Contact() {
  const { theme, setTheme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
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
  );
}
