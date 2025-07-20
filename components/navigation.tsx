"use client";

import { motion } from "framer-motion";
import CurrentTime from "./current-time";
import { useTheme } from "./theme-provider";

export default function Navigation() {
  const { theme, setTheme, themes } = useTheme();
  const currentTheme = themes[theme];
  return (
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
  );
}
