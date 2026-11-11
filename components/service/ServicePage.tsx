import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, Mail } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppLink from "@/components/WhatsAppLink";
import VideoEmbed from "./VideoEmbed";
import { serviceVisuals } from "./serviceVisuals";
import { getProject } from "@/lib/projects";
import { serviceKeys, servicePath, type ServiceKey } from "@/lib/services";
import {
  EMAIL,
  SITE_URL,
  homeAnchor,
  homePath,
  ogImage,
  type Locale,
} from "@/lib/site";
import trServices from "@/locales/tr/services.json";
import enServices from "@/locales/en/services.json";

type Item = { title: string; text: string };

type ServiceContent = {
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  summary: { for: string; deliver: string; how: string };
  included: Item[];
  projects: { key: string; note: string }[];
  cases?: (Item & {
    metrics?: { value: string; label: string }[];
    note?: string;
  })[];
  videos?: { id: string; title: string }[];
  proofLink?: { text: string; label: string; url: string };
  process: Item[];
  faq: { q: string; a: string }[];
  cta: Item;
  whatsappMessage: string;
};

type ServicesFile = {
  ui: Record<string, string>;
  items: Record<ServiceKey, ServiceContent>;
};

const content: Record<Locale, ServicesFile> = {
  tr: trServices as unknown as ServicesFile,
  en: enServices as unknown as ServicesFile,
};

export function buildServiceMetadata(locale: Locale, key: ServiceKey): Metadata {
  const c = content[locale].items[key];
  const path = servicePath(locale, key);
  const image = ogImage(locale);

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        tr: servicePath("tr", key),
        en: servicePath("en", key),
        "x-default": servicePath("en", key),
      },
    },
    openGraph: {
      type: "website",
      siteName: "Ali Onar",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url: path,
      title: c.metaTitle,
      description: c.metaDescription,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
      images: [image.url],
    },
  };
}

const container = "mx-auto max-w-6xl px-6 lg:px-8";
const h2 = "text-balance text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]";
const primaryButton =
  "inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/25 transition-all hover:bg-brand/90 hover:shadow-brand/35";
const secondaryButton =
  "inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:bg-brand-soft";

type Props = { locale: Locale; serviceKey: ServiceKey };

const ServicePage = ({ locale, serviceKey }: Props) => {
  const { ui, items } = content[locale];
  const c = items[serviceKey];
  const { Icon, tone } = serviceVisuals[serviceKey];
  const url = `${SITE_URL}${servicePath(locale, serviceKey)}`;
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(c.name)}`;

  const projects = c.projects
    .map((p) => ({ ...p, project: getProject(p.key) }))
    .filter((p) => p.project);

  const summary = [
    [ui.summaryFor, c.summary.for],
    [ui.summaryDeliver, c.summary.deliver],
    [ui.summaryHow, c.summary.how],
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.title,
      description: c.metaDescription,
      url,
      provider: { "@type": "Person", name: "Ali Onar", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.home, item: `${SITE_URL}${homePath(locale)}` },
        { "@type": "ListItem", position: 2, name: ui.services, item: `${SITE_URL}${homeAnchor(locale, "services")}` },
        { "@type": "ListItem", position: 3, name: c.name, item: url },
      ],
    },
  ];

  const contactButtons = (location: string) => (
    <div className="flex flex-wrap items-center gap-3">
      <WhatsAppLink
        message={c.whatsappMessage}
        location={`${location}_${serviceKey}`}
        className={primaryButton}
      >
        <FaWhatsapp aria-hidden size={17} />
        {ui.whatsapp}
      </WhatsAppLink>
      <a href={mailto} className={secondaryButton}>
        <Mail aria-hidden className="h-4 w-4" />
        {ui.email}
      </a>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_at_top,hsl(var(--brand)/0.12),transparent_60%)]"
          />
          <div className={`relative ${container}`}>
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href={homePath(locale)} className="hover:text-brand-deep">
                    {ui.home}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={homeAnchor(locale, "services")} className="hover:text-brand-deep">
                    {ui.services}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-foreground">
                  {c.name}
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${tone}`}
                >
                  <Icon aria-hidden className="h-6 w-6" />
                </span>
                <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
                  {c.title}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {c.lead}
                </p>
                <div className="mt-8">{contactButtons("service_hero")}</div>
              </div>

              <dl className="rounded-2xl border border-brand/15 bg-brand-soft/70 p-6 sm:p-7 lg:col-span-5">
                {summary.map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-brand/15 py-5 first:pt-0 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm font-semibold text-brand-deep">{label}</dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-foreground/85">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/40 py-16 md:py-24">
          <div className={container}>
            <h2 className={h2}>{ui.included}</h2>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {c.included.map((item) => (
                <li key={item.title} className="bg-background p-6">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft text-brand-deep">
                    <Check aria-hidden className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-4 font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className={container}>
            <h2 className={h2}>{ui.proof}</h2>

            {c.cases && (
              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                {c.cases.map((item) => (
                  <article
                    key={item.title}
                    className="flex flex-col rounded-2xl border border-border bg-background p-6 sm:p-8"
                  >
                    <h3 className="text-balance text-xl font-semibold leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                    {item.metrics && (
                      <div className="mt-auto pt-7">
                        <ul className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                          {item.metrics.map((m) => (
                            <li key={m.label} className="border-l-2 border-brand/70 pl-3">
                              <span className="block whitespace-nowrap text-2xl font-semibold tracking-tight sm:text-3xl">
                                {m.value}
                              </span>
                              <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                                {m.label}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {item.note && (
                          <p className="mt-4 text-xs text-muted-foreground">{item.note}</p>
                        )}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}

            {projects.length > 0 && (
              <div
                className={`mt-10 grid gap-5 ${
                  projects.length === 1
                    ? "max-w-xl"
                    : projects.length === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-3"
                }`}
              >
                {projects.map(({ project, note }) => (
                  <article
                    key={project!.key}
                    className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background"
                  >
                    {project!.image && (
                      <div className="relative aspect-[16/9] border-b border-border bg-secondary">
                        <Image
                          src={project!.image}
                          alt={ui.preview.replace("{{title}}", project!.title)}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {project!.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {note}
                      </p>
                      {project!.url && (
                        <a
                          href={project!.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-brand-deep hover:text-brand"
                        >
                          {ui.visit}
                          <ArrowUpRight aria-hidden className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {c.proofLink && (
              <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {c.proofLink.text}
              </p>
            )}

            {c.videos && (
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {c.videos.map((v) => (
                  <VideoEmbed
                    key={v.id}
                    id={v.id}
                    title={v.title}
                    playLabel={ui.play.replace("{{title}}", v.title)}
                  />
                ))}
              </div>
            )}

            {c.proofLink && (
              <a
                href={c.proofLink.url}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 ${secondaryButton}`}
              >
                <FaYoutube aria-hidden size={17} className="text-[#FF0000]" />
                {c.proofLink.label}
              </a>
            )}
          </div>
        </section>

        <section className="border-t border-border bg-secondary/40 py-16 md:py-24">
          <div className={container}>
            <h2 className={h2}>{ui.process}</h2>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {c.process.map((step, i) => (
                <li key={step.title} className="border-t-2 border-brand/70 pt-5">
                  <span className="text-sm font-semibold text-brand-deep">{i + 1}</span>
                  <h3 className="mt-2 font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className={container}>
            <h2 className={h2}>{ui.faq}</h2>
            <div className="mt-8 max-w-3xl border-t border-border">
              {c.faq.map((f) => (
                <details key={f.q} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown
                      aria-hidden
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="pb-6 pr-10 leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className={container}>
            <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand-soft via-brand-soft/60 to-background p-8 sm:p-12">
              <h2 className={h2}>{c.cta.title}</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {c.cta.text}
              </p>
              <div className="mt-8">{contactButtons("service_cta")}</div>
            </div>

            <div className="mt-16">
              <h2 className="text-lg font-semibold tracking-tight">{ui.otherServices}</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {serviceKeys
                  .filter((key) => key !== serviceKey)
                  .map((key) => {
                    const other = serviceVisuals[key];
                    return (
                      <li key={key}>
                        <Link
                          href={servicePath(locale, key)}
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:border-brand/40 hover:bg-brand-soft hover:text-brand-deep"
                        >
                          <other.Icon aria-hidden className="h-4 w-4 text-muted-foreground" />
                          {items[key].name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
