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
      <div className="carousel" data-gap="0">
        <button className="select prev">Prev</button>
        <figure>{displayProjects()}</figure>
        <button className="select next">Next</button>
      </div>
    </section>
  );
};

export default Projects;
