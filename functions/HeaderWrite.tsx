import { useState, useEffect } from "react";
import type { Theme } from "@/types/themes";

export function hwrite({
  themes,
  currentTheme,
}: Theme){
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
      <p className={`font-typewritter ${themes[currentTheme].text} h-[24px] text-lg md:text-2xl`}>{text}</p>
    );
  }