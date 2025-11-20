import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full h-screen text-white px-12 py-24 flex flex-col justify-between"
    >
      {/* Background */}
      <img
        src="/assets/bottom.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Contact Background"
      />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-[12vw] md:text-[6vw] font-extrabold leading-none mb-20">
          GET IN <span className="font-light">TOUCH</span>
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Column 1 */}
          <div>
            <p className="text-[4vw] md:text-[1.2vw] leading-[1.35] mb-6">
              Got an idea that's waiting to come alive? Let's build it together.
              Whether you're a designer, developer, or creative studio, I'd love
              to collaborate and turn your thoughts into something real.
            </p>

            <a
              href="mailto:ryan@example.com?subject=Let's%20Collaborate"
              className="border border-white px-6 py-3 inline-block hover:bg-white hover:text-black transition text-[3.5vw] md:text-[1vw]"
            >
              LET'S COLLABORATE
            </a>
          </div>

          {/* Column 2 */}
          <div>
            <p className="text-[4vw] md:text-[1.2vw] leading-[1.35] mb-6">
              If you're a company or digital agency looking for a developer who
              cares about details, motion, and meaningful design — I'm always open
              to exciting opportunities.
            </p>

            <a
              href="mailto:ryan@example.com?subject=Hiring%20Inquiry"
              className="border border-white px-6 py-3 inline-block hover:bg-white hover:text-black transition text-[3.5vw] md:text-[1vw]"
            >
              HIRE ME
            </a>
          </div>

          {/* Column 3 */}
          <div>
            <p className="text-[4vw] md:text-[1.2vw] leading-[1.35] mb-6">
              You can reach me anytime through my socials below — or drop a message.
              I'm always happy to connect, collaborate, or chat about new ideas.
            </p>

            {/* React Icon Links */}
            <div className="flex gap-6 mt-4">
              <a href="https://linkedin.com" target="_blank">
                <FaLinkedin className="text-white text-[8vw] md:text-[2.5vw] hover:opacity-60 transition" />
              </a>

              <a href="https://github.com" target="_blank">
                <FaGithub className="text-white text-[8vw] md:text-[2.5vw] hover:opacity-60 transition" />
              </a>

              <a href="https://github.com" target="_blank">
                <MdEmail className="text-white text-[8vw] md:text-[2.5vw] hover:opacity-60 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Optional footer name (like reference) */}
      {/* <h1 className="relative z-10 text-[30vw] md:text-[10vw] font-extrabold leading-none">
        RYAN BARSZCZ
      </h1> */}
    </section>
  );
}
