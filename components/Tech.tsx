import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiPostgresql, SiPrisma, SiGit, SiGithub }from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import Magnet from '@/components/Bits/Magnet'

import TiltCard from "@/components/animation/Card";
import type { Theme } from "@/types/themes";

export function TechCards({
  themes,
  currentTheme,
}: Theme){

    return (
        <div className={`flex gap-5 xl:gap-3 flex-col lg:flex-col lg:flex-wrap w-full justify-center lg:items-center`}>
            <TiltCard card={<SiTypescript className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full lg:w-[90%] h-auto" tech={true} name="TypeScript" url=''/>
            <TiltCard card={<SiJavascript className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full lg:w-[90%] h-auto" tech={true} name="JavaScript" url=''/>
            <TiltCard card={<SiReact className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full lg:w-[90%] h-auto" tech={true} name="React" url=''/>
            <TiltCard card={<SiNextdotjs className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full lg:w-[90%] h-auto" tech={true} name="Next.js" url=''/>
            <TiltCard card={<SiTailwindcss className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full lg:w-[90%] h-auto" tech={true} name="Tailwind CSS" url=''/>
            <TiltCard card={<SiPostgresql className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full lg:w-[90%] h-auto" tech={true} name="PostgreSQL" url=''/>
            <TiltCard card={<SiPrisma className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full lg:w-[90%] h-auto" tech={true} name="Prisma" url=''/>
        </div>
    );
}

export function WorkflowCards({
  themes,
  currentTheme,
}: Theme){

    return (
        <div className="flex flex-col lg:flex-col gap-5 xl:gap-3 flex-wrap w-full justify-center lg:items-center">
            <TiltCard card={<SiGit className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full lg:w-[90%] h-auto" tech={true} name="Git" url=''/>
            <TiltCard card={<SiGithub className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full lg:w-[90%] h-auto" tech={true} name="Github" url=''/>
            <TiltCard card={<VscVscode className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full lg:w-[90%] h-auto" tech={true} name="VSCode" url=''/>
        </div>
    );
}

export function ContactCards({
  themes,
  currentTheme,
}: Theme){
    return(
        <div className="flex flex-col gap-5 flex-wrap w-full justify-center">
            <Magnet padding={100} magnetStrength={2}>
                <TiltCard card={<FaGithub className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={false} name="Github" url={'https://github.com/Soares-B'}/>
            </Magnet>

            <Magnet padding={100} magnetStrength={2}>
                <TiltCard card={<FaLinkedin className={`size-8 md:size-10 lg:size-6 lg:size-8 2xl:size-10 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={false} name="LinkedIn" url={'https://www.linkedin.com/in/bruno-soares-100498412/'}/>
            </Magnet>                   
        </div>
    );
}