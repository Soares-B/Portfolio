import StickerPeel from './Bits/StickerPeel'

export default function Sticker({ logo, x, y }: {logo: string, x: number, y: number}) {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 31 }}
        >
            <StickerPeel
                imageSrc={logo}
                width={75}
                initialPosition={{ x, y }}
                finish="holo"
                peelBackHoverPct={25}
                peelBackActivePct={40}
                rotate={0}
                peelDirection={0}
                curlRadius={12}
                backColor="#d4d4d8"
                lightingIntensity={0.8}
                shadowIntensity={0.6}
                followPointer
                swing={1}
                friction={0.5}
                bounce={0.35}
                draggable
                intro
            />
        </div>
    );
}