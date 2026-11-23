import { hwrite } from "@/functions/HeaderWrite";
import Name from "@/components/animation/Name";
import { Theme } from "@/components/Header buttons";
import { Background } from "@/functions/Background";

import { DitherLogo } from "@/functions/Dither Effect";

import type { Theme as Temas } from "@/types/themes";

import Image from "next/image";

export default function Header({
    themes, 
    currentTheme,
    setCurrentTheme,
    windowWidth,
    header,
    headerContent,
    headerActive,
    headerBG
}: Temas & {setCurrentTheme: any, windowWidth: number, header: any, headerContent: any, headerActive: any, headerBG: any}) {
  return (
    <div
      ref={header}
      className={`w-screen h-screen flex flex-col justify-between shrink-0 header pointer-events-auto`}
    >
      {/* ------------------------ Background ------------------------ */}
      <Background
        section={headerBG}
        key={currentTheme}
        currentTheme={currentTheme}
        display={windowWidth}
      />
      {/* ------------------------ Background ------------------------ */}
      <div
        ref={headerContent}
        className="z-10 w-screen h-screen flex flex-col justify-between shrink-0"
      >
        <div className="w-full h-2/5  p-3 flex flex-col gap-1 outline-none">
          {headerActive && <Name
            themes={themes}
            currentTheme={currentTheme}
            windowWidth={windowWidth}
            headerActive={headerActive}
          />
          }
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
          <div className="w-2/5 absolute right-0 bottom-0 select-none grid grid-cols-1 grid-rows-1">

            <Image
              src="/Imagens/Desktop.png"
              width={1536}
              height={864}
              alt="personality"
              className="w-full h-auto col-start-1 row-start-1"
            />

            {headerActive && <DitherLogo
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
