
"use client";

import {
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";

import { forwardRef } from "react";

interface AboutCardProps {
  card: React.ReactNode;
}

const AboutCard = forwardRef<HTMLDivElement, AboutCardProps>(
  function AboutCard({ card }, ref) {
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const rotateX = useTransform(y, [0, 1], [10, -10]);
    const rotateY = useTransform(x, [0, 1], [-10, 10]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const rect = e.currentTarget.getBoundingClientRect();

      x.set((e.clientX - rect.left) / rect.width);
      y.set((e.clientY - rect.top) / rect.height);
    }

    function handleMouseLeave() {
      x.set(0.5);
      y.set(0.5);
    }

    return (
      <motion.div
        ref={ref}
        className="tilt-card w-full h-full pt-2 flex justify-center items-center rounded-[5px] hover:cursor-pointer"
        style={{
          transformPerspective: 1000,
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.95 }}
      >
        {card}
      </motion.div>
    );
  }
);

export default AboutCard;
