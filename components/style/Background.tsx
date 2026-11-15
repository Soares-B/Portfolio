"use client";

import { Dithering, Warp, NeuroNoise, GrainGradient, SimplexNoise, PerlinNoise } from "@paper-design/shaders-react";

type Color= {
    [key: string]: string
}

export function DitheringBG({primaryColor, secondaryColor}: Color) {
  return (
    <div className="w-screen h-screen absolute inset-0 z-0">
        <Dithering
        width="100%"
        height="100%"
        colorBack={secondaryColor}
        colorFront={primaryColor}
        shape="warp"
        type="4x4"
        size={2}
        speed={1}
        scale={0.6}
        />
    </div>
  );
}

export function WarpBG({primaryColor, secondaryColor}: Color) {
  return (
    <div className="w-screen h-screen absolute inset-0 z-0">
        <Warp
        width="100%"
        height="100%"
        colors={[primaryColor, secondaryColor]}
        proportion={0.5}
        softness={1}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.1}
        speed={1}
        />
    </div>
  );
}

export function GhostBG({primaryColor, secondaryColor}: Color) {
  return (
    <div className="w-screen h-screen absolute inset-0 z-0">
        <NeuroNoise
        width="100%"
        height="100%"
        colorFront={secondaryColor}
        colorMid={primaryColor}
        colorBack={secondaryColor}
        brightness={0}
        contrast={1}
        speed={1}
        scale={0.5}
        />
    </div>
  );
}

export function GrainBG({primaryColor, secondaryColor, thirdColor}: Color) {
  return (
    <div className="w-screen h-screen absolute inset-0 z-0">
        <GrainGradient
        width="100%"
        height="100%"
        colors={[secondaryColor, primaryColor]}
        colorBack={thirdColor}
        softness={0}
        intensity={0.5}
        noise={0.5}
        shape="corners"
        speed={1}
        />
    </div>
  );
}

export function SimplexBG({primaryColor, secondaryColor, thirdColor, fourthColor, fifthColor, sixthColor,}: Color) {
  return (
    <div className="w-screen h-screen absolute inset-0 z-0">
        <SimplexNoise
        width="100%"
        height="100%"
        colors={[primaryColor, secondaryColor, thirdColor, fourthColor, fifthColor, sixthColor]}
        stepsPerColor={10}
        softness={0}
        speed={2}
        scale={0.6}
        />
    </div>
  );
}

export function PerlinBG({primaryColor, secondaryColor}: Color) {
  return (
    <div className="w-screen h-screen absolute inset-0 z-0">
        <PerlinNoise
        width="100%"
        height="100%"
        colorBack={primaryColor}
        colorFront={secondaryColor}
        proportion={0.65}
        softness={0.35}
        octaveCount={4}
        persistence={1}
        lacunarity={2.55}
        speed={0.02}
        scale={4}
        />
    </div>
  );
}