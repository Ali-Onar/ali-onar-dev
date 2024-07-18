"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/AliTunacan_Onar_Resume.pdf";
    link.download = "AliTunacan_Onar_Resume.pdf";
    link.click();
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
              {t("Hero.greeting")}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Ali",
                3000,
                "Software Engineer",
                3000,
                "SaaS Developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            {t("Hero.description")}
          </p>
          <div>
            <button
              className="w-full sm:w-fit bg-gradient-to-br from-blue-500 via-green-500 to-blue-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full ml-4 mr-4"
              onClick={() => {
                window.location.href = "mailto:alitunacanonar59@gmail.com";
              }}
            >
              {t("Hero.hireMe")}
            </button>
            <button
              className="w-full sm:w-fit m-4 bg-gradient-to-br from-blue-500 via-green-500 to-blue-500 px-1 py-1 text-white rounded-full"
              onClick={handleDownloadCV}
              disabled
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {t("Hero.downloadCV")}
              </span>
            </button>
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[220px] lg:w-[500px] lg:h-[380px] relative">
            <Image
              src="/images/hero-image.jpeg"
              alt="Hero Image"
              width={448}
              height={336}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
