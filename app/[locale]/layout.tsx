import i18nConfig from "@/i18nConfig";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { dir } from "i18next";
import TranslationsProvider from "@/components/i18n/TranslationProvider";
import initTranslations from "../i18n";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Onar",
  description: "Ali Onar - Software Engineer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alionar.com",
    title: "Ali Onar - Software Engineer",
    description: `Ali Onar's Personal Website`,
    images: [
      {
        url: "https://alionar.com/images/hero-image.jpeg",
        width: 1024,
        height: 768,
        alt: "Ali Onar",
      },
    ],
    siteName: "Ali Onar",
  },
  twitter: {
    card: "summary_large_image",
    site: "@alitncn",
    creator: "@alitncn",
    title: "Ali Onar",
    description: `Ali Onar's Personal Website`,
    images: [
      {
        url: "https://alionar.com/images/hero-image.jpeg",
        alt: "Ali Onar",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <TranslationsProvider
          locale={locale}
          namespaces={i18nNamespaces}
          resources={resources}
        >
          {children}
          <Toaster />
        </TranslationsProvider>
      </body>
    </html>
  );
}
