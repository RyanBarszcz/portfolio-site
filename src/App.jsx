import TopSection from "./sections/TopSection";
import Navbar from "./components/Navbar";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";

export default function App() {

  return (
    // TODO: TopSection GSAP, Projects, Contact, Navbar Scroll Linking, Mobile/Tablet Design
    <>
      <Navbar />
      <SmoothScrollWrapper>
        <TopSection />
        {/* <Projects />
      <Contact /> */}
      </SmoothScrollWrapper>
    </>
  );
}
