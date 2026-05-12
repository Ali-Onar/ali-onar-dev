"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Boxes, LifeBuoy, Smartphone, Lightbulb } from "lucide-react";

const items = [
  { key: "saas", Icon: Boxes },
  { key: "rescue", Icon: LifeBuoy },
  { key: "mobile", Icon: Smartphone },
  { key: "consulting", Icon: Lightbulb },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 md:py-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground">
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
          {items.map(({ key, Icon }) => (
            <div
              key={key}
              className="group flex flex-col gap-4 bg-background p-7 transition-colors hover:bg-muted/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
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
