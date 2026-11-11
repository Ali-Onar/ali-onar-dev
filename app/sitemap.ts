import { MetadataRoute } from "next";
import { pagePath } from "@/lib/pages";
import { serviceKeys, servicePath } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      alternates: {
        languages: { en: SITE_URL, tr: `${SITE_URL}/tr` },
      },
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const services: MetadataRoute.Sitemap = serviceKeys.flatMap((key) => {
    const languages = {
      en: `${SITE_URL}${servicePath("en", key)}`,
      tr: `${SITE_URL}${servicePath("tr", key)}`,
    };

    return [languages.tr, languages.en].map((url) => ({
      url,
      lastModified,
      alternates: { languages },
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  });

  const processLanguages = {
    en: `${SITE_URL}${pagePath("en", "process")}`,
    tr: `${SITE_URL}${pagePath("tr", "process")}`,
  };
  const process: MetadataRoute.Sitemap = [
    processLanguages.tr,
    processLanguages.en,
  ].map((url) => ({
    url,
    lastModified,
    alternates: { languages: processLanguages },
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...home, ...services, ...process];
}
