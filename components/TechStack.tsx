"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiCloudflare,
  SiExpress,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGoogletagmanager,
  SiHetzner,
  SiLighthouse,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRailway,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  Braces,
  Citrus,
  Cloud,
  CreditCard,
  Gauge,
  Megaphone,
  Monitor,
  Search,
  Server,
  type LucideIcon,
} from "lucide-react";

type Tech = { name: string; Icon: IconType | LucideIcon; color: string };

type Layer = {
  key: string;
  Icon: LucideIcon;
  tone: string;
  items: Tech[];
};

const INK = "#18181B";

/** The three layers every product is built on, top to bottom. */
const stack: (Layer & { inset: string; surface: string })[] = [
  {
    key: "frontend",
    Icon: Monitor,
    tone: "border-sky-200 bg-sky-50 text-sky-700",
    inset: "md:mx-8",
    surface: "bg-background",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: INK },
      { name: "React", Icon: SiReact, color: "#0E8FB8" },
      { name: "React Native", Icon: SiReact, color: "#0E8FB8" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "TailwindCSS", Icon: SiTailwindcss, color: "#0EA5C4" },
    ],
  },
  {
    key: "backend",
    Icon: Server,
    tone: "border-violet-200 bg-violet-50 text-violet-700",
    inset: "md:mx-4",
    surface: "bg-[hsl(30_25%_98.5%)]",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#4F8F3F" },
      { name: "Express", Icon: SiExpress, color: INK },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Supabase", Icon: SiSupabase, color: "#2BA873" },
      { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    key: "infra",
    Icon: Cloud,
    tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
    inset: "",
    surface: "bg-[hsl(30_20%_96.5%)]",
    items: [
      { name: "Vercel", Icon: SiVercel, color: INK },
      { name: "Railway", Icon: SiRailway, color: INK },
      { name: "Hetzner", Icon: SiHetzner, color: "#D50C2D" },
      { name: "AWS", Icon: SiAmazonaws, color: "#E88A00" },
      { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
    ],
  },
];

/** Work around the product: getting paid, getting found, getting customers. */
const growth: Layer[] = [
  {
    key: "payments",
    Icon: CreditCard,
    tone: "border-orange-200 bg-orange-50 text-brand-deep",
    items: [
      { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
      { name: "Lemon Squeezy", Icon: Citrus, color: "#D99A00" },
      { name: "iyzico", Icon: CreditCard, color: "#1E64FF" },
      { name: "Param", Icon: CreditCard, color: "#52525B" },
    ],
  },
  {
    key: "seo",
    Icon: Search,
    tone: "border-rose-200 bg-rose-50 text-rose-700",
    items: [
      { name: "Search Console", Icon: SiGooglesearchconsole, color: "#458CF5" },
      { name: "Core Web Vitals", Icon: Gauge, color: "#0F9D58" },
      { name: "Schema.org", Icon: Braces, color: "#B4002A" },
      { name: "Lighthouse", Icon: SiLighthouse, color: "#F44B21" },
    ],
  },
  {
    key: "ads",
    Icon: Megaphone,
    tone: "border-amber-200 bg-amber-50 text-amber-700",
    items: [
      { name: "Google Ads", Icon: SiGoogleads, color: "#4285F4" },
      { name: "Google Analytics", Icon: SiGoogleanalytics, color: "#E37400" },
      { name: "Tag Manager", Icon: SiGoogletagmanager, color: "#246FDB" },
    ],
  },
];

const TechTile = ({ name, Icon, color }: Tech) => (
  <li className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-2.5 py-1.5 text-[13px] font-medium text-foreground/90">
    <Icon aria-hidden className="h-4 w-4 shrink-0" style={{ color }} />
    {name}
  </li>
);

/** A curly brace that stretches to the height of what it groups. */
const Brace = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 100"
    preserveAspectRatio="none"
    className="h-full w-5 text-brand"
    fill="none"
  >
    <path
      d="M21 1 C13 1 12 5 12 11 L12 41 C12 46 9 50 3 50 C9 50 12 54 12 59 L12 89 C12 95 13 99 21 99"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {t("About.stackTitle")}
      </h3>
      <p className="mt-3 max-w-2xl text-base text-muted-foreground">
        {t("About.stackSubtitle")}
      </p>

      <div className="mt-10 md:grid md:grid-cols-[auto_1fr] md:gap-x-4">
        <div className="mb-4 flex items-baseline gap-2 md:mb-0 md:items-stretch md:gap-3">
          <div className="md:flex md:flex-col md:justify-center md:text-right">
            <p className="text-sm font-semibold text-foreground">
              {t("About.stackBrace")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("About.stackBraceNote")}
            </p>
          </div>
          <div className="hidden md:block">
            <Brace />
          </div>
        </div>

        <ol>
          {stack.map((layer, i) => (
            <li
              key={layer.key}
              style={{ zIndex: stack.length - i }}
              className={`relative rounded-2xl border border-border p-5 shadow-[0_14px_28px_-20px_rgba(60,35,10,0.45)] sm:p-6 ${layer.surface} ${layer.inset} ${
                i > 0 ? "-mt-3 pt-8 sm:pt-9" : ""
              }`}
            >
              <div className="grid gap-4 lg:grid-cols-[13rem_1fr] lg:items-center lg:gap-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${layer.tone}`}
                  >
                    <layer.Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold tracking-tight">
                      {t(`About.layers.${layer.key}.title`)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(`About.layers.${layer.key}.text`)}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <TechTile key={item.name} {...item} />
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-12 text-sm font-semibold text-foreground">
        {t("About.growthTitle")}
      </p>
      <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {growth.map((group) => (
          <div key={group.key} className="bg-background p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${group.tone}`}
              >
                <group.Icon aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold tracking-tight">
                  {t(`About.layers.${group.key}.title`)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t(`About.layers.${group.key}.text`)}
                </p>
              </div>
            </div>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <TechTile key={item.name} {...item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
