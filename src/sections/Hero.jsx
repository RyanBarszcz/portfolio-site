export default function Hero() {
  return (
    <div className="w-full pb-[6vw] md:pb-0 flex flex-col md:flex-row items-stretch justify-between">

      {/* LEFT SIDE — MAIN TITLE */}
      <div className="mb-[2.1vw] md:mb-0 overflow-hidden">
        <h1 className="text-white md:text-[7vw] text-[8vw] leading-[0.9] font-bold uppercase">
          <span>creative</span>
          <span className="font-light"> designer</span>
          <br />
          <span className="font-bold">and Developer.</span>
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-[90%] md:w-[32%] flex flex-col justify-between">

        <div>
          {/* PARAGRAPH */}
          <h4 className="text-white text-[3.5vw] md:text-[1.17vw] leading-[1.05]">
            A designer who loves to code and a developer who loves to design. I
            create things that look simple, but feel alive. For me, a good
            website isn't just about pixels and performance—it's about how it
            makes people feel when they use it.
          </h4>

          {/* MOVE PEOPLE LINE */}
          <h3 className="text-white text-[4vw] md:text-[2.5vw] leading-[1.1] mt-[2.5vw] md:mt-[0.8vw] font-extrabold">
            MOVE PEOPLE, <span className="font-light">NOT JUST SCREENS.</span>
          </h3>
        </div>

        {/* BUTTONS */}
        <div className="flex mt-[2.5vw] md:mt-0 gap-[3vw] md:gap-[1.5vw]">

          {/* LET'S COLLABORATE */}
          <a
            href="mailto:rbarszcz@umich.edu?subject=Let's%20Collaborate"
            className="border border-white px-[4vw] md:px-[2vw] py-[1.5vw] md:py-[0.65vw] text-white text-[4vw] md:text-[1.3vw] tracking-wide hover:bg-white hover:text-black transition"
          >
            LET'S COLLABORATE
          </a>

          {/* HIRE ME */}
          <a
            href="mailto:rbarszcz@umich.edu?subject=Hiring%20Inquiry"
            className="border border-white px-[4vw] md:px-[2vw] py-[1.5vw] md:py-[0.65vw] text-white text-[4vw] md:text-[1.3vw] tracking-wide hover:bg-white hover:text-black transition"
          >
            HIRE ME
          </a>
        </div>
      </div>
    </div>
  );
}
