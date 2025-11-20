export default function Achievements() {
    return (
        <section
            id="achievements"
            className="relative w-full h-screen text-white overflow-hidden px-12 py-24"
        >
            {/* Background */}
            <img
                src="/assets/awards.jpg"
                className="absolute inset-0 w-full h-full object-cover z-0"
                alt="Achievements Background"
            />

            {/* Centered Heading */}
            <div
                className="
                absolute top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 
                z-20 text-center
                "
            >
                <h2 className="text-[9vw] md:text-[4.5vw] font-extrabold leading-none whitespace-nowrap">
                    ACHIEVEMENTS <span className="font-light">& RECOGNITION</span>
                </h2>
            </div>

            {/* Scattered Certificates */}
            <div className="relative z-10 w-full h-full pointer-events-none">
                {/* 1 — Top Left (Your GrizzHacks Award) */}
                <div className="absolute left-[5%] top-[5%] w-[35vw] md:w-[18vw] text-center">
                    <img
                        src="/assets/awards/grizzhacks6.jpg"
                        className="w-full h-auto object-contain"
                    />
                    <p className="mt-2 text-[3vw] md:text-[1vw] font-semibold">
                        GRIZZHACKS 6 — BEST AUTOMOTIVE HACK
                    </p>
                </div>
            </div>
        </section>
    );
}
