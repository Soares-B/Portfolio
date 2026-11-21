import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type DesktopPageProps = {
    size: number
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
    projectContent: HTMLElement;
    contactContent: HTMLElement;

    skillsSpiral: HTMLElement;
    skillsStack: HTMLElement;
    skillsBadgeBox: HTMLElement;

    PRprojects_container: HTMLElement;
    PRproject_1: HTMLElement;
    PRproject_2: HTMLElement;
    PRproject_3: HTMLElement;
    project_overlay1: HTMLElement;
    project_overlay2: HTMLElement;
    project_overlay3: HTMLElement;
    aboutDark: HTMLElement;
    aboutProject1: HTMLElement;
    aboutProject2: HTMLElement;
    aboutProject3: HTMLElement;
    ProjectCards: HTMLElement;

    aboutTitle: HTMLElement;

    setHeaderActive: React.Dispatch<React.SetStateAction<boolean>>;
    setAboutActive: React.Dispatch<React.SetStateAction<boolean>>;
    setSkillsActive: React.Dispatch<React.SetStateAction<boolean>>;
    setProjectsActive: React.Dispatch<React.SetStateAction<boolean>>;
    setContactActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DesktopPage({
    size,
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
    projectContent,
    contactContent,

    skillsSpiral,
    skillsStack,
    skillsBadgeBox,

    PRprojects_container,
    PRproject_1,
    PRproject_2,
    PRproject_3,
    project_overlay1,
    project_overlay2,
    project_overlay3,
    aboutDark,
    aboutProject1,
    aboutProject2,
    aboutProject3,
    ProjectCards,

    aboutTitle,

    setHeaderActive,
    setAboutActive,
    setSkillsActive,
    setProjectsActive,
    setContactActive,
}: DesktopPageProps) { 

    const projectSize = ((size / 3) + 20)

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

        const isProjectsActive =
            time >= animation.labels.projectsStart &&
            time < animation.labels.projectsEnd;

        const isContactActive =
            time >= animation.labels.contactStart

        setHeaderActive(isHeaderActive);
        setAboutActive(isAboutActive);
        setSkillsActive(isSkillActive);
        setProjectsActive(isProjectsActive);
        setContactActive(isContactActive);
    });

    gsap.set(about, { opacity: 0 });
    gsap.set(skills, { opacity: 0 });
    gsap.set(projects, { opacity: 0 });
    gsap.set(contact, { opacity: 0 });

    gsap.set(skillsStack, {opacity: 0});
    gsap.set(skillsBadgeBox, {opacity: 0});

    gsap.set(
        [aboutProject1, aboutProject2, aboutProject3],
        { opacity: 0, visibility: 'hidden' }
    );
    gsap.set(aboutDark, { opacity: 0 });
    gsap.set(ProjectCards, { opacity: 0, visibility: 'hidden' });

    gsap.set(PRprojects_container, {x: (-(projectSize) - 30)})

    animation

    // ------------------------------------------ Header ------------------------------------------ //

    .fromTo(headerContent, {
        opacity: 1,
        filter: 'blur(0px)'
    }, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.5
    }, "<")
    .to(header, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5
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
        duration: 0.5
    })
    .fromTo(aboutTitle, {
        y: 25,
        opacity: 0,
        filter: "blur(10px)",
    }, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
    },"-=0.25")
    .fromTo(aboutContent, {
        opacity: 1,
        filter: 'blur(0px)'
    }, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.5
    }, "+=0.5")
    .fromTo(aboutTitle, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
    }, {
        y: 25,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.5,
    },"-=0.25")
    .to(about, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5
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
        duration: 0.5
    })

    // --------

    .fromTo(skillsSpiral, {
        x: 0,
        filter: "blur(0px)",
    }, {
        duration: 0.5,
        ease: "power2.inOut",
        keyframes: [
            { x: size < 1280 ? -110 : size < 1920 ? -140 : -220, filter: "blur(0px)", duration: 0.10 },
            { x: size < 1280 ? -220 : size < 1920 ? -280 : -440, filter: "blur(10px)", duration: 0.30 },
            { x: size < 1280 ? -330 : size < 1920 ? -420 : -660, filter: "blur(0px)", duration: 0.10 },
        ]
    })

    // --------

    .fromTo(skillsStack, {
        opacity: 0,
        filter: 'blur(10px)'
    }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.5
    }, ">")
    .fromTo(skillsBadgeBox, {
        opacity: 0,
        filter: 'blur(10px)'
    }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.5
    }, "<")
    
    // --------

    .fromTo(skillsStack, {
        opacity: 1,
        filter: 'blur(00px)'
    }, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.5
    }, "+=0.5")
    .fromTo(skillsBadgeBox, {
        opacity: 1,
        filter: 'blur(00px)'
    }, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.5
    }, "<")
    
    // --------

    .fromTo(skillsSpiral, {
        x: size < 1280 ? -330 : size < 1920 ? -420 : -660,
        filter: "blur(0px)",
    }, {
        duration: 0.5,
        ease: "power2.inOut",
        keyframes: [
            { x: size < 1280 ? -220 : size < 1920 ? -280 : -440, filter: "blur(0px)", duration: 0.10 },
            { x: size < 1280 ? -110 : size < 1920 ? -140 : -220, filter: "blur(10px)", duration: 0.30 },
            { x: size < 1280 ? 0 : size < 1920 ? 0 : 0, filter: "blur(0px)", duration: 0.10 },
        ]
    },">")

    // --------

    .fromTo(skillsContent, {
        opacity: 1,
        filter: 'blur(0px)'
    }, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.5
    }, "+=0.25")
    .to(skills, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5
    }, ">")
    .addLabel("skillsEnd")

    // ------------------------------------------ Projects ------------------------------------------ //

    .addLabel("projectsStart")
    .to(projects, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5
    }, "<")
    .to(projectContent, {
        opacity: 1,
        duration: 0.5
    })

    // --------

    .to(PRprojects_container, {
        x: (-(projectSize) * 2 - 20),
    }, ">")

    .to(project_overlay1, {
        opacity: 1,
        duration: 0,
    }, ">+0.25")
    .to(project_overlay1, {
        scale: 3,
        duration: 0.5
    }, ">")
    .to(aboutDark, {
        opacity: 1,
        duration: 0.5
    }, ">")
    .to(aboutProject1, {
        visibility: 'visible',
        duration: 0,
    }, "<")
    .to(aboutProject1, {
        opacity: 1,
        duration: 0.5,
    }, "<")
    .to(aboutDark, {
        opacity: 0,
        duration: 0.5
    }, ">+1")
    .to(aboutProject1, {
        opacity: 0,
        duration: 0.5
    }, "<")
    .to(aboutProject1, {
        visibility: 'hidden',
        duration: 0,
    }, "<")
    .to(project_overlay1, {
        scale: 1,
        duration: 0.5
    }, ">+0.5")
    .to(project_overlay1, {
        opacity: 0,
        duration: 0,
    }, ">")

    .to(PRprojects_container, {
        x: (-(projectSize) * 3 - 20),
    }, ">+0.5")

    .to(project_overlay2, {
        opacity: 1,
        duration: 0,
    }, ">+0.25")
    .to(project_overlay2, {
        scale: 3,
        duration: 0.5
    }, ">")
    .to(aboutDark, {
        opacity: 1,
        duration: 0.5
    }, ">")
    .to(aboutProject2, {
        visibility: 'visible',
        duration: 0,
    }, "<")
    .to(aboutProject2, {
        opacity: 1,
        duration: 0.5,
    }, "<")
    .to(aboutDark, {
        opacity: 0,
        duration: 0.5
    }, ">+1")
    .to(aboutProject2, {
        opacity: 0,
        duration: 0.5
    }, "<")
    .to(aboutProject2, {
        visibility: 'hidden',
        duration: 0,
    }, "<")
    .to(project_overlay2, {
        scale: 1,
        duration: 0.5
    }, ">+0.5")
    .to(project_overlay2, {
        opacity: 0,
        duration: 0,
    }, ">")

    .to(PRprojects_container, {
        x: (-(projectSize) * 4 - 20),
    }, ">+0.5")

    .to(project_overlay3, {
        opacity: 1,
        duration: 0,
    }, ">+0.25")
    .to(project_overlay3, {
        scale: 3,
        duration: 0.5
    }, ">")
    .to(aboutDark, {
        opacity: 1,
        duration: 0.5
    }, ">")
    .to(aboutProject3, {
        visibility: 'visiblegi',
        duration: 0,
    }, "<")
    .to(aboutProject3, {
        opacity: 1,
        duration: 0.5,
    }, "<")
    .to(aboutDark, {
        opacity: 0,
        duration: 0.5
    }, ">+1")
    .to(aboutProject3, {
        opacity: 0,
        duration: 0.5
    }, "<")
    .to(aboutProject3, {
        visibility: 'hidden',
        duration: 0,
    }, "<")
    .to(project_overlay3, {
        scale: 1,
        duration: 0.5
    }, ">+0.5")
    .to(project_overlay3, {
        opacity: 0,
        duration: 0,
    }, ">")
    .to(PRprojects_container, {
        opacity: 0,
        duration: 0.5
    }, ">+0.25")
    .to(ProjectCards, {
        visibility: 'visible',
        duration: 0.5
    }, ">")
    .to(ProjectCards, {
        opacity: 1,
        duration: 0.5
    }, ">")
    .to(ProjectCards, {
        opacity: 0,
        duration: 0.5
    }, ">0.5")
    .to(ProjectCards, {
        visibility: 'hidden',
        duration: 0.5
    }, ">")

    // --------

    .to(projectContent, {
        opacity: 0,
        duration: 0.5
    }, ">+0.5")
    
    .to(projects, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5
    }, ">")
    .addLabel("projectsEnd")

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
        duration: 0.5
    })

  return () => {
    animation.scrollTrigger?.kill();
    animation.kill();
  };
}