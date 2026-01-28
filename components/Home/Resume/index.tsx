import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { PiCertificate, PiLaptop, PiPen } from "react-icons/pi";

const Resume = () => {
  const workExperience = [
    {
      icon: FaReact,
      role: "Mid-Level Fullstack Developer",
      company: "Popcast",
    },
    {
      icon: FaCodepen,
      role: "Junior Fullstack .NET/React Developer",
      company: "Tecnologia Única",
    },
  ];

  const educationExperience = [
    {
      icon: PiLaptop,
      role: "Professional Full-Stack Development Program",
      company: "FSC - FullStackClub",
      date: "2025-2026",
    },
    {
      icon: PiPen,
      role: "Professional Training in Front-End Development & Web Design",
      company: "Origamid",
      date: "2023-2024",
    },
    {
      icon: PiCertificate,
      role: "BSc in Computer Engineering",
      company: "FIAP - Faculdade de Informática e Administração Paulista",
      date: "2020 - 2024",
    },
  ];

  return (
    <div id="experiences" className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1
            data-aos="fade-in"
            className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
          >
            My Work <span>Experience</span>
          </h1>
          <div className="mt-10">
            {workExperience.map((work, i) => (
              <div data-aos="slide-right" key={i}>
                <ResumeCard
                  Icon={work.icon}
                  role={work.role}
                  company={work.company}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1
            data-aos="fade-in"
            className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
          >
            My <span>Education</span>
          </h1>
          <div className="mt-10">
            {educationExperience.map((education, i) => (
              <div key={i} data-aos="slide-left">
                <ResumeCard
                  Icon={education.icon}
                  role={education.role}
                  company={education.company}
                  date={education.date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
