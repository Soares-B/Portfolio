"use client";

import { themes } from "@/config/themes";
import MobilePage from "@/functions/animation/MobilePage";
import DesktopPage from "@/functions/animation/DesktopPage";

import Header from "@/Screens/Header";
import About from "@/Screens/About";
import Skills from "@/Screens/Skills";
import Projects from "@/Screens/Projects";
import Contact from "@/Screens/Contact";

import Spark from "@/components/animation/Spark";

import gsap from "gsap";

import { useState, useEffect, useRef } from "react";
import { useLoading } from "@/config/context";

type ThemeName = keyof typeof themes;

export default function Home() {
  const { isLoaded } = useLoading();
  const [windowWidth, setWindowWidth] = useState(0);

  const [headerActive, setHeaderActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const [currentTheme, setCurrentTheme] = useState<ThemeName>("Milk");

  const progress = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const skills = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const headerContent = useRef<HTMLDivElement>(null);
  const aboutContent = useRef<HTMLDivElement>(null);
  const skillsContent = useRef<HTMLDivElement>(null);
  const contactContent = useRef<HTMLDivElement>(null);

  const aboutTitle = useRef<HTMLHeadingElement>(null);

  const SkillsElements = {
    skillsSpiral: useRef<HTMLDivElement>(null),
    skillsStack: useRef<HTMLDivElement>(null),
    skillsBadgeBox: useRef<HTMLDivElement>(null),
    skillsStickers: useRef<HTMLDivElement>(null),
  };

  const PRprojects = {
    PRproject_1: useRef<HTMLDivElement>(null),
    PRproject_2: useRef<HTMLDivElement>(null),
    PRproject_3: useRef<HTMLDivElement>(null),
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
        !SkillsElements.skillsSpiral.current ||
        !SkillsElements.skillsStack.current ||
        !SkillsElements.skillsBadgeBox.current ||
        !PRprojects.PRproject_1.current ||
        !PRprojects.PRproject_2.current ||
        !PRprojects.PRproject_3.current ||
        !aboutTitle.current
      )
        return;

      return DesktopPage({
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

        skillsSpiral: SkillsElements.skillsSpiral.current,
        skillsStack: SkillsElements.skillsStack.current,
        skillsBadgeBox: SkillsElements.skillsBadgeBox.current,

        PRproject_1: PRprojects.PRproject_1.current,
        PRproject_2: PRprojects.PRproject_2.current,
        PRproject_3: PRprojects.PRproject_3.current,

        aboutTitle: aboutTitle.current,

        setHeaderActive: setHeaderActive,
        setAboutActive: setAboutActive,
        setSkillsActive: setSkillsActive,
        setContactActive: setContactActive,
      });
    });

    return () => mm.revert();
  }, [isLoaded]);

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

              {/* ------------------------------------------------------------------------ Header ------------------------------------------------------------------------ */}

              <Header themes={themes} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} windowWidth={windowWidth} header={header} headerContent={headerContent} headerActive={headerActive}/>

              {/* ------------------------------------------------------------------------ About ------------------------------------------------------------------------ */}

              <About themes={themes} currentTheme={currentTheme} windowWidth={windowWidth} about={about} aboutContent={aboutContent} aboutActive={aboutActive} aboutTitle={aboutTitle}/>

              {/* ------------------------------------------------------------------------ Skills ------------------------------------------------------------------------ */}

              <Skills themes={themes} currentTheme={currentTheme} windowWidth={windowWidth} skills={skills} skillsContent={skillsContent} skillsActive={skillsActive} skillsSpiral={SkillsElements.skillsSpiral} skillsStack={SkillsElements.skillsStack} skillsBadgeBox={SkillsElements.skillsBadgeBox}/>

              {/* ------------------------------------------------------------------------ Projects ------------------------------------------------------------------------ */}

              <Projects themes={themes} currentTheme={currentTheme} windowWidth={windowWidth} projects={projects} PRproject_1={PRprojects.PRproject_1} PRproject_2={PRprojects.PRproject_2} PRproject_3={PRprojects.PRproject_3} />

              {/* ------------------------------------------------------------------------ Contact ------------------------------------------------------------------------ */}

              <Contact themes={themes} currentTheme={currentTheme} windowWidth={windowWidth} contact={contact} contactContent={contactContent}/>
              
            </div>
          </div>
        }
      />
    </div>
  );
}
