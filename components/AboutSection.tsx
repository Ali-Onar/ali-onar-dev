"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Badge } from "./ui/badge";
import { useTranslation } from "react-i18next";

const skillData = ["JavaScript", "TypeScript", "PostgreSQL", "MongoDB", "Supabase", "Expressjs", "Nextjs", "React", "Clerk Auth", "TailwindCSS", "ChakraUI", "Shadcn", "Material UI", "Vercel", "AWS Amplify", "AWS Beanstalk", "AWS S3", "AWS RDS"];

const coreSkills = ["Nextjs", "TypeScript", "Supabase", "Clerk Auth", "TailwindCSS", "Shadcn"];

const otherSkills = ["JavaScript", "MongoDB", "Expressjs", "React", "PostgreSQL", "Material UI", "Vercel", "AWS Amplify", "AWS Beanstalk", "AWS S3", "AWS RDS"];

const TAB_DATA = [
  {
    title: "Core Skills",
    id: "coreSkills",
    content: (
      <div className="pl-2 flex flex-wrap gap-2">
        {coreSkills.map((skill, index) => (
          <Badge key={index} className="text-white text-md" variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    title: "Other Skills",
    id: "otherSkills",
    content: (
      <div className="pl-2 flex flex-wrap gap-2">
        {otherSkills.map((skill, index) => (
          <Badge key={index} className="text-white text-md" variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("coreSkills");
  const [isPending, startTransition] = useTransition();

  const { t } = useTranslation();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/about.webp" alt="About me" width={500} height={500} priority={false} className="rounded-lg" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t("About.title")}</h2>
          <p className="text-white text-base md:text-lg">
          {t("About.description")}
          </p>
          <div className="flex flex-row justify-start mt-8 text-3xl">
            <TabButton
              selectTab={() => handleTabChange("coreSkills")}
              active={tab === "coreSkills"}
            >
              {/* {t("About.skills")} */}
              Core Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("otherSkills")}
              active={tab === "otherSkills"}
            >
              {/* {t("About.skills")} */}
              Other Skills
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
