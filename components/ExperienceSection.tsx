"use client";

import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "SeamlessCARE",
    position: "Software Engineer",
    date: "Oct 2022 - Jun 2024",
    description: (
      <>
        SeamlessCare is focussed on an AI-based emotion analyser for people who
        are non-verbal. I worked on two different projects here:
        <br />
        <br />
        <strong>Project 1:</strong> Developing an admin panel for detailed
        analyses about the services used and customers. Technologies I used:
        MongoDB API, React, Material UI, PostgreSQL, Express.js, AWS (Beanstalk,
        Cognito, Amplify, RDS, VPS)
        <br />
        <br />
        <strong>Project 2:</strong> Development of the Client Panel of a emotion
        analysis application for organisations. This project is a B2B SaaS
        product. Technologies I used: Nextjs, TypeScript, Supabase, Clerk,
        Material UI, Vercel
      </>
    ),
  },
  {
    company: "Merit Risk",
    position: "Software Developer",
    date: "May 2021 - Jan 2022",
    description:
      "I contributed to the Web-based Analysis application being developed for the special needs of banks. Technologies I use: PHP, Laravel, JavaScript, MySQL, AWS Lambda",
  },
  {
    company: "Pailab",
    position: "Software Developer",
    date: "Dec 2016 - Oct 2017",
    description:
      "I founded Pailab with my friends during my university years, we developed web projects. Technologies I use: html, css, php",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Experience
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:mx-10">
          {experiences.map((experience, index) => (
            <div key={index}>
              <ExperienceCard
                company={experience.company}
                position={experience.position}
                date={experience.date}
                description={experience.description}
              />
              {experiences.length - 1 !== index && (
                <div className="flex items-center justify-center mt-6">
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    className="w-1 h-full"
                  >
                    <svg
                      height="60"
                      width="20"
                      className="mx-auto"
                    >
                      <path
                        d="M10 0 Q 15 50 10 100 T 10 200"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray="4"
                      />
                    </svg>
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
