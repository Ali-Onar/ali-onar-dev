"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const stack = [
  {
    key: "frontend",
    items: ["Next.js", "React", "React Native", "TypeScript", "TailwindCSS"],
    dot: "bg-sky-500",
    chip: "border-sky-200 bg-sky-50 text-sky-800",
  },
  {
    key: "backend",
    items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Prisma"],
    dot: "bg-violet-500",
    chip: "border-violet-200 bg-violet-50 text-violet-800",
  },
  {
    key: "infra",
    items: ["Vercel", "Railway", "Hetzner", "AWS", "Cloudflare"],
    dot: "bg-emerald-500",
    chip: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
  {
    key: "payments",
    items: ["Stripe", "Lemon Squeezy", "iyzico", "Param"],
    dot: "bg-brand",
    chip: "border-orange-200 bg-orange-50 text-orange-800",
  },
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-28">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-brand-deep">
              {t("About.eyebrow")}
            </span>
            <div className="mt-6 relative">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-brand/20 via-brand/5 to-transparent blur-xl"
              />
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-muted">
                <Image
                  src="/images/hero-image.jpeg"
                  alt={t("About.photoAlt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px w-8 bg-brand/50" />
                <span>{t("About.location")}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              {t("About.title")}
            </h2>

            <div className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>{t("About.p1")}</p>
              <p>{t("About.p2")}</p>
            </div>

            <div className="mt-12">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-brand-deep">
                {t("About.stackTitle")}
              </h3>
              <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {stack.map((group) => (
                  <div key={group.key}>
                    <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-foreground/70">
                      <span className={`h-1.5 w-1.5 rounded-full ${group.dot}`} />
                      {t(`About.categories.${group.key}`)}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className={`rounded-full border px-2.5 py-1 text-xs font-medium ${group.chip}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
