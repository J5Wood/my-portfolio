import React from "react";

const Project = (props) => {
  const { name, imgSrc, imgAlt, description, features, link } = props.data;

  const renderList = (features) => {
    return features.map((feature, i) => <li key={i}>{feature}</li>);
  };

  return (
    <div className="project">
      <h3>{name}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={imgSrc} alt={imgAlt} />
      </a>
      <p>{description}</p>
      <ul>{renderList(features)}</ul>
      <a
        href={link}
        target="_blank"
        className="link-button"
        rel="noopener noreferrer"
      >
        View Repository
      </a>
    </div>
  );
};

export default Project;
