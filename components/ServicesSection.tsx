"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Boxes, LifeBuoy, Smartphone, Lightbulb } from "lucide-react";

const items = [
  {
    key: "saas",
    Icon: Boxes,
    tone: "border-orange-200 bg-orange-50 text-brand-deep",
    glow: "from-brand/15",
  },
  {
    key: "rescue",
    Icon: LifeBuoy,
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
    glow: "from-emerald-500/15",
  },
  {
    key: "mobile",
    Icon: Smartphone,
    tone: "border-sky-200 bg-sky-50 text-sky-700",
    glow: "from-sky-500/15",
  },
  {
    key: "consulting",
    Icon: Lightbulb,
    tone: "border-violet-200 bg-violet-50 text-violet-700",
    glow: "from-violet-500/15",
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

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

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {items.map(({ key, Icon, tone, glow }) => (
            <div
              key={key}
              className="group relative flex flex-col gap-4 overflow-hidden bg-background p-7 transition-colors hover:bg-muted/40"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div
                className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:-translate-y-0.5 ${tone}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold tracking-tight">
                  {t(`Services.items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(`Services.items.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
