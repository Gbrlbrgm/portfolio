import React from "react";
import ServiceCard from "./ServiceCard";
import { ServicesData } from "@/constant/constant";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Lorem Ipsum
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        {ServicesData.map((service) => (
          <div key={service.id}>
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
