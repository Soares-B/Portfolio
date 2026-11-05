"use client"

import { motion } from 'motion/react';

export function Name({
    themes, 
    currentTheme
}: {
    themes: any,
    currentTheme: string,
}){

    return(
        <div className='flex flex-col items-start'>
            <motion.div
            className={`font-montserrat font-bold text-5xl ${themes[currentTheme].highlight_text} ${themes[currentTheme].highlight_text_shadow} hover:cursor-pointer select-none outline-none`}
            whileHover={{scale: 1.05, color: 'rgb(58, 124, 165)', textShadow: '2px 2px 2px rgb(47, 102, 144)'}}
            whileTap={{scale: 0.95, color: 'rgb(58, 124, 165)', textShadow: '2px 2px 2px rgb(47, 102, 144)'}}
            transition={{duration: 0.2}}>
                Bruno
            </motion.div>
            <motion.div 
        className={`font-montserrat font-bold text-5xl ${themes[currentTheme].text} ${themes[currentTheme].text_shadow}}
        hover:${themes[currentTheme].text} hover:${themes[currentTheme].text_shadow} hover:cursor-pointer select-none outline-none`}
        whileHover={{scale: 1.05, color: 'rgb(47, 102, 144)', textShadow: '2px 2px 2px rgb(22, 66, 91)'}}
        whileTap={{scale: 0.95, color: 'rgb(47, 102, 144)', textShadow: '2px 2px 2px rgb(22, 66, 91)'}}
        transition={{duration: 0.2}}>
            Soares
        </motion.div>
        </div>
        
    );
}