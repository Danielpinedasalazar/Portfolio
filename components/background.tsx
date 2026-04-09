"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050510]">
      {/* Subtle violet grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.07) 1px, transparent 1px),
            linear-gradient(to right, rgba(124, 58, 237, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-violet-700/20 blur-[130px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 -right-64 w-[600px] h-[600px] rounded-full bg-indigo-700/15 blur-[110px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute -bottom-48 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-800/10 blur-[100px]"
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050510_100%)]" />
    </div>
  );
}
