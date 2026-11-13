  "use client"

  import { themes } from "@/config/themes";
  import Name from "@/components/animation/Name";
  import { write } from "@/functions/Write";
  import MobilePage from "@/functions/MobilePage";
  import { TechCards, WorkflowCards } from "@/functions/Tech";

  import gsap from "gsap";

  import { useState, useEffect, useRef } from "react";
  import Image from "next/image";

  type ThemeName = keyof typeof themes;

  export default function Home() {

    const [currentTheme, setCurrentTheme] = useState<ThemeName>('Milk')

    const container = useRef<HTMLDivElement>(null);
    const header = useRef<HTMLDivElement>(null);
    const about = useRef<HTMLDivElement>(null);
    const skills = useRef<HTMLDivElement>(null);
    const projects = useRef<HTMLDivElement>(null);
    const contact = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 768px)", () => {
        
        if (!container.current || !header.current || !about.current || !skills.current || !projects.current || !contact.current) return;
        return MobilePage({
      container: container.current,
      header: header.current,
      about: about.current,
      skills: skills.current,
      projects: projects.current,
      contact: contact.current,
    });
      });

      return () => mm.revert();
    }, []);

    return (
      <div
        ref={container}
        className={`w-full h-screen flex overflow-hidden ${themes[currentTheme].background}
        relative`}
      >
          <div ref={header} className={`${themes[currentTheme].background} w-screen h-screen flex flex-col justify-between shrink-0 header pointer-events-auto`}>
            <div className="ml-5 mt-20 flex flex-col max-w-[250px] w-auto gap-1">
                <Name themes={themes} currentTheme={currentTheme}/>
                {write({themes, currentTheme})}
            </div>
            <Image src='/Imagens/Mobile.png' width={391} height={298} alt='personality'
            className="w-full h-fit"></Image>
          </div>


          <div ref={about} className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about
          absolute inset-0 opacity-0 z-10 pointer-events-none`}>
            <h1>About</h1>
          </div>

          <div ref={skills} className={`${themes[currentTheme].background} w-screen h-screen flex shrink-0 about
          absolute inset-0 opacity-0 z-20 items-center justify-center pointer-events-none`}>

            <div className="w-[300px] flex flex-col items-center gap-2">
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-3xl`}>Stack</h1>
              {TechCards({themes, currentTheme})}
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-3xl mt-3`}>Workflow</h1>
              {WorkflowCards({themes, currentTheme})}
            </div>

          </div>

          <div ref={projects} className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about
          absolute inset-0 opacity-0 z-30 pointer-events-none`}>
            <h1>projects</h1>
          </div>

          <div ref={contact} className={`${themes[currentTheme].background} w-screen h-screen flex shrink-0 about
          absolute inset-0 opacity-0 z-40 pointer-events-none`}>
            <h1 className="text-white">contact</h1>
          </div>

      </div>
    );
  }
