"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaXTwitter,
  FaMedium,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { Mail, ArrowUpRight } from "lucide-react";
import { EMAIL, WHATSAPP_DISPLAY } from "@/lib/site";
import WhatsAppLink from "./WhatsAppLink";

const socials = [
  { name: "YouTube", url: "https://www.youtube.com/@alionar60", Icon: FaYoutube },
  { name: "Instagram", url: "https://www.instagram.com/alionarcom", Icon: FaInstagram },
  { name: "GitHub", url: "https://github.com/Ali-Onar", Icon: FaGithub },
  { name: "X", url: "https://x.com/alionar60", Icon: FaXTwitter },
  { name: "Medium", url: "https://medium.com/@alitunacanonar", Icon: FaMedium },
];

const tile =
  "group flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-5 py-4 transition-colors";
const tileLabel = "block text-xs uppercase tracking-wider text-muted-foreground";
const tileArrow =
  "h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.18em] text-brand-deep">
          {t("Contact.eyebrow")}
        </span>
        <h2 className="mt-3 max-w-3xl text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          {t("Contact.title")}
        </h2>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {t("Contact.subtitle")}
        </p>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          <WhatsAppLink
            message={t("WhatsApp.message")}
            location="contact_section"
            className={`${tile} hover:border-[#25D366]/60 hover:bg-[#25D366]/5`}
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-md shadow-[#25D366]/25">
                <FaWhatsapp aria-hidden size={18} />
              </span>
              <span>
                <span className={tileLabel}>{t("Contact.whatsappLabel")}</span>
                <span className="block text-sm font-medium">{WHATSAPP_DISPLAY}</span>
              </span>
            </span>
            <ArrowUpRight aria-hidden className={`${tileArrow} group-hover:text-[#128C7E]`} />
          </WhatsAppLink>

          <a
            href={`mailto:${EMAIL}`}
            className={`${tile} hover:border-brand/50 hover:bg-brand-soft`}
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground shadow-md shadow-brand/25">
                <Mail aria-hidden className="h-4 w-4" />
              </span>
              <span>
                <span className={tileLabel}>{t("Contact.emailLabel")}</span>
                <span className="block text-sm font-medium">{EMAIL}</span>
              </span>
            </span>
            <ArrowUpRight aria-hidden className={`${tileArrow} group-hover:text-brand`} />
          </a>

          <a
            href="https://www.linkedin.com/in/ali-tunacan-onar"
            target="_blank"
            rel="noreferrer"
            className={`${tile} hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5`}
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#0A66C2]/20 bg-[#0A66C2]/10 text-[#0A66C2]">
                <FaLinkedinIn aria-hidden size={14} />
              </span>
              <span>
                <span className={tileLabel}>{t("Contact.linkedinLabel")}</span>
                <span className="block text-sm font-medium">/in/ali-tunacan-onar</span>
              </span>
            </span>
            <ArrowUpRight aria-hidden className={`${tileArrow} group-hover:text-[#0A66C2]`} />
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:gap-8">
          <p className="text-sm font-medium text-foreground">{t("Contact.social")}</p>
          <ul className="flex flex-wrap gap-2">
            {socials.map(({ name, url, Icon }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm text-foreground transition-colors hover:border-brand/40 hover:bg-brand-soft hover:text-brand-deep"
                >
                  <Icon aria-hidden size={15} className="text-muted-foreground" />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
