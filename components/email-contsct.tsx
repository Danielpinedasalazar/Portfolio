"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";

const EMAIL = "daniel.pineda73@eia.edu.co";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { theme, themes } = useTheme();
  const currentTheme = themes[theme];

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          asChild
          size="lg"
          className={`bg-gradient-to-r ${currentTheme.buttonGradient} text-white border-0 shadow-lg ${currentTheme.shadow}`}
        >
          <a href={`mailto:${EMAIL}`}>
            <Mail className="w-4 h-4 mr-2" />
            Send Me an Email
          </a>
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={handleCopy}
          size="lg"
          variant="outline"
          className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2 text-green-400" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Email
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
}
