import React from "react";
import projectData from "./ProjectData";
import Project from "./Project";

const Projects = () => {
  const positions = ["previous", "current", "next"];

  const displayProjects = () => {
    return projectData.map((project, i) => {
      project["position"] = positions[i];
      return <Project data={project} key={project.name} />;
    });
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      {/* <div id="project-container"> */}
      <div className="carousel" data-gap="80">
        <figure>{displayProjects()}</figure>
        <nav>
          <button className="nav prev">Prev</button>
          <button className="nav next">Next</button>
        </nav>
      </div>
    </section>
  );
};

export default Projects;
