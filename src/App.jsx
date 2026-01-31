import { useRef } from "react";
import Home from "./Home";
import About from "./Aboutme";
import Skills from "./Skills";
import Project from "./Project"


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <div className="d-flex justify-content-end fixed-top text-white">
        <div className="m-2 btn text-white" onClick={() => scrollTo(homeRef)}>HOME</div>
        <div className="m-2 btn text-white" onClick={() => scrollTo(aboutRef)}>ABOUT</div>
        <div className="m-2 btn text-white" onClick={() => scrollTo(skillsRef)}>SKILLS</div>
        <div className="m-2 btn text-white" onClick={() => scrollTo(projectRef)}>PROJECT</div>
      </div>

      {/* Sections */}
      <section ref={homeRef}><Home /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={skillsRef}><Skills/></section>
      <section ref={projectRef}><Project/></section>
      
    </>
  );
}

export default App;
