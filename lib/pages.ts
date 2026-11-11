import { localePrefix, type Locale } from "@/lib/site";

/** Stand-alone pages and their address in each language. */
export const pageSlugs = {
  process: { tr: "nasil-calisiyoruz", en: "how-we-work" },
} as const;

export type PageKey = keyof typeof pageSlugs;

export const pagePath = (locale: string, key: PageKey) => {
  const l: Locale = locale === "tr" ? "tr" : "en";
  return `${localePrefix(l)}/${pageSlugs[key][l]}`;
};

export const findPage = (slug: string) =>
  (Object.keys(pageSlugs) as PageKey[]).find(
    (key) => pageSlugs[key].tr === slug || pageSlugs[key].en === slug
  );
