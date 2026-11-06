import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiPostgresql, SiPrisma, SiGithub, SiGit, SiTailwindcss } from "react-icons/si";

export default function Stack({
  themes,
  currentTheme,
}: {
  themes: any;
  currentTheme: string;
}) {
  function TiltCard({ tech }: { tech: React.ReactNode }) {
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
        className="tilt-card aspect-square w-8 flex items-center justify-center bg-white/66 backdrop-blur-xl border-1 border-white/33 focus:outline-none rounded-[5px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {tech}
      </div>
    );
  }

  return (
    <div className="flex mt-1 gap-3 flex-wrap max-w-[210px] justify-center">
      <TiltCard tech={<SiTypescript className={`${themes[currentTheme].icon} size-6`} />}/>
      <TiltCard tech={<SiJavascript className={`${themes[currentTheme].icon} size-6`} />}/>
      <TiltCard tech={<SiReact className={`${themes[currentTheme].icon} size-6`} />}/>
      <TiltCard tech={<SiNextdotjs className={`${themes[currentTheme].icon} size-6`} />}/>
      <TiltCard tech={<SiPostgresql className={`${themes[currentTheme].icon} size-6`} />}/>
      <TiltCard tech={<SiPrisma className={`${themes[currentTheme].icon} size-6`} />}/>
      <TiltCard tech={<SiGit className={`${themes[currentTheme].icon} size-6`} />}/>
      <TiltCard tech={<SiGithub className={`${themes[currentTheme].icon} size-6`} />}/>
      <TiltCard tech={<SiTailwindcss className={`${themes[currentTheme].icon} size-6`} />}/>
    </div>
  );
}
