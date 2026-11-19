import { pwrite } from "@/functions/ProjectsWrite";
import ProjectButton from "@/components/animation/ProjectButton";
import Image from "next/image";

import type { Theme as Temas } from "@/types/themes";

export default function Projects({
    themes, 
    currentTheme,
    projects,
    PRproject_1,
    PRproject_2,
    PRproject_3,
}: Temas & {windowWidth: number, projects: any, PRproject_1: any, PRproject_2: any, PRproject_3: any}) {
  return (
    <div
      ref={projects}
      className={`${themes[currentTheme].counterground} w-screen h-screen flex shrink-0 about
            absolute inset-0 opacity-0 z-40 pointer-events-none`}
    >
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
            {pwrite({
              themes,
              currentTheme,
              phrase:
                "A full-stack e-commerce platform for a fashion accessories store. Livia Lace is an e-commerce application designed to provide a complete online shopping experience, from product discovery to checkout and payment processing. The project combines a modern web interface with a backend responsible for user sessions, shopping carts, order management and payment integration.",
            })}
            <ProjectButton themes={themes} currentTheme={currentTheme} url="" />
          </div>
        </div>
      </div>
    </div>
  );
}
