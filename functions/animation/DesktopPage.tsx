import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type DesktopPageProps = {
    progress: HTMLElement;
    container: HTMLElement;
    header: HTMLElement;
    about: HTMLElement;
    skills: HTMLElement;
    projects: HTMLElement;
    contact: HTMLElement;

    headerContent: HTMLElement;
    aboutContent: HTMLElement;
    skillsContent: HTMLElement;
    contactContent: HTMLElement;

    skillsSpiral: HTMLElement;
    skillsStack: HTMLElement;
    skillsBadgeBox: HTMLElement;
    skillsStickers: HTMLElement;

    PRproject_1: HTMLElement;
    PRproject_2: HTMLElement;
    PRproject_3: HTMLElement;
    aboutTitle: HTMLElement;

    setHeaderActive: React.Dispatch<React.SetStateAction<boolean>>;
    setAboutActive: React.Dispatch<React.SetStateAction<boolean>>;
    setSkillsActive: React.Dispatch<React.SetStateAction<boolean>>;
    setContactActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DesktopPage({
    progress, 
    container,
    header,
    about,
    skills,
    projects,
    contact,

    headerContent,
    aboutContent,
    skillsContent,
    contactContent,

    skillsSpiral,
    skillsStack,
    skillsBadgeBox,
    skillsStickers,

    PRproject_1,
    PRproject_2,
    PRproject_3, 
    aboutTitle,

    setHeaderActive,
    setAboutActive,
    setSkillsActive,
    setContactActive,
}: DesktopPageProps) { 

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
    });

    animation.eventCallback("onUpdate", () => {
        const time = animation.time();

        const isHeaderActive =
            time < animation.labels.headerEnd;

        const isAboutActive =
            time >= animation.labels.aboutStart &&
            time < animation.labels.aboutEnd;

        const isSkillActive =
            time >= animation.labels.skillsStart &&
            time < animation.labels.skillsEnd;

        setHeaderActive(isHeaderActive);
        setAboutActive(isAboutActive);
        setSkillsActive(isSkillActive);
    });

    gsap.set(about, { opacity: 0 });
    gsap.set(skills, { opacity: 0 });
    gsap.set(projects, { opacity: 0 });
    gsap.set(contact, { opacity: 0 });

    gsap.set(skillsStack, {opacity: 0});
    gsap.set(skillsBadgeBox, {opacity: 0});
    gsap.set(skillsStickers, {opacity: 0});

    gsap.set(PRproject_2, {opacity: 0});
    gsap.set(PRproject_3, {opacity: 0});

    animation

    // ------------------------------------------ Header ------------------------------------------ //

    .fromTo(headerContent, {
        opacity: 1,
        filter: 'blur(0px)'
    }, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.25
    }, "<")
    .to(header, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.25
    }, ">")
    .addLabel("headerEnd")

    // ------------------------------------------ About ------------------------------------------ //

    .addLabel("aboutStart")
    .to(about, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5
    },"<")
    .fromTo(aboutContent, {
        opacity: 0,
        filter: 'blur(10px)'
    }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.25
    })
    .fromTo(aboutTitle, {
        y: 25,
        opacity: 0,
        filter: "blur(10px)",
    }, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.25,
    },"-=0.25")
    .fromTo(aboutContent, {
        opacity: 1,
        filter: 'blur(0px)'
    }, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.25
    }, "+=0.5")
    .fromTo(aboutTitle, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
    }, {
        y: 25,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.25,
    },"-=0.25")
    .to(about, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.25
    }, ">")
    .addLabel("aboutEnd")

    // ------------------------------------------ Skills ------------------------------------------ //

    .addLabel("skillsStart")
    .to(skills, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5
    },"<")
    .fromTo(skillsContent, {
        opacity: 0,
        filter: 'blur(10px)'
    }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.25
    })
    .fromTo(skillsSpiral, {
        x: 0,
        filter: "blur(0px)",
    }, {
        duration: 0.5,
        ease: "power2.inOut",
        keyframes: [
            { x: -220, filter: "blur(0px)", duration: 0.10 },
            { x: -330, filter: "blur(10px)", duration: 0.30 },
            { x: -660, filter: "blur(0px)", duration: 0.10 },
        ]
    })
    .fromTo(skillsStack, {
        opacity: 0,
        filter: 'blur(10px)'
    }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.25
    }, ">")
    .fromTo(skillsBadgeBox, {
        opacity: 0,
        filter: 'blur(10px)'
    }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.25
    }, "<")
    .fromTo(skillsStickers, {
        opacity: 0,
        filter: 'blur(10px)'
    }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.25
    }, "<")
    .fromTo(skillsContent, {
        opacity: 1,
        filter: 'blur(0px)'
    }, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.25
    }, "+=0.5")
    .to(skills, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.25
    }, ">")
    .addLabel("skillsEnd")

    // ------------------------------------------ Projects ------------------------------------------ //

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

    // ------------------------------------------ Contact ------------------------------------------ //

    .addLabel("contactStart")
    .to(contact, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5
    },"<")
    .fromTo(contactContent, {
        opacity: 0,
        filter: 'blur(10px)'
    }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.25
    })

  return () => {
    animation.scrollTrigger?.kill();
    animation.kill();
  };
}