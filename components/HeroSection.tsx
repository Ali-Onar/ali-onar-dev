"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, MoveRight } from "lucide-react";

const stats = ["experience", "products", "users"] as const;

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.14),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 text-xs text-emerald-800 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-medium">{t("Hero.status")}</span>
            <span className="text-emerald-300">·</span>
            <span className="text-emerald-700/80">{t("Hero.location")}</span>
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

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/25 transition-all hover:bg-brand/90 hover:shadow-brand/35"
            >
              {t("Hero.primaryCta")}
              <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="https://www.linkedin.com/in/ali-tunacan-onar"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:bg-brand-soft"
            >
              {t("Hero.secondaryCta")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <dl className="grid grid-cols-3 gap-6 pt-10 border-t border-border w-full max-w-xl text-left mx-auto">
            {stats.map((key) => (
              <div key={key} className="border-l-2 border-brand/70 pl-3">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t(`Hero.stats.${key}.label`)}
                </dt>
                <dd className="mt-1 whitespace-nowrap text-2xl font-semibold tracking-tight">
                  {t(`Hero.stats.${key}.value`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
