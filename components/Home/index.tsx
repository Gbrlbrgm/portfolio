"use client";
import React, { useEffect } from "react";
import Hero from "./Hero";
import Services from "./Services";
import Resume from "./Resume";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 300,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);
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
