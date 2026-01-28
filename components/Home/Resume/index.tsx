import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span>Experience</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard
              Icon={FaReact}
              role="Mid-Level Fullstack Developer"
              company="Popcast"
            />
            <ResumeCard
              Icon={FaCodepen}
              role="Junior Fullstack .NET/React Developer"
              company="Tecnologia Única"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span>Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumeCard
              Icon={BiBadge}
              role="BSc in Computer Engineering"
              date="2020 - 2024"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
