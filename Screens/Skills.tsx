import StackSpiral from "@/components/StackSpiral";
import { TechCards, WorkflowCards } from "@/components/Tech";
import Sticker from "@/components/Sticker";
import { Background } from "@/functions/Background";
import { gwrite } from "@/functions/Glitch Text";

type Temas = {
    themes: any,
    currentTheme: "Milk" | "Dreams" | "Vampire" | "Genius" | "Trial" | "Silent" | 'Config'
}

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
    skillsBG
}: Temas & {windowWidth: number, skills: any, skillsContent: any, skillsActive: any, skillsSpiral: any, skillsStack: any, skillsBadgeBox: any, skillsBG: any}) {
  return (
    <div
      ref={skills}
      className={` w-screen h-screen flex shrink-0 about
                    absolute inset-0 opacity-0 items-center justify-center pointer-events-none`}
    >
      {/* ------------------------ Background ------------------------ */}
      <Background
      section={skillsBG}
        key={currentTheme}
        currentTheme={currentTheme}
        display={windowWidth}
      />
      {/* ------------------------ Background ------------------------ */}

      {windowWidth <= 768 ? 
      <div ref={skillsContent} className="z-30 w-screen h-screen flex shrink-0 items-center justify-center">
            <div className="w-[300px] md:w-[400px] lg:w-[75%] flex flex-col items-center gap-2">
                <div className={`w-full h-[30px] flex justify-center font-montserrat font-bold text-3xl ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`}>
                {gwrite({css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`, scramble: `${themes[currentTheme].highlight_text}`, text: 'Stack', scrambleColorShadow: `${currentTheme}`})}
                </div>
                
                {TechCards({themes, currentTheme})}

                <div className={`w-full h-[30px] flex justify-center font-montserrat font-bold text-3xl ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`}>
                {gwrite({css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`, scramble: `${themes[currentTheme].highlight_text}`, text: 'Workflow', scrambleColorShadow: `${currentTheme}`})}
                </div>

                {WorkflowCards({themes, currentTheme})}
            </div>
        </div>
      : 
      <div
        ref={skillsContent}
        className={`z-30 w-screen h-screen grid grid-cols-3 shrink-0 items-center justify-center`}
      >
        <div
          ref={skillsSpiral}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <StackSpiral size={windowWidth}/>
        </div>

        <div
          ref={skillsStack}
          className="col-2 w-full h-full flex flex-col items-center justify-center gap-5 lg:gap-3"
        >
          <div
            className={`w-full h-[30px] flex justify-center font-montserrat font-bold text-3xl ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`}
          >
            {gwrite({
              css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`,
              scramble: `${themes[currentTheme].highlight_text}`,
              text: "Stack",
              scrambleColorShadow: `${currentTheme}`,
              
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
            section={skillsBG}
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
                x={ windowWidth < 1280 ? -15 : windowWidth < 1920 ? -20 : -25}
                y={35}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/React.png"
                x={ windowWidth < 1280 ? 10 : windowWidth < 1920 ? 0 : -10}
                y={35}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Next.png"
                x={windowWidth < 1280 ? 35 : windowWidth < 1920 ? 60 : 5}
                y={35}
                size={windowWidth}
              />

              <Sticker
                logo="/Imagens/Stack/Tailwind.png"
                x={windowWidth < 1280 ? -40 : 20}
                y={windowWidth < 1280 ? 20 : 35}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/PostgreSQL.png"
                x={windowWidth < 1280 ? -15 : windowWidth < 1920 ? -40 : 35}
                y={windowWidth < 1920 ? 20 : 35}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Prisma.png"
                x={windowWidth < 1280 ? 10 : windowWidth < 1920 ? -20 : -40}
                y={20}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Git.png"
                x={windowWidth < 1280 ? 35 : windowWidth < 1920 ? 0 : -25}
                y={20}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Github.png"
                x={windowWidth < 1280 ? -40 : windowWidth < 1920 ? 20 : -10}
                y={windowWidth < 1280 ? 5 :20}
                size={windowWidth}
              />
              <Sticker
                logo="/Imagens/Stack/Vscode.png"
                x={windowWidth < 1280 ? -15 : windowWidth < 1920 ? 40 : 5}
                y={windowWidth < 1280 ? 5 : 20}
                size={windowWidth}
              />
            </div>
          )}
        </div>
      </div>
        }
    </div>   
  );
}
