"use client"

import { themes } from "@/config/themes";
import { Name } from "@/components/animation/Name";

import { useState, useEffect } from "react";
import { p } from "motion/react-client";

export default function Home() {

  let currentTheme: keyof typeof themes = 'Calmness'

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
      <p className="">{text}</p>
    );
  }

  return (
    <>
    <nav className={`w-full min-h-10 h-auto bg-Calmness-4`}>
      <p className="font-montserrat"></p>
    </nav>
    <header className={`${themes[currentTheme].background} w-full min-h-150 h-auto flex items-center`}>
      <div className="ml-10 flex flex-col">
          <Name themes={themes} currentTheme={currentTheme}/>
          {write()}
      </div>
    </header>
    </>
  );
}
