import DecryptedText from '@/components/animation/DecryptedText';

export function gwrite({css, scramble, text}: {css?: string, scramble?: string, text: string}){

    console.log(text)

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
        />
    );
}