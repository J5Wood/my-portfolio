import React, { useEffect } from "react";
import projectData from "./ProjectData";
import Project from "./Project";
import {
  handleMouseOver,
  handlePressedButton,
  unPressButton,
} from "./ButtonHelper";
// import { constructCarousel } from "./Carousel";

const Projects = () => {
  // const positions = ["previous", "current", "next"];

  const displayProjects = () => {
    return projectData.map((project, i) => {
      // project["position"] = positions[i];
      return <Project data={project} key={project.name} />;
    });
  };

  // useEffect(() => {
  //   let carousel = document.querySelector(".carousel");
  //   if (carousel) {
  //     constructCarousel(carousel);
  //   }
  // });

  return (
    <section id="projects">
      <h2>Projects</h2>
      {console.log(projectData)}
      <div className="project-container">{displayProjects()}</div>

      {/* <div className="carousel" data-gap="0">
        <button
          className="select prev"
          onMouseOver={handleMouseOver}
          onMouseDown={handlePressedButton}
          onMouseUp={unPressButton}
          onMouseLeave={unPressButton}
        >
          Prev
        </button>
        <figure>{displayProjects()}</figure>
        <button
          className="select next"
          onMouseOver={handleMouseOver}
          onMouseDown={handlePressedButton}
          onMouseUp={unPressButton}
          onMouseLeave={unPressButton}
        >
          Next
        </button>
      </div> */}
    </section>
  );
};

export default Projects;
