'use client'

import { useState, useEffect } from 'react';
import type { Theme } from '@/types/themes';
import { Background } from './Background';

export function awrite({themes, currentTheme, size, aboutActive, type}: Theme & {size: number, aboutActive: boolean, type?: string}) {
  const [text, setText] = useState('');

const code = type === 'back' ? 
`const tech_toLearn = [
  {name: 'Linux',  finished: false},
  {name: 'Docker',  finished: false},
  {name: 'Kubernetes',  finished: false},
  {name: 'C# || C++',  finished: false},
  {name: 'Machine  Learing', finished: false},
  {name: 'Python',  finished: false},
  {name: 'Java',  finished: false}
];
const language_toLearn = [
  {name: 'Japanese',  finished: false},
  {name: 'German',  finished: false},
  {name: 'Russian',  finished: false},
];

const allToLearn = [...tech_toLearn, ...language_toLearn];

allToLearn.forEach((item) => {
  if (!item.finished) {
    study();
    item.finished = true;
  }
});`
: size > 768 ?
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
};` : 
`const Dev = {
    name: 'Bruno Soares',
    area: 'Full-Stack',
    nationality: {
      country: 'Brazil',
      state: 'São Paulo'
    },
    languages: ['Portuguese', 'English'],
    interests: ['Medias', 'Create', 'Learn']
};`


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
  }, [code]);

  return (
    <div className={`${themes[currentTheme].div_background} div_background w-full h-full rounded-[5px] ${size >= 769 ? 'pt-5 ' : 'pt-3'} ${size >= 769 ? 'pl-10 ' : 'pl-5'} pr-5 `}>
      <pre className="whitespace-pre-wrap font-montserrat font-semibold text-sm relative z-23">
        <p className={`${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} font-montserrat font-semibold ${size <= 769 ? 'text-base md:text-xl ' : 'text-xl lg:text-base 2xl:text-xl'}`}>{text}<span className="animate-pulse">|</span></p>
      </pre>
      {aboutActive && type === 'back' ? <Background currentTheme={currentTheme ? currentTheme : ''} type='backcard'/> : <Background currentTheme={currentTheme ? currentTheme : ''} type='card'/>}
    </div>
  );
}