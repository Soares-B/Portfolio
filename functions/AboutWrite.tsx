import { useState, useEffect } from 'react';
import type { Theme } from '@/types/themes';

const code = 
`const Dev = {
    name: 'Bruno Soares',
    area: 'Full-Stack',
    nationality: {
        country: 'Brazil',
        state: 'São Paulo'
    },
    languages: ['Portuguese', 'English'],
    interests: ['Medias', 'Create', 'Learn']
}`;

export function awrite({themes, currentTheme}: Theme) {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(code.slice(0, index));
      index++;

      if (index > code.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${themes[currentTheme].div_background} div_background min-w-[95%] sm:min-w-[60%] 2xl:min-w-[50%] min-h-[80%] lg:min-h-[35%] rounded-[5px] p-3 pl-5 pr-5 border-2 ${themes[currentTheme].border}`}>
      <pre className="whitespace-pre-wrap font-montserrat font-semibold text-sm">
        <p className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].div_text_shadow} font-montserrat font-semibold text-base md:text-2xl lg:text-base 2xl:text-xl`}>{text}<span className="animate-pulse">|</span></p>
      </pre>
    </div>
  );
}