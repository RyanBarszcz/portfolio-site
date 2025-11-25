import TopSection from "./sections/TopSection";
import Navbar from "./components/Navbar";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

export default function App() {

  return (
    // TODO: Contact GSAP, Navbar Scroll Linking, Mobile/Tablet Design
    <>
      <Navbar />
      <SmoothScrollWrapper>
        <TopSection />
        <Projects />
        <Achievements />
        <Contact />
      </SmoothScrollWrapper>
    </>
  );
}
