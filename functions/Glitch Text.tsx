import DecryptedText from '@/components/animation/DecryptedText';

const shadow = {
    Milk: 'text-shadow-[2px_2px_1px] text-shadow-Milk-4',
    Dreams: 'text-shadow-[2px_2px_1px] text-shadow-Dreams-4',
    Vampire: 'text-shadow-[2px_2px_1px] text-shadow-Vampire-4',
    Genius: 'text-shadow-[2px_2px_1px] text-shadow-Genius-4',
    Trial: 'text-shadow-[2px_2px_1px] text-shadow-Trial-4',
    Silent: 'text-shadow-[2px_2px_1px] text-shadow-SIlent-4',
    Config: '',
}

export function gwrite({css, scramble, text, scrambleColorShadow}: {css?: string, scramble?: string, text: string, scrambleColorShadow?: 'Milk' | 'Dreams' | 'Vampire' | 'Genius' | 'Trial' | 'Silent' | 'Config' }){


    return(
        <DecryptedText
                
                text={text}
                animateOn="inViewHover"
                effect="scramble"
                sequential
                revealDirection="start"
                speed={60}
                maxIterations={10}
                hoverRadius={100}
                scrambleColor={scramble}
                loop={false}
                loopDelay={2000}
                useOriginalCharsOnly={false}
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                className={`revealed ${css}`}
                encryptedClassName="encrypted"
                clickMode="once"
                scrambleColorShadow={scrambleColorShadow ? shadow[scrambleColorShadow] : 'text-shadow-[5px_5px_1px] shadow-[#888888]'}
        />
    );
}