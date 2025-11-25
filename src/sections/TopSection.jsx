import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from './Hero.jsx'
import About from "./About.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function TopSection() {
    const topRef = useRef(null);
    const bgImgRef = useRef(null);

    // Main scroll effect
    useEffect(() => {
        const top = topRef.current;
        const bg = bgImgRef.current;

        const ctx = gsap.context(() => {

            const wrapper = top.querySelector(".bg-wrapper");

            ScrollTrigger.create({
                trigger: top,
                start: "top top",
                end: "bottom bottom",
                pin: wrapper,
                pinSpacing: false,
                scrub: false,
                // markers: true,
            });

            gsap.to(bg, {
                y: "10vh",
                ease: "none",
                scrollTrigger: {
                    trigger: top,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    // markers: true,
                },
            });


        }, top);

        return () => ctx.revert();
    }, []);

    // About image scroll effect
    useEffect(() => {
        gsap.fromTo(
            "#about-image",
            { y: "20vh" },
            {
                y: "-20vh",
                ease: "none",
                scrollTrigger: {
                    trigger: "#about",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    // markers: true,
                },
            });
    }, []);


    return (
        <section ref={topRef} className="relative overflow-hidden">

            {/* BACKGROUND (will be pinned) */}
            <div className="bg-wrapper absolute inset-0 w-screen h-[150vh]">
                <img
                    ref={bgImgRef}
                    src="/assets/hero3.jpg"
                    className="w-full h-full object-cover scale-120"
                />
            </div>


            {/* SCROLLING CONTENT */}
            <div className="relative z-10">
                <div className="h-screen flex items-end px-12 pb-20">
                    <Hero />
                </div>

                <div className="px-12 pt-32 pb-6 about-section">
                    <About />
                </div>
            </div>

        </section>


    );
}
