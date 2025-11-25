import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Navbar() {
  const navRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: el,
        // offsetY: 100 
      },
      ease: "power2.out"
    });
  };

  useEffect(() => {
    const showAnim = gsap.from('.top-nav', {
      yPercent: -100,
      paused: true,
      duration: 0.5,
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      // markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="top-nav fixed top-0 left-0 w-full z-50 px-12 py-6
                 flex items-center justify-between 
                 bg-gradient-to-b
                from-black/40 via-black/20 to-transparent"
    >
      {/* LEFT SIDE */}
      <div className="text-white">
        <h1 className="font-bold text-xl tracking-wide">RYAN BARSZCZ</h1>
        <p className="text-sm opacity-75 -mt-1">PORTFOLIO ’25</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6 text-white font-semibold text-sm">
        <button onClick={() => scrollToSection("about")} className="hover:opacity-60 hover:cursor-pointer">
          ABOUT
        </button>

        <button onClick={() => scrollToSection("projects")} className="hover:opacity-60 hover:cursor-pointer">
          PROJECTS
        </button>

        <button onClick={() => scrollToSection("achievements")} className="hover:opacity-60 hover:cursor-pointer">
          RECOGNITION
        </button>

        <button onClick={() => scrollToSection("contact")} className="hover:opacity-60 hover:cursor-pointer">
          CONTACT
        </button>

        <a
          href="/ryan-barszcz-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-white
             hover:bg-white hover:text-black transition"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
}
