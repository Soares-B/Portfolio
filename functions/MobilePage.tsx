import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MobilePage(container: HTMLElement, header: HTMLElement, about: HTMLElement) {
  
    const animation = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,

        }
    })

    animation.to(header, {
        opacity: 0,
        duration: 1})
    .to(about, {
        opacity: 100,
        duration: 1
    },"<")

  return () => {
    animation.scrollTrigger?.kill();
    animation.kill();
  };
}