import StackSpiral from "@/components/StackSpiral";
import { TechCards, WorkflowCards } from "@/components/Tech";
import Sticker from "@/components/Sticker";
import { Background } from "@/functions/Background";
import { gwrite } from "@/functions/Glitch Text";

import type { Theme as Temas } from "@/types/themes";

export default function Skills({
    themes, 
    currentTheme,
    windowWidth,
    skills,
    skillsContent,
    skillsActive,
    skillsSpiral,
    skillsStack,
    skillsBadgeBox,
}: Temas & {windowWidth: number, skills: any, skillsContent: any, skillsActive: any, skillsSpiral: any, skillsStack: any, skillsBadgeBox: any}) {
  return (
    <div
      ref={skills}
      className={` w-screen h-screen flex shrink-0 about
                    absolute inset-0 opacity-0 items-center justify-center pointer-events-none`}
    >
      {/* ------------------------ Background ------------------------ */}
      <Background
        key={currentTheme}
        currentTheme={currentTheme}
        display={windowWidth}
      />
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
          ref={skillsSpiral}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <StackSpiral />
        </div>

        <div
          ref={skillsStack}
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
          ref={skillsBadgeBox}
          className={`w-[95%] h-4/5 ${themes[currentTheme].counterground}/40 relative border-2 rounded-[5px]`}
        >
          <p
            className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} text-4xl font-montserrat font-bold relative z-[32] mt-2 ml-2`}
          >
            Badges
          </p>
          <Background
            key={currentTheme}
            currentTheme={currentTheme}
            type="badge"
          />
          {skillsActive && (
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <Sticker
                logo="/Imagens/Stack/Typescript.png"
                x={-40}
                y={35}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Javascript.png"
                x={-25}
                y={35}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/React.png"
                x={-10}
                y={35}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Next.png"
                x={5}
                y={35}
                size={windowWidth}
              />

              <Sticker
                logo="/Imagens/Stack/Tailwind.png"
                x={20}
                y={35}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/PostgreSQL.png"
                x={35}
                y={35}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Prisma.png"
                x={-40}
                y={20}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Git.png"
                x={-25}
                y={20}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Github.png"
                x={-10}
                y={20}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Vscode.png"
                x={5}
                y={20}
                size={windowWidth}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
