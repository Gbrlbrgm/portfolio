import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Resume from "./Resume";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Resume />
    </div>
  );
};

export default Home;
