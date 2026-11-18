import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { start } from "repl";

gsap.registerPlugin(ScrollTrigger);

type Element = {
    [key: string]: HTMLElement
}

export default function DesktopPage({progress, container, header, about, skills, projects, contact, PRproject_1, PRproject_2, PRproject_3, aboutTitle, aboutCard}: Element) {

    gsap.set(progress, {
        scaleX: 0,
        transformOrigin: "left center",
        });

        gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "max",
            scrub: true,
        },
    });
  
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
    .fromTo(aboutTitle, {
        y: 25,
        opacity: 0,
        filter: "blur(10px)",
    }, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.25,
    },">")
    .fromTo(aboutCard, {
        opacity: 0,
        filter: "blur(10px)"
    }, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.25,
    }, "-=0.25")
    .to(about, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5
    }, "+=0.5")
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