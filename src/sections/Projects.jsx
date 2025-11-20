import { useState } from "react";
import projects from "../data/projects.json";

export default function Projects() {

  // track which project is being hovered
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative w-full h-screen text-white px-12 pt-24 pb-12 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/assets/projects.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Projects Background"
      />

      {/* UPPER CONTENT AREA */}
      <div className="relative z-10 flex justify-between items-start h-[60%]">

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
            ${activeProject ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
          `}
          >
            {activeProject && (
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="max-h-full w-auto object-contain"
              />
            )}
          </div>


        </div>
      </div>

      {/* BOTTOM THUMBNAILS */}
      <div className="relative z-10 flex gap-6 overflow-x-auto mt-10 pb-4 no-scrollbar">
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
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
    </section>
  );
}
