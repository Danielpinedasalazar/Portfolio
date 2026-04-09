"use client";

import { motion } from "framer-motion";
import ContactSection from "./email-contsct";
import { useTheme } from "./theme-provider";

export default function Contact() {
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-3xl p-6 sm:p-10 lg:p-16 border border-white/10 backdrop-blur-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${currentTheme.accent} opacity-5 animate-pulse`}
          />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Let's Build Something{" "}
              <span
                className={`bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
              >
                Together
              </span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              I'm actively looking for international internship opportunities in
              full-stack development. Feel free to reach out!
            </p>

            <ContactSection />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
