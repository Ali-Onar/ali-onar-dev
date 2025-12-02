"use client";

import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Freelance",
    position: "Full Stack Engineer",
    date: "Nov 2025 - Present",
    description: (
      <>
        As a freelancer, I develop web and mobile applications for clients.
        <br />
        <br />
        <b>Skills:</b>
        <br />
        Full-Stack Development, SaaS, TypeScript, Next.js, React Native, React.js, Supabase, PostgreSQL, TailwindCSS
      </>
    ),
  },
  {
    company: "Papak Software Ltd",
    position: "Full Stack Engineer",
    date: "Jun 2024 - Jun 2025",
    description: (
      <>
        Papak is a software company that develops SaaS-based products.
        <br />
        <br />
        <b>Accomplishments</b>
        <ul className="list-disc list-inside">
          <li>Created a cross-platform fitness application for web and mobile using Next.js, React Native, TypeScript, PostgreSQL, and Supabase, increasing client engagement by providing personalized fitness experiences.</li>
          <li>Designed and implemented a SaaS solution for inaudible audio watermarking, integrating with third-party APIs and ensuring high data integrity.</li>
        </ul>
        <br />
        <b>Skills:</b>
        <br />
        Full-Stack Development, TypeScript, Next.js, React Native, React.js, Supabase, PostgreSQL, TailwindCSS
      </>
    ),
  },
  {
    company: "SeamlessCARE Ltd",
    position: "Full Stack Engineer",
    date: "Oct 2022 - Jun 2024",
    description: (
      <>
        SeamlessCARE develops AI-powered assistive technologies to support nonverbal individuals in care environments.
        <br />
        <br />
        <b>Accomplishments</b>
        <ul className="list-disc list-inside">
          <li>Led the requirements gathering, system analysis, and architectural design of B2B SaaS product.</li>
          <li>Built a custom admin panel using React, Node.js, PostgreSQL, and MongoDB, deployed on AWS, enabling internal teams to manage AI services and users efficiently.</li>
          <li>Developed an emotion analysis SaaS platform integrating a proprietary AI model to support nonverbal individuals in hospitals and care homes.</li>
          <li>Integrated Sentry for system-wide error tracking and real-time performance monitoring.</li>
        </ul>
        <br />
        <b>Skills:</b>
        <br />
        Full-Stack Development, SaaS, RESTful WebServices, Next.js, Supabase, PostgreSQL, TypeScript, TailwindCSS, AWS, MongoDB, Material UI, React.js, Node.js, React Native
      </>
    ),
  },
  {
    company: "Merit Risk",
    position: "Software Developer",
    date: "May 2021 - Jan 2022",
    description: (
      <>
        Financial risk management company that offers various analysis models for risk assessment of financial institutions, sovereign nations, and operational resilience.
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
