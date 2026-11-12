"use client"

import type { Theme } from "@/types/themes";

import { motion } from "motion/react";

export default function TiltCard({ themes, currentTheme, card, size, tech, name, }: Theme & { card: React.ReactNode, size: string, tech: boolean, name: string, }) {
    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - y) * 20;
      const rotateY = (x - 0.5) * 20;

      card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
    }

    function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
      e.currentTarget.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
            `;
    }

    return (
      <motion.div
        className={`tilt-card pt-2 pb-2 ${size} flex justify-center ${tech ? 'justify-center bg-white/5 backdrop-blur-xl border-1 border-white/33' : '' }  focus:outline-none rounded-[5px]`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{scale: 0.95}}
      >
        <div className="flex items-center w-[50%]">
          {card}
          <p className={`w-fit ml-3 justify-center ${themes[currentTheme].highlight_text} font-montserrat font-bold `}> {name}</p>
        </div>
      </motion.div>
    );
  }