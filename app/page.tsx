"use client"

import { themes } from "@/config/themes";
import MobilePage from "@/functions/animation/MobilePage";
import DesktopPage from "@/functions/animation/DesktopPage"

import { hwrite } from "@/functions/HeaderWrite";
import { pwrite } from "@/functions/ProjectsWrite";
import { awrite } from "@/functions/AboutWrite";

import { Background, Counterground } from "@/functions/Background";
import Name from "@/components/animation/Name";
import Spark from "@/components/animation/Spark";
import { Theme, Playground } from "@/components/Header buttons";
import AboutCard from "@/components/animation/AboutCard";
import Person from "@/components/Person";
import { TechCards, WorkflowCards, ContactCards } from "@/components/Tech";
import Sticker from "@/components/Sticker";
import ProjectButton from "@/components/animation/ProjectButton";

import gsap from "gsap";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLoading } from "@/config/context";

type ThemeName = keyof typeof themes;

export default function Home() {
  const { isLoaded } = useLoading();
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    console.log(window.innerHeight)
  }, [])

  const [currentTheme, setCurrentTheme] = useState<ThemeName>('Milk')
  const [playground, setPlayground] = useState(false)

  const progress = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const aboutElements = {
    aboutTitle: useRef<HTMLHeadingElement>(null),
    aboutCard: useRef<HTMLDivElement>(null),
  }

  const PRprojects = {
    PRproject_1: useRef<HTMLDivElement>(null),
    PRproject_2: useRef<HTMLDivElement>(null),
    PRproject_3: useRef<HTMLDivElement>(null),
  }

  

  useEffect(() => {
    if (!isLoaded) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      
      if (!container.current
        || !header.current
        || !about.current
        || !skills.current
        || !projects.current
        || !contact.current
        || !PRprojects.PRproject_1.current
        || !PRprojects.PRproject_2.current
        || !PRprojects.PRproject_3.current) return;

      return MobilePage({
    container: container.current,
    header: header.current,
    about: about.current,
    skills: skills.current,
    projects: projects.current,
    contact: contact.current,
    PRproject_1: PRprojects.PRproject_1.current,
    PRproject_2: PRprojects.PRproject_2.current,
    PRproject_3: PRprojects.PRproject_3.current,
  });
    });

  mm.add("(min-width: 769px)", () => {
      
      if (
           !progress.current
        || !container.current
        || !header.current
        || !about.current
        || !skills.current
        || !projects.current
        || !contact.current
        || !PRprojects.PRproject_1.current
        || !PRprojects.PRproject_2.current
        || !PRprojects.PRproject_3.current
        || !aboutElements.aboutTitle.current
        || !aboutElements.aboutCard.current) return;

      return DesktopPage({
        progress: progress.current,
        container: container.current,
        header: header.current,
        about: about.current,
        skills: skills.current,
        projects: projects.current,
        contact: contact.current,
        PRproject_1: PRprojects.PRproject_1.current,
        PRproject_2: PRprojects.PRproject_2.current,
        PRproject_3: PRprojects.PRproject_3.current,
        aboutTitle: aboutElements.aboutTitle.current,
        aboutCard: aboutElements.aboutCard.current,
      });
    });

    return () => mm.revert();
  }, [isLoaded]);

  return (
    <Spark themes={themes} currentTheme={currentTheme} playground={playground} element={
    
    <div
      ref={container}
      className={`w-full min-h-screen relative overflow-hidden
    ${themes[currentTheme].background}
    ${themes[currentTheme].selection_background}
    ${themes[currentTheme].selection_text}`}
    >
        <div className={`w-full min-h-screen flex ${
    isLoaded ? 'animate-intro' : 'opacity-0'
  }`}>
          <div ref={progress} className={`fixed left-0 top-0 z-100 ${windowWidth <= 768 ? '' : themes[currentTheme].progress} w-full h-1`}>

          </div>

          <div ref={header} className={`w-screen h-screen flex flex-col justify-between shrink-0 header pointer-events-auto`}>
            {/* ------------------------ Background ------------------------ */}            
            <Background currentTheme={currentTheme} display={windowWidth}/>
            {/* ------------------------ Background ------------------------ */}

            <div className="z-10 w-screen h-screen flex flex-col justify-between shrink-0">
              <div className="w-full sm:w-4/5 xl:w-2/5 h-3/5 sm:h-full lg:h-1/2 xl:h-3/5 2xl:h-1/2 sm:-mb-5 lg:mb-0 p-3 flex flex-col gap-1 outline-none">
                  <Name themes={themes} currentTheme={currentTheme} windowWidth={windowWidth}/>
                  {hwrite({themes, currentTheme})}
                  <div className={`flex flex-col sm:flex-row lg:flex-col xl:flex-row w-full lg:w-3/5 h-2/5 sm:h-1/2 lg:h-1/2 mt-3 gap-5 lg:gap-3`}>
                    
                    {windowWidth < 640 || (windowWidth > 768 && windowWidth < 1280) ? <>
                      <Playground themes={themes} currentTheme={currentTheme} playground={playground} setPlayground={setPlayground} windowWidth={windowWidth}/> 
                      <Theme themes={themes} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} windowWidth={windowWidth}/>
                    </> 
                    : 
                    <>
                      <Theme themes={themes} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} windowWidth={windowWidth}/>
                      <Playground themes={themes} currentTheme={currentTheme} playground={playground} setPlayground={setPlayground} windowWidth={windowWidth}/> 
                    </>}
                    
                    
                  </div>

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
                  <h1 ref={aboutElements.aboutTitle} className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-5xl mt-5`}>Who I am</h1>
                  <div className="min-w-[95%] sm:min-w-[60%] 2xl:min-w-[50%] min-h-[80%] lg:min-h-[35%] outline-none">
                    <AboutCard ref={aboutElements.aboutCard} card={awrite({themes, currentTheme})} currentTheme={currentTheme}/>
                  </div>
                  
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
            {playground ?
              <div className="absolute inset-0 w-full h-screen pointer-events-none">
              <Sticker
                  logo="/Imagens/Stack/Typescript.png"
                  x={-750}
                  y={100}
                  size={windowWidth}
              />

              <Sticker
                  logo="/Imagens/Stack/Javascript.png"
                  x={-725}
                  y={-150}
                  size={windowWidth}
              />
              <Sticker
                  logo="/Imagens/Stack/React.png"
                  x={-487}
                  y={300}
                  size={windowWidth}
              />
              <Sticker
                  logo="/Imagens/Stack/Next.png"
                  x={-306}
                  y={-304}
                  size={windowWidth}
              />
              
              <Sticker
                  logo="/Imagens/Stack/Tailwind.png"
                  x={222}
                  y={-358}
                  size={windowWidth}
              />
              <Sticker
                  logo="/Imagens/Stack/PostgreSQL.png"
                  x={308}
                  y={350}
                  size={windowWidth}
              />
              <Sticker
                  logo="/Imagens/Stack/Prisma.png"
                  x={550}
                  y={-300}
                  size={windowWidth}
              />
              <Sticker
                  logo="/Imagens/Stack/Git.png"
                  x={547}
                  y={315}
                  size={windowWidth}
              />
              <Sticker
                  logo="/Imagens/Stack/Github.png"
                  x={745}
                  y={-154}
                  size={windowWidth}
              />
              <Sticker
                  logo="/Imagens/Stack/Vscode.png"
                  x={715}
                  y={176}
                  size={windowWidth}
              />
            </div>
            :
            <></>}
          </div>
          <div ref={projects} className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about
          absolute inset-0 opacity-0 z-40 pointer-events-none`}>
            <div className={`relative w-full`}>
              <div className="h-full w-full absolute inset-0 z-41 pointer-events-none flex items-end justify-center" ref={PRprojects.PRproject_1}>
                <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}>Projects</h1>
                <Image src={'/Imagens/Projects/Pokedex.png'} width={1920} height={1080} alt="Pokedex Web Application"
                className="absolute inset-0 w-full h-full object-cover z-0 select-none">
                </Image>
                <div className="absolute inset-0 bg-black/66 backdrop-blur-[2px]" />
                <div className="bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs">
                  <p className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}>Pokedéx Web Application</p>
                  {pwrite({themes, currentTheme, phrase: 'A Pokédex built with HTML, CSS, and JavaScript. Features include Pokémon search with autocomplete, favorites, shiny sprites, multiple game sprites, navigation between Pokémon, random Pokémon generation, abilities, descriptions, and Bulbapedia integration.'})}
                  <ProjectButton themes={themes} currentTheme={currentTheme} url='https://soares-b.github.io/Pokedex-Web-Application/'/>
                </div>
              </div>
              <div className="h-full w-full absolute inset-0 z-42 opacity-0 pointer-events-none flex items-end" ref={PRprojects.PRproject_2}>
                <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}>Projects</h1>
                <Image src={'/Imagens/Projects/Larper.png'} width={1920} height={1080} alt="Larper"
                className="absolute inset-0 w-full h-full object-cover z-0 object-[7%_50%] select-none">
                </Image>
                <div className="absolute inset-0 bg-black/66 backdrop-blur-[2px]" />
                <div className="bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs">
                  <p className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}>Larper</p>
                  {pwrite({themes, currentTheme, phrase: 'Discover, explore and find information about your favorite media. Larper is a web application designed to make discovering and exploring different types of media easier. Search for information about anime, manga, video games, books, movies, TV series and music, all in one place.'})}
                  <ProjectButton themes={themes} currentTheme={currentTheme} url='https://larper-omega.vercel.app'/>
                </div>
              </div>
              <div className="h-full w-full absolute inset-0 z-43 opacity-0 pointer-events-none flex items-end" ref={PRprojects.PRproject_3}>
                <h1 className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}>Projects</h1>
                <Image src={'/Imagens/Projects/Livia Lace.png'} width={1920} height={1080} alt="Livia Lace"
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

    </div>
    }/>
  );
}
