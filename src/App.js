import "./app.css";
import React from "react";
import NavBar from "./NavBar";
import Title from "./Title";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Title />
      <AboutMe />
      <Contact />
    </>
  );
};

export default App;
