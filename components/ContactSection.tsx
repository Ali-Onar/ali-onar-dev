"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  FaXTwitter,
  FaMedium,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Mail, ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ali-tunacan-onar",
    icon: <FaLinkedinIn size={16} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Ali-Onar",
    icon: <FaGithub size={16} />,
  },
  {
    name: "X",
    url: "https://x.com/alionar60",
    icon: <FaXTwitter size={16} />,
  },
  {
    name: "Medium",
    url: "https://medium.com/@alitunacanonar",
    icon: <FaMedium size={16} />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@alionar60",
    icon: <FaYoutube size={16} />,
  },
];

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t("Contact.eyebrow")}
            </span>
            <h2 className="mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              {t("Contact.title")}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("Contact.subtitle")}
            </p>

            <div className="mt-10 flex flex-col gap-3 max-w-md">
              <Link
                href="mailto:alitunacanonar@icloud.com"
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-foreground/30 hover:bg-secondary/60"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      {t("Contact.emailLabel")}
                    </span>
                    <span className="block text-sm font-medium">
                      alitunacanonar@icloud.com
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/ali-tunacan-onar"
                target="_blank"
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-foreground/30 hover:bg-secondary/60"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground border border-border">
                    <FaLinkedinIn size={14} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      {t("Contact.linkedinLabel")}
                    </span>
                    <span className="block text-sm font-medium">
                      /in/ali-tunacan-onar
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            </div>
          </div>

          <aside className="md:col-span-5 md:pl-8 md:border-l md:border-border">
            <span className="inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t("Contact.social")}
            </span>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-3.5 text-sm text-foreground hover:text-foreground"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {s.icon}
                      </span>
                      <span>{s.name}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
