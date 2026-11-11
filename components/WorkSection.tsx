"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, ChevronDown, MoveRight, Sparkles } from "lucide-react";
import { projects, type Status } from "@/lib/projects";

const statusStyles: Record<Status, string> = {
  live: "border-emerald-200 bg-emerald-50/90 text-emerald-700",
  production: "border-blue-200 bg-blue-50/90 text-blue-700",
  client: "border-orange-200 bg-orange-50/90 text-brand-deep",
};

/** Projects shown before the visitor asks for the rest. */
const INITIAL_COUNT = 6;

const WorkSection = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  const toggle = () => {
    // Collapsing leaves the visitor far below the list, so bring it back into view.
    if (showAll) document.getElementById("work")?.scrollIntoView();
    setShowAll((v) => !v);
  };

  return (
    <section id="work" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-brand-deep">
              {t("Work.eyebrow")}
            </span>
            <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              {t("Work.title")}
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl">
              {t("Work.subtitle")}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {visible.map((p) => {
            const highlights = t(`Work.projects.${p.key}.highlights`, {
              returnObjects: true,
            }) as string[];

            return (
              <article
                key={p.key}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_12px_40px_-12px_hsl(var(--brand)/0.25)]"
              >
                <div className="p-3 pb-0">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border-2 border-border bg-secondary">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={t("Work.preview", { title: p.title })}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        unoptimized
                      />
                    ) : (
                      <div
                        aria-hidden
                        className={`absolute inset-0 bg-gradient-to-br ${p.accent}`}
                      >
                        <span className="absolute inset-0 grid-pattern opacity-50" />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="text-5xl font-semibold tracking-tight text-foreground/40">
                            {p.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                          </span>
                        </span>
                      </div>
                    )}

                    <div className="absolute left-3 top-3">
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider backdrop-blur ${statusStyles[p.status]}`}
                      >
                        {t(`Work.status.${p.status}`)}
                      </span>
                    </div>

                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={t("Work.visit", { title: p.title })}
                        className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/85 text-foreground backdrop-blur transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-col p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`Work.projects.${p.key}.tagline`)}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={toggle}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {showAll
                ? t("Work.showLess")
                : t("Work.showAll", { total: projects.length })}
              <ChevronDown
                aria-hidden
                className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}

        <a
          href="#contact"
          className="group relative mt-10 block overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-brand-soft via-background to-background transition-all hover:border-brand/60 hover:shadow-[0_12px_40px_-12px_hsl(var(--brand)/0.35)]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl transition-transform duration-700 group-hover:scale-125"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-pattern opacity-40 [mask-image:linear-gradient(to_left,black,transparent_60%)]"
          />
          <div className="relative flex flex-col justify-center gap-5 p-8 md:p-10">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-deep">
              <Sparkles className="h-3.5 w-3.5" />
              {t("Work.ctaEyebrow")}
            </span>
            <h3 className="text-balance text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.15]">
              {t("Work.ctaTitle")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
              {t("Work.ctaSubtitle")}
            </p>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/25 transition-all group-hover:bg-brand/90 group-hover:shadow-brand/40">
                {t("Work.ctaButton")}
                <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default WorkSection;
