"use client"

import { themes } from "@/config/themes";
import Name from "@/components/animation/Name";
import { hwrite } from "@/functions/HeaderWrite";
import { pwrite } from "@/functions/ProjectsWrite";
import MobilePage from "@/functions/MobilePage";
import { TechCards, WorkflowCards, ContactCards } from "@/components/Tech";
import ProjectButton from "@/components/animation/ProjectButton";
import Theme from "@/components/Theme Button";

import gsap from "gsap";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type ThemeName = keyof typeof themes;

export default function Home() {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    console.log(window.innerWidth)
  }, [])

  const [currentTheme, setCurrentTheme] = useState<ThemeName>('Silent')

  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const PRcontainer = useRef<HTMLDivElement>(null);
  const PRproject_1 = useRef<HTMLDivElement>(null);
  const PRproject_2 = useRef<HTMLDivElement>(null);
  const PRproject_3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      
      if (!container.current
        || !header.current
        || !about.current
        || !skills.current
        || !projects.current
        || !contact.current
        || !PRcontainer.current
        || !PRproject_1.current
        || !PRproject_2.current
        || !PRproject_3.current) return;

      return MobilePage({
    container: container.current,
    header: header.current,
    about: about.current,
    skills: skills.current,
    projects: projects.current,
    contact: contact.current,
    PRcontainer: PRcontainer.current,
    PRproject_1: PRproject_1.current,
    PRproject_2: PRproject_2.current,
    PRproject_3: PRproject_3.current,
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
          <div className="ml-5 mt-20 lg:mt-10 flex flex-col max-w-[250px] md:max-w-[300px] w-auto gap-1">
              <Name themes={themes} currentTheme={currentTheme}/>
              {hwrite({themes, currentTheme})}
              <Theme themes={themes} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}/>
          </div>
          {windowWidth <= 768 ? <Image src='/Imagens/Mobile.png' width={768} height={1024} alt='personality'
          className="w-full h-fit"></Image> : <Image src='/Imagens/Desktop.png' width={1536} height={864} alt='personality'
          className="w-3/5 h-fit absolute right-0 bottom-0"></Image>}
        </div>


        <div ref={about} className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about
        absolute inset-0 opacity-0 z-10 pointer-events-none`}>
          <h1>About</h1>
        </div>

        <div ref={skills} className={`${themes[currentTheme].background} w-screen h-screen flex shrink-0 about
        absolute inset-0 opacity-0 z-20 items-center justify-center pointer-events-none`}>

          <div className="w-[300px] md:w-[400px] flex flex-col items-center gap-2">
            <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-3xl`}>Stack</h1>
            {TechCards({themes, currentTheme})}
            <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-3xl mt-3`}>Workflow</h1>
            {WorkflowCards({themes, currentTheme})}
          </div>

        </div>

        <div ref={projects} className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about
        absolute inset-0 opacity-0 z-30 pointer-events-none`}>
          <div className={`relative w-full`} ref={PRcontainer}>

            <div className="h-full w-full absolute inset-0 z-31 pointer-events-none flex items-end justify-center" ref={PRproject_1}>
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}>Projects</h1>
              <Image src={'/Imagens/Pokedex.png'} width={1920} height={1080} alt="Pokedex Web Application"
              className="absolute inset-0 w-full h-full object-cover z-0">

              </Image>
              <div className="absolute inset-0 bg-black/66 backdrop-blur-[2px]" />
              <div className="bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs">
                <p className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}>Pokedéx Web Application</p>
                {pwrite({themes, currentTheme, phrase: 'A Pokédex built with HTML, CSS, and JavaScript. Features include Pokémon search with autocomplete, favorites, shiny sprites, multiple game sprites, navigation between Pokémon, random Pokémon generation, abilities, descriptions, and Bulbapedia integration.'})}
                <ProjectButton themes={themes} currentTheme={currentTheme} url='https://soares-b.github.io/Pokedex-Web-Application/'/>
              </div>
            </div>

            <div className="h-full w-full absolute inset-0 z-32 opacity-0 pointer-events-none flex items-end" ref={PRproject_2}>
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}>Projects</h1>
              <Image src={'/Imagens/Larper.png'} width={1920} height={1080} alt="Larper"
              className="absolute inset-0 w-full h-full object-cover z-0 object-[7%_50%]">

              </Image>
              <div className="absolute inset-0 bg-black/66 backdrop-blur-[2px]" />
              <div className="bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs">
                <p className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}>Larper</p>
                {pwrite({themes, currentTheme, phrase: 'Discover, explore and find information about your favorite media. Larper is a web application designed to make discovering and exploring different types of media easier. Search for information about anime, manga, video games, books, movies, TV series and music, all in one place.'})}
                <ProjectButton themes={themes} currentTheme={currentTheme} url='https://larper-omega.vercel.app'/>
              </div>
            </div>

            <div className="h-full w-full absolute inset-0 z-33 opacity-0 pointer-events-none flex items-end" ref={PRproject_3}>
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}>Projects</h1>
              <Image src={'/Imagens/Livia Lace.png'} width={1920} height={1080} alt="Livia Lace"
              className="absolute inset-0 w-full h-full object-cover z-0 object-[5%_50%]">

              </Image>
              <div className="absolute inset-0 bg-black/66 backdrop-blur-[2px]" />
              <div className="bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs">
                <p className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}>Livia Lace</p>
                {pwrite({themes, currentTheme, phrase: 'A full-stack e-commerce platform for a fashion accessories store. Livia Lace is an e-commerce application designed to provide a complete online shopping experience, from product discovery to checkout and payment processing. The project combines a modern web interface with a backend responsible for user sessions, shopping carts, order management and payment integration.'})}
                <ProjectButton themes={themes} currentTheme={currentTheme} url='https://livia-lace-85cr.vercel.app/'/>
              </div>
            </div>
          </div>
        </div>

        <div ref={contact} className={`${themes[currentTheme].background} w-screen h-screen flex flex-col items-center justify-between shrink-0 about
        absolute inset-0 opacity-0 z-40 pointer-events-none`}>
          <div className="w-[300px] md:w-[400px] flex flex-col gap-5 items-center mt-30">
            <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-3xl`}>Find me on</h1>
            <ContactCards themes={themes} currentTheme={currentTheme}/>
          </div>

          <Image src='/Imagens/Mobile.png' width={391} height={298} alt='personality'
          className="w-full h-fit"></Image>
        </div>

    </div>
  );
}
