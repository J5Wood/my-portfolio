import React from "react";

const Project = (props) => {
  const { name, imgSrc, imgAlt, description, features, link } = props.data;
  const id = props.projectId;
  const inactiveLink = props.large ? "" : "inactiveLink";

  const root = document.documentElement;

  const changeRandomColor = () => {
    const randomColorValue = () => Math.floor(Math.random() * 256);
    root.style.setProperty(
      "--random-color",
      `rgba(${randomColorValue()},${randomColorValue()}, ${randomColorValue()}, 1)`
    );
  };

  const renderList = (features) => {
    return features.map((feature, i) => (
      <li key={i} data-id={id}>
        {feature}
      </li>
    ));
  };

  return (
    <>
      <div
        className="project-background"
        data-id={id}
        onMouseEnter={() => changeRandomColor()}
      >
        <div data-id={id} className={"project"}>
          <h3 data-id={id}>{name}</h3>
          <a
            data-id={id}
            className={inactiveLink}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              data-id={id}
              className="project-image"
              src={imgSrc}
              alt={imgAlt}
            />
          </a>
          <p data-id={id}>{description}</p>
          <ul data-id={id}>{renderList(features)}</ul>
          <a
            data-id={id}
            href={link}
            target="_blank"
            className="repository-link"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
