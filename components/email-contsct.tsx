"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ThemeProvider, useTheme } from "./theme-provider";

export default function ContactSection() {
  const [showEmail, setShowEmail] = useState(false);
  const { theme, setTheme, themes } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setShowEmail(!showEmail)}
          size="lg"
          className={`bg-gradient-to-r ${currentTheme.buttonGradient} text-white border-0 shadow-lg ${currentTheme.shadow}`}
        >
          <Mail className="w-4 h-4 mr-2" />
          Initiate Contact
        </Button>
      </motion.div>

      {showEmail && (
        <p className="text-white mt-2 text-sm sm:ml-4">
          📧 daniel.pineda73@eia.edu.co
        </p>
      )}
    </div>
  );
}
