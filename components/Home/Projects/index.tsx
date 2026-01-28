import { ProjectsNames } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import { CiLink } from "react-icons/ci";

const Projects = () => {
  return (
    <div id="projects" className="pt-16 pb-16">
      <h1
        data-aos="fade-in"
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        A small selection of recent <br /> <span>projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {ProjectsNames.map((project) => (
          <a
            href={project.url}
            target="_blank"
            data-aos="fade-up"
            key={project.id}
          >
            <Image
              src={project.thumb}
              alt="img"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-white block hover:text-cyan-300 transition-all duration-200">
              {project.name}
              <CiLink className="inline-block w-6 h-6 ml-1" />
            </p>
            <h1 className="pt-2 font-medium text-white/80">
              {project.description}
            </h1>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
