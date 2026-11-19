import InfiniteSpiral from './Bits/InfiniteSpiral';

const images = [
  { src: '/Imagens/Stack/Typescript.png', alt: 'Typescript' },
  { src: '/Imagens/Stack/Javascript.png', alt: 'Javascript' },
  { src: '/Imagens/Stack/React.png', alt: 'React' },
  { src: '/Imagens/Stack/Next.png', alt: 'Next' },
  { src: '/Imagens/Stack/Tailwind.png', alt: 'Tailwind CSS' },
  { src: '/Imagens/Stack/Postgresql.png', alt: 'PostgreSQL' },
  { src: '/Imagens/Stack/Prisma.png', alt: 'Prisma' },
  { src: '/Imagens/Stack/Git.png', alt: 'Git' },
  { src: '/Imagens/Stack/Github.png', alt: 'Github' },
  { src: '/Imagens/Stack/Vscode.png', alt: 'VsCode' },

];

export default function StackSpiral({size}: {size: number}){

    return(
        <div className='w-[340px] 2xl:w-[480px] h-full overflow-hidden'>
            <InfiniteSpiral
                items={images}
                animationMode="all"
                speed={1}
                radius={170}
                cardWidth={size < 1280 ? 60 : size < 1920 ? 70 : 80}
                cardHeight={size < 1280 ? 60 : size < 1920 ? 70 : 80}
                verticalSpacing={60}
                perspective={1000}
                cardRadius={10}
                centerScale={1.2}
                edgeBlur={6}
                cardsPerTurn={7}
                pauseOnHover
                direction="up"
                rotation={0}
                cardTilt={0}
                edgeFade={0.3}
                imageFit="contain"
                grayscale={0}
            />
        </div>
    );
}

