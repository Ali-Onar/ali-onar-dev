"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useTranslation } from "react-i18next";

const projectsData = [
  {
    title: "Load Muscle Web",
    description: "AI Workout Planner",
    image: "/images/projects/1.jpg",
    previewUrl: "https://www.loadmuscle.com/",
  },
  {
    title: "Sonic8",
    description: "Audio Watermarking SaaS",
    image: "/images/projects/2.jpg",
    previewUrl: "https://sonic8.io/",
  },
  {
    title: "Denersen",
    description: "AI Photo Editor",
    image: "/images/projects/3.jpg",
    previewUrl: "https://denersen.com/",
  },
  {
    title: "Load Muscle Mobile",
    description: "Fitness App & Workout Planner",
    image: "/images/projects/4.jpg",
    previewUrl: "https://loadmuscle.com/download",
  },
  {
    title: "AI Image Tutorial",
    description: "Full Stack Series - Youtube AI Tutorial",
    image: "/images/projects/5.jpg",
    previewUrl: "https://github.com/Ali-Onar/yt-nextjs-tutorial",
  },
  {
    title: "Youtube Full Stack Series",
    description: "Web Development Series with Next.js, Supabase, TailwindCSS and more",
    image: "/images/projects/6.jpg",
    previewUrl: "https://www.youtube.com/@alionar60",
  },
  {
    title: "MUI Dark / Light Theme",
    description: "Material UI Dark and Light Theme Switcher",
    image: "/images/projects/7.jpg",
    previewUrl: "https://github.com/Ali-Onar/next-mui-dark-light-mode",
  },
  {
    title: "Work with Me",
    description: "Let's Develop your Project Together",
    image: "/images/projects/8.jpg",
    previewUrl: "mailto:alitunacanonar59@gmail.com",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { t } = useTranslation();


  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t("Projects.title")}
      </h2>
      
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.image}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;