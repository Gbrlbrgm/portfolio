"use client";
import React from "react";
import {
  SiExpress,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Tilt from "react-parallax-tilt";

const skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact />,
  },
  {
    id: 4,
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    id: 5,
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    id: 7,
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    id: 8,
    name: "Jest",
    icon: <SiJest />,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-500">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill, i) => (
          <Tilt key={skill.id} scale={1.2} transitionSpeed={400}>
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={i * 50}
              className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
            >
              <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
              <p className="text-purple-400 mt-1">{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Skills;
