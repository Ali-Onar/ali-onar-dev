"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiAnthropic,
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
  SiOpenai,
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
  Citrus,
  CreditCard,
  FileSearch,
  Landmark,
  Sparkles,
  Wand2,
  type LucideIcon,
} from "lucide-react";

type Tech = { name: string; Icon: IconType | LucideIcon };

const groups: { key: string; items: Tech[] }[] = [
  {
    key: "frontend",
    items: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "React Native", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "TailwindCSS", Icon: SiTailwindcss },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Supabase", Icon: SiSupabase },
      { name: "Prisma", Icon: SiPrisma },
    ],
  },
  {
    key: "infra",
    items: [
      { name: "Railway", Icon: SiRailway },
      { name: "Hetzner", Icon: SiHetzner },
      { name: "AWS", Icon: SiAmazonaws },
      { name: "Cloudflare", Icon: SiCloudflare },
      { name: "Vercel", Icon: SiVercel },
    ],
  },
  {
    key: "ai",
    items: [
      { name: "Claude API", Icon: SiAnthropic },
      { name: "OpenAI API", Icon: SiOpenai },
      { name: "fal.ai", Icon: Wand2 },
      { name: "Wiro AI", Icon: Sparkles },
      { name: "RAG", Icon: FileSearch },
    ],
  },
  {
    key: "payments",
    items: [
      { name: "Stripe", Icon: SiStripe },
      { name: "Lemon Squeezy", Icon: Citrus },
      { name: "iyzico", Icon: CreditCard },
      { name: "Param", Icon: CreditCard },
      { name: "Garanti POS", Icon: Landmark },
      { name: "Ziraat POS", Icon: Landmark },
    ],
  },
  {
    key: "growth",
    items: [
      { name: "Search Console", Icon: SiGooglesearchconsole },
      { name: "Lighthouse", Icon: SiLighthouse },
      { name: "Google Ads", Icon: SiGoogleads },
      { name: "Google Analytics", Icon: SiGoogleanalytics },
      { name: "Tag Manager", Icon: SiGoogletagmanager },
      { name: "Cloudflare Analytics", Icon: SiCloudflare },
    ],
  },
];

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section id="tech" className="py-24 md:py-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-brand-deep">
            {t("Tech.eyebrow")}
          </span>
          <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            {t("Tech.title")}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-x-12">
          {groups.map((group) => (
            <div key={group.key}>
              <h3 className="border-t border-foreground/15 pt-4 text-sm font-semibold tracking-tight text-foreground">
                {t(`Tech.groups.${group.key}`)}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2.5 text-[15px] text-foreground/80"
                  >
                    <Icon aria-hidden className="h-4 w-4 shrink-0 text-foreground/50" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
