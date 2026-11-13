import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiPostgresql, SiPrisma, SiGit, SiGithub }from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import TiltCard from "@/components/animation/Card";
import type { Theme } from "@/types/themes";

export function TechCards({
  themes,
  currentTheme,
}: Theme){

    return (
        <div className="flex flex-col gap-5 flex-col w-full justify-center">
            <TiltCard card={<SiTypescript className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="TypeScript" url=''/>
            <TiltCard card={<SiJavascript className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="JavaScript" url=''/>
            <TiltCard card={<SiReact className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="React" url=''/>
            <TiltCard card={<SiNextdotjs className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="Next.js" url=''/>
            <TiltCard card={<SiTailwindcss className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="Tailwind CSS" url=''/>
            <TiltCard card={<SiPostgresql className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="PostgreSQL" url=''/>
            <TiltCard card={<SiPrisma className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="Prisma" url=''/>
        </div>
    );
}

export function WorkflowCards({
  themes,
  currentTheme,
}: Theme){

    return (
        <div className="flex flex-col gap-5 flex-wrap w-full justify-center">
            <TiltCard card={<SiGit className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="Git" url=''/>
            <TiltCard card={<SiGithub className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="Github" url=''/>
            <TiltCard card={<VscVscode className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="VSCode" url=''/>
        </div>
    );
}

export function ContactCards({
  themes,
  currentTheme,
}: Theme){
    return(
        <div className="flex flex-col gap-5 flex-wrap w-full justify-center">
            <TiltCard card={<FaGithub className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={false} name="Github" url={'https://github.com/Soares-B'}/>
            <TiltCard card={<FaLinkedin className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={false} name="LinkedIn" url={'https://www.linkedin.com/in/bruno-soares-100498412/'}/>
        </div>
    );
}