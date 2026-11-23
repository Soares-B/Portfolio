"use client";

import { Dithering, Warp, NeuroNoise, GrainGradient, SimplexNoise, PerlinNoise } from "@paper-design/shaders-react";
import Dither from './Dither';
import GhostFibers from './GhostFibers';
import FluxLines from './FluxLines';
import Grainient from './Grainient';
import Waves from './Waves';
import Topography from './Topography';
import GradientASCII from "./GradientASCII";
import DotGrid from './DotGrid';
import Particles from './Particles';
import { DitherField } from "@/components/ui/dither-field"

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

export function DitherBits({primaryColor, secondaryColor, reference}: Color & {reference?: any}){
  return(
    <div className="w-screen h-screen absolute inset-0 z-0">
        <Dither
          waveColor={primaryColor}
          backgroundColor={secondaryColor}
          ditherMode="bayer"
          colorNum={10}
          pixelSize={2}
          waveSpeed={0.1}
          waveFrequency={3}
          waveAmplitude={0.3}
          mouseEffect="reveal"
          mouseRadius={0.25}
          palette={[]}
          scale={reference}
          contrast={1}
          brightness={0}
          mouseStrength={1}
          trail={0.5}
          enableMouseInteraction
          clickRipple
          intro
          disableAnimation={false}
        />
    </div>
  );
}

export function GhostBits({primaryColor, secondaryColor, background, reference}: Color & {reference?: any}){
  return(
    <div className={`w-screen h-screen ${background} absolute inset-0 z-0`}>
        <GhostFibers
          glowColor={primaryColor}
          layers={3}
          twist={1.5}
          threads={50}
          fiberStyle="dots"
          depthOfField={2}
          hoverEffect="focus"
          intro
          mouseInteraction
          lineColor="#ffffff"
          secondaryColor={secondaryColor}
          gradient="across"
          waves={1.25}
          volume={0.7}
          spread={2.5}
          scale={reference}
          rotation={18}
          perspective={0.65}
          density={1}
          thickness={1}
          tips={0}
          foldGlow={1.3}
          speed={0.5}
          flow={0.4}
          rollSpeed={0.15}
          focusDepth={0}
          particles={2}
          sparkle={0.5}
          glow={0.8}
          brightness={1}
          vignette={0.3}
          grain={0.06}
          mouseStrength={1}
          pulseOnClick
          lightMode={false}
        />
    </div>
  );
}

export function FluxBits({primaryColor, secondaryColor, thirdColor, background, reference}: Color & {reference?: any}){
  return(
    <div className={`w-screen h-screen ${background} absolute inset-0 z-0`}>
        <FluxLines
          colors={[primaryColor, secondaryColor, thirdColor]}
          glow={2}
          rimWidth={0.2}
          lineWidth={1}
          flowDirection="down"
          mouseInteraction
          clickSwirl
          speed={0.5}
          scale={reference}
          turbulence={1}
          fluidity={0.1}
          sharpness={2.5}
          shimmer={1.5}
          mouseStrength={1}
          mouseRadius={0.35}
          intro
          lightMode={false}
        />
    </div>
  );
}

export function GrainientBits({primaryColor, secondaryColor, thirdColor, fourthColor, reference}: Color & {reference?: any}){
  return(
    <div className={`w-screen h-screen absolute inset-0 z-0`}>
        <Grainient
          colors={[primaryColor, secondaryColor, thirdColor, fourthColor]}
          angle={40}
          flow={0.8}
          silk={1}
          grainAmount={0.08}
          type="linear"
          bands={2}
          softness={1}
          scale={reference}
          speed={1}
          grainSize={1.2}
          grainAnimated
          contrast={1}
          saturation={1}
          variation={0}
          interactive
          stir={1}
          clickSwirl
          intro
          lightMode={false}
        />
    </div>
  );
}

export function WavesBits({primaryColor, secondaryColor, background, reference}: Color & {reference?: any}){
  return(
    <div className={`w-screen h-screen ${background} absolute inset-0 z-0`}>
        <Waves
          lineColor={primaryColor}
          spacing={6}
          amplitude={40}
          twist={0.8}
          speed={0.6}
          mouseRadius={175}
          mouseStrength={1}
          accentColor={secondaryColor}
          lineStyle="solid"
          lineWidth={0.75}
          rotation={0}
          scale={reference}
          variation={0}
          bounce={0.5}
          returnDuration={2}
          fade={0}
          opacity={1}
          mouseInteraction
          clickRipple
          intro
          lightMode={false}
        />
    </div>
  );
}

export function TopographyBits({primaryColor, background, reference}: Color & {reference?: any}){
  return(
    <div className={`w-screen h-screen ${background} absolute inset-0 z-0`}>
        <Topography
          color={primaryColor}
          lineCount={22}
          lineWidth={1}
          elevation={1}
          foreground={0.2}
          tilt={32}
          speed={0.25}
          direction="forward"
          glow={0.15}
          depthOfField={0}
          fog={0.35}
          hoverEffect="lift"
          clickEffect="pulse"
          majorLines={false}
          scale={reference}
          detail={0.35}
          morph={0.2}
          brightness={1.1}
          markers="none"
          glitch={0}
          opacity={1}
          mouseInteraction
          mouseRadius={1}
          mouseStrength={0.6}
          trail={0.3}
          parallax={0.5}
          intro
          lightMode={false}
        />
    </div>
  );
}

export function ASCIIBits({primaryColor, secondaryColor}: Color){
  return(
    <div className={`absolute inset-0`}>
        <GradientASCII
          colors={[primaryColor, secondaryColor]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.8}
          glyphOpacity={0.85}
          glow={0.2}
          depthOfField={0}
          flicker={0.2}
          softness={0.5}
          scale={1}
          flow={0.5}
          speed={1}
          gradientOpacity={0.9}
          grain={0.08}
          variation={0}
          mouseInteraction
          scrambleRadius={0.1}
          clickEffect="wave"
          intro
          lightMode={false}
        />
    </div>
  );
}

export function DotBits({primaryColor, background}: Color){
  return(
    <div className={`absolute inset-0 p-[2px] z-31`}>
      <DotGrid
        baseColor={background}
        activeColor={primaryColor}
        shape="circle"
        dotSize={2}
        gap={4}
        proximity={80}
        strength={1}
        bounce={0.6}
        tension={0.4}
        returnDuration={0.8}
        shockRadius={320}
        shockStrength={5}
        swell={0.8}
        stretch={0.5}
        glow={0.5}
        fade={0}
        intro
        opacity={1}
        mouseInteraction
        clickShock
      />
    </div>
  );
}

export function ParticlesBits({primaryColor, secondaryColor, thirdColor}: Color){
  return(
    <div className={`absolute inset-0`}>
        <Particles
          particleColors={[primaryColor, secondaryColor, thirdColor]}
          particleCount={2000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={120}
          glow={0.9}
          twinkle={0.7}
          moveParticlesOnHover
          hoverEffect="parallax"
          sizeRandomness={1}
          shape="sparkle"
          depthOfField={0}
          connections={false}
          connectionDistance={110}
          particleHoverFactor={1}
          hoverRadius={140}
          drift="none"
          driftSpeed={1}
          alphaParticles={false}
          disableRotation={false}
          cameraDistance={20}
          variation={0}
          opacity={1}
          clickBurst
          intro
          lightMode={false}
        />
    </div>
  );
}

export function DitherF({primaryColor, secondaryColor, thirdColor}: Color){
  return(
    <DitherField className={`absolute inset-0`} 
    pattern="waves"
    color={[primaryColor, secondaryColor, thirdColor]}/>
  );
}
