"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe } from "lucide-react";
import { switchLocalePath } from "@/lib/services";

const locales = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
] as const;

export default function LanguageChanger() {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    router.push(switchLocalePath(currentPathname, newLocale));
    router.refresh();
  };

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t("Navbar.language")}</span>
      <Globe
        aria-hidden
        className="pointer-events-none absolute left-2.5 h-4 w-4 text-foreground/60"
      />
      <select
        value={currentLocale}
        onChange={(e) => handleChange(e.target.value)}
        className="h-9 cursor-pointer appearance-none rounded-full border border-border bg-background pl-8 pr-7 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {locales.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-2 h-4 w-4 text-foreground/60"
      />
    </label>
  );
}
