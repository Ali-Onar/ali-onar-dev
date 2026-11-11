import i18nConfig from "@/i18nConfig";
import { findPage, pagePath } from "@/lib/pages";
import { localePrefix, type Locale } from "@/lib/site";

export const serviceKeys = [
  "web",
  "mobile",
  "saas",
  "rescue",
  "seo",
  "ads",
  "consulting",
  "training",
] as const;

export type ServiceKey = (typeof serviceKeys)[number];

/** URL segment of the service pages per language. */
export const SERVICE_SEGMENT: Record<Locale, string> = {
  tr: "hizmetler",
  en: "services",
};

export const serviceSlugs: Record<ServiceKey, Record<Locale, string>> = {
  web: { tr: "web-gelistirme", en: "web-development" },
  mobile: { tr: "mobil-uygulama", en: "mobile-app-development" },
  saas: { tr: "saas-gelistirme", en: "saas-development" },
  rescue: { tr: "yarim-kalan-proje", en: "project-rescue" },
  seo: { tr: "seo", en: "seo" },
  ads: { tr: "google-ads-yonetimi", en: "google-ads-management" },
  consulting: { tr: "teknik-danismanlik", en: "technical-consulting" },
  training: { tr: "egitim", en: "training" },
};

export const servicePath = (locale: string, key: ServiceKey) => {
  const l: Locale = locale === "tr" ? "tr" : "en";
  return `${localePrefix(l)}/${SERVICE_SEGMENT[l]}/${serviceSlugs[key][l]}`;
};

/** Finds a service by its slug in the given language only. */
export const findService = (locale: Locale, slug: string) =>
  serviceKeys.find((key) => serviceSlugs[key][locale] === slug);

/** Path of the same page in another language (used by the language switch). */
export const switchLocalePath = (pathname: string, to: string) => {
  let rest = pathname;
  for (const l of i18nConfig.locales) {
    if (rest === `/${l}` || rest.startsWith(`/${l}/`)) {
      rest = rest.slice(l.length + 1) || "/";
      break;
    }
  }

  const match = rest.match(/^\/(hizmetler|services)\/([^/]+)\/?$/);
  if (match) {
    const from: Locale = match[1] === "hizmetler" ? "tr" : "en";
    const key = findService(from, match[2]);
    if (key) return servicePath(to, key);
  }

  const single = rest.match(/^\/([^/]+)\/?$/);
  if (single) {
    const page = findPage(single[1]);
    if (page) return pagePath(to, page);
  }

  return `${localePrefix(to)}${rest === "/" ? "" : rest}` || "/";
};
