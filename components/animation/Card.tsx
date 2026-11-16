"use client"

import type { Theme } from "@/types/themes";

import { motion } from "motion/react";

import Link from "next/link";

export default function TiltCard({ themes, currentTheme, card, size, tech, name, url}: Theme & { card: React.ReactNode, size: string, tech: boolean, name: string, url: string, }) {
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
      <>
      {tech ? <motion.div
        className={`tilt-card pt-2 pb-2 ${size} flex justify-center justify-center bg-white/5 backdrop-blur-xl border-1 border-white/33 focus:outline-none rounded-[5px] hover:cursor-pointer`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{scale: 0.95}}
      >
        <div className="flex items-center w-fit h-fit">
          {card}
          <p className={`w-fit ml-3 justify-center ${themes[currentTheme].highlight_text} font-montserrat font-bold md:text-xl`}> {name}</p>
        </div>
      </motion.div>
      : <Link href={url} target="_blank" rel="nofollow">
        <motion.div
          className={`tilt-card pt-2 pb-2 ${size} flex justify-center justify-center bg-white/5 backdrop-blur-xl border-1 border-white/33 focus:outline-none rounded-[5px] hover:cursor-pointer`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileTap={{scale: 0.95}}
        >
          <div className="flex items-center w-fit h-fit">
            {card}
            <p className={`w-fit ml-3 justify-center ${themes[currentTheme].highlight_text} font-montserrat font-bold md:text-xl`}> {name}</p>
          </div>
        </motion.div>
      </Link>
      }
      </>
      
    );
  }