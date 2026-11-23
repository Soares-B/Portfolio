import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

interface DitherLogoProps {
  image?: string;
  path?: string;
  viewBox?: number;
  text?: string;
  color?: string;
  accent?: string;
  spacing?: number;
  dotScale?: number;
  radius?: number;
  strength?: number;
  assemble?: boolean;
  label?: string;
  className?: string;
  style?: CSSProperties;
}

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  size: number;
}

const BAYER8 = [
  0, 48, 12, 60, 3, 51, 15, 63,
  32, 16, 44, 28, 35, 19, 47, 31,
  8, 56, 4, 52, 11, 59, 7, 55,
  40, 24, 36, 20, 43, 27, 39, 23,
  2, 50, 14, 62, 1, 49, 13, 61,
  34, 18, 46, 30, 33, 17, 45, 29,
  10, 58, 6, 54, 9, 57, 5, 53,
  42, 26, 38, 22, 41, 25, 37, 21,
];

function drawDefault(
  ctx: CanvasRenderingContext2D,
  size: number,
  color: string,
  accent: string
) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.25;

  ctx.strokeStyle = color;
  ctx.lineWidth = size * 0.025;
  ctx.beginPath();
  ctx.roundRect(size * 0.06, size * 0.06, size * 0.88, size * 0.88, size * 0.2);
  ctx.stroke();

  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = color;
  ctx.lineWidth = size * 0.018;
  ctx.beginPath();
  ctx.ellipse(cx, cy, r * 1.5, r * 0.4, -0.32, 0, Math.PI);
  ctx.stroke();
}

export function DitherLogo({
  image,
  path,
  viewBox = 24,
  text,
  color = "#EDEDF2",
  accent = "#FF7A45",
  spacing = 4,
  dotScale = 0.7,
  radius = 90,
  strength = 1,
  assemble = true,
  label,
  className,
  style,
}: DitherLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const live = useRef({
    spacing,
    dotScale,
    radius,
    strength,
  });

  live.current = {
    spacing,
    dotScale,
    radius,
    strength,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
    });

    if (!ctx) return;

    const reducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ??
      false;

    let particles: Particle[] = [];
    let width = 1;
    let height = 1;
    let dpr = 1;
    let raf = 0;
    let visible = false;
    let pointerInside = false;
    let assembled = !assemble || reducedMotion;

    const pointer = {
      x: -9999,
      y: -9999,
      px: -9999,
      py: -9999,
    };

    let loadedImage: HTMLImageElement | null = null;
    let destroyed = false;

    const sourceCanvas = document.createElement("canvas");
    const sourceCtx = sourceCanvas.getContext("2d", {
      willReadFrequently: true,
    });

    if (!sourceCtx) return;

    const createParticles = () => {
        const W = Math.max(16, Math.floor(width));
        const H = Math.max(16, Math.floor(height));
        const S = Math.min(W, H); // usado só para path/text/default (formas quadradas)

        sourceCanvas.width = W;
        sourceCanvas.height = H;

        sourceCtx.clearRect(0, 0, W, H);

        if (image && loadedImage?.complete) {
            const iw = loadedImage.naturalWidth;
            const ih = loadedImage.naturalHeight;

            if (iw && ih) {
            // "contain" sem margem: ocupa o canvas todo mantendo proporção
            const scale = Math.min(W / iw, H / ih);
            const dw = iw * scale;
            const dh = ih * scale;

            sourceCtx.drawImage(loadedImage, (W - dw) / 2, (H - dh) / 2, dw, dh);
            }
        } else if (path) {
            sourceCtx.save();
            const scale = (S * 0.92) / viewBox;
            sourceCtx.translate((W - S) / 2 + S * 0.04, (H - S) / 2 + S * 0.04);
            sourceCtx.scale(scale, scale);
            sourceCtx.fillStyle = color;
            sourceCtx.fill(new Path2D(path));
            sourceCtx.restore();
        } else if (text) {
            sourceCtx.fillStyle = color;
            sourceCtx.textAlign = "center";
            sourceCtx.textBaseline = "middle";

            let fontSize = S * 0.8;
            sourceCtx.font = `800 ${fontSize}px sans-serif`;
            const textWidth = sourceCtx.measureText(text).width;
            if (textWidth > W * 0.92) fontSize *= (W * 0.92) / textWidth;

            sourceCtx.font = `800 ${fontSize}px sans-serif`;
            sourceCtx.fillText(text, W / 2, H / 2);
        } else {
            sourceCtx.save();
            sourceCtx.translate((W - S) / 2, (H - S) / 2);
            drawDefault(sourceCtx, S, color, accent);
            sourceCtx.restore();
        }

        const pixels = sourceCtx.getImageData(0, 0, W, H).data;

        const newParticles: Particle[] = [];
        const gap = Math.max(1, live.current.spacing);

        const cols = Math.floor(W / gap);
        const rows = Math.floor(H / gap);

        for (let gy = 0; gy < rows; gy++) {
            for (let gx = 0; gx < cols; gx++) {
            const px = Math.floor((gx + 0.5) * gap);
            const py = Math.floor((gy + 0.5) * gap);

            const index = (py * W + px) * 4;

            const r = pixels[index];
            const g = pixels[index + 1];
            const b = pixels[index + 2];
            const a = pixels[index + 3] / 255;

            if (a < 0.02) continue;

            const threshold = (BAYER8[(gy & 7) * 8 + (gx & 7)] + 0.5) / 64;
            if (a < threshold) continue;

            const homeX = px;
            const homeY = py;

            let x = homeX;
            let y = homeY;

            if (!assembled) {
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.min(width, height) * (0.25 + Math.random() * 0.45);
                x += Math.cos(angle) * distance;
                y += Math.sin(angle) * distance;
            }

            newParticles.push({
                x,
                y,
                homeX,
                homeY,
                vx: 0,
                vy: 0,
                color: `rgb(${r},${g},${b})`,
                alpha: a,
                size: a > 0.9 ? 1 : 0.86,
            });
            }
        }

        particles = newParticles;
        draw();
        requestAnimation();
        };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const diameter =
        live.current.spacing *
        live.current.dotScale;

      for (const p of particles) {
        ctx.globalAlpha = p.alpha;

        ctx.fillStyle = p.color;

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          Math.max(0.5, diameter * p.size / 2),
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const simulate = (dt: number) => {
      const {
        radius: R,
        strength: F,
      } = live.current;

      const spring = 120;
      const damping = 11;
      const radiusSquared = R * R;

      const pointerVX = pointer.x - pointer.px;
      const pointerVY = pointer.y - pointer.py;

      pointer.px = pointer.x;
      pointer.py = pointer.y;

      let energy = 0;

      for (const p of particles) {
        let fx = (p.homeX - p.x) * spring - p.vx * damping;
        let fy = (p.homeY - p.y) * spring - p.vy * damping;

        if (pointerInside) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;

          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < radiusSquared) {
            const distance = Math.sqrt(distanceSquared) + 0.001;

            const influence = 1 - distance / R;

            const push =
              influence * influence * 9000 * F;

            fx +=
              (dx / distance) * push +
              pointerVX * influence * 40 * F;

            fy +=
              (dy / distance) * push +
              pointerVY * influence * 40 * F;
          }
        }

        p.vx += fx * dt;
        p.vy += fy * dt;

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        energy +=
          Math.abs(p.vx) +
          Math.abs(p.vy) +
          Math.abs(p.homeX - p.x) +
          Math.abs(p.homeY - p.y);
      }

      return energy / Math.max(1, particles.length) > 0.02;
    };

    const animationLoop = () => {
      raf = 0;

      let moving = simulate(1 / 120);
        moving = simulate(1 / 120) || moving;

      draw();

      if (
        (moving || pointerInside) &&
        visible &&
        !document.hidden
      ) {
        raf = requestAnimationFrame(animationLoop);
      }
    };

    const requestAnimation = () => {
      if (
        !raf &&
        !reducedMotion &&
        visible
      ) {
        raf = requestAnimationFrame(animationLoop);
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();

      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;

      if (!pointerInside) {
        pointer.px = pointer.x;
        pointer.py = pointer.y;
      }

      pointerInside = !reducedMotion;

      requestAnimation();
    };

    const onPointerLeave = () => {
      pointerInside = false;
      requestAnimation();
    };

    const onVisibilityChange = () => {
      if (!document.hidden) requestAnimation();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;

        if (visible) {
          if (!assembled) {
            assembled = true;
          }

          requestAnimation();
        } else {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0.25 }
    );

    intersectionObserver.observe(canvas);

    const host = canvas.parentElement;

    host?.addEventListener("pointermove", onPointerMove);
    host?.addEventListener("pointerdown", onPointerMove);
    host?.addEventListener("pointerleave", onPointerLeave);

    document.addEventListener(
      "visibilitychange",
      onVisibilityChange
    );

    if (image) {
      loadedImage = new Image();

      loadedImage.onload = () => {
        if (!destroyed) resize();
      };

      loadedImage.onerror = () => {
        console.error("[DitherLogo] Could not load PNG:", image);
      };

      loadedImage.src = image;
    } else {
      resize();
    }

    return () => {
      destroyed = true;

      cancelAnimationFrame(raf);

      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      host?.removeEventListener("pointermove", onPointerMove);
      host?.removeEventListener("pointerdown", onPointerMove);
      host?.removeEventListener("pointerleave", onPointerLeave);

      document.removeEventListener(
        "visibilitychange",
        onVisibilityChange
      );
    };
  }, [
    image,
    path,
    viewBox,
    text,
    color,
    accent,
    spacing,
    assemble,
  ]);

  return (
    <div
      className={`fd-dlogo ${className || ""}`}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="fd-dlogo-canvas"
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
      />
    </div>
  );
}

const css = `
.fd-dlogo,
.fd-dlogo *,
.fd-dlogo *::before,
.fd-dlogo *::after {
  box-sizing: border-box;
}

.fd-dlogo {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: auto;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  touch-action: pan-y;
}

.fd-dlogo-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}
`;

// CSS global
if (typeof document !== "undefined") {
  const styleId = "fd-dlogo-styles";

  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement("style");
    styleElement.id = styleId;
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
  }
}

/* DEMO */

export function Demo() {
  return (
    <div className="fd-dlogod">
      <DitherLogo
        image="/images/logo.png"
        label="Dithered brand mark"
        spacing={4}
        dotScale={0.95}
        radius={90}
        strength={1}
        assemble
      />
    </div>
  );
}

const demoCss = `
.fd-dlogod {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 32px 20px;
  overflow: hidden;
  background: #f2f2f2;
}

.fd-dlogod .fd-dlogo {
  width: min(100%, 300px);
  cursor: crosshair;
}
`;