import { Background } from "@/functions/Background";
import { ContactCards } from "@/components/Tech";
import { gwrite } from "@/functions/Glitch Text";

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
    contactActive

}: Temas & {windowWidth: number, contact: any, contactContent: any, contactActive: boolean}) {
  return (
    <div
      ref={contact}
      className={` w-screen h-screen flex flex-col items-center justify-between shrink-0 about
            absolute inset-0 opacity-0  pointer-events-none`}
    >
      {/* ------------------------ Background ------------------------ */}
      <Background
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
          {contactActive && <ContactCards themes={themes} currentTheme={currentTheme} />}
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
  );
}
