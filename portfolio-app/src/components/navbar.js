import React from "react";

function Navbar({ setActive }) {
  return (
    <header>
      <div className="logo">
        <p>Yogish</p>
      </div>
      <nav>
        <a onClick={() => setActive("about")}>About Me</a>
        <a onClick={() => setActive("skills")}>Skills</a>
        <a onClick={() => setActive("projects")}>Projects</a>
      </nav>
    </header>
  );
}

export default Navbar;

