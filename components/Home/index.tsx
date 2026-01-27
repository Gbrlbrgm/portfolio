import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Resume from "./Resume";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
