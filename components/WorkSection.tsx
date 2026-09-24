"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, MoveRight, Sparkles } from "lucide-react";

type Status = "live" | "production" | "client";

type Project = {
  key: string;
  title: string;
  status: Status;
  stack: string[];
  url?: string;
  image?: string;
  accent: string;
};

const projects: Project[] = [
  {
    key: "toptantursu",
    title: "Toptan Turşu",
    status: "client",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Railway", "Cloudflare"],
    url: "https://toptantursu.com/",
    image: "/images/projects/toptantursu.jpg",
    accent: "from-green-500/25 to-lime-500/10",
  },
  {
    key: "adilanaliz",
    title: "AdilAnaliz",
    status: "client",
    stack: ["Next.js", "TypeScript", "RAG", "iyzico", "Hetzner"],
    url: "https://adilanaliz.com/",
    image: "/images/projects/adilanaliz.jpg",
    accent: "from-slate-500/25 to-zinc-500/10",
  },
  {
    key: "aktek",
    title: "Aktek Elektromekanik",
    status: "client",
    stack: ["Next.js", "TypeScript", "SEO", "TailwindCSS", "Railway"],
    url: "https://aktekelektromekanik.com/",
    image: "/images/projects/aktek-elektromekanik.jpg",
    accent: "from-cyan-500/25 to-blue-500/10",
  },
  {
    key: "rumimetric",
    title: "RumiMetric",
    status: "client",
    stack: ["Next.js", "Supabase", "TailwindCSS", "TypeScript", "Railway"],
    url: "https://rumimetric.com/",
    image: "/images/projects/rumimetric.jpg",
    accent: "from-lime-500/25 to-green-500/10",
  },
  {
    key: "tekliftamam",
    title: "TeklifTamam",
    status: "client",
    stack: ["Next.js", "Supabase", "TypeScript", "TailwindCSS", "Railway"],
    url: "https://tekliftamam.com/",
    image: "/images/projects/tekliftamam.jpg",
    accent: "from-amber-500/25 to-yellow-500/10",
  },
  {
    key: "tigaa",
    title: "Tigaa",
    status: "client",
    stack: ["Next.js", "Supabase", "TypeScript", "OpenAI", "Cloudflare"],
    url: "https://tigaa.com.tr/",
    image: "/images/projects/tigaa.jpg",
    accent: "from-orange-500/25 to-amber-500/10",
  },
  {
    key: "meritrisk",
    title: "Merit Risk Platform Rewrite",
    status: "live",
    stack: ["Next.js", "Express", "PostgreSQL", "TypeScript", "AWS"],
    url: "https://meritrisk.com.tr/",
    image: "/images/projects/meritrisk.jpg",
    accent: "from-blue-500/25 to-indigo-500/10",
  },
  {
    key: "kolaytadilat",
    title: "KolayTadilat",
    status: "client",
    stack: ["Vite", "React", "TanStack", "Express", "Supabase", "Param"],
    url: "https://kolaytadilat.com/",
    image: "/images/projects/kolaytadilat.jpg",
    accent: "from-emerald-500/25 to-teal-500/10",
  },
  {
    key: "ireturnticket",
    title: "IReturnTicket",
    status: "client",
    stack: ["Next.js", "Supabase", "Lemon Squeezy", "Resend", "Railway"],
    url: "https://ireturnticket.com/",
    image: "/images/projects/ireturnticket.jpg",
    accent: "from-violet-500/25 to-purple-500/10",
  },
  {
    key: "sonic8",
    title: "Sonic8",
    status: "live",
    stack: [
      "Next.js",
      "Supabase",
      "Clerk",
      "Lemon Squeezy",
      "Edge Functions",
      "Vercel",
    ],
    url: "https://sonic8.io/",
    image: "/images/projects/sonic8.jpg",
    accent: "from-sky-500/25 to-cyan-500/10",
  },
  {
    key: "oneclickgenerator",
    title: "OneClickGenerator",
    status: "client",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Railway"],
    url: "https://oneclickgenerator.io/",
    image: "/images/projects/oneclickgenerator.jpg",
    accent: "from-rose-500/25 to-pink-500/10",
  },
  {
    key: "denersen",
    title: "Denersen",
    status: "live",
    stack: ["Next.js", "TailwindCSS", "Supabase", "Lemon Squeezy", "Railway"],
    url: "https://denersen.com/",
    image: "/images/projects/denersen.jpg",
    accent: "from-fuchsia-500/25 to-purple-500/10",
  },
  {
    key: "loadmuscle",
    title: "LoadMuscle Web & Mobile",
    status: "live",
    stack: ["React Native", "Expo", "Next.js", "Supabase", "Vercel"],
    url: "https://www.loadmuscle.com/",
    image: "/images/projects/loadmuscle-web.jpg",
    accent: "from-yellow-500/25 to-orange-500/10",
  },
];

const statusStyles: Record<Status, string> = {
  live: "border-emerald-200 bg-emerald-50/90 text-emerald-700",
  production: "border-blue-200 bg-blue-50/90 text-blue-700",
  client: "border-orange-200 bg-orange-50/90 text-brand-deep",
};

const WorkSection = () => {
  const { t } = useTranslation();

  return (
    <section id="work" className="py-24 md:py-32 border-t border-border bg-secondary/40">
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
          {projects.map((p) => {
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
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider backdrop-blur ${statusStyles[p.status]}`}
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
                        className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[11px] text-foreground/70"
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

        <a
          href="#contact"
          className="group relative mt-6 block overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-brand-soft via-background to-background transition-all hover:border-brand/60 hover:shadow-[0_12px_40px_-12px_hsl(var(--brand)/0.35)]"
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
