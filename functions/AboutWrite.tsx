import { useState, useEffect } from 'react';
import type { Theme } from '@/types/themes';
import { Background } from './Background';

const code = 
`const Dev = {
    name: 'Bruno Soares',
    area: 'Full-Stack',
    nationality: {
      country: 'Brazil',
      state: 'São Paulo'
    },
    languages: ['Portuguese', 'English'],
    interests: [
    'Medias',   'Create', 
    'Learn',   'Technology'
    ],
    Graduation: [
      {
        name: 'Software Engineer bachelor',
        ongoing: true
      },
      {
        name: 'Associate Degree in Cybersecurity',
        ongoing: true
      }
    ]
};`;

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
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${themes[currentTheme].div_background} div_background w-full h-full rounded-[5px] p-3 pl-5 pr-5 border-2 ${themes[currentTheme].border}`}>
      <pre className="whitespace-pre-wrap font-montserrat font-semibold text-sm relative z-23">
        <p className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].div_text_shadow} font-montserrat font-semibold text-base md:text-2xl lg:text-base 2xl:text-xl`}>{text}<span className="animate-pulse">|</span></p>
      </pre>
      <Background currentTheme={currentTheme ? currentTheme : ''} type='card'/>
    </div>
  );
}