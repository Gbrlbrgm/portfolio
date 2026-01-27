import { ProjectsData } from "@/constant/constant";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br /> <span>projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {ProjectsData.map((project, i) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay={i * 100}
            key={project.id}
          >
            <Image
              src={project.image}
              alt="img"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
              {project.title}
            </h1>
            <h1 className="pt-2 font-medium text-white/80">
              {project.category}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
