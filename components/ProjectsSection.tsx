"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Load Muscle",
    description: "Your Ideal Fitness Partner to Stay Fit and Healthy",
    image: "/images/projects/x1.png",
    tag: ["All", "Web", "SaaS"],
    gitUrl: "https://www.loadmuscle.com/",
    previewUrl: "https://www.loadmuscle.com/",
  },
  {
    id: 2,
    title: "MUI Dark / Ligh Theme",
    description: "Material UI Dark and Light Theme Switcher",
    image: "/images/projects/x2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ali-Onar/next-mui-dark-light-mode",
    previewUrl: "https://github.com/Ali-Onar/next-mui-dark-light-mode",
  },
  {
    id: 3,
    title: "Todo App",
    description: "A Simple Todo App with Nextjs",
    image: "/images/projects/x3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ali-Onar/nextjs-supabase-todo-app",
    previewUrl: "https://github.com/Ali-Onar/nextjs-supabase-todo-app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="SaaS"
          isSelected={tag === "SaaS"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;