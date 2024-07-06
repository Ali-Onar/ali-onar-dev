"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Badge } from "./ui/badge";

const skillData = ["JavaScript", "TypeScript", "PostgreSQL", "MongoDB", "Supabase", "Nextjs", "React", "Fastify", "Clerk Auth", "Supabase Auth", "TailwindCSS", "ChakraUI", "Shadcn", "Material UI", "Vercel", "AWS Amplify", "AWS Beanstalk", "AWS S3", "AWS VPS", "AWS RDS", "and another AWS Web Services..."];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="pl-2 flex flex-wrap gap-2">
        {skillData.map((skill, index) => (
          <Badge key={index} className="text-white" variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

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
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg">
          I am a Full Stack Software Engineer developing web applications. I enjoy learning new things and meeting new people thanks to my passion for my profession. Recently I have been working on AI based SaaS projects. Here are some of the technologies I have experience with:
          </p>
          <div className="flex flex-row justify-start mt-8 text-3xl">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
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
