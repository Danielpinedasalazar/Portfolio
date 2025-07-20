"use client";

import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";
import Orbs from "./orbs";

export default function Background() {
  const { theme, setTheme, themes } = useTheme();
  const currentTheme = themes[theme];
  return (
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
      <Orbs />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent" />
      <div
        className={`absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20`}
      />
    </div>
  );
}
