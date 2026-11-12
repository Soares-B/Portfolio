import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MobilePage(container: HTMLElement, header: HTMLElement, about: HTMLElement, skills: HTMLElement, projects: HTMLElement, contact: HTMLElement) {
  
    const animation = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=500%",
            scrub: 0.5,
            pin: true,

        }
    })

    gsap.set(about, { opacity: 0 });
    gsap.set(skills, { opacity: 0 });
    gsap.set(projects, { opacity: 0 });
    gsap.set(contact, { opacity: 0 });

    animation.to(header, {
        opacity: 0,
        duration: 0.5})
    .to(about, {
        opacity: 1,
        duration: 0.5
    },"<")
    .to(about, {
        opacity: 0,
        duration: 0.5
    })
    .to(skills, {
        opacity: 1,
        duration: 0.5
    }, "<")
    .to(skills, {
        opacity: 0,
        duration: 0.5
    })
    .to(projects, {
        opacity: 1,
        duration: 0.5
    }, "<")
    .to(projects, {
        opacity: 0,
        duration: 0.5
    })
    .to(contact, {
        opacity: 1,
        duration: 0.5
    }, "<")

  return () => {
    animation.scrollTrigger?.kill();
    animation.kill();
  };
}