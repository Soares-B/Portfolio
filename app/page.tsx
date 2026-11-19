"use client";

import { themes } from "@/config/themes";
import MobilePage from "@/functions/animation/MobilePage";
import DesktopPage from "@/functions/animation/DesktopPage";

import { hwrite } from "@/functions/HeaderWrite";
import { pwrite } from "@/functions/ProjectsWrite";
import { awrite } from "@/functions/AboutWrite";
import { gwrite } from "@/functions/Glitch Text";

import { Background, Counterground } from "@/functions/Background";
import Name from "@/components/animation/Name";
import Spark from "@/components/animation/Spark";
import { Theme } from "@/components/Header buttons";
import AboutCard from "@/components/animation/AboutCard";
import Person from "@/components/Person";
import StackSpiral from "@/components/StackSpiral";
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
  const [windowWidth, setWindowWidth] = useState(0);

  const [headerActive, setHeaderActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const [currentTheme, setCurrentTheme] = useState<ThemeName>("Milk");

  const progress = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const headerContent = useRef<HTMLDivElement>(null);
  const aboutContent = useRef<HTMLDivElement>(null);
  const skillsContent = useRef<HTMLDivElement>(null);
  const contactContent = useRef<HTMLDivElement>(null);

  const aboutTitle = useRef<HTMLHeadingElement>(null);

  const Skills = {
    skillsSpiral: useRef<HTMLDivElement>(null),
    skillsStack: useRef<HTMLDivElement>(null),
    skillsBadgeBox: useRef<HTMLDivElement>(null),
    skillsStickers: useRef<HTMLDivElement>(null),
  };

  const PRprojects = {
    PRproject_1: useRef<HTMLDivElement>(null),
    PRproject_2: useRef<HTMLDivElement>(null),
    PRproject_3: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    if (!isLoaded) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      if (
        !progress.current ||
        !container.current ||
        !header.current ||
        !about.current ||
        !skills.current ||
        !projects.current ||
        !contact.current ||
        !headerContent.current ||
        !aboutContent.current ||
        !skillsContent.current ||
        !contactContent.current ||
        !PRprojects.PRproject_1.current ||
        !PRprojects.PRproject_2.current ||
        !PRprojects.PRproject_3.current ||
        !aboutTitle.current
      )
        return;

      return MobilePage({
        progress: progress.current,
        container: container.current,
        header: header.current,
        about: about.current,
        skills: skills.current,
        projects: projects.current,
        contact: contact.current,

        headerContent: headerContent.current,
        aboutContent: aboutContent.current,
        skillsContent: skillsContent.current,
        contactContent: contactContent.current,

        PRproject_1: PRprojects.PRproject_1.current,
        PRproject_2: PRprojects.PRproject_2.current,
        PRproject_3: PRprojects.PRproject_3.current,
        aboutTitle: aboutTitle.current,
      });
    });

    mm.add("(min-width: 769px)", () => {
      if (
        !progress.current ||
        !container.current ||
        !header.current ||
        !about.current ||
        !skills.current ||
        !projects.current ||
        !contact.current ||
        !headerContent.current ||
        !aboutContent.current ||
        !skillsContent.current ||
        !contactContent.current ||
        !Skills.skillsSpiral.current ||
        !Skills.skillsStack.current ||
        !Skills.skillsBadgeBox.current ||
        !Skills.skillsStickers.current ||
        !PRprojects.PRproject_1.current ||
        !PRprojects.PRproject_2.current ||
        !PRprojects.PRproject_3.current ||
        !aboutTitle.current
      )
        return;

      return DesktopPage({
        progress: progress.current,
        container: container.current,
        header: header.current,
        about: about.current,
        skills: skills.current,
        projects: projects.current,
        contact: contact.current,

        headerContent: headerContent.current,
        aboutContent: aboutContent.current,
        skillsContent: skillsContent.current,
        contactContent: contactContent.current,

        skillsSpiral: Skills.skillsSpiral.current,
        skillsStack: Skills.skillsStack.current,
        skillsBadgeBox: Skills.skillsBadgeBox.current,
        skillsStickers: Skills.skillsStickers.current,

        PRproject_1: PRprojects.PRproject_1.current,
        PRproject_2: PRprojects.PRproject_2.current,
        PRproject_3: PRprojects.PRproject_3.current,
        
        aboutTitle: aboutTitle.current,

        setHeaderActive: setHeaderActive,
        setAboutActive: setAboutActive,
        setSkillsActive: setSkillsActive,
        setContactActive: setContactActive,
      });
    });

    return () => mm.revert();
  }, [isLoaded]);

  return (
    <div>
      <Spark
        themes={themes}
        currentTheme={currentTheme}
        element={
          <div
            ref={container}
            className={`w-full min-h-screen relative overflow-hidden
      ${themes[currentTheme].background}
      ${themes[currentTheme].selection_background}
      ${themes[currentTheme].selection_text}`}
          >
            <div
              className={`w-full min-h-screen flex ${
                isLoaded ? "animate-intro" : "opacity-0"
              }`}
            >
              <div
                ref={progress}
                className={`fixed left-0 top-0 z-100 ${windowWidth <= 768 ? "" : themes[currentTheme].progress} w-full h-1`}
              ></div>

              {/* ------------------------------------------------------------------------ Header ------------------------------------------------------------------------ */}

              <div
                ref={header}
                className={`w-screen h-screen flex flex-col justify-between shrink-0 header pointer-events-auto`}
              >
                {/* ------------------------ Background ------------------------ */}
                <Background currentTheme={currentTheme} display={windowWidth} />
                {/* ------------------------ Background ------------------------ */}
                <div
                  ref={headerContent}
                  className="z-10 w-screen h-screen flex flex-col justify-between shrink-0"
                >
                  <div className="w-full h-2/5  p-3 flex flex-col gap-1 outline-none">
                    <Name
                      themes={themes}
                      currentTheme={currentTheme}
                      windowWidth={windowWidth}
                      headerActive={headerActive}
                    />
                    {hwrite({ themes, currentTheme })}
                    <Theme
                      themes={themes}
                      currentTheme={currentTheme}
                      setCurrentTheme={setCurrentTheme}
                      windowWidth={windowWidth}
                    />
                  </div>
                  {windowWidth <= 768 ? (
                    <Image
                      src="/Imagens/Mobile.png"
                      width={768}
                      height={1024}
                      alt="personality"
                      className="w-full h-fit select-none"
                    ></Image>
                  ) : (
                    <Image
                      src="/Imagens/Desktop.png"
                      width={1536}
                      height={864}
                      alt="personality"
                      className="w-2/5 h-fit absolute right-0 bottom-0 select-none"
                    ></Image>
                  )}
                </div>
              </div>

              {/* ------------------------------------------------------------------------ About ------------------------------------------------------------------------ */}

              <div
                ref={about}
                className={` w-screen h-screen flex items-end justify-center shrink-0 about
            absolute inset-0 opacity-0 pointer-events-none`}
              >
                {/* ------------------------ Background ------------------------ */}
                <Counterground
                  currentTheme={currentTheme}
                  display={windowWidth}
                />
                {/* ------------------------ Background ------------------------ */}
                {windowWidth <= 768 ? (
                  <div ref={aboutContent} className="z-20">
                    <div className="w-screen h-screen flex flex-col items-center justify-between ">
                      <div className="w-full h-[40%] flex flex-col items-center mt-3 gap-5">
                        <div
                          ref={aboutTitle}
                          className={`w-1/2 h-[48px] flex justify-center ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl`}
                        >
                          {gwrite({
                            css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`,
                            scramble: `${themes[currentTheme].highlight_text}`,
                            text: "Who I am",
                          })}
                        </div>
                        <div className="min-w-[95%] sm:min-w-[60%] 2xl:min-w-[50%] min-h-[80%] lg:min-h-[35%] outline-none">
                          <AboutCard
                            card={awrite({
                              themes,
                              currentTheme,
                              size: windowWidth,
                              aboutActive,
                            })}
                            currentTheme={currentTheme}
                          />
                        </div>
                      </div>
                      <Image
                        src={"/Imagens/Person Mobile.png"}
                        width={768}
                        height={1024}
                        alt="me"
                        className="w-[90%] sm:w-[50%] md:w-[55%] h-fit select-none"
                      ></Image>
                    </div>
                  </div>
                ) : (
                  <div ref={aboutContent} className="z-20">
                    <div className="w-screen h-screen flex items-end">
                      <div className="w-full h-full flex flex-col items-center justify-start gap-5">
                        <div
                          ref={aboutTitle}
                          className={`w-1/2 h-[48px] flex justify-center ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-5xl mt-5`}
                        >
                          {gwrite({
                            css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`,
                            scramble: `${themes[currentTheme].highlight_text}`,
                            text: "Who I am",
                          })}
                        </div>
                        <div className="min-w-[95%] sm:min-w-[60%] 2xl:min-w-[50%] min-h-[80%] lg:min-h-[35%] outline-none">
                          <AboutCard
                            card={awrite({
                              themes,
                              currentTheme,
                              size: windowWidth,
                              aboutActive,
                            })}
                            currentTheme={currentTheme}
                          />
                        </div>
                      </div>
                      <div className="relative w-[60%] mr-5">
                        <Person themes={themes} currentTheme={currentTheme} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ------------------------------------------------------------------------ Skills ------------------------------------------------------------------------ */}

              <div
                ref={skills}
                className={` w-screen h-screen flex shrink-0 about
            absolute inset-0 opacity-0 items-center justify-center pointer-events-none`}
              >
                {/* ------------------------ Background ------------------------ */}
                <Background currentTheme={currentTheme} display={windowWidth} />
                {/* ------------------------ Background ------------------------ */}

                {/* <div ref={skillsContent} className="z-30 w-screen h-screen flex shrink-0 items-center justify-center">
                <div ref={Skills.skillsSpiral} className="absolute w-full h-full flex items-center justify-center">
                  <StackSpiral />
                </div>
                <div className="w-[300px] md:w-[400px] lg:w-[75%] flex flex-col items-center gap-2">
                  <div className={`w-full h-[30px] flex justify-center font-montserrat font-bold text-3xl ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`}>
                    {gwrite({css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`, scramble: `${themes[currentTheme].highlight_text}`, text: 'Stack'})}
                  </div>
                  
                  {TechCards({themes, currentTheme})}

                  <div className={`w-full h-[30px] flex justify-center font-montserrat font-bold text-3xl ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`}>
                    {gwrite({css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`, scramble: `${themes[currentTheme].highlight_text}`, text: 'Workflow'})}
                  </div>

                  {WorkflowCards({themes, currentTheme})}
                </div> */}

                <div
                  ref={skillsContent}
                  className={`z-30 w-screen h-screen ${windowWidth <= 768 ? "flex" : "grid grid-cols-3"} shrink-0 items-center justify-center`}
                >
                  <div
                    ref={Skills.skillsSpiral}
                    className="absolute w-full h-full flex items-center justify-center"
                  >
                    <StackSpiral />
                  </div>

                    <div
                      ref={Skills.skillsStack}
                      className="col-2 w-full h-full flex flex-col items-center justify-center gap-5"
                    >
                      <div
                        className={`w-full h-[30px] flex justify-center font-montserrat font-bold text-3xl ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`}
                      >
                        {gwrite({
                          css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`,
                          scramble: `${themes[currentTheme].highlight_text}`,
                          text: "Stack",
                        })}
                      </div>

                      {TechCards({ themes, currentTheme })}

                      <div
                        className={`w-full h-[30px] flex justify-center font-montserrat font-bold text-3xl ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`}
                      >
                        {gwrite({
                          css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`,
                          scramble: `${themes[currentTheme].highlight_text}`,
                          text: "Workflow",
                        })}
                      </div>

                      {WorkflowCards({ themes, currentTheme })}
                    </div>


                    <div
                    ref={Skills.skillsBadgeBox}
                      className={`w-[95%] h-4/5 ${themes[currentTheme].counterground}/40 relative border-2 rounded-[5px]`}
                    >
                      <p
                        className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} text-4xl font-montserrat font-bold relative z-[32] mt-2 ml-2`}
                      >
                        Badges
                      </p>
                      <Background currentTheme={currentTheme} type="badge" />
                    </div>

                  {skillsActive && (
                    <div 
                    ref={Skills.skillsStickers}
                    className="absolute inset-0 w-full h-screen pointer-events-none">
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
                  )}
                </div>
              </div>

              {/* ------------------------------------------------------------------------ Projects ------------------------------------------------------------------------ */}

              <div
                ref={projects}
                className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about
            absolute inset-0 opacity-0 z-40 pointer-events-none`}
              >
                <div className={`relative w-full`}>
                  <div
                    className="h-full w-full absolute inset-0 z-41 pointer-events-none flex items-end justify-center"
                    ref={PRprojects.PRproject_1}
                  >
                    <h1
                      className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}
                    >
                      Projects
                    </h1>
                    <Image
                      src={"/Imagens/Projects/Pokedex.png"}
                      width={1920}
                      height={1080}
                      alt="Pokedex Web Application"
                      className="absolute inset-0 w-full h-full object-cover z-0 select-none"
                    ></Image>
                    <div className="absolute inset-0 bg-black/66 backdrop-blur-[2px]" />
                    <div className="bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs">
                      <p
                        className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}
                      >
                        Pokedéx Web Application
                      </p>
                      {pwrite({
                        themes,
                        currentTheme,
                        phrase:
                          "A Pokédex built with HTML, CSS, and JavaScript. Features include Pokémon search with autocomplete, favorites, shiny sprites, multiple game sprites, navigation between Pokémon, random Pokémon generation, abilities, descriptions, and Bulbapedia integration.",
                      })}
                      <ProjectButton
                        themes={themes}
                        currentTheme={currentTheme}
                        url="https://soares-b.github.io/Pokedex-Web-Application/"
                      />
                    </div>
                  </div>
                  <div
                    className="h-full w-full absolute inset-0 z-42 opacity-0 pointer-events-none flex items-end"
                    ref={PRprojects.PRproject_2}
                  >
                    <h1
                      className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}
                    >
                      Projects
                    </h1>
                    <Image
                      src={"/Imagens/Projects/Larper.png"}
                      width={1920}
                      height={1080}
                      alt="Larper"
                      className="absolute inset-0 w-full h-full object-cover z-0 object-[7%_50%] select-none"
                    ></Image>
                    <div className="absolute inset-0 bg-black/66 backdrop-blur-[2px]" />
                    <div className="bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs">
                      <p
                        className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}
                      >
                        Larper
                      </p>
                      {pwrite({
                        themes,
                        currentTheme,
                        phrase:
                          "Discover, explore and find information about your favorite media. Larper is a web application designed to make discovering and exploring different types of media easier. Search for information about anime, manga, video games, books, movies, TV series and music, all in one place.",
                      })}
                      <ProjectButton
                        themes={themes}
                        currentTheme={currentTheme}
                        url="https://larper-omega.vercel.app"
                      />
                    </div>
                  </div>
                  <div
                    className="h-full w-full absolute inset-0 z-43 opacity-0 pointer-events-none flex items-end"
                    ref={PRprojects.PRproject_3}
                  >
                    <h1
                      className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-4xl absolute z-2 top-7 left-[50%] translate-[-50%]`}
                    >
                      Projects
                    </h1>
                    <Image
                      src={"/Imagens/Projects/Livia Lace.png"}
                      width={1920}
                      height={1080}
                      alt="Livia Lace"
                      className="absolute inset-0 w-full h-full object-cover z-0 object-[5%_50%] select-none"
                    ></Image>
                    <div className="absolute inset-0 bg-black/66 backdrop-blur-[2px]" />
                    <div className="bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs">
                      <p
                        className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}
                      >
                        Livia Lace
                      </p>
                      {pwrite({
                        themes,
                        currentTheme,
                        phrase:
                          "A full-stack e-commerce platform for a fashion accessories store. Livia Lace is an e-commerce application designed to provide a complete online shopping experience, from product discovery to checkout and payment processing. The project combines a modern web interface with a backend responsible for user sessions, shopping carts, order management and payment integration.",
                      })}
                      <ProjectButton
                        themes={themes}
                        currentTheme={currentTheme}
                        url="https://livia-lace-85cr.vercel.app/"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------------------ Contact ------------------------------------------------------------------------ */}

              <div
                ref={contact}
                className={` w-screen h-screen flex flex-col items-center justify-between shrink-0 about
            absolute inset-0 opacity-0  pointer-events-none`}
              >
                {/* ------------------------ Background ------------------------ */}
                <Background currentTheme={currentTheme} display={windowWidth} />
                {/* ------------------------ Background ------------------------ */}
                <div
                  ref={contactContent}
                  className="z-50 w-screen h-screen flex flex-col items-center justify-between shrink-0"
                >
                  <div className="w-[300px] md:w-[400px] flex flex-col gap-5 items-center mt-30">
                    <div
                      className={`w-full h-[30px] flex justify-center font-montserrat font-bold text-3xl ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`}
                    >
                      {gwrite({
                        css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`,
                        scramble: `${themes[currentTheme].highlight_text}`,
                        text: "Find me on",
                      })}
                    </div>
                    <ContactCards themes={themes} currentTheme={currentTheme} />
                  </div>
                  {windowWidth <= 768 ? (
                    <Image
                      src="/Imagens/Mobile.png"
                      width={768}
                      height={1024}
                      alt="personality"
                      className="w-full h-fit select-none"
                    ></Image>
                  ) : (
                    <Image
                      src="/Imagens/Desktop.png"
                      width={1536}
                      height={864}
                      alt="personality"
                      className="w-3/5 h-fit xl:w-2/5 select-none"
                    ></Image>
                  )}
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
