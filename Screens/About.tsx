import { Counterground } from "@/functions/Background";
import AboutCard from "@/components/animation/AboutCard";
import Person from "@/components/Person";
import { awrite } from "@/functions/AboutWrite";

import { gwrite } from "@/functions/Glitch Text";

import Image from "next/image";

type Temas = {
    themes: any,
    currentTheme: "Milk" | "Dreams" | "Vampire" | "Genius" | "Trial" | "Silent" | 'Config'
}

export default function About({
    themes, 
    currentTheme,
    windowWidth,
    about,
    aboutContent,
    aboutActive,
    aboutTitle,
    aboutBG
}: Temas & {windowWidth: number, about: any, aboutContent: any, aboutActive: any, aboutTitle: any, aboutBG: any}) {
  return (
    <div
      ref={about}
      className={` w-screen h-screen flex items-end justify-center shrink-0 projects
                    absolute inset-0 opacity-0 pointer-events-none`}
    >
      {/* ------------------------ Background ------------------------ */}
      <Counterground
        section={aboutBG}
        key={currentTheme}
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
                  scrambleColorShadow: `${currentTheme}`
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
                  scrambleColorShadow: `${currentTheme}`
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
  );
}
