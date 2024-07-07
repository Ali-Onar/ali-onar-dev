"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Languages",
    value: "2",
  },
  {
    metric: "Partners",
    value: "5",
  },
  {
    metric: "Products",
    value: "4",
  },
];

const AchievementsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{t(`achievements.metric.${achievement.metric}`)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
