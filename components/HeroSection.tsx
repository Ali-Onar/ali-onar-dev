"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="lg:py-16">
      <div className="flex flex-col items-center justify-center container mx-auto">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
          Hi, I&apos;m Ali Onar
        </h1>
        <p className="text-gray-200 mb-6 text-base sm:text-lg lg:text-xl">
          {t("Hero.description")}
        </p>
        <div>
          <Button
            variant="destructive"
            className="w-full sm:w-fit bg-gradient-to-br from-blue-600 via-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 hover:via-green-700 hover:to-blue-700"
            size="lg"
            onClick={() => {
              window.location.href = "mailto:alitunacanonar59@gmail.com";
            }}
          >
            {t("Hero.hireMe")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
