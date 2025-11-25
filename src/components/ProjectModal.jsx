import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  // --------------------
  // CLOSE ANIMATION
  // --------------------
  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 30,
      duration: 0.35,
      ease: "power3.in",
    });

    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  // --------------------
  // OPEN ANIMATION
  // --------------------
  useEffect(() => {
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );

    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out"
      }
    );

    return () => {
      gsap.killTweensOf(modalRef.current);
      gsap.killTweensOf(backdropRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      
      {/* BACKDROP */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
      />

      {/* MODAL */}
      <div
        ref={modalRef}
        className="
          relative z-[110] w-[85%] max-w-5xl 
          bg-[#0f0f0f] text-white 
          p-8 lg:p-10 rounded-xl shadow-2xl
          border border-white/10
        "
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-4 right-4 text-white text-4xl hover:opacity-60 hover:cursor-pointer"
          onClick={handleClose}
        >
          ×
        </button>

        {/* FLEX SPLIT */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h2 className="text-2xl lg:text-4xl font-extrabold">{project.title}</h2>
              <h3 className="text-sm lg:text-xl opacity-70">{project.year}</h3>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-md object-cover mb-6 lg:mb-8"
            />

            <p className="text-xs lg:text-lg text-white/80 leading-relaxed lg:mb-8">
              {project.description}
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/2 flex flex-col lg:mt-21">
            
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-sm lg:text-xl font-bold mb-1 lg:mb-3 tracking-wide">TECH STACK</h3>
                <ul className="space-y-1 text-xs lg:text-base">
                  {project.stack.map((tech, i) => (
                    <li key={i} className="text-white/70">• {tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm lg:text-xl font-bold mb-3 tracking-wide">HIGHLIGHTS</h3>
                <ul className="space-y-1 text-xs lg:text-base">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-white/70">• {h}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* LIVE BUTTON aligned bottom-right on large */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block px-6 py-3 mt-4
                border border-white 
                hover:bg-white hover:text-black 
                transition font-semibold text-center
                lg:mt-auto
              "
            >
              Visit Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
