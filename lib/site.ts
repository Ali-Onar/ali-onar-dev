import i18nConfig from "@/i18nConfig";

export const SITE_URL = "https://alionar.com";
export const EMAIL = "ali@alionar.com";
export const WHATSAPP_NUMBER = "905452301849";
export const WHATSAPP_DISPLAY = "+90 545 230 18 49";

export type Locale = "tr" | "en";

export const toLocale = (value: string): Locale => (value === "tr" ? "tr" : "en");

/** "" for the default locale, "/tr" for the others. */
export const localePrefix = (locale: string) =>
  locale === i18nConfig.defaultLocale ? "" : `/${locale}`;

export const homePath = (locale: string) => localePrefix(locale) || "/";

/** Link to a section of the home page that also works from sub pages. */
export const homeAnchor = (locale: string, id: string) =>
  `${homePath(locale)}#${id}`;

/** Social share image; one per language because the title is on it. */
export const ogImage = (locale: string) => ({
  url: `/images/og-${toLocale(locale)}.jpg`,
  width: 1200,
  height: 630,
  alt: "Ali Onar",
});

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
