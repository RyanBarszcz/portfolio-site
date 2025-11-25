import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {

    useEffect(() => {
        const ctx = gsap.context(() => {
            const wrapper = document.querySelector(".achievements-bg-wrapper");
            const bg = document.querySelector("#achievements-bg");
            const award = document.querySelector("#award-grizz");

            // 1️⃣ PIN the background wrapper (same as Projects)
            ScrollTrigger.create({
                trigger: "#achievements",
                start: "top top",
                end: "bottom bottom",
                pin: wrapper,
                pinSpacing: false,
                scrub: false,
            });

            // 2️⃣ Background parallax
            gsap.fromTo(
                bg,
                { y: "-50vh" },
                {
                    y: "-20vh",
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#achievements",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        // markers: true,
                    },
                }
            );

            // 3️⃣ GrizzHacks certificate parallax (moves slower)
            gsap.fromTo(
                award,
                { y: "5vh" },
                {
                    y: "25vh",
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#achievements",
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
        <section
            id="achievements"
            className="relative w-full h-[100vh] overflow-hidden text-white px-12 py-24"
        >

            {/* PINNED BACKGROUND WRAPPER */}
            <div className="achievements-bg-wrapper absolute inset-0 w-full h-[150vh] overflow-hidden">
                <img
                    id="achievements-bg"
                    src="/assets/awards1.jpg"
                    className="w-full h-full object-cover scale-125"
                    alt="Achievements Background"
                />
            </div>
            {/* Dark overlay (10% black) */}
            <div className="absolute inset-0 bg-black/20 z-8 pointer-events-none"></div>


            {/* CENTERED HEADING (does NOT move) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center">
                <h2 className="text-[9vw] md:text-[4.5vw] font-extrabold leading-none whitespace-nowrap">
                    ACHIEVEMENTS <span className="font-light">& RECOGNITION</span>
                </h2>
            </div>

            {/* PARALLAX AWARD LAYER (behind title, above background) */}
            <div className="absolute inset-0 pointer-events-none z-20">
                <div
                    id="award-grizz"
                    className="absolute left-[5%] top-[5%] w-[35vw] md:w-[18vw] text-center"
                >
                    <img
                        src="/assets/awards/grizzhacks6.jpg"
                        className="w-full h-auto object-contain"
                        alt="grizzhacks"
                    />
                    <p className="mt-2 text-[3vw] md:text-[1vw] font-semibold">
                        GRIZZHACKS 6 — BEST AUTOMOTIVE HACK
                    </p>
                </div>
            </div>
        </section>
    );
}
