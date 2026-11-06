"use client";

import { motion } from "motion/react";

export default function Name({
  themes,
  currentTheme,
}: {
  themes: any;
  currentTheme: string;
}) {
  const theme = themes[currentTheme];

  return (
    <div className="flex flex-col items-start">

      <motion.div
        className={`font-montserrat font-bold text-6xl ${theme.highlight_text} ${theme.highlight_text_shadow} cursor-pointer select-none`}
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
        className={`font-montserrat font-bold text-6xl ${theme.text} ${theme.text_shadow} cursor-pointer select-none`}
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
