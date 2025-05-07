import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  const [active, setActive] = useState("about");

  return (
    <>
      <Navbar setActive={setActive} />
      <div className="container">
        {active === "about" && <About />}
        {active === "skills" && <Skills />}
        {active === "projects" && <Projects />}
      </div>
    </>
  );
}

export default App;
