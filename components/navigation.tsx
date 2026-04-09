"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import CurrentTime from "./current-time";
import { useTheme } from "./theme-provider";

const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navigation() {
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 bg-[#050510]/60 backdrop-blur-2xl border-b border-white/[0.06]"
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.a
            href="#about"
            className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${currentTheme.textGradient} bg-clip-text text-transparent`}
            whileHover={{ scale: 1.05 }}
          >
            &lt;/Daniel Pineda&gt;
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/60 hover:text-white transition-colors relative group text-sm tracking-wide"
                whileHover={{ y: -2 }}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r ${currentTheme.textGradient} group-hover:w-full transition-all duration-300`}
                />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-white/40 text-xs hidden lg:block">
              <CurrentTime />
            </div>
            <motion.button
              className="md:hidden text-white/60 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050510]/90 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-4 py-5 space-y-4">
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/70 hover:text-white transition-colors text-base py-1"
                  whileHover={{ x: 6 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
