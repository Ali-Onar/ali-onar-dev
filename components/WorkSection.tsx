"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, MoveRight } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  status: "Live" | "In production" | "Client work";
  highlights: string[];
  stack: string[];
  url?: string;
  image?: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "AdilAnaliz",
    tagline: "RAG-powered AI platform for legal professionals.",
    status: "Client work",
    highlights: [
      "Significantly improved the RAG pipeline behind the legal AI chat, including retrieval quality and response relevance.",
      "Auth hardening, iyzico payment integration, dealer/reseller model, and referral system.",
      "Ongoing AI chat UX and conversation improvements, deployed on Hetzner.",
    ],
    stack: ["Next.js", "TypeScript", "RAG", "iyzico", "Hetzner"],
    url: "https://adilanaliz.com/",
    image: "/images/projects/adilanaliz.jpg",
    accent: "from-slate-500/25 to-zinc-500/10",
  },
  {
    title: "Aktek Elektromekanik",
    tagline: "SEO-focused corporate site for an industrial chiller service company.",
    status: "Client work",
    highlights: [
      "Technical and on-page SEO work targeting first-page rankings for chiller service keywords in the Marmara region.",
      "Local SEO structure, service pages, and performance optimization built on Next.js.",
    ],
    stack: ["Next.js", "TypeScript", "SEO", "TailwindCSS", "Railway"],
    url: "https://aktekelektromekanik.com/",
    image: "/images/projects/aktek-elektromekanik.jpg",
    accent: "from-cyan-500/25 to-blue-500/10",
  },
  {
    title: "RumiMetric",
    tagline: "Comprehensive livestock ration and feed planning platform.",
    status: "Client work",
    highlights: [
      "Took an AI-generated HTML/CSS/JS prototype and rebuilt it from scratch as a full production app.",
      "Ration calculation, animal and feed management, and reporting flows on a modern stack.",
      "Auth, database, and storage on Supabase; deployed on Railway.",
    ],
    stack: ["Next.js", "Supabase", "TailwindCSS", "TypeScript", "Railway"],
    url: "https://rumimetric.com/",
    image: "/images/projects/rumimetric.jpg",
    accent: "from-lime-500/25 to-green-500/10",
  },
  {
    title: "TeklifTamam",
    tagline: "Multi-search quoting tool that speeds up wholesalers' quote workflows.",
    status: "Client work",
    highlights: [
      "Bulk multi-product search so wholesalers can build quotes in minutes instead of hours.",
      "Product catalog, quote management, and user flows built on Next.js and Supabase.",
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "TailwindCSS", "Railway"],
    url: "https://tekliftamam.com/",
    image: "/images/projects/tekliftamam.jpg",
    accent: "from-amber-500/25 to-yellow-500/10",
  },
  {
    title: "Tigaa",
    tagline: "B2B procurement SaaS with WhatsApp + AI quote engine.",
    status: "Client work",
    highlights: [
      "Multi-tenant data model with dual buyer/supplier roles, catalogs, and quote management.",
      "WhatsApp Business API + OpenAI bot that extracts products from PDFs and images, then generates quote documents.",
      "Multi-channel comms (WhatsApp, SMS, email), supplier confirmation automation, analytics dashboards.",
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "OpenAI", "Cloudflare"],
    url: "https://tigaa.com.tr/",
    image: "/images/projects/tigaa.jpg",
    accent: "from-orange-500/25 to-amber-500/10",
  },
  {
    title: "Merit Risk Platform Rewrite",
    tagline: "Modernizing a 10-year-old multi-tenant risk platform used by major Turkish banks.",
    status: "Live",
    highlights: [
      "Full rewrite from PHP/MySQL to Next.js, Express, and PostgreSQL.",
      "Migration plan for live tenants without breaking existing risk models.",
      "Re-architected the data layer around econometric models from the finance team.",
    ],
    stack: ["Next.js", "Express", "PostgreSQL", "TypeScript", "AWS"],
    url: "https://meritrisk.com.tr/",
    image: "/images/projects/meritrisk.jpg",
    accent: "from-blue-500/25 to-indigo-500/10",
  },
  {
    title: "KolayTadilat",
    tagline: "Two-sided marketplace for homeowners and renovation pros.",
    status: "Client work",
    highlights: [
      "Took over a stalled AI-generated codebase and shipped it to production.",
      "Built Express backend from scratch; redesigned the database for scalability.",
      "Credit-based applications, milestone payments via Param, SMS verification, email.",
    ],
    stack: ["Vite", "React", "TanStack", "Express", "Supabase", "Param"],
    url: "https://kolaytadilat.com/",
    image: "/images/projects/kolaytadilat.jpg",
    accent: "from-emerald-500/25 to-teal-500/10",
  },
  {
    title: "IReturnTicket",
    tagline: "Travel documentation SaaS for visa applicants and border crossings.",
    status: "Client work",
    highlights: [
      "Public booking flow, admin panel, and automated PDF generation.",
      "Licensed GDS integration for real onward/return ticket documents.",
      "Payments + automated email delivery, deployed on Vercel.",
    ],
    stack: ["Next.js", "Supabase", "Lemon Squeezy", "Resend", "Railway"],
    url: "https://ireturnticket.com/",
    image: "/images/projects/ireturnticket.jpg",
    accent: "from-violet-500/25 to-purple-500/10",
  },
  {
    title: "Sonic8",
    tagline: "AI watermark generator and audio enhancement SaaS for sound files.",
    status: "Live",
    highlights: [
      "Inaudible AI watermarking for audio files, with Dolby APIs powering the audio enhancement pipeline.",
      "Heavy use of Supabase Edge Functions to talk to Modal-hosted AI APIs from the serverless layer.",
      "Auth, billing, and dashboard for processing and downloading watermarked audio.",
    ],
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
    title: "OneClickGenerator",
    tagline: "AI-powered privacy policy and support page generator for mobile apps.",
    status: "Client work",
    highlights: [
      "Generates production-ready legal pages from a few app details.",
      "Stripe checkout, Prisma data layer, deployed on Railway.",
    ],
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Railway"],
    url: "https://oneclickgenerator.io/",
    image: "/images/projects/oneclickgenerator.jpg",
    accent: "from-rose-500/25 to-pink-500/10",
  },
  {
    title: "Denersen",
    tagline: "Turkish AI SaaS that turns raw product photos into professional product imagery and video.",
    status: "Live",
    highlights: [
      "Personal project built to explore the fal.ai image and video model APIs.",
      "End-to-end flow from upload to generated, downloadable product visuals.",
      "Subscription billing and full Turkish UX, currently live in production.",
    ],
    stack: ["Next.js", "TailwindCSS", "Supabase", "Lemon Squeezy", "Railway"],
    url: "https://denersen.com/",
    image: "/images/projects/denersen.jpg",
    accent: "from-fuchsia-500/25 to-purple-500/10",
  },
  {
    title: "LoadMuscle Web & Mobile",
    tagline: "AI workout planner, built solo and shipped to production.",
    status: "Live",
    highlights: [
      "15,000+ app users and 60,000+ monthly web visitors.",
      "React Native + Expo on mobile; Next.js on web with shared types.",
      "Personalized programs generated from user goals and equipment.",
    ],
    stack: ["React Native", "Expo", "Next.js", "Supabase", "Vercel"],
    url: "https://www.loadmuscle.com/",
    image: "/images/projects/loadmuscle-web.jpg",
    accent: "from-yellow-500/25 to-orange-500/10",
  },
];

const statusStyles: Record<Project["status"], string> = {
  Live: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
  "In production": "bg-blue-500/10 text-blue-700 border-blue-200",
  "Client work": "bg-foreground/5 text-foreground border-border",
};

const WorkSection = () => {
  const { t } = useTranslation();

  return (
    <section id="work" className="py-24 md:py-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground">
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
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-foreground/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            >
              <div className="p-3 pb-0">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border-2 border-border bg-secondary">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`${p.title} preview`}
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
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider backdrop-blur ${statusStyles[p.status]}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${p.title}`}
                      className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background"
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
                  {p.tagline}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
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
          ))}
        </div>

        <a
          href="#contact"
          className="group mt-6 relative grid overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-foreground/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] md:grid-cols-2"
        >
          <div className="p-3">
            <div className="relative aspect-[16/9] md:aspect-auto md:h-full md:min-h-[260px] overflow-hidden rounded-xl border border-border bg-secondary">
              <Image
                src="/images/projects/cta.jpg"
                alt="Work with me"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                unoptimized
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
            <span className="inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t("Work.ctaEyebrow")}
            </span>
            <h3 className="text-balance text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.15]">
              {t("Work.ctaTitle")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
              {t("Work.ctaSubtitle")}
            </p>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors group-hover:bg-foreground/85">
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
