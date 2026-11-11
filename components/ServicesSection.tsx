"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { serviceKeys, servicePath } from "@/lib/services";
import { serviceVisuals } from "./service/serviceVisuals";

const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="services" className="py-24 md:py-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-brand-deep">
            {t("Services.eyebrow")}
          </span>
          <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            {t("Services.title")}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t("Services.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {serviceKeys.map((key) => {
            const { Icon, tone } = serviceVisuals[key];

            return (
              <Link
                key={key}
                href={servicePath(i18n.language, key)}
                className="group relative flex flex-col bg-background p-6 transition-colors hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${tone}`}
                >
                  <Icon aria-hidden className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {t(`Services.items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(`Services.items.${key}.description`)}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-brand-deep">
                  {t("Services.more")}
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
