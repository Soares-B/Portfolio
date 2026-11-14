"use client";

import { motion } from "motion/react";
import type { Theme } from "@/types/themes";

export default function Name({
  themes,
  currentTheme,
}: Theme) {
  const theme = themes[currentTheme];

  return (
    <div className="flex flex-col items-start">

      <motion.div
        className={`font-montserrat font-bold text-6xl md:text-7xl ${theme.highlight_text} ${theme.highlight_text_shadow} cursor-pointer select-none`}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{ duration: 0.2 }}
        
      >
        Bruno
      </motion.div>

      <motion.div
        className={`font-montserrat font-bold text-6xl md:text-7xl ${theme.text} ${theme.text_shadow} cursor-pointer select-none`}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{ duration: 0.2 }}
      >
        Soares
      </motion.div>

    </div>
  );
}
