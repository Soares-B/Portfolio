import CardSwap from "./Bits/CardSwap";

const items = [
  { title: "Pokedex", image: "/Imagens/Projects/Pokedex.png" },
  { title: "Larper", image: "/Imagens/Projects/Larper.png" },
  { title: "Livia Lace", image: "/Imagens/Projects/Livia Lace.png" },
];

export default function ProjectsCard({theme, ProjectCards}: {theme: 'Milk' | 'Dreams' | 'Vampire' | 'Genius' | 'Trial' | 'Silent'| 'Config', ProjectCards: any}) {
  return (
    <div ref={ProjectCards} className="absolute w-full h-full inset-0 z-[10002] flex items-center justify-center">
      <div>
        <CardSwap items={items} 
        width={690}
        height={510}
        delay={4000}
        cardDistance={0}
        verticalDistance={56}
        depth={100}
        skewAmount={0}
        visibleCards={3}
        cardRadius={18}
        speed={1}
        bounce={0.35}
        parallax={0.5}
        hoverSpread={0.12}
        dim={0.5}
        autoplay
        pauseOnHover
        draggable
        theme={theme}
        />
        </div>
    </div>
  );
}
