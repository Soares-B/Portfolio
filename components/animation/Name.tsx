"use client";

import { motion } from "motion/react";
import type { Theme } from "@/types/themes";

import { GemSmoke } from '@paper-design/shaders-react';

export default function Name({
  themes,
  currentTheme,
}: Theme) {
  const theme = themes[currentTheme];

  const primaryColor = (currentTheme === 'Milk' ? '#499792' :
    currentTheme === 'Dreams' ? '#5A3A63' :
    currentTheme === 'Vampire' ? '#E90A0A' :
    currentTheme === 'Genius' ? '#A5E3FC' :
    currentTheme === 'Trial' ? '#EBEBED' :
    currentTheme === 'Silent' ? '#B8DA80' :
    '')
  const secondaryColor = (currentTheme === 'Milk' ? '#AC3231' :
    currentTheme === 'Dreams' ? '#851011' :
    currentTheme === 'Vampire' ? '#FDE0CE' :
    currentTheme === 'Genius' ? '#57565C' :
    currentTheme === 'Trial' ? '#F4AFCC' :
    currentTheme === 'Silent' ? '#FEFADB' :
    '')

  return (
  <div className="flex flex-col items-start w-full flex-1">

    <motion.div
      className="w-[190px] sm:w-[180px] md:w-[250px] lg:w-[330px] xl:w-[320px] 2xl:w-[450px] h-1/2 cursor-pointer select-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <GemSmoke
        className="h-full flex items-start"
        image="/Imagens/Bruno.png"
        colors={[primaryColor, secondaryColor]}
        colorBack="#00000000"
        colorInner="#00000000"
        innerDistortion={1}
        outerDistortion={0.8}
        outerGlow={0}
        innerGlow={1}
        offset={0}
        angle={0}
        size={1}
        speed={2}
        scale={0.6}
        fit="cover"
        width={"100%"}
      />
    </motion.div>

    <motion.div
      className="w-[210px] sm:w-[200px] md:w-[270px] lg:w-[280px] lg:w-[360px] xl:w-[350px] 2xl:w-[490px] h-1/2 cursor-pointer select-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <GemSmoke
        className="h-full flex items-start"
        image="/Imagens/Soares.png"
        colors={[primaryColor, secondaryColor]}
        colorBack="#00000000"
        colorInner="#00000000"
        innerDistortion={1}
        outerDistortion={0.8}
        outerGlow={0}
        innerGlow={1}
        offset={0}
        angle={0}
        size={1}
        speed={2}
        scale={0.6}
        fit="cover"
        width={"100%"}
      />
    </motion.div>

</div>
  );
}
