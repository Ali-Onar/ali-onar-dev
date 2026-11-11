"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { serviceKeys, servicePath } from "@/lib/services";
import { EMAIL, WHATSAPP_DISPLAY, homePath } from "@/lib/site";
import WhatsAppLink from "./WhatsAppLink";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-4">
          <Link href={homePath(locale)} className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Ali Onar logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-medium text-foreground">Ali Onar</span>
          </Link>
        </div>

        <nav aria-label={t("Footer.services")} className="md:col-span-5">
          <p className="text-sm font-medium text-foreground">{t("Footer.services")}</p>
          <ul className="mt-4 grid gap-x-8 gap-y-2.5 text-sm text-muted-foreground sm:grid-cols-2">
            {serviceKeys.map((key) => (
              <li key={key}>
                <Link
                  href={servicePath(locale, key)}
                  className="transition-colors hover:text-brand-deep"
                >
                  {t(`Services.items.${key}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="text-sm font-medium text-foreground">{t("Footer.contact")}</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="transition-colors hover:text-brand-deep"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <WhatsAppLink
                message={t("WhatsApp.message")}
                location="footer"
                className="transition-colors hover:text-brand-deep"
              >
                WhatsApp: {WHATSAPP_DISPLAY}
              </WhatsAppLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
