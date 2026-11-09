import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MobilePage(header: HTMLElement){
    const htl = gsap.timeline({
        scale: 0.5,
        y: -250,
        x: -200,
        rotation: -45,

        scrollTrigger: {
            trigger: header,
            start: 'top top',
            end: "300px top",
            scrub: true,
            pin: true
        }
    })

    htl.to(".header", {
        opacity: 0

    }, 0.5)
}