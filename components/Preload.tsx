"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLoading } from "@/config/context";

import DecryptedText from './animation/DecryptedText';
import ShapeWaves from './background/ShapeWaves';

export default function Preloader() {
  const container = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const { setIsLoaded } = useLoading();

  useEffect(() => {
    const start = performance.now();

    const finish = async () => {
      
      await document.fonts.ready;

      const elapsed = performance.now() - start;
      await new Promise(resolve =>
        setTimeout(resolve, Math.max(0, 1000 - elapsed))
      );

      const loader = gsap.timeline();
      
      loader.to(container.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          setVisible(false);
          setIsLoaded(true);
        },
        
      }, '+=1');
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={container}
      className="w-screen h-screen fixed z-[9999] flex items-center justify-center bg-white text-white text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl"
    >
      <ShapeWaves
        className="absolute inset-0 z-[1]"
        text="</>"
        fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
        fontWeight={500}
        textSize={0.6}
        shapes="mixed"
        cellSize={10}
        dotSize={0.75}
        color="#8a8a8a"
        hoverColor="#18181b"
        backgroundColor="#000000"
        speed={1}
        scale={1}
        contrast={1}
        brightness={0.4}
        flow={0}
        direction={0}
        fade={0.25}
        interactive
        splashRadius={40}
        splashStrength={0.4}
        glow={0.35}
        intro={true}
        introDuration={1}
        paused={false}
      />
      <DecryptedText
        text="Bruno's Portfolio"
        animateOn="inViewHover"
        effect="scramble"
        sequential
        revealDirection="start"
        speed={60}
        maxIterations={10}
        hoverRadius={100}
        scrambleColor="#FFFFFF"
        loop={false}
        loopDelay={2000}
        useOriginalCharsOnly={false}
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
        className="revealed selection:bg-black"
        encryptedClassName="encrypted"
        clickMode="once"
      />
    </div>
  );
}
