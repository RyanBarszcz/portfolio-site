import { useState, useEffect } from "react";
import projects from "../data/projects.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import ProjectModal from "../components/ProjectModal";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Projects() {
  const [hoverProject, setHoverProject] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.innerWidth < 768) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: el, offsetY: 420 },
        ease: "power2.out",
      });
    }
    else {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: el, offsetY: 120 },
        ease: "power2.out",
      });
    }

  };

  // DESKTOP ONLY: Parallax + Pin
  useEffect(() => {
    // if (window.innerWidth < 768) return; 

    const ctx = gsap.context(() => {
      const wrapper = document.querySelector(".projects-bg-wrapper");
      const bg = document.querySelector("#projects-bg");

      // PIN
      ScrollTrigger.create({
        trigger: "#projects",
        start: "top top",
        end: "bottom bottom",
        pin: wrapper,
        pinSpacing: false,
      });

      // PARALLAX
      gsap.fromTo(
        bg,
        { y: "-100vh" },
        {
          y: "-20vh",
          ease: "none",
          scrollTrigger: {
            trigger: "#projects",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden w-full text-white 
                   h-auto md:h-[100vh]"
      >
        {/* BACKGROUND (Desktop parallax only) */}
        <div className="projects-bg-wrapper absolute inset-0 w-full h-[150vh] overflow-hidden">
          <img
            id="projects-bg"
            src="/assets/projects.jpg"
            className="w-full h-full object-cover scale-125"
          />
        </div>

        {/* FOREGROUND CONTENT */}
        <div className="relative z-10 px-6 sm:px-12 pt-24 pb-12 h-auto md:h-[100vh]">

          {/* CONTENT WRAPPER */}
          <div className="relative flex flex-col md:flex-row justify-between items-start 
                          h-auto md:h-[60%] gap-10 md:gap-0">

            {/* LEFT TEXT BLOCK */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[12vw] md:text-[6vw] font-extrabold leading-none">
                SELECTED <span className="font-light">PROJECTS</span>
              </h2>

              <p className="w-full md:w-[70%] text-[4vw] md:text-[1.2vw] leading-[1.4] mt-4">
                Every project I create has a story behind it. It's not just
                “making a website.” It's about exploring an idea, experimenting,
                failing a few times, and then finally watching everything come alive.
              </p>
            </div>

            {/* RIGHT PREVIEW PANEL (DESKTOP ONLY) */}
            <div className="hidden md:flex w-1/2 h-full items-center justify-center relative">
              <div
                className={`
                  absolute right-0 top-1/2 -translate-y-1/2
                  w-full h-full max-h-full flex items-center justify-center
                  overflow-hidden shadow-xl transition-all duration-500 ease-out
                  ${hoverProject ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
                `}
              >
                {hoverProject && (
                  <img
                    src={hoverProject.image}
                    className="max-h-full w-auto object-contain"
                    alt={hoverProject.title}
                  />
                )}
              </div>
            </div>
          </div>

          {/* PROJECT THUMBNAILS */}
          <div
            className="
              grid grid-cols-2 gap-4 mt-12 md:flex md:gap-6 md:overflow-x-auto
              md:no-scrollbar
            "
          >
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoverProject(project)}
                onMouseLeave={() => setHoverProject(null)}
                onClick={() => {
                  setActiveProject(project);
                  scrollToSection("projects");
                }}
                className="cursor-pointer w-full md:min-w-[10vw] overflow-hidden"
              >
                <img
                  src={project.image}
                  className="w-full h-auto object-cover rounded-md"
                  alt={project.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
