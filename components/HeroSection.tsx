"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, MoveRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t("Hero.status")}
            <span className="text-border">·</span>
            <span>{t("Hero.location")}</span>
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
            {t("Hero.name")}
            <span className="block text-muted-foreground font-normal mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              {t("Hero.role")}
            </span>
          </h1>

          <p className="text-balance text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {t("Hero.intro")}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-foreground/85 transition-colors"
            >
              {t("Hero.primaryCta")}
              <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="https://www.linkedin.com/in/ali-tunacan-onar"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              {t("Hero.secondaryCta")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <dl className="grid grid-cols-3 gap-6 pt-10 border-t border-border w-full max-w-xl text-left mx-auto">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Experience
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">5+ yrs</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Products shipped
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">12+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Users reached
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">20k+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
