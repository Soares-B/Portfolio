import ClickSpark from '@/components/Bits/ClickSpark';

import type { Theme } from '@/types/themes';

const Colors= {
    Milk: ['#499792', '#AC3231', '#632630', '#2F1B1E'],
    Dreams: ['#5A3A63', '#851011', '#670D1A', '#4B0B0F'],
    Vampire: ['#FDE0CE', '#E90A0A', '#A70304', '#7E0003'],
    Genius: ['#57565C', '#A5E3FC', '#132B73', '#101741'],
    Trial: ['#EBEBED', '#F4AFCC', '#E02D8C', '#870045'],
    Silent: ['#FEFADB', '#B8DA80', '#81A568', '#283325'],

    Config: '',
}

type ThemeName = keyof typeof Colors;

type SparkProps = Omit<Theme, 'currentTheme'> & {
    currentTheme: ThemeName;
    element: React.ReactNode;
};

export default function Spark({
    themes,
    currentTheme,
    element,
}: SparkProps){

    return(
        <ClickSpark
        sparkColor={Colors[currentTheme]}
        shape="star"
        sparkCount={16}
        sparkSize={14}
        sparkRadius={52}
        duration={900}
        gravity={0.5}
        randomness={1}
        spread={360}
        layer='front'
        >
            {element}
        </ClickSpark>
);
}