"use client";

import { themes } from "@/config/themes";
import MobilePage from "@/functions/animation/MobilePage";
import DesktopPage from "@/functions/animation/DesktopPage";

import Header from "@/Screens/Header";
import About from "@/Screens/About";
import Skills from "@/Screens/Skills";
import Projects from "@/Screens/Projects";
import Contact from "@/Screens/Contact";

import AudioPlayer from "@/components/AudioPlayer";

import Spark from "@/components/animation/Spark";

import gsap from "gsap";

import { useState, useEffect, useRef } from "react";
import { useLoading } from "@/config/context";

import { installWebGLGuard } from "@/lib/webglGuard";
import { useReleaseOnLeave } from "@/lib/useReleaseOnLeave";

installWebGLGuard();

type ThemeName = keyof typeof themes;

export default function Home() {
  const { isLoaded } = useLoading();
  const [windowWidth, setWindowWidth] = useState(0);

  const [headerActive, setHeaderActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(true);
  const [contactActive, setContactActive] = useState(false);

  const [headerBG, setHeaderBG] = useState(1);
  const [aboutBG, setAboutBG] = useState(2);
  const [skillsBG, setSkillsBG] = useState(0.5);
  const [projectsBG, setProjectsBG] = useState(2);
  const [contactBG, setContactBG] = useState(0.5);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const [currentTheme, setCurrentTheme] = useState<ThemeName>("Milk");

  const progress = useRef<HTMLDivElement>(null);
  const player = useRef<HTMLDivElement>(null);
  const playerContainer = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const headerContent = useRef<HTMLDivElement>(null);
  const aboutContent = useRef<HTMLDivElement>(null);
  const skillsContent = useRef<HTMLDivElement>(null);
  const projectContent = useRef<HTMLDivElement>(null);
  const contactContent = useRef<HTMLDivElement>(null);

  const aboutTitle = useRef<HTMLHeadingElement>(null);

  const SkillsElements = {
    skillsSpiral: useRef<HTMLDivElement>(null),
    skillsStack: useRef<HTMLDivElement>(null),
    skillsBadgeBox: useRef<HTMLDivElement>(null),
    skillsStickers: useRef<HTMLDivElement>(null),
  };

  const PRprojects = {
    PRproject_container: useRef<HTMLDivElement>(null),

    PRproject_1: useRef<HTMLDivElement>(null),
    PRproject_2: useRef<HTMLDivElement>(null),
    PRproject_3: useRef<HTMLDivElement>(null),

    project_overlay1: useRef<HTMLDivElement>(null),
    project_overlay2: useRef<HTMLDivElement>(null),
    project_overlay3: useRef<HTMLDivElement>(null),

    aboutDark: useRef<HTMLElement>(null),
    aboutProject1: useRef<HTMLDivElement>(null),
    aboutProject2: useRef<HTMLDivElement>(null),
    aboutProject3: useRef<HTMLDivElement>(null),

    ProjectCards: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    if (!isLoaded) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      if (
        !progress.current ||
        !container.current ||
        !header.current ||
        !about.current ||
        !skills.current ||
        !projects.current ||
        !contact.current ||
        !headerContent.current ||
        !aboutContent.current ||
        !skillsContent.current ||
        !contactContent.current ||
        !PRprojects.PRproject_1.current ||
        !PRprojects.PRproject_2.current ||
        !PRprojects.PRproject_3.current ||
        !aboutTitle.current
      )
        return;

      return MobilePage({
        progress: progress.current,
        container: container.current,
        header: header.current,
        about: about.current,
        skills: skills.current,
        projects: projects.current,
        contact: contact.current,

        headerContent: headerContent.current,
        aboutContent: aboutContent.current,
        skillsContent: skillsContent.current,
        contactContent: contactContent.current,

        PRproject_1: PRprojects.PRproject_1.current,
        PRproject_2: PRprojects.PRproject_2.current,
        PRproject_3: PRprojects.PRproject_3.current,
        aboutTitle: aboutTitle.current,
      });
    });

    mm.add("(min-width: 769px)", () => {
      if (
        !windowWidth ||
        !progress.current ||
        !player.current ||
        !playerContainer.current ||
        !container.current ||
        !header.current ||
        !about.current ||
        !skills.current ||
        !projects.current ||
        !contact.current ||
        !headerContent.current ||
        !aboutContent.current ||
        !skillsContent.current ||
        !projectContent.current ||
        !contactContent.current ||
        !SkillsElements.skillsSpiral.current ||
        !SkillsElements.skillsStack.current ||
        !SkillsElements.skillsBadgeBox.current ||
        !PRprojects.PRproject_container.current ||        
        !PRprojects.PRproject_1.current ||
        !PRprojects.PRproject_2.current ||
        !PRprojects.PRproject_3.current ||
        !PRprojects.project_overlay1.current ||
        !PRprojects.project_overlay2.current ||
        !PRprojects.project_overlay3.current ||
        !PRprojects.aboutDark.current ||
        !PRprojects.aboutProject1.current ||
        !PRprojects.aboutProject2.current ||
        !PRprojects.aboutProject3.current ||
        !PRprojects.ProjectCards.current ||
        !aboutTitle.current
      )
        return;

      return DesktopPage({
        size: windowWidth,
        progress: progress.current,
        player: player.current,
        playerContainer: playerContainer.current,
        container: container.current,
        header: header.current,
        about: about.current,
        skills: skills.current,
        projects: projects.current,
        contact: contact.current,

        headerContent: headerContent.current,
        aboutContent: aboutContent.current,
        skillsContent: skillsContent.current,
        projectContent: projectContent.current,
        contactContent: contactContent.current,

        skillsSpiral: SkillsElements.skillsSpiral.current,
        skillsStack: SkillsElements.skillsStack.current,
        skillsBadgeBox: SkillsElements.skillsBadgeBox.current,

        PRprojects_container: PRprojects.PRproject_container.current,        
        PRproject_1: PRprojects.PRproject_1.current,
        PRproject_2: PRprojects.PRproject_2.current,
        PRproject_3: PRprojects.PRproject_3.current,
        project_overlay1: PRprojects.project_overlay1.current,
        project_overlay2: PRprojects.project_overlay2.current,
        project_overlay3: PRprojects.project_overlay3.current,
        aboutDark: PRprojects.aboutDark.current,
        aboutProject1: PRprojects.aboutProject1.current,
        aboutProject2: PRprojects.aboutProject2.current,
        aboutProject3: PRprojects.aboutProject3.current,
        ProjectCards: PRprojects.ProjectCards.current,

        aboutTitle: aboutTitle.current,

        setHeaderActive: setHeaderActive,
        setAboutActive: setAboutActive,
        setSkillsActive: setSkillsActive,
        setProjectsActive: setProjectsActive,
        setContactActive: setContactActive,

        setHeaderBG: setHeaderBG,
        setAboutBG: setAboutBG,
        setSkillsBG: setSkillsBG,
        setProjectsBG: setProjectsBG,
        setContactBG: setContactBG,
      });
    });

    return () => mm.revert();
  }, [isLoaded]);

useReleaseOnLeave(headerActive, headerContent);
useReleaseOnLeave(aboutActive, aboutContent);
useReleaseOnLeave(skillsActive, skillsContent);
useReleaseOnLeave(projectsActive, projectContent);
useReleaseOnLeave(contactActive, contactContent);

  return (
    <div>
      <Spark
        themes={themes}
        currentTheme={currentTheme}
        element={
          <div
            ref={container}
            className={`w-full min-h-screen relative overflow-hidden
      ${themes[currentTheme].background}
      ${themes[currentTheme].selection_background}
      ${themes[currentTheme].selection_text}`}
          >
            <div
              className={`w-full min-h-screen flex ${
                isLoaded ? "animate-intro" : "opacity-0"
              }`}
            >
              <div
                ref={progress}
                className={`fixed left-0 top-0 z-100 ${windowWidth <= 768 ? "" : themes[currentTheme].progress} w-full h-1`}
              ></div>

              <AudioPlayer themes={themes} currentTheme={currentTheme} windowWidth={windowWidth} player={player} playerContainer={playerContainer}/>

              {/* ------------------------------------------------------------------------ Header ------------------------------------------------------------------------ */}

              <Header themes={themes} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} windowWidth={windowWidth} header={header} headerContent={headerContent} headerActive={headerActive} headerBG={headerBG}/>

              {/* ------------------------------------------------------------------------ About ------------------------------------------------------------------------ */}

              <About themes={themes} currentTheme={currentTheme} windowWidth={windowWidth} about={about} aboutContent={aboutContent} aboutActive={aboutActive} aboutTitle={aboutTitle} aboutBG={aboutBG}/>

              {/* ------------------------------------------------------------------------ Skills ------------------------------------------------------------------------ */}

              <Skills themes={themes} currentTheme={currentTheme} windowWidth={windowWidth} skills={skills} skillsContent={skillsContent} skillsActive={skillsActive} skillsSpiral={SkillsElements.skillsSpiral} skillsStack={SkillsElements.skillsStack} skillsBadgeBox={SkillsElements.skillsBadgeBox} skillsBG={skillsBG}/>

              {/* ------------------------------------------------------------------------ Projects ------------------------------------------------------------------------ */}

              <Projects themes={themes} currentTheme={currentTheme} windowWidth={windowWidth} projects={projects} projectContent={projectContent} PRproject_1={PRprojects.PRproject_1} PRproject_2={PRprojects.PRproject_2} PRproject_3={PRprojects.PRproject_3} PRproject_container={PRprojects.PRproject_container} project_overlay1={PRprojects.project_overlay1} project_overlay2={PRprojects.project_overlay2} project_overlay3={PRprojects.project_overlay3} aboutProject1={PRprojects.aboutProject1} aboutProject2={PRprojects.aboutProject2} aboutProject3={PRprojects.aboutProject3} aboutDark={PRprojects.aboutDark} ProjectCards={PRprojects.ProjectCards} projectsActive={projectsActive} projectsBG={projectsBG}/>

              {/* ------------------------------------------------------------------------ Contact ------------------------------------------------------------------------ */}

              <Contact themes={themes} currentTheme={currentTheme} windowWidth={windowWidth} contact={contact} contactContent={contactContent} contactActive={contactActive} contactBG={contactBG}/>
              
            </div>
          </div>
        }
      />
    </div>
  );
}
