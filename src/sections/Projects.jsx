import { useState, useEffect } from "react";
import projects from "../data/projects.json";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectModal from "../components/ProjectModal";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Projects() {

  // track which project is being hovered
  const [hoverProject, setHoverProject] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: el,
        offsetY: 120 // offset to show entire card
      },
      ease: "power2.out"
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = document.querySelector(".projects-bg-wrapper");
      const bg = document.querySelector("#projects-bg");

      // PIN the wrapper
      ScrollTrigger.create({
        trigger: "#projects",
        start: "top top",
        end: "bottom bottom",
        pin: wrapper,
        pinSpacing: false,
        scrub: false,
        // markers: true,
      });

      // Slight parallax & scale
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
            // markers: true,
          },
        });
    });

    return () => ctx.revert();
  }, []);


  return (
    <>
      <section id="projects" className="relative overflow-hidden h-[100vh] w-full text-white">

        {/* PINNED BACKGROUND WRAPPER */}
        <div className="projects-bg-wrapper absolute inset-0 w-full h-[150vh] overflow-hidden">
          <img
            id="projects-bg"
            src="/assets/projects.jpg"
            className="w-full h-full object-cover scale-125"
          />
        </div>

        {/* FOREGROUND CONTENT */}
        <div className="relative z-10 px-12 pt-32 pb-6 h-[100vh]">
          {/* UPPER CONTENT AREA */}
          <div className="relative flex justify-between items-start h-[60%] text-white">

            {/* LEFT SIDE — TEXT */}
            <div className="w-1/2">
              <h2 className="text-[10vw] md:text-[6vw] font-extrabold leading-none">
                SELECTED <span className="font-light">PROJECTS</span>
              </h2>

              <p className="w-[90%] md:w-[70%] text-[4vw] md:text-[1.2vw] leading-[1.35] mt-6">
                Every project I create has a story behind it. It's not just about
                “making a website.” It's about exploring an idea, experimenting,
                failing a few times, and then finally watching it come alive on screen.
              </p>
            </div>

            {/* RIGHT SIDE — PREVIEW PANEL */}
            <div className="w-1/2 h-full flex items-center justify-center relative">

              {/* Sliding preview */}
              <div
                className={`
            absolute right-0 top-1/2 -translate-y-1/2 
            w-full
            h-full
            max-h-full
            flex items-center justify-center
            overflow-hidden shadow-xl
            transform transition-all duration-500 ease-out
            ${hoverProject ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
          `}
              >
                {hoverProject && (
                  <img
                    src={hoverProject.image}
                    alt={hoverProject.title}
                    className="max-h-full w-auto object-contain"
                  />
                )}
              </div>


            </div>
          </div>

          {/* BOTTOM THUMBNAILS */}
          <div className="relative flex gap-6 overflow-x-auto mt-10 no-scrollbar">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoverProject(project)}
                onMouseLeave={() => setHoverProject(null)}
                onClick={() => {
                  setActiveProject(project); 
                  scrollToSection("projects")
                }}
                className="min-w-[10vw] overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  className="w-full h-full object-cover"
                  alt={project.title}
                />
              </div>
            ))}
          </div>
        </div>



      </section>
      {activeProject && <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />}
    </>
  );
}
