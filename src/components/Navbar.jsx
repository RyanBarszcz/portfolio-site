import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);

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
                 bg-transparent"
    >
      {/* LEFT SIDE */}
      <div className="text-white">
        <h1 className="font-bold text-xl tracking-wide">RYAN BARSZCZ</h1>
        <p className="text-sm opacity-75 -mt-1">PORTFOLIO ’25</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6 text-white font-semibold text-sm">
        <a href="#about" className="hover:opacity-60">ABOUT</a>
        <a href="#projects" className="hover:opacity-60">PROJECTS</a>
        <a href="#recognition" className="hover:opacity-60">RECOGNITION</a>
        <a href="#contact" className="hover:opacity-60">CONTACT</a>

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
