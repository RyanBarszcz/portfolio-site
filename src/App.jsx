import TopSection from "./sections/TopSection";
import Navbar from "./components/Navbar";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";

export default function App() {

  return (
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
