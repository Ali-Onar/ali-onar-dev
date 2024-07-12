"use client";

import { useTranslation } from "react-i18next";
import { FaLaptopCode, FaPencilAlt, FaRegLightbulb, FaRocket, FaTools } from "react-icons/fa";

const whatICanDo = [
  {
    title: "Landing Page",
    description: "Engaging and responsive landing pages tailored to your product or service.",
    icon: <FaRocket />
  },
  {
    title: "Web Development",
    description: "Building and enhancing websites to meet your business needs.",
    icon: <FaLaptopCode />
  },
  {
    title: "SaaS Development",
    description: "Custom software solutions designed to streamline your business operations.",
    icon: <FaTools />
  },
  {
    title: "Consulting",
    description: "Expert advice to optimize your software development processes.",
    icon: <FaRegLightbulb />
  },
  {
    title: "Technical Writing",
    description: "Clear and concise technical documentation for your projects.",
    icon: <FaPencilAlt />
  }
];

const WhatCanIDoForYouSection = () => {
  const { t } = useTranslation();

  return (
    <section id="whatCanIDo">
      <div className="py-8">
        <h2 className="text-center text-4xl font-bold text-white my-8 md:mb-12">
          What Can I Do For You?
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 ">
          {whatICanDo.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center justify-center text-center p-4 text-white">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg text-[30px] shadow-xl bg-gray-800">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold">
                {feature.title}
              </h3>
              <p className="mt-2 text-base font-medium text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatCanIDoForYouSection;
