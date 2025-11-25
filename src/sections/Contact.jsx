import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full h-screen text-white px-12 py-24 flex items-center"
    >
      {/* Background */}
      <img
        src="/assets/bottom1.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Contact Background"
      />

      {/* Grid Wrapper */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[110rem]">

        {/* LEFT COLUMN — Title + Text + Buttons + Icons */}
        <div className="flex flex-col gap-12">

          {/* Title */}
          <h2 className="text-[14vw] md:text-[7vw] font-extrabold leading-none">
            CONTACT <span className="font-light">ME</span>
          </h2>

          {/* Section 1 */}
          <div>
            <p className="text-[4vw] md:text-[1.1vw] leading-[1.4] mb-4">
              Got an idea that’s waiting to come alive? Let's build it together.
              Whether you're a designer, developer, or a creative studio, I'd love
              to collaborate and turn your thoughts into something real.
            </p>

            <a
              href="mailto:rbarszcz@umich.edu?subject=Let's%20Collaborate"
              className="border border-white px-6 py-3 inline-block hover:bg-white hover:text-black transition text-[4vw] md:text-[1vw]"
            >
              LET'S COLLABORATE
            </a>
          </div>

          {/* Section 2 */}
          <div>
            <p className="text-[4vw] md:text-[1.1vw] leading-[1.4] mb-4">
              If you're a company or digital agency looking for a developer who
              cares about details, motion, and meaningful design — I’m always open
              to exciting opportunities.
            </p>

            <a
              href="mailto:rbarszcz@umich.edu?subject=Hiring%20Inquiry"
              className="border border-white px-6 py-3 inline-block hover:bg-white hover:text-black transition text-[4vw] md:text-[1vw]"
            >
              HIRE ME
            </a>
          </div>

          {/* Section 3 */}
          <div>
            <p className="text-[4vw] md:text-[1.1vw] leading-[1.4] mb-6">
              You can reach me anytime through my socials below — or drop a message.
              I'm always happy to connect, collaborate, or chat about new ideas.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/ryan-barszcz-4924931b6/" target="_blank" rel="noreferrer"  aria-label="LinkedIn" >
                <FaLinkedin className="text-white text-[10vw] md:text-[3vw] hover:opacity-60 transition"/>
              </a>

              <a href="https://github.com/RyanBarszcz" target="_blank" rel="noreferrer"  aria-label="GitHub" >
                <FaGithub className="text-white text-[10vw] md:text-[3vw] hover:opacity-60 transition"/>
              </a>

              <a href="mailto:rbarszcz@umich.edu"  aria-label="Email">
                <MdEmail className="text-white text-[10vw] md:text-[3vw] hover:opacity-60 transition"/>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — Empty for design balance */}
        <div className="hidden md:block"></div>

      </div>
    </section>
  );
}
