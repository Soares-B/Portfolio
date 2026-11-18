import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Element = {
    [key: string]: HTMLElement
}

export default function MobilePage({container, header, about, skills, projects, contact, PRproject_1, PRproject_2, PRproject_3}: Element) {
  
    const animation = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=800%",
            scrub: 0.5,
            pin: true,

        }
    })

    gsap.set(about, { opacity: 0 });
    gsap.set(skills, { opacity: 0 });
    gsap.set(projects, { opacity: 0 });
    gsap.set(contact, { opacity: 0 });
    gsap.set(PRproject_2, {opacity: 0});
    gsap.set(PRproject_3, {opacity: 0});

    animation.to(header, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5})
    .to(about, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5
    },"<")
    .to(about, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5
    })
    .to(skills, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5
    }, "<")
    .to(skills, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5
    })
    .to(projects, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5
    }, "<")
    .to(PRproject_1, {
        opacity: 1,
        duration: 0.5,
        pointerEvents: "auto",
    }, "<")
    .to(PRproject_1, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
    })
    .to(PRproject_2, {
        opacity: 1,
        duration: 0.5,
        pointerEvents: "auto",
    }, "<")
    .to(PRproject_2, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
    })
    .to(PRproject_3, {
        opacity: 1,
        duration: 0.5,
        pointerEvents: "auto",
    }, "<")
    .to(projects, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5
    })
    .to(contact, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5
    }, "<")

  return () => {
    animation.scrollTrigger?.kill();
    animation.kill();
  };
}