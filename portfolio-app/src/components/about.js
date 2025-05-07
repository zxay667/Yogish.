import React from "react";

function About() {
  return (
    <section className="active">
      <h2>About Me</h2>
      <p>Hello! I am Yogish, a passionate web developer focused on MERN stack projects and want to learn more technologies. I enjoy creating dynamic and responsive web applications.</p>
      <div className="resume-section">
        <h3>Resume</h3>
        <a href="/resume.pdf" download>
          <button>Download My Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;
