"use client";

import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";

export default function Orbs() {
  const { theme, setTheme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <>
      <motion.div
        className={`absolute top-0 left-0 w-96 h-96 ${currentTheme.accent} rounded-full blur-3xl opacity-20`}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute top-1/2 right-0 w-80 h-80 ${currentTheme.secondary} rounded-full blur-3xl opacity-25`}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-0 left-1/3 w-72 h-72 ${currentTheme.tertiary} rounded-full blur-3xl opacity-30`}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
