import React from "react";
import resume from "./assets/resume.pdf";
import {
  handleMouseOver,
  handlePressedButton,
  unPressButton,
} from "./ButtonHelper";

const NavBar = () => {
  const navigateToSection = (event, correction = 0) => {
    let container = event.target.dataset.linkedComponent;
    window.scrollTo(
      0,
      document.getElementById(container).offsetTop + correction
    );
  };

  return (
    <nav id="nav-bar">
      <h1 id="name-header">Jeremy Wood</h1>
      <span id="nav-spacer"></span>
      <span className="nav-links">
        <button
          className="nav-button"
          onMouseOver={handleMouseOver}
          onMouseDown={handlePressedButton}
          onMouseUp={unPressButton}
          onMouseLeave={unPressButton}
          data-linked-component="about-me"
          onClick={(e) => navigateToSection(e, -50)}
        >
          About Me
        </button>
        <button
          className="nav-button"
          onMouseOver={handleMouseOver}
          onMouseDown={handlePressedButton}
          onMouseUp={unPressButton}
          onMouseLeave={unPressButton}
          data-linked-component="projects"
          onClick={(e) => navigateToSection(e, -0)}
        >
          Projects
        </button>
        <button
          className="nav-button"
          onMouseOver={handleMouseOver}
          onMouseDown={handlePressedButton}
          onMouseUp={unPressButton}
          onMouseLeave={unPressButton}
          data-linked-component="contact"
          onClick={(e) => navigateToSection(e)}
        >
          Contact Me
        </button>
        <a
          className="nav-button"
          href={resume}
          target="_blank"
          onMouseOver={handleMouseOver}
          onMouseDown={handlePressedButton}
          onMouseUp={unPressButton}
          onMouseLeave={unPressButton}
          download
        >
          Resume
        </a>
      </span>
    </nav>
  );
};

export default NavBar;
