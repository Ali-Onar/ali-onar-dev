import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, Check, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MailLink from "@/components/MailLink";
import WhatsAppLink from "@/components/WhatsAppLink";
import {
  container,
  h2,
  primaryButton,
  secondaryButton,
} from "@/components/pageStyles";
import { pagePath } from "@/lib/pages";
import { SITE_URL, homePath, ogImage, type Locale } from "@/lib/site";
import trProcess from "@/locales/tr/process.json";
import enProcess from "@/locales/en/process.json";

type Item = { title: string; text: string };

type SampleSection = {
  title: string;
  /** Label and value pairs. */
  rows?: string[][];
  head?: string[];
  table?: string[][];
  foot?: string[];
  notes?: string[];
  groups?: { title: string; items: string[] }[];
  items?: string[];
  numbered?: Item[];
};

type ProcessContent = {
  metaTitle: string;
  metaDescription: string;
  home: string;
  name: string;
  title: string;
  lead: string;
  sampleLink: string;
  stepsTitle: string;
  steps: (Item & { tag?: string })[];
  termsTitle: string;
  terms: Item[];
  sample: {
    badge: string;
    eyebrow: string;
    title: string;
    note: string;
    meta: string[][];
    sections: SampleSection[];
  };
  cta: Item;
  whatsapp: string;
  email: string;
  whatsappMessage: string;
};

const content: Record<Locale, ProcessContent> = {
  tr: trProcess as unknown as ProcessContent,
  en: enProcess as unknown as ProcessContent,
};

const SAMPLE_ID = "sample";

export function buildProcessMetadata(locale: Locale): Metadata {
  const c = content[locale];
  const path = pagePath(locale, "process");
  const image = ogImage(locale);

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: path,
      languages: {
        tr: pagePath("tr", "process"),
        en: pagePath("en", "process"),
        "x-default": pagePath("en", "process"),
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

const bullet = "mt-2 h-1 w-1 shrink-0 rounded-full bg-brand";
const cell = "border-t border-border px-3 py-3 align-top";

/** Right-align the columns that hold figures (every column after the second). */
const align = (i: number) =>
  i >= 2 ? "text-right tabular-nums whitespace-nowrap" : "";

const Section = ({ section }: { section: SampleSection }) => (
  <section>
    <h4 className="text-lg font-semibold tracking-tight">{section.title}</h4>

    {section.rows && (
      <dl className="mt-4 divide-y divide-border border-y border-border text-[15px]">
        {section.rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="font-medium text-foreground">{label}</dt>
            <dd className="leading-relaxed text-foreground/80">{value}</dd>
          </div>
        ))}
      </dl>
    )}

    {section.table && (
      <div className="mt-4 overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[34rem] text-left text-sm">
          {section.head && (
            <thead className="bg-secondary/70 text-xs font-semibold text-foreground/70">
              <tr>
                {section.head.map((h, i) => (
                  <th
                    key={h}
                    scope="col"
                    className={`px-3 py-2.5 ${align(i)}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {section.table.map((row) => (
              <tr key={row[0]}>
                {row.map((value, i) => (
                  <td
                    key={i}
                    className={`${cell} ${align(i)} ${
                      i === 0 ? "min-w-[7.5rem] font-medium text-foreground" : "text-foreground/80"
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {section.foot && (
            <tfoot>
              <tr className="bg-secondary/40 font-semibold">
                {section.foot.map((value, i) => (
                  <td key={i} className={`${cell} ${align(i)}`}>
                    {value}
                  </td>
                ))}
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    )}

    {section.groups?.map((group) => (
      <div key={group.title} className="mt-5">
        <h5 className="text-[15px] font-semibold">{group.title}</h5>
        <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-foreground/80">
          {group.items.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className={bullet} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}

    {section.items && (
      <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-foreground/80">
        {section.items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className={bullet} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}

    {section.numbered && (
      <ol className="mt-4 space-y-3 text-[15px] leading-relaxed text-foreground/80">
        {section.numbered.map((item, i) => (
          <li key={item.title} className="flex gap-3">
            <span className="w-5 shrink-0 font-medium tabular-nums text-foreground">
              {i + 1}.
            </span>
            <span>
              <span className="font-medium text-foreground">{item.title}: </span>
              {item.text}
            </span>
          </li>
        ))}
      </ol>
    )}

    {section.notes && (
      <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
        {section.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    )}
  </section>
);

const ProcessPage = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const url = `${SITE_URL}${pagePath(locale, "process")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: c.home, item: `${SITE_URL}${homePath(locale)}` },
      { "@type": "ListItem", position: 2, name: c.name, item: url },
    ],
  };

  const contactButtons = (location: string) => (
    <div className="flex flex-wrap items-center gap-3">
      <WhatsAppLink
        message={c.whatsappMessage}
        location={location}
        className={primaryButton}
      >
        <FaWhatsapp aria-hidden size={17} />
        {c.whatsapp}
      </WhatsAppLink>
      <MailLink location={location} subject={c.name} className={secondaryButton}>
        <Mail aria-hidden className="h-4 w-4" />
        {c.email}
      </MailLink>
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
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
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
                    {c.home}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-foreground">
                  {c.name}
                </li>
              </ol>
            </nav>

            <h1 className="mt-10 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              {c.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {c.lead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`#${SAMPLE_ID}`} className={primaryButton}>
                {c.sampleLink}
                <ArrowDown aria-hidden className="h-4 w-4" />
              </a>
              <WhatsAppLink
                message={c.whatsappMessage}
                location="process_hero"
                className={secondaryButton}
              >
                <FaWhatsapp aria-hidden size={17} className="text-[#128C7E]" />
                {c.whatsapp}
              </WhatsAppLink>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/40 py-16 md:py-24">
          <div className={container}>
            <h2 className={h2}>{c.stepsTitle}</h2>
            <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {c.steps.map((step, i) => (
                <li key={step.title} className="border-t-2 border-brand/70 pt-5">
                  <span className="text-sm font-semibold text-brand-deep">{i + 1}</span>
                  <h3 className="mt-2 font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                  {step.tag && (
                    <span className="mt-3 inline-flex rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-brand-deep">
                      {step.tag}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className={container}>
            <h2 className={h2}>{c.termsTitle}</h2>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {c.terms.map((term) => (
                <li key={term.title} className="bg-background p-6">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft text-brand-deep">
                    <Check aria-hidden className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-4 font-semibold tracking-tight">{term.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {term.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id={SAMPLE_ID}
          className="scroll-mt-16 border-t border-border bg-secondary/40 py-16 md:py-24"
        >
          <div className={container}>
            <h2 className={h2}>{c.sample.eyebrow}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {c.sample.note}
            </p>

            <article className="mt-10 max-w-4xl rounded-2xl border border-border bg-background shadow-[0_30px_60px_-45px_rgba(60,35,10,0.5)]">
              <header className="border-b border-border p-6 sm:p-10">
                <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-brand-deep">
                  {c.sample.badge}
                </span>
                <h3 className="mt-4 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  {c.sample.title}
                </h3>
                <dl className="mt-6 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-3">
                  {c.sample.meta.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="mt-0.5 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </header>
              <div className="space-y-10 p-6 sm:p-10">
                {c.sample.sections.map((section) => (
                  <Section key={section.title} section={section} />
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="border-t border-border py-16 md:py-24">
          <div className={container}>
            <div className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand-soft via-brand-soft/60 to-background p-8 sm:p-12">
              <h2 className={h2}>{c.cta.title}</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {c.cta.text}
              </p>
              <div className="mt-8">{contactButtons("process_cta")}</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;
