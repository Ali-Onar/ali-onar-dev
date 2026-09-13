"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    key: "self",
    stack: ["Next.js", "Supabase", "Express", "PostgreSQL", "TypeScript", "Cloudflare"],
  },
  {
    key: "papak",
    stack: ["Next.js", "React Native", "TypeScript", "PostgreSQL", "Supabase"],
  },
  {
    key: "seamlesscare",
    stack: ["React", "Node.js", "PostgreSQL", "MongoDB", "AWS", "Sentry"],
  },
  {
    key: "meritrisk",
    stack: ["PHP", "MySQL", "JavaScript", "Laravel"],
  },
  {
    key: "pailab",
    stack: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
  },
];

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-brand-deep">
            {t("Experience.eyebrow")}
          </span>
          <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            {t("Experience.title")}
          </h2>
        </div>

        <ol className="mt-14 relative border-l border-border ml-2 md:ml-4 space-y-12">
          {experiences.map((exp, i) => {
            const base = `Experience.items.${exp.key}`;
            const bullets = t(`${base}.bullets`, { returnObjects: true }) as string[];
            const current = i === 0;

            return (
              <li key={exp.key} className="relative pl-8 md:pl-12">
                <span
                  className={`absolute -left-[5px] top-2 flex h-2.5 w-2.5 rounded-full ring-4 ring-background ${
                    current ? "bg-brand" : "bg-foreground/30"
                  }`}
                >
                  {current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  )}
                </span>
                <ExperienceCard
                  company={t(`${base}.company`)}
                  position={t(`${base}.position`)}
                  date={t(`${base}.date`)}
                  location={t(`${base}.location`)}
                  summary={t(`${base}.summary`)}
                  bullets={bullets}
                  stack={exp.stack}
                  current={current}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
