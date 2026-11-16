import { 
    DitheringBG,
    WarpBG,
    GhostBG,
    GrainBG,
    SimplexBG,
    PerlinBG,
    DitherBits,
    GhostBits,
    FluxBits,
    GrainientBits,
    WavesBits,
    TopographyBits,
} from "@/components/background/Background";

export function Background({currentTheme, display}: {currentTheme: string, display: number}){

    switch(true) {
        case display <= 768:
            return currentTheme === 'Milk' ? <DitheringBG primaryColor={'#AC3231'} secondaryColor={'#0D0E13'}/> :
                   currentTheme === 'Dreams' ? <WarpBG primaryColor={'#841012'} secondaryColor={'#020001'}/> : 
                   currentTheme === 'Vampire' ? <GhostBG primaryColor={'#E90A0A'} secondaryColor={'#090200'}/> : 
                   currentTheme === 'Genius' ? <GrainBG primaryColor={'#A5E3FC'} secondaryColor={'#132B73'} thirdColor={'#040718'}/> : 
                   currentTheme === 'Trial' ? <SimplexBG primaryColor={'#FFFFFF'} secondaryColor={'#EBEBED'} thirdColor={'#F4AFCC'} fourthColor={'#E02D8C'} fifthColor={'#870045'} sixthColor={'#0C070B'}/> : 
                   currentTheme === 'Silent' ? <PerlinBG primaryColor={'#B8DA80'} secondaryColor={'#010203'}/> : ''
            ;
        default :
            return currentTheme === 'Milk' ? <DitherBits primaryColor={'#AC3231'} secondaryColor={'#0D0E13'}/> : 
                   currentTheme === 'Dreams' ? <GhostBits primaryColor={'#851011'} secondaryColor={'#670D1A'} background={'bg-[#020001]'}/> :
                   currentTheme === 'Vampire' ? <FluxBits primaryColor={'#E90A0A'} secondaryColor={'#A70304'} thirdColor={'#7E0003'} background={'bg-[#090200]'}/> :
                   currentTheme === 'Genius' ? <GrainientBits primaryColor={'#040718'} secondaryColor={'#101741'} thirdColor={'#132B73'} fourthColor={'#A5E3FC'}/> :
                   currentTheme === 'Trial' ? <WavesBits primaryColor={'#F4AFCC'} secondaryColor={'#E02D8C'} background={'bg-[#0C070B]'} /> :
                   currentTheme === 'Silent' ? <TopographyBits primaryColor={'#B8DA80'} background={'bg-[#010203]'} /> : '' 
    }

}

export function Counterground({currentTheme, display}: {currentTheme: string, display: number}){

    switch(true) {
        case display <= 768:
            return currentTheme === 'Milk' ? <DitheringBG primaryColor={'#499792'} secondaryColor={'#F2E9E4'}/> :
                   currentTheme === 'Dreams' ? <WarpBG primaryColor={'#5A3A63'} secondaryColor={'#E4BDD2'}/> : 
                   currentTheme === 'Vampire' ? <GhostBG primaryColor={'#FDE0CE'} secondaryColor={'#FEF7F7'}/> : 
                   currentTheme === 'Genius' ? <GrainBG primaryColor={'#101741'} secondaryColor={'#57565C'} thirdColor={'#FBFCFC'}/> : 
                   currentTheme === 'Trial' ? <SimplexBG primaryColor={'#0C070B'} secondaryColor={'#870045'} thirdColor={'#E02D8C'} fourthColor={'#F4AFCC'} fifthColor={'#EBEBED'} sixthColor={'#FFFFFF'}/> : 
                   currentTheme === 'Silent' ? <PerlinBG primaryColor={'#283325'} secondaryColor={'#FFFFFF'}/> : ''
            ;
        default :
            return currentTheme === 'Milk' ? <DitherBits primaryColor={'#F2E9E4'} secondaryColor={'#499792'}/> :
                   currentTheme === 'Dreams' ? <GhostBits primaryColor={'#851011'} secondaryColor={'#670D1A'} background={'bg-[#E4BDD2]'}/> :
                   currentTheme === 'Vampire' ? <FluxBits primaryColor={'#FDE0CE'} secondaryColor={'#E90A0A'} thirdColor={'#A70304'} background={'bg-[#FEF7F7]'}/> : 
                   currentTheme === 'Genius' ? <GrainientBits primaryColor={'#A5E3FC'} secondaryColor={'#132B73'} thirdColor={'#57565C'} fourthColor={'#FBFCFC'}/> :
                   currentTheme === 'Trial' ? <WavesBits primaryColor={'#E02D8C'} secondaryColor={'#F4AFCC'} background={'bg-[#FFFFFF]'} /> :
                   currentTheme === 'Silent' ? <TopographyBits primaryColor={'#81A568'} background={'bg-[#FFFFFF]'} /> : ''
    }
        
    
}