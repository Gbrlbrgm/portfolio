import React from "react";
import ServiceCard from "./ServiceCard";
import { ServicesData } from "@/constant/constant";

const Services = () => {
  return (
    <div id="services" className="pt-32 pb-16">
      <h1
        data-aos="fade-in"
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        My Services
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto flex flex-col md:flex-row sm gap-10 mt-16 items-center justify-center">
        {ServicesData.map((service, i) => (
          <div data-aos="fade-right" data-aos-delay={i * 100} key={service.id}>
            <ServiceCard
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
