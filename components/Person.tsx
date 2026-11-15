import { useState } from "react";
import Image from "next/image";

import type { Theme } from "@/types/themes";

export default function Person({
  themes,
  currentTheme,
}: Theme){
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    return(
    <div
    className="relative w-[60%] h-fit mr-5"
    onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        });
    }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
    <Image
        src="/Imagens/Person Desktop.png"
        width={768} height={1024}
        alt="me"
        className="object-cover select-none"
    />

    <Image
        src={`/Imagens/Censor/${themes[currentTheme].censor}`}
        fill
        alt=""
        className="object-cover select-none"
        style={{
        maskImage: hover
            ? `radial-gradient(circle 300px at ${position.x}px ${position.y}px, transparent 100%, black 100%)`
            : "none",
        WebkitMaskImage: hover
            ? `radial-gradient(circle 300px at ${position.x}px ${position.y}px, transparent 100%, black 100%)`
            : "none",
        }}
    />
    </div>
    );
}