"use client";

import FlipCard from "../Bits/FlipCard";
import HoloCard from "../Bits/HoloCard";
import { awrite } from "@/functions/AboutWrite";

import { forwardRef } from "react";

interface AboutCardProps {
  themes: any;
  card: React.ReactNode;
  currentTheme: string;
  windowWidth: number;
  aboutActive: any;
}

const AboutCardPC = forwardRef<HTMLDivElement, AboutCardProps>(
  function AboutCard(
    { card, currentTheme, themes, windowWidth, aboutActive },
    ref,
  ) {
    return (
      <FlipCard
        front={
          <HoloCard
            preset="bursts"
            foilColor="#e2e6ec"
            intensity={0.25}
            scale={1}
            edgeSparkle={0.8}
            frame={4}
            glare={0}
            tiltMax={0}
            hoverScale={1}
            radius={14}
            width={320}
            idle
            shadow
            className="w-full h-full"
          >
          <div
            ref={ref}
            className="tilt-card w-full h-full flex justify-center items-center rounded-[5px] hover:cursor-pointer"
          >
            {card}
          </div>
          </HoloCard>
        }
        back={
          <HoloCard
            preset="stars"
            foilColor="#e2e6ec"
            intensity={0.85}
            scale={1}
            edgeSparkle={0.8}
            frame={4}
            glare={0}
            tiltMax={0}
            hoverScale={1}
            radius={14}
            width={320}
            idle
            shadow
            className="w-full h-full"
          >
            <div
              ref={ref}
              className="tilt-card w-full h-full flex justify-center items-center rounded-[5px] hover:cursor-pointer"
            >
              {awrite({
                themes,
                currentTheme,
                size: windowWidth,
                aboutActive,
                type: "back",
              })}
            </div>
          </HoloCard>
        }
        className="tilt-card w-full h-full flex justify-center items-center rounded-[5px] hover:cursor-pointer"
        axis="y"
        flipOnClick
        draggable
        dragDistance={0}
        tilt
        tiltMax={12}
        glare
        glareOpacity={0.1}
        hoverScale={1.03}
        perspective={1100}
        stiffness={170}
        damping={20}
        width={300}
        height={400}
        radius={22}
        background="#27272a"
        color="#f5f5f5"
        shadow
        shadowColor="#000000"
        shadowOpacity={0.45}
        onFlipChange={(flipped) => console.log(flipped)}
      />
    );
  },
);

export default AboutCardPC;
