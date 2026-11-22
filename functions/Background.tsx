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
    ASCIIBits,
    DotBits
} from "@/components/background/Background";

export function Background({currentTheme, display, type, section,}: {currentTheme: string, display?: number, type?: string, section?: any}){

    switch(true) {
        case type === 'card':
            return currentTheme === 'Milk' ? <ASCIIBits primaryColor={'#2F1B1E'} secondaryColor={'#632630'}/> :
                   currentTheme === 'Dreams' ? <ASCIIBits primaryColor={'#4B0B0F'} secondaryColor={'#670D1A'}/> : 
                   currentTheme === 'Vampire' ? <ASCIIBits primaryColor={'#7E0003'} secondaryColor={'#A70304'}/> : 
                   currentTheme === 'Genius' ? <ASCIIBits primaryColor={'#101741'} secondaryColor={'#132B73'}/> : 
                   currentTheme === 'Trial' ? <ASCIIBits primaryColor={'#870045'} secondaryColor={'#E02D8C'}/> : 
                   currentTheme === 'Silent' ? <ASCIIBits primaryColor={'#283325'} secondaryColor={'#81A568'}/> : ''

        case type === 'badge':
            return currentTheme === 'Milk' ? <DotBits primaryColor={'#499792'} background={'#F2E9E4'}/> :
                   currentTheme === 'Dreams' ? <DotBits primaryColor={'#5A3A63'} background={'#E4BDD2'}/> : 
                   currentTheme === 'Vampire' ? <DotBits primaryColor={'#FDE0CE'} background={'#FEF7F7'}/> : 
                   currentTheme === 'Genius' ? <DotBits primaryColor={'#57565C'} background={'#FBFCFC'}/> : 
                   currentTheme === 'Trial' ? <DotBits primaryColor={'#EBEBED'} background={'#FFFFFF'}/> : 
                   currentTheme === 'Silent' ? <DotBits primaryColor={'#FEFADB'} background={'#FFFFFF'}/> : ''

        case display! <= 768:
            return currentTheme === 'Milk' ? <DitheringBG primaryColor={'#AC3231'} secondaryColor={'#0D0E13'}/> :
                   currentTheme === 'Dreams' ? <WarpBG primaryColor={'#841012'} secondaryColor={'#020001'}/> : 
                   currentTheme === 'Vampire' ? <GhostBG primaryColor={'#E90A0A'} secondaryColor={'#090200'}/> : 
                   currentTheme === 'Genius' ? <GrainBG primaryColor={'#A5E3FC'} secondaryColor={'#132B73'} thirdColor={'#040718'}/> : 
                   currentTheme === 'Trial' ? <SimplexBG primaryColor={'#FFFFFF'} secondaryColor={'#EBEBED'} thirdColor={'#F4AFCC'} fourthColor={'#E02D8C'} fifthColor={'#870045'} sixthColor={'#0C070B'}/> : 
                   currentTheme === 'Silent' ? <PerlinBG primaryColor={'#B8DA80'} secondaryColor={'#010203'}/> : ''
            ;
        default :
            return currentTheme === 'Milk' ? <DitherBits reference={section} primaryColor={'#AC3231'} secondaryColor={'#0D0E13'}/> : 
                   currentTheme === 'Dreams' ? <GhostBits reference={section} primaryColor={'#851011'} secondaryColor={'#670D1A'} background={'bg-[#020001]'}/> :
                   currentTheme === 'Vampire' ? <FluxBits reference={section} primaryColor={'#E90A0A'} secondaryColor={'#A70304'} thirdColor={'#7E0003'} background={'bg-[#090200]'}/> :
                   currentTheme === 'Genius' ? <GrainientBits reference={section} primaryColor={'#040718'} secondaryColor={'#101741'} thirdColor={'#132B73'} fourthColor={'#A5E3FC'}/> :
                   currentTheme === 'Trial' ? <WavesBits reference={section} primaryColor={'#F4AFCC'} secondaryColor={'#E02D8C'} background={'bg-[#0C070B]'} /> :
                   currentTheme === 'Silent' ? <TopographyBits reference={section} primaryColor={'#B8DA80'} background={'bg-[#010203]'} /> : '' 
    }

}

export function Counterground({currentTheme, display, section}: {currentTheme: string, display: number, section?: any}){

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
            return currentTheme === 'Milk' ? <DitherBits reference={section} primaryColor={'#F2E9E4'} secondaryColor={'#499792'}/> :
                   currentTheme === 'Dreams' ? <GhostBits reference={section} primaryColor={'#851011'} secondaryColor={'#670D1A'} background={'bg-[#E4BDD2]'}/> :
                   currentTheme === 'Vampire' ? <FluxBits reference={section} primaryColor={'#FDE0CE'} secondaryColor={'#E90A0A'} thirdColor={'#A70304'} background={'bg-[#FEF7F7]'}/> : 
                   currentTheme === 'Genius' ? <GrainientBits reference={section} primaryColor={'#A5E3FC'} secondaryColor={'#132B73'} thirdColor={'#57565C'} fourthColor={'#FBFCFC'}/> :
                   currentTheme === 'Trial' ? <WavesBits reference={section} primaryColor={'#E02D8C'} secondaryColor={'#F4AFCC'} background={'bg-[#FFFFFF]'} /> :
                   currentTheme === 'Silent' ? <TopographyBits reference={section} primaryColor={'#81A568'} background={'bg-[#FFFFFF]'} /> : ''
    }
        
    
}