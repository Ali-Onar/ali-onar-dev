"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import TechStack from "./TechStack";

const principles = ["problem", "cost", "communication"] as const;

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-brand-deep">
          {t("About.eyebrow")}
        </span>
        <h2 className="mt-3 max-w-4xl text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          {t("About.title")}
        </h2>

        <p className="mt-8 max-w-[44rem] text-base sm:text-lg text-muted-foreground leading-relaxed">
          {t("About.p1")}
        </p>
        <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="h-px w-8 bg-brand/50" />
          <span>{t("About.location")}</span>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-semibold tracking-tight">
            {t("About.principlesTitle")}
          </h3>
          <dl className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
            {principles.map((key) => (
              <div key={key} className="border-t-2 border-brand/70 pt-4">
                <dt className="font-semibold tracking-tight">
                  {t(`About.principles.${key}.title`)}
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(`About.principles.${key}.text`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <TechStack />
      </div>
    </section>
  );
};

export default AboutSection;
