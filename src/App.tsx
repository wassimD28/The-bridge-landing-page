import { useEffect } from "react";
import { Navbar } from "./components/navbar.component";
import { CoursesSection } from "./sections/courses.section";
import { HomeSection } from "./sections/home.section";
import Lenis from "lenis";
import { ContactSection } from "./sections/contact.section";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time:any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },[])
  return (
    <>
      <Navbar />
      <HomeSection />
      <div className="h-svh"></div> {/* spacer  */}
      <CoursesSection />
      <div className="h-svh"></div> {/* spacer  */}
      <ContactSection/>
    </>
  );
}

export default App;
