import i18nConfig from "@/i18nConfig";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { dir } from "i18next";
import TranslationsProvider from "@/components/i18n/TranslationProvider";
import initTranslations from "../i18n";
import { Toaster } from "@/components/ui/toaster";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL, ogImage } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const meta = {
  en: {
    title: "Ali Onar - Full-Stack Engineer",
    description:
      "Full-Stack Engineer. Six years across fintech, healthcare AI, fitness, and B2B platforms.",
    ogLocale: "en_US",
  },
  tr: {
    title: "Ali Onar - Full-Stack Yazılım Mühendisi",
    description:
      "Full-Stack Yazılım Mühendisi. Fintech, sağlıkta yapay zekâ, fitness ve B2B platformlarında 6 yıllık deneyim.",
    ogLocale: "tr_TR",
  },
} as const;

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const m = meta[locale as keyof typeof meta] ?? meta.en;
  return {
    ...baseMetadata,
    title: m.title,
    description: m.description,
    openGraph: {
      ...baseMetadata.openGraph,
      locale: m.ogLocale,
      title: m.title,
      description: m.description,
      images: [ogImage(locale)],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: m.title,
      description: m.description,
      images: [ogImage(locale).url],
    },
  };
}

const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ali Onar - Full-Stack Engineer",
  description:
    "Full-Stack Engineer. Six years across fintech, healthcare AI, fitness, and B2B platforms.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alionar.com",
    title: "Ali Onar - Full-Stack Engineer",
    description:
      "Full-Stack Engineer. Next.js, TypeScript, Node.js, PostgreSQL.",
    images: [ogImage("en")],
    siteName: "Ali Onar",
  },
  twitter: {
    card: "summary_large_image",
    site: "@alionar60",
    creator: "@alionar60",
    title: "Ali Onar - Full-Stack Engineer",
    description:
      "Full-Stack Engineer. Six years across fintech, healthcare AI, fitness, and B2B platforms.",
    images: [ogImage("en").url],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Ali Onar",
    "Full-Stack Engineer",
    "SaaS Developer",
    "Next.js",
    "TypeScript",
    "React Native",
    "SEO",
    "Freelance",
  ],
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ["common"];

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)} className={inter.variable}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <GoogleTagManagerNoScript />
        <TranslationsProvider
          locale={locale}
          namespaces={i18nNamespaces}
          resources={resources}
        >
          {children}
          <WhatsAppButton />
          <Toaster />
        </TranslationsProvider>
        <GoogleTagManager />
      </body>
    </html>
  );
}
