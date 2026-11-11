"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, MoveRight } from "lucide-react";

const stats = ["experience", "products", "users"] as const;

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.14),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              <span aria-hidden className="h-px w-8 bg-brand" />
              {t("Hero.name")}
            </p>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("Hero.role")}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("Hero.intro")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-border pt-8 sm:gap-6">
              {stats.map((key) => (
                <div key={key} className="border-l-2 border-brand/70 pl-2.5 sm:pl-3">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                    {t(`Hero.stats.${key}.label`)}
                  </dt>
                  <dd className="mt-1 whitespace-nowrap text-xl font-semibold tracking-tight sm:text-2xl">
                    {t(`Hero.stats.${key}.value`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:ml-auto lg:mr-0 lg:max-w-[25rem]">
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 top-[11%] rounded-[2rem] border border-brand/15 bg-gradient-to-b from-brand-soft to-brand/25 shadow-xl shadow-brand/10"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 top-[11%] rounded-[2rem] grid-pattern opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
              />
              <div className="relative overflow-hidden rounded-b-[2rem] px-5">
                <Image
                  src="/images/ali-onar.png"
                  alt={t("Hero.photoAlt")}
                  width={498}
                  height={614}
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 344px, 360px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
