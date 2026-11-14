import { useState, useEffect } from "react";
import type { Theme } from "@/types/themes";

export function pwrite({
  themes,
  currentTheme,
  phrase
}: Theme & { phrase: string }) {

  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length >= phrase.length) return;

    const timeout = setTimeout(() => {
      setText(phrase.substring(0, text.length + 1));
    }, 35);

    return () => clearTimeout(timeout);
  }, [text, phrase]);

    return(
      <p className={`font-montserrat font-semibold ${themes[currentTheme].background_text} ${themes[currentTheme].background_text_shadow} text-bold min-h-[24px] text-base text-justify p-5 min-h-[200px] md:text-xl`}>{text}</p>
    );
  }