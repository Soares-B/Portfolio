export default function TiltCard({ card, size, tech }: { card: React.ReactNode, size: string, tech: boolean }) {
    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - y) * 20;
      const rotateY = (x - 0.5) * 20;

      card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
    }

    function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
      e.currentTarget.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
            `;
    }

    return (
      <div
        className={`tilt-card aspect-square ${size} flex items-center ${tech ? 'justify-center bg-white/66 backdrop-blur-xl border-1 border-white/33' : '' }  focus:outline-none rounded-[5px]`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {card}
      </div>
    );
  }