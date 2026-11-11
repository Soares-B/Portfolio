  "use client"

  import { themes } from "@/config/themes";
  import Name from "@/components/animation/Name";
  import { write } from "@/functions/Write";
  import MobilePage from "@/functions/MobilePage";

  import gsap from "gsap";

  import { useState, useEffect, useRef } from "react";

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
        
        if (!container.current || !header.current || !about.current) return;
        return MobilePage(container.current, header.current, about.current);
      });

      return () => mm.revert();
    }, []);

    return (
      <div
        ref={container}
        className={`w-full h-screen flex overflow-hidden ${themes[currentTheme].background}
        relative`}
      >
          <div ref={header} className={`${themes[currentTheme].background} w-screen h-screen flex shrink-0 header`}>
            <div className="ml-5 mt-20 flex flex-col max-w-[250px] w-auto gap-1">
                <Name themes={themes} currentTheme={currentTheme}/>
                {write({themes, currentTheme})}
            </div>
          </div>


          <div ref={about} className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about
          absolute inset-0 opacity-0`}>

          </div>

          <div ref={skills} className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about`}>

          </div>

          <div ref={projects} className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about`}>

          </div>

          <div ref={contact} className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about`}>

          </div>

      </div>
    );
  }
