import "./app.css";
import React from "react";
import NavBar from "./NavBar";
import Title from "./Title";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { moveShadow } from "./utils/moveShadow";

const App = () => {
  return (
    <div onMouseMove={(e) => moveShadow(e)}>
      <NavBar />
      <Title />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
