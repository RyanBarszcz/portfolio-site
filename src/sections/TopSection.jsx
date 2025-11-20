import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from './Hero.jsx'
import About from "./About.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function TopSection() {
    const topRef = useRef(null);
    const bgImgRef = useRef(null);

    // useEffect(() => {
    //     const top = topRef.current;
    //     const bg = bgImgRef.current;

    //     // Wait for image to fully load before ScrollTrigger calculations
    //     const onLoad = () => {
    //         ScrollTrigger.refresh();
    //     };
    //     bg.addEventListener("load", onLoad);

    //     // GSAP animations
    //     ScrollTrigger.create({
    //         trigger: top,
    //         start: "top top",
    //         end: "bottom bottom",
    //         pin: true,
    //         pinSpacing: false,
    //         scrub: true,
    //     });

    //     gsap.fromTo(
    //         bg,
    //         { y: 0 },
    //         {
    //             y: "10vh",
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: top,
    //                 start: "top top",
    //                 end: "bottom top",
    //                 scrub: true,
    //             },
    //         }
    //     );

    //     return () => {
    //         bg.removeEventListener("load", onLoad);
    //     };
    // }, []);

    return (
        <section ref={topRef} className="relative min-h-[100vh] overflow-hidden">

            {/* Background Image Behind Everything */}
            <img
                ref={bgImgRef}
                src="/assets/hero2.jpg"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Hero text layered above the image */}
            <div className="relative z-10 h-screen flex items-end px-12 pb-20">
                <Hero />
            </div>

            {/* About section layered above the image */}
            <div className="relative z-10 bg-transparent px-12 pt-32 pb-6">
                <About />
            </div>
        </section>
    );
}
