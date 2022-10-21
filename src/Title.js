import React from "react";
import picture from "./assets/portfolio-picture.png";

// ***** When you scroll down, have names of technologies you use fade in and out

const Title = () => {
  return (
    <section id="title">
      <img
        id="title-image"
        src={picture}
        alt="Jeremy Wood, smiling in a grey suit."
      ></img>
    </section>
  );
};

export default Title;
