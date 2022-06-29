import "./app.css";
import React from "react";
import NavBar from "./NavBar";
import Title from "./Title";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Title />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
