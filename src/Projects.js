import React, { useState } from "react";
import projectData from "./ProjectData";
import Project from "./Project";

const Projects = () => {
  const [largeDisplay, setLargeDisplay] = useState(null);
  window.addEventListener("click", (e) => enlargeContainer(e));

  const displayProjects = () => {
    return projectData.map((project, i) => {
      return <Project data={project} key={project.name} projectId={i} />;
    });
  };

  const enlargeContainer = (e) => {
    const id = e.target.dataset.id;
    if (id || id === 0) {
      setLargeDisplay(id);
    } else {
      setLargeDisplay(null);
    }
  };

  const displayEnlargedProject = () => {
    const project = projectData[largeDisplay];
    if (project) {
      return (
        <div className="large-project-display">
          <span className="button-spacer">
            <button onClick={(e) => enlargeContainer(e)}>X</button>
          </span>

          <Project data={project} key={project.name} projectId={largeDisplay} />
        </div>
      );
    }
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-container" onClick={(e) => enlargeContainer(e)}>
        {displayProjects()}
        {displayEnlargedProject()}
      </div>
    </section>
  );
};

export default Projects;
