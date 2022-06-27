import React from "react";

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <h1 id="name-header">Jeremy Wood</h1>
      <span id="nav-spacer"></span>
      <span className="nav-links">
        <button>About Me</button>
        <button>Projects</button>
        <button>Contact Me</button>
        <button>Resume</button>
      </span>
    </nav>
  );
};

export default NavBar;
