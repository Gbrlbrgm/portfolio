"use client";
import Image from "next/image";
import React from "react";
// import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative mt-50 flex items-center justify-center text-white overflow-hidden flex-col"
    >
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/profilepicture.webp"
          alt="heroimage"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 text-center font-bold tracking-wide"
        >
          Gabriel Bergamo
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-2 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: ["Software Engineer", "Frontend Specialist"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </span>
        </h2>
        {/* <a
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-10 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
          href="https://www.linkedin.com/in/gabriel-a-bergamo/"
          target="_blank"
        >
          <span>See my Work</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
