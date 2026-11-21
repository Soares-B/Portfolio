import { Pwrite } from "@/functions/ProjectsWrite";
import { gwrite } from "@/functions/Glitch Text";
import ProjectButton from "@/components/animation/ProjectButton";
import Image from "next/image";
import { Counterground } from "@/functions/Background";
import ProjectsCard from "@/components/Projects Card";

type Temas = {
    themes: any,
    currentTheme: "Milk" | "Dreams" | "Vampire" | "Genius" | "Trial" | "Silent" | 'Config'
}


export default function Projects({
  themes,
  currentTheme,
  windowWidth,

  projects,
  projectContent,
  PRproject_container,

  PRproject_1,
  PRproject_2,
  PRproject_3,

  project_overlay1,
  project_overlay2,
  project_overlay3,

  aboutDark,
  aboutProject1,
  aboutProject2,
  aboutProject3,

  ProjectCards,
  projectsActive
}: Temas & {
  windowWidth: number;

  projects: any;
  projectContent: any;
  PRproject_container: any;

  PRproject_1: any;
  PRproject_2: any;
  PRproject_3: any;

  project_overlay1: any;
  project_overlay2: any;
  project_overlay3: any;

  aboutDark: any
  aboutProject1: any;
  aboutProject2: any;
  aboutProject3: any;

  ProjectCards: any;
  projectsActive: boolean
}) {
  return (
    <div
      ref={projects}
      className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about
            absolute inset-0 opacity-0 z-40 pointer-events-none`}
    >
      {/* ------------------------ Background ------------------------ */}
      <Counterground
        key={currentTheme}
        currentTheme={currentTheme}
        display={windowWidth}
      />
      {/* ------------------------ Background ------------------------ */}
      {windowWidth <= 768 ? (
        <div className={`relative w-full`}>
          <div
            className="h-full w-full absolute inset-0 z-41 pointer-events-none flex items-end justify-center"
            ref={PRproject_1}
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
              <Pwrite
                themes={themes}
                currentTheme={currentTheme}
                phrase="A Pokédex built with HTML, CSS, and JavaScript. Features include Pokémon search with autocomplete, favorites, shiny sprites, multiple game sprites, navigation between Pokémon, random Pokémon generation, abilities, descriptions, and Bulbapedia integration."
              />
              <ProjectButton
                themes={themes}
                currentTheme={currentTheme}
                url="https://soares-b.github.io/Pokedex-Web-Application/"
              />
            </div>
          </div>
          <div
            className="h-full w-full absolute inset-0 z-42 opacity-0 pointer-events-none flex items-end"
            ref={PRproject_2}
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
              <Pwrite
                themes={themes}
                currentTheme={currentTheme}
                phrase="Discover, explore and find information about your favorite media. Larper is a web application designed to make discovering and exploring different types of media easier. Search for information about anime, manga, video games, books, movies, TV series and music, all in one place."
              />
              <ProjectButton
                themes={themes}
                currentTheme={currentTheme}
                url="https://larper-omega.vercel.app"
              />
            </div>
          </div>
          <div
            className="h-full w-full absolute inset-0 z-43 opacity-0 pointer-events-none flex items-end"
            ref={PRproject_3}
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
              <Pwrite
                themes={themes}
                currentTheme={currentTheme}
                phrase="A full-stack e-commerce platform for a fashion accessories store. Livia Lace is an e-commerce application designed to provide a complete online shopping experience, from product discovery to checkout and payment processing. The project combines a modern web interface with a backend responsible for user sessions, shopping carts, order management and payment integration."
              />
              <ProjectButton
                themes={themes}
                currentTheme={currentTheme}
                url=""
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={projectContent}
          className="w-full h-full flex items-center opacity-0"
        >
          <div
            className={`absolute top-5 w-full h-[48px] flex justify-center ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-bold text-5xl`}
          >
            {gwrite({
              css: `${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow}`,
              scramble: `${themes[currentTheme].highlight_text}`,
              text: "Projects",
              scrambleColorShadow: `${currentTheme}`
            })}
          </div>
          <div
            ref={PRproject_container}
            className="w-full h-1/3 relative flex items-center gap-5"
          >
            <Image
              src={"/Imagens/Projects/Pokedex.png"}
              width={1920}
              height={1080}
              alt="Pokedex Web Application"
              className={`w-1/3 h-full object-cover select-none rounded-[5px] shrink-0 ${themes[currentTheme].project_shadow} shadow-[5px_5px_0px]`}
            ></Image>
            <Image
              src={"/Imagens/Projects/Larper.png"}
              width={1920}
              height={1080}
              alt="Larper"
              className={`w-1/3 h-full object-cover select-none rounded-[5px] shrink-0 ${themes[currentTheme].project_shadow} shadow-[5px_5px_0px]`}
            ></Image>
            <Image
              src={"/Imagens/Projects/Livia Lace.png"}
              width={1920}
              height={1080}
              alt="Livia Lace"
              className={`w-1/3 h-full object-cover select-none rounded-[5px] shrink-0 ${themes[currentTheme].project_shadow} shadow-[5px_5px_0px]`}
            ></Image>

            <Image
              ref={PRproject_1}
              src={"/Imagens/Projects/Pokedex.png"}
              width={1920}
              height={1080}
              alt="Pokedex Web Application"
              className={`w-1/3 h-full object-cover select-none rounded-[5px] shrink-0 ${themes[currentTheme].project_shadow} shadow-[5px_5px_0px]`}
            ></Image>
            <Image
              ref={PRproject_2}
              src={"/Imagens/Projects/Larper.png"}
              width={1920}
              height={1080}
              alt="Larper"
              className={`w-1/3 h-full object-cover select-none rounded-[5px] shrink-0 ${themes[currentTheme].project_shadow} shadow-[5px_5px_0px]`}
            ></Image>
            <Image
              ref={PRproject_3}
              src={"/Imagens/Projects/Livia Lace.png"}
              width={1920}
              height={1080}
              alt="Livia Lace"
              className={`w-1/3 h-full object-cover select-none rounded-[5px] shrink-0 ${themes[currentTheme].project_shadow} shadow-[5px_5px_0px]`}
            ></Image>

            <Image
              src={"/Imagens/Projects/Pokedex.png"}
              width={1920}
              height={1080}
              alt="Pokedex Web Application"
              className={`w-1/3 h-full object-cover select-none rounded-[5px] shrink-0 ${themes[currentTheme].project_shadow} shadow-[5px_5px_0px]`}
            ></Image>
            <Image
              src={"/Imagens/Projects/Larper.png"}
              width={1920}
              height={1080}
              alt="Larper"
              className={`w-1/3 h-full object-cover select-none rounded-[5px] shrink-0 ${themes[currentTheme].project_shadow} shadow-[5px_5px_0px]`}
            ></Image>
            <Image
              src={"/Imagens/Projects/Livia Lace.png"}
              width={1920}
              height={1080}
              alt="Livia Lace"
              className={`w-1/3 h-full object-cover select-none rounded-[5px] shrink-0 ${themes[currentTheme].project_shadow} shadow-[5px_5px_0px]`}
            ></Image>
          </div>

          <div className="w-full h-full absolute flex items-center justify-center z-[10001] pointer-events-none">
            <Image
              ref={project_overlay1}
              src={"/Imagens/Projects/Pokedex.png"}
              width={1920}
              height={1080}
              alt="Pokedex Web Application"
              className={` absolute w-1/3 h-1/3 object-cover select-none rounded-[5px] shrink-0 opacity-0`}
            ></Image>
            <Image
              ref={project_overlay2}
              src={"/Imagens/Projects/Larper.png"}
              width={1920}
              height={1080}
              alt="Larper"
              className={` absolute w-1/3 h-1/3 object-cover select-none rounded-[5px] shrink-0 opacity-0`}
            ></Image>
            <Image
              ref={project_overlay3}
              src={"/Imagens/Projects/Livia Lace.png"}
              width={1920}
              height={1080}
              alt="Livia Lace"
              className={` absolute w-1/3 h-1/3 object-cover select-none rounded-[5px] shrink-0 opacity-0`}
            ></Image>
            <div
              ref={aboutDark}
              className="absolute inset-0 bg-black/66 backdrop-blur-[2px] opacity-0"
            />

            <div ref={aboutProject1} className="absolute bottom-0 bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs opacity-0">
              <p
                className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}
              >
                Pokedéx Web Application
              </p>
              <Pwrite
                themes={themes}
                currentTheme={currentTheme}
                phrase="A Pokédex built with HTML, CSS, and JavaScript. Features include Pokémon search with autocomplete, favorites, shiny sprites, multiple game sprites, navigation between Pokémon, random Pokémon generation, abilities, descriptions, and Bulbapedia integration."
              />
              <ProjectButton
                themes={themes}
                currentTheme={currentTheme}
                url="https://soares-b.github.io/Pokedex-Web-Application/"
              />
            </div>

            <div ref={aboutProject2} className="absolute bottom-0 bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs opacity-0 z-[10003]">
              <p
                className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}
              >
                Larper
              </p>
              <Pwrite
                themes={themes}
                currentTheme={currentTheme}
                phrase="Discover, explore and find information about your favorite media. Larper is a web application designed to make discovering and exploring different types of media easier. Search for information about anime, manga, video games, books, movies, TV series and music, all in one place."
              />
              <ProjectButton
                themes={themes}
                currentTheme={currentTheme}
                url="https://larper-omega.vercel.app"
              />
            </div>
            <div ref={aboutProject3} className="absolute bottom-0 bg-black/50 min-h-[50%] flex flex-col items-center w-full z-1 mb-0 rounded-[10px] backdrop-blur-xs opacity-0 pointer-events-none">
              <p
                className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold mt-3 text-xl md:text-3xl`}
              >
                Livia Lace
              </p>
              <Pwrite
                themes={themes}
                currentTheme={currentTheme}
                phrase="A full-stack e-commerce platform for a fashion accessories store. Livia Lace is an e-commerce application designed to provide a complete online shopping experience, from product discovery to checkout and payment processing. The project combines a modern web interface with a backend responsible for user sessions, shopping carts, order management and payment integration."
              />
              <ProjectButton
                themes={themes}
                currentTheme={currentTheme}
                url="https://livia-lace.vercel.app"
              />
            </div>
            <ProjectsCard ProjectCards={ProjectCards} theme={currentTheme}/>
          </div>
          
        </div>
      )}
    </div>
  );
}
