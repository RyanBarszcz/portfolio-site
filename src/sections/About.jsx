export default function About() {
    return (
        <section id="about" className="relative w-full text-white">

            {/* ABOUT ME Title */}
            <h2 className="text-[10vw] md:text-[5vw] font-extrabold leading-none mb-10">
                ABOUT <span className="font-light">ME</span>
            </h2>

            {/* GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">

                {/* LEFT — IMAGE (spans 2 columns) */}
                <div className="md:col-span-2 h-full overflow-hidden relative">
                    <img
                        id="about-image"
                        src="/assets/about3.jpg"
                        className="w-full h-full object-cover scale-150 object-center will-change-transform"
                        alt="About"
                    />
                </div>


                {/* RIGHT — TEXT CONTENT */}
                <div className="md:col-span-1 flex flex-col justify-between">

                    {/* MAIN PARAGRAPH */}
                    <p className="text-[4.5vw] md:text-[1.1vw] leading-[1.4] mb-6">
                        Hey, I'm Ryan Barszcz — a designer at heart and a developer by passion.
                        I build clean, modern, and meaningful digital experiences that focus not
                        just on visuals, but on how they make people feel.
                        <br /><br />
                        Over the past few years, I've been exploring the world of front-end
                        development, blending intuitive UI design with smooth interaction, motion,
                        and performance. I love turning ideas into polished, immersive interfaces
                        that feel alive and intentional.
                        <br /><br />
                        What drives me most is curiosity — the urge to learn, refine, experiment,
                        and push creative boundaries. Every project tells a story, and I’m obsessed
                        with crafting the small details that make that story resonate.
                        <br /><br />
                        Let’s build something that stands out, feels great to use, and genuinely
                        moves people.
                    </p>

                    {/* FUN FACT */}
                    <div className="mt-10">
                        <h3 className="text-[6vw] md:text-[2vw] font-extrabold mb-3">
                            FUN FACT
                        </h3>
                        <p className="text-[4vw] md:text-[1.2vw] leading-[1.4]">
                            During COVID, I built a social media page that grew so fast it could fill the
                            University of Michigan stadium — not once, but six times over.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
