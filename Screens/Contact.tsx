import { Background } from "@/functions/Background";
import { ContactCards } from "@/components/Tech";
import { gwrite } from "@/functions/Glitch Text";
import { DitherLogo } from "@/functions/Dither Effect";

type Temas = {
    themes: any,
    currentTheme: "Milk" | "Dreams" | "Vampire" | "Genius" | "Trial" | "Silent" | 'Config'
}

import Image from "next/image";

export default function Contact({
    themes, 
    currentTheme,
    windowWidth,
    contact,
    contactContent,
    contactActive,
    contactBG
}: Temas & {windowWidth: number, contact: any, contactContent: any, contactActive: boolean, contactBG: any}) {
  return (
    <div
      ref={contact}
      className={` w-screen h-screen flex flex-col items-center justify-between shrink-0 about
            absolute inset-0 opacity-0  pointer-events-none`}
    >
      {/* ------------------------ Background ------------------------ */}
      <Background
        section={contactBG}
        key={currentTheme}
        currentTheme={currentTheme}
        display={windowWidth}
      />
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
              scrambleColorShadow: `${currentTheme}`
            })}
          </div>
          {windowWidth <= 768 ? <ContactCards themes={themes} currentTheme={currentTheme} size={windowWidth}/> : contactActive && <ContactCards themes={themes} currentTheme={currentTheme} size={windowWidth}/>}
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
          <div className="w-3/5 h-fit xl:w-2/5 select-none grid grid-cols-1 grid-rows-1">
            <Image
              src="/Imagens/Desktop.png"
              width={1536}
              height={864}
              alt="personality"
              className="w-full h-auto col-start-1 row-start-1"
            >              
            </Image>

            {contactActive && <DitherLogo
              image="/Imagens/Desktop.png"
              label="personality"
              spacing={3}
              dotScale={0.5}
              radius={90}
              strength={1}
              assemble
              className="w-full h-full col-start-1 row-start-1 z-10"
            />}
          </div>
        )}
      </div>
    </div>
  );
}
