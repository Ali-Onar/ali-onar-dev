"use client";

import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "SeamlessCARE",
    position: "Software Engineer",
    date: "Oct 2022 - Present",
    description: (
      <>
        SeamlessCARE Ltd. develops innovative assistive technologies grounded in years of health care, industry, and academic research. It offers an AI model that can interpret the emotions of nonverbal individuals through its mobile applications, which are used in care homes, long-term care facilities, and hospitals.
        <br />
        <br />
        <b>Accomplishments</b>
        <ul className="list-disc list-inside">
          <li>Developed requirements, system analysis and design of SeamlessCARE&apos;s web-based products.</li>
          <li>Developed the admin panel for SeamlessCARE using React, MongoDB, PostgreSQL, Node.js and hosted on AWS.</li>
          <li>Developed a SaaS product for emotion analysis in nonverbal individuals.</li>
          <li>Developed a SaaS platform for inaudible audio watermarking.</li>
          <li>Developed a web and mobile fitness platform using Next.js, React Native, PostgreSQL, and TypeScript.</li>
          <li>Implemented error logging and monitoring with Sentry.</li>
        </ul>
        <br />
        <b>Skills:</b>
        <br />
        Full-Stack Development, RESTful WebServices, Next.js, Supabase, PostgreSQL, Software as a Service (SaaS), TypeScript, Tailwind CSS, AWS, MongoDB, Material UI, React.js, Node.js, React Native
      </>
    ),
  },
  {
    company: "Merit Risk",
    position: "Software Developer",
    date: "May 2021 - Jan 2022",
    description: (
      <>
        Financial risk management company that offers various analysis models for risk assessment of financial institutions, sovereign nations, and operational resilience. The Software Engineering team was responsible for creating SaaS products using the internal econometric models developed by the finance team and various external stakeholders.
        <br />
        <br />
        <b>Accomplishments</b>
        <ul className="list-disc list-inside">
          <li>Development and reorganization of business risk rating models for companies and countries.</li>
          <li>Developed a new model using PHP, MySQL, JavaScript to upload risk assessment models produced by the Finance team using Excel to the web portal.</li>
          <li>Organized Merit Risk&apos;s server maintenance and professional e-mails.</li>
          <li>Researched and developed alternatives and new technologies and presented them to teammates.</li>
          <li>Developed analytical, creative problem solving and communication skills.</li>
        </ul>
        <br />
        <br />
        <b>Skills:</b>
        <br />
        PHP, MySQL, Laravel, AWS, JavaScript
      </>
    ),
  },
  {
    company: "Pailab",
    position: "Software Developer",
    date: "Dec 2016 - Oct 2017",
    description: (
      <>
        In Pailab, which I founded with my friends during my university years, we developed websites for personal needs.
        <br />
        <br />
        <b>Skills:</b>
        <br />
        HTML, CSS, PHP, MySQL, JavaScript
      </>
    ),
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
