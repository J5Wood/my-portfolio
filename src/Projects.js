import React from "react";
import projectData from "./ProjectData";
import Project from "./Project";

const Projects = () => {
  const displayProjects = () => {
    return projectData.map((project) => {
      return <Project data={project} key={project.name} />;
    });
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div id="project-container">{displayProjects()}</div>
    </section>
  );
};

export default Projects;
