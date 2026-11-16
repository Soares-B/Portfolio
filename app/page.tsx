"use client"

import { themes } from "@/config/themes";
import MobilePage from "@/functions/MobilePage";

import { hwrite } from "@/functions/HeaderWrite";
import { pwrite } from "@/functions/ProjectsWrite";
import { awrite } from "@/functions/AboutWrite";

import Name from "@/components/animation/Name";
import { TechCards, WorkflowCards, ContactCards } from "@/components/Tech";
import ProjectButton from "@/components/animation/ProjectButton";
import Theme from "@/components/Theme Button";
import Person from "@/components/Person";
import { Background, Counterground } from "@/functions/Background";

import gsap from "gsap";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";


type ThemeName = keyof typeof themes;

export default function Home() {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    console.log(window.innerHeight)
  }, [])

  const [currentTheme, setCurrentTheme] = useState<ThemeName>('Milk')

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

  mm.add("(min-width: 769px)", () => {
      
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
      relative ${themes[currentTheme].selection_background} ${themes[currentTheme].selection_text}`}
    >
        <div ref={header} className={`w-screen h-screen flex flex-col justify-between shrink-0 header pointer-events-auto`}>
          {/* ------------------------ Background ------------------------ */}
          <Background currentTheme={currentTheme} display={windowWidth}/>
          {/* ------------------------ Background ------------------------ */}

          <div className="z-10 w-screen h-screen flex flex-col justify-between shrink-0">
            <div className="ml-5 mt-20 lg:mt-10 flex flex-col w-[80%] 2xl:w-[30%] h-[30%] lg:h-[40%] xl:h-1/2 gap-1">
                <Name themes={themes} currentTheme={currentTheme}/>
                {hwrite({themes, currentTheme})}
                <Theme themes={themes} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}/>
                
            </div>
            {windowWidth <= 768 ? <Image src='/Imagens/Mobile.png' width={768} height={1024} alt='personality'
            className="w-full h-fit select-none"></Image> : <Image src='/Imagens/Desktop.png' width={1536} height={864} alt='personality'
            className="w-3/5 h-fit absolute right-0 bottom-0 select-none"></Image>}
          </div>
        </div>


        <div ref={about} className={` w-screen h-screen flex items-end justify-center shrink-0 about
        absolute inset-0 opacity-0 pointer-events-none`}>
          {/* ------------------------ Background ------------------------ */}
          <Counterground currentTheme={currentTheme} display={windowWidth}/>
          {/* ------------------------ Background ------------------------ */}

          {windowWidth <= 768 ? 
          
          <div className="z-20">
            <div className="w-screen h-screen flex flex-col items-center justify-between ">
              <div className="w-full h-[40%] flex flex-col items-center mt-5 gap-5">
                <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-5xl`}>Who I am</h1>
                {awrite({themes, currentTheme})}
            
              </div>
              <Image src={'/Imagens/Person Mobile.png'} width={768} height={1024} alt="me"
              className="w-[90%] sm:w-[50%] md:w-[55%] h-fit select-none"></Image>
            </div>
          </div>

          : 
          <div className="z-20">
            <div className="w-screen h-screen flex items-end">
              <div className="w-full h-full flex flex-col items-center justify-start gap-5">
                <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-5xl mt-5`}>Who I am</h1>
                {awrite({themes, currentTheme})}
              </div>
              <Person  themes={themes} currentTheme={currentTheme}/>
            </div>
          </div>}
        </div>

        <div ref={skills} className={` w-screen h-screen flex shrink-0 about
        absolute inset-0 opacity-0 items-center justify-center pointer-events-none`}>
          {/* ------------------------ Background ------------------------ */}
          <Background currentTheme={currentTheme} display={windowWidth}/>
          {/* ------------------------ Background ------------------------ */}

          <div className="z-30 w-screen h-screen flex shrink-0 items-center justify-center">
            <div className="w-[300px] md:w-[400px] lg:w-[75%] flex flex-col items-center gap-2">
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-3xl`}>Stack</h1>
              {TechCards({themes, currentTheme})}
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-3xl mt-3 lg:mt-5`}>Workflow</h1>
              {WorkflowCards({themes, currentTheme})}
            </div>
          </div>

        </div>

        <div ref={projects} className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about
        absolute inset-0 opacity-0 z-40 pointer-events-none`}>
          <div className={`relative w-full`} ref={PRcontainer}>

            <div className="h-full w-full absolute inset-0 z-41 pointer-events-none flex items-end justify-center" ref={PRproject_1}>
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}>Projects</h1>
              <Image src={'/Imagens/Pokedex.png'} width={1920} height={1080} alt="Pokedex Web Application"
              className="absolute inset-0 w-full h-full object-cover z-0 select-none">

              </Image>
              <div className="absolute inset-0 bg-black/66 backdrop-blur-[2px]" />
              <div className="bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs">
                <p className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}>Pokedéx Web Application</p>
                {pwrite({themes, currentTheme, phrase: 'A Pokédex built with HTML, CSS, and JavaScript. Features include Pokémon search with autocomplete, favorites, shiny sprites, multiple game sprites, navigation between Pokémon, random Pokémon generation, abilities, descriptions, and Bulbapedia integration.'})}
                <ProjectButton themes={themes} currentTheme={currentTheme} url='https://soares-b.github.io/Pokedex-Web-Application/'/>
              </div>
            </div>

            <div className="h-full w-full absolute inset-0 z-42 opacity-0 pointer-events-none flex items-end" ref={PRproject_2}>
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}>Projects</h1>
              <Image src={'/Imagens/Larper.png'} width={1920} height={1080} alt="Larper"
              className="absolute inset-0 w-full h-full object-cover z-0 object-[7%_50%] select-none">

              </Image>
              <div className="absolute inset-0 bg-black/66 backdrop-blur-[2px]" />
              <div className="bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs">
                <p className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}>Larper</p>
                {pwrite({themes, currentTheme, phrase: 'Discover, explore and find information about your favorite media. Larper is a web application designed to make discovering and exploring different types of media easier. Search for information about anime, manga, video games, books, movies, TV series and music, all in one place.'})}
                <ProjectButton themes={themes} currentTheme={currentTheme} url='https://larper-omega.vercel.app'/>
              </div>
            </div>

            <div className="h-full w-full absolute inset-0 z-43 opacity-0 pointer-events-none flex items-end" ref={PRproject_3}>
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}>Projects</h1>
              <Image src={'/Imagens/Livia Lace.png'} width={1920} height={1080} alt="Livia Lace"
              className="absolute inset-0 w-full h-full object-cover z-0 object-[5%_50%] select-none">

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

        <div ref={contact} className={` w-screen h-screen flex flex-col items-center justify-between shrink-0 about
        absolute inset-0 opacity-0  pointer-events-none`}>
          {/* ------------------------ Background ------------------------ */}
          <Background currentTheme={currentTheme} display={windowWidth}/>
          {/* ------------------------ Background ------------------------ */}

          <div className="z-50 w-screen h-screen flex flex-col items-center justify-between shrink-0">
            <div className="w-[300px] md:w-[400px] flex flex-col gap-5 items-center mt-30">
              <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-3xl`}>Find me on</h1>
              <ContactCards themes={themes} currentTheme={currentTheme}/>
            </div>
            {windowWidth <= 768 ? <Image src='/Imagens/Mobile.png' width={768} height={1024} alt='personality'
            className="w-full h-fit select-none"></Image> : <Image src='/Imagens/Desktop.png' width={1536} height={864} alt='personality'
            className="w-3/5 h-fit xl:w-2/5 select-none"></Image>}
          </div>
        </div>

    </div>
  );
}
