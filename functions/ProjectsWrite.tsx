import { useState, useEffect } from "react";
import type { Theme } from "@/types/themes";

export function pwrite({
  themes,
  currentTheme,
  phrase
}: Theme & {phrase: string}){
    const phrases = [
      phrase
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
            setTimeout(() => setRemove(false), 1200)};
        }else{
          setText(phrase.substring(0, text.length - 1))

          if (text.length === 0) {
            setRemove(false);
            setIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      }, remove ? 50 : 25);
      return () => clearTimeout(timeOut);
    }, [text, index, remove])

    return(
      <p className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold min-h-[24px] text-base text-justify p-5 min-h-[200px]`}>{text}</p>
    );
  }