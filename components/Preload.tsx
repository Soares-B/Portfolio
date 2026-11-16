"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();

    const finish = async () => {
      
      await document.fonts.ready;

      const elapsed = performance.now() - start;
      await new Promise(resolve =>
        setTimeout(resolve, Math.max(0, 1000 - elapsed))
      );

      gsap.to(container.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => setVisible(false),
      });
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
    >
      <h1 ref={title} className="text-5xl font-montserrat font-bold">
        Bruno's Portfolio
      </h1>
    </div>
  );
}
