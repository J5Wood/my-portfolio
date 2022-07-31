import React from "react";
import picture from "./assets/portfolio-picture.png";

const Title = () => {
  const moveShadow = (e) => {
    const title = document.querySelector("#title");
    const image = document.querySelector("#title-image");
    const walk = 70;
    const { offsetWidth: width, offsetHeight: height } = title;
    let { clientX: x, clientY: y } = e;

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);
    image.style.boxShadow = `
    ${xWalk}px ${yWalk}px 20px 0px rgba(0, 255, 204, 0.3),
    ${xWalk * -1}px ${yWalk * -1}px 20px 0px rgba(29, 250, 0, 0.3)
      `;
  };

  return (
    <section id="title" onMouseMove={(e) => moveShadow(e)}>
      <img
        id="title-image"
        src={picture}
        alt="Jeremy Wood, smiling in a grey suit."
      ></img>
    </section>
  );
};

export default Title;
