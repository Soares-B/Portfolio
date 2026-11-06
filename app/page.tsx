"use client"

import { themes } from "@/config/themes";
import Name from "@/components/animation/Name";
import TiltCard from "@/components/Card";
import ButtonTheme from "@/components/Theme Button";
import Image from "next/image";

import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiPostgresql, SiPrisma, SiGithub, SiGit, SiTailwindcss } from "react-icons/si";

import { useState, useEffect } from "react";

type ThemeName = keyof typeof themes;

export default function Home() {

  const [currentTheme, setCurrentTheme] = useState<ThemeName>('Calmness')

  function write(){
    const phrases = [
      'Full-Stack Developer',
      'Software Engineer Student',
      'CyberSecurity Student',
      'Tech enthusiast'
    ]

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [remove, setRemove] = useState(false);

    useEffect(() => {
      const phrase = phrases[index];

      const timeOut = setTimeout(() => {
        if (!remove){
          setText(phrase.substring(0, text.length + 1));

          if (text.length === phrase.length) {
            setTimeout(() => setRemove(true), 1200)};
        }else{
          setText(phrase.substring(0, text.length - 1))

          if (text.length === 0) {
            setRemove(false);
            setIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      }, remove ? 50 : 100);
      return () => clearTimeout(timeOut);
    }, [text, index, remove])

    return(
      <p className={`font-typewritter ${themes[currentTheme].text} min-h-[24px]`}>{text}</p>
    );
  }

  return (
    <>
    <nav className={`w-full min-h-10 h-auto `}>
      <p className="font-montserrat"></p>
    </nav>
    <header className={`theme-${currentTheme} ${themes[currentTheme].background} w-full min-h-205 h-auto flex selection:bg-[var(--selection_bg)]`}>
      <div className="ml-5 mt-10 flex flex-col max-w-[250px] w-auto gap-1">
          <Name themes={themes} currentTheme={currentTheme}/>
          {write()}

          <div className="flex mt-1 gap-3 flex-wrap max-w-[210px] justify-center">
            <TiltCard card={<SiTypescript className={`${themes[currentTheme].icon} size-6`}/>} size={'w-8'} tech={true}/>
            <TiltCard card={<SiJavascript className={`${themes[currentTheme].icon} size-6`} />} size={'w-8'} tech={true}/>
            <TiltCard card={<SiReact className={`${themes[currentTheme].icon} size-6`} />} size={'w-8'} tech={true}/>
            <TiltCard card={<SiNextdotjs className={`${themes[currentTheme].icon} size-6`} />} size={'w-8'} tech={true}/>
            <TiltCard card={<SiPostgresql className={`${themes[currentTheme].icon} size-6`} />} size={'w-8'} tech={true}/>
            <TiltCard card={<SiPrisma className={`${themes[currentTheme].icon} size-6`} />} size={'w-8'} tech={true}/>
            <TiltCard card={<SiGit className={`${themes[currentTheme].icon} size-6`} />} size={'w-8'} tech={true}/>
            <TiltCard card={<SiGithub className={`${themes[currentTheme].icon} size-6`} />} size={'w-8'} tech={true}/>
            <TiltCard card={<SiTailwindcss className={`${themes[currentTheme].icon} size-6`} />} size={'w-8'} tech={true}/>
          </div>

          <div className="flex justify-center w-[210px]">
            <ButtonTheme themes={themes} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}/>
          </div>
      </div>
    </header>
    <main className={`font-montserrat font-medium ${themes[currentTheme].counterground} flex flex-col`}>
      <section className="mt-2 knowFixed">
            <h1 className={`${themes[currentTheme].text} text-2xl font-semibold ml-5 mb-3`}>Graduation</h1>
            <div className="flex flex-col ml-5 mt-5 knowMove">
            
            <article className="flex mb-5 w-full pr-5 items-center">
                <TiltCard card={<Image src={'/Imagens/estacio.png'} width={75} height={75} alt="Estacio"
                className={`rounded-[15px] border-2 ${themes[currentTheme].border}`}>

                </Image>} size="w-[75px]" tech={false}/>
                
                <div className="flex flex-col ml-2">
                <p className={`${themes[currentTheme].highlight_text} text-lg`}>Software Engineer bachelor</p>
                <p className={`${themes[currentTheme].text}`}>Estacio</p>
                <p className={`${themes[currentTheme].text} text-sm`}>2026 - ongoing</p>
                </div>
            </article>

            <article className="flex mb-5 w-full pr-5 items-center">
                <TiltCard card={<Image src={'/Imagens/unicesumar.jpg'} width={75} height={75} alt="Unicesumar"
                className={`rounded-[15px] border-2 ${themes[currentTheme].border}`}>

                </Image>} size="w-[75px]" tech={false}/>
                <div className="flex flex-col ml-2">
                <p className={`${themes[currentTheme].highlight_text} text-lg`}>CyberSecurity</p>
                <p className={`${themes[currentTheme].text}`}>Unicesumar</p>
                <p className={`${themes[currentTheme].text} text-sm`}>2026 - ongoing</p>
                </div>
            </article>

            <article className="flex mb-5 w-full pr-5 items-center">
                <TiltCard card={<Image src={'/Imagens/cursoemvideo.jpg'} width={75} height={75} alt="Curso em Video"
                className={`rounded-[15px] border-2 ${themes[currentTheme].border}`}>

                </Image>} size="w-[75px]" tech={false}/>
                <div className="flex flex-col ml-2">
                <p className={`${themes[currentTheme].highlight_text} text-lg`}>Curso HTML5 e CSS3</p>
                <p className={`${themes[currentTheme].text}`}>Curso em Video</p>
                <p className={`${themes[currentTheme].text} text-sm`}>Module 1 - 5</p>
                </div>
            </article>

            </div>
        </section>
    </main>
    </>
  );
}
