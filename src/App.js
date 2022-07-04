import "./app.css";
import React from "react";
import NavBar from "./NavBar";
import Title from "./Title";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Carousel from "./Carousel";

const App = () => {
  return (
    <>
      <NavBar />
      <Title />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
