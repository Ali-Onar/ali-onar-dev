"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Self-Employed",
    position: "Full-Stack Engineer",
    date: "Nov 2025 - Present",
    location: "Remote",
    summary:
      "Building SaaS products and B2B platforms end-to-end. Greenfield builds and rescues of stalled codebases.",
    bullets: [
      "Tigaa: Multi-tenant B2B procurement SaaS with a WhatsApp Business API + OpenAI quote engine.",
      "KolayTadilat: Two-sided renovation marketplace - took over a stalled codebase and shipped to production.",
      "IReturnTicket: Travel documentation SaaS with licensed GDS integration and automated PDF generation.",
      "Merit Risk rewrite: Modernizing a 10-year-old multi-tenant risk platform used by major Turkish banks.",
    ],
    stack: ["Next.js", "Supabase", "Express", "PostgreSQL", "TypeScript", "Cloudflare"],
  },
  {
    company: "Papak Software Ltd",
    position: "Full-Stack Engineer",
    date: "Jun 2024 - Jun 2025",
    location: "Istanbul, Türkiye",
    summary: "Papak builds SaaS-based products across fitness and audio tech.",
    bullets: [
      "Built a cross-platform fitness application (web + mobile) with Next.js, React Native, TypeScript, PostgreSQL, and Supabase.",
      "Designed and shipped a SaaS for inaudible audio watermarking, integrating third-party APIs with high data integrity.",
    ],
    stack: ["Next.js", "React Native", "TypeScript", "PostgreSQL", "Supabase"],
  },
  {
    company: "seamlessCARE Ltd",
    position: "Full-Stack Software Engineer",
    date: "Oct 2022 - Jun 2024",
    location: "Istanbul, Türkiye",
    summary:
      "AI-powered assistive technologies for nonverbal individuals in care environments.",
    bullets: [
      "Led requirements gathering, system analysis, and architectural design of a B2B SaaS product.",
      "Built a custom admin panel (React, Node.js, PostgreSQL, MongoDB) on AWS for internal AI service and user management.",
      "Developed an emotion analysis SaaS integrating a proprietary AI model for hospitals and care homes.",
      "Integrated Sentry for system-wide error tracking and real-time performance monitoring.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "MongoDB", "AWS", "Sentry"],
  },
  {
    company: "Merit Risk",
    position: "Junior Software Developer",
    date: "May 2021 - Jan 2022",
    location: "Istanbul, Türkiye",
    summary:
      "Financial risk management - SaaS products built around internal econometric models.",
    bullets: [
      "Developed and reorganized business risk rating models for companies and countries.",
      "Built a tool to upload Excel-based risk assessment models from the finance team to the web portal.",
      "Owned server maintenance and professional email infrastructure.",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Laravel"],
  },
  {
    company: "Pailab",
    position: "Junior Developer",
    date: "Dec 2016 - Oct 2017",
    location: "Tekirdağ, Türkiye",
    summary:
      "Student venture I co-founded - built websites for early-stage clients.",
    bullets: [
      "Contributed to early-stage products, gaining hands-on experience in full-cycle development.",
    ],
    stack: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
  },
];

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t("Experience.eyebrow")}
          </span>
          <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            {t("Experience.title")}
          </h2>
        </div>

        <ol className="mt-14 relative border-l border-border ml-2 md:ml-4 space-y-12">
          {experiences.map((exp) => (
            <li key={exp.company} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-foreground ring-4 ring-background" />
              <ExperienceCard {...exp} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
