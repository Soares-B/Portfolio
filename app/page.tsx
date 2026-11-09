  "use client"

  import { themes } from "@/config/themes";
  import Name from "@/components/animation/Name";
  import { write } from "@/functions/Write";
  import MobilePage from "@/functions/MobilePage";

  import gsap from "gsap";

  import { useState, useEffect, useRef } from "react";

  type ThemeName = keyof typeof themes;

  export default function Home() {

    const [currentTheme, setCurrentTheme] = useState<ThemeName>('Calmness')

    const container = useRef<HTMLElement>(null);

    useEffect(() => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        if (!container.current) return;

        MobilePage(container.current);
      });

      return () => mm.revert();
    }, []);

    return (
      <>
      <header ref={container} className={`theme-${currentTheme} ${themes[currentTheme].background} w-full h-screen h-auto flex selection:bg-[var(--selection_bg)] header`}>
        <div className="ml-5 mt-10 flex flex-col max-w-[250px] w-auto gap-1">
            <Name themes={themes} currentTheme={currentTheme}/>

            {write({themes, currentTheme})}
        </div>
      </header>
      <main className=""></main>
      <main className="h-50"></main>
      </>
    );
  }
