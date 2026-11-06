"use client"

import { themes } from "@/config/themes";
import Name from "@/components/animation/Name";
import Stack from "@/components/Stack";
import ButtonTheme from "@/components/animation/Theme Button";

import { useState, useEffect } from "react";
import { p } from "motion/react-client";

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
    <header className={`${themes[currentTheme].background} w-full min-h-150 h-auto flex`}>
      <div className="ml-5 mt-10 flex flex-col max-w-[250px] w-auto gap-1">
          <Name themes={themes} currentTheme={currentTheme}/>
          {write()}
          <Stack themes={themes} currentTheme={currentTheme}/>
          <div className="flex justify-center w-[210px]">
            <ButtonTheme themes={themes} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}/>
          </div>
      </div>
    </header>
    </>
  );
}
