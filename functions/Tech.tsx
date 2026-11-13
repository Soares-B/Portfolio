import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiPostgresql, SiPrisma, SiGit, SiGithub }from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import TiltCard from "@/components/animation/Card";
import type { Theme } from "@/types/themes";

export function TechCards({
  themes,
  currentTheme,
}: Theme){

    return (
        <div className="flex gap-5 flex-col w-full justify-center">
            <TiltCard card={<SiTypescript className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="TypeScript"/>
            <TiltCard card={<SiJavascript className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="JavaScript"/>
            <TiltCard card={<SiReact className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="React"/>
            <TiltCard card={<SiNextdotjs className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="Next.js"/>
            <TiltCard card={<SiTailwindcss className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="Tailwind CSS"/>
            <TiltCard card={<SiPostgresql className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="PostgreSQL"/>
            <TiltCard card={<SiPrisma className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="Prisma"/>
        </div>
    );
}

export function WorkflowCards({
  themes,
  currentTheme,
}: Theme){

    return (
        <div className="flex gap-5 flex-wrap w-full justify-center">
            <TiltCard card={<SiGit className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="Git"/>
            <TiltCard card={<SiGithub className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="Github"/>
            <TiltCard card={<VscVscode className={`w-8 h-auto ${themes[currentTheme].highlight_text}`}/>} themes={themes} currentTheme={currentTheme} size="w-full h-auto" tech={true} name="VSCode"/>
        </div>
    );
}