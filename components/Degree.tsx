import { motion } from "motion/react";
import TiltCard from "./Card";
import Image from "next/image";
import type { Theme } from "@/types/themes";

export default function Degree({
  themes,
  currentTheme,
  school,
  area,
  time,
  image
}: Theme & {
    school: string,
    area: string,
    time: string,
    image: string,
}){

    return (
      <motion.div
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 1}}>
        <article className="flex mb-5 w-full pr-5 items-center">
            <TiltCard card={<Image src={`/Imagens/${image}`} width={75} height={75} alt={school}
            className={`rounded-[15px] border-2 ${themes[currentTheme].border}`}>

            </Image>} size="w-[75px]" tech={false}/>
            <div className="flex flex-col ml-2">
            <p className={`${themes[currentTheme].highlight_text} text-lg`}>{area}</p>
            <p className={`${themes[currentTheme].text}`}>{school}</p>
            <p className={`${themes[currentTheme].text} text-sm`}>{time}</p>
            </div>
        </article>
      </motion.div> 
    );
}