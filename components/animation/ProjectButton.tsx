"use client"

import { motion } from "motion/react";

import Link from "next/link";
import type { Theme } from "@/types/themes";

export default function ProjectButton({
  themes,
  currentTheme,
  url
}: Theme & {url: string}){
    
    return(
      <motion.div
      className="w-1/2 md:scale-125 w-2/5 mt-2 mb-5 hover:cursor-pointer"
      whileTap={{scale: 0.95}}>
        <Link href={url} target="_blank" >
          <button className={`w-full p-3 font-montserrat font-semibold ${themes[currentTheme].button} ${themes[currentTheme].text} select-none`}>Access</button>
        </Link>
      </motion.div>
    );
}