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
      scrollTo: { y: el },
      ease: "power2.out"
    });
  };

  return (
    <nav
      ref={navRef}
      className="top-nav fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-6
                 flex items-center justify-between 
                 bg-gradient-to-b
                 from-black/40 via-black/20 to-transparent"
    >
      {/* LEFT SIDE */}
      <div className="text-white">
        <h1 className="font-bold text-lg sm:text-xl tracking-wide">RYAN BARSZCZ</h1>
        <p className="text-xs sm:text-sm opacity-75 -mt-1">PORTFOLIO ’25</p>
      </div>

      {/* DESKTOP NAV (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-6 text-white font-semibold text-sm">
        <button onClick={() => scrollToSection("about")} className="hover:opacity-60 hover:cursor-pointer">ABOUT</button>
        <button onClick={() => scrollToSection("projects")} className="hover:opacity-60 hover:cursor-pointer">PROJECTS</button>
        <button onClick={() => scrollToSection("achievements")} className="hover:opacity-60 hover:cursor-pointer">RECOGNITION</button>
        <button onClick={() => scrollToSection("contact")} className="hover:opacity-60 hover:cursor-pointer">CONTACT</button>
      </div>

      {/* RESUME BUTTON — visible on all screens */}
      <a
        href="/ryan-barszcz-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 sm:px-4 sm:py-2 border border-white
                   hover:bg-white hover:text-black transition text-white text-xs sm:text-sm"
      >
        RESUME
      </a>
    </nav>
  );
}
