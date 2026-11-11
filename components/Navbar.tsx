"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./i18n/LanguageChanger";
import { homeAnchor, homePath } from "@/lib/site";

const navLinks = [
  { key: "About", id: "about" },
  { key: "Work", id: "work" },
  { key: "Services", id: "services" },
  { key: "Experience", id: "experience" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        open
          ? "bg-background border-b border-border shadow-lg shadow-black/5"
          : scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={homePath(locale)}
            className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground"
          >
            <Image
              src="/logo.png"
              alt="Ali Onar logo"
              width={28}
              height={28}
              priority
              className="h-7 w-7 object-contain"
            />
            <span>{t("Navbar.LogoTitle")}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={homeAnchor(locale, link.id)}
                className="text-[15px] font-medium text-foreground/80 hover:text-brand-deep transition-colors"
              >
                {t(`Navbar.${link.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageChanger />
            <Link
              href={homeAnchor(locale, "contact")}
              className="hidden md:inline-flex h-9 items-center rounded-full bg-brand px-4 text-sm font-medium text-brand-foreground shadow-sm shadow-brand/30 hover:bg-brand/90 transition-colors"
            >
              {t("Navbar.Contact")}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
              aria-label={t("Navbar.toggleMenu")}
            >
              {open ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-1 pt-2 border-t border-border">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={homeAnchor(locale, link.id)}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    {t(`Navbar.${link.key}`)}
                  </Link>
                </li>
              ))}
              <li className="px-3 pt-2">
                <Link
                  href={homeAnchor(locale, "contact")}
                  onClick={() => setOpen(false)}
                  className="flex h-11 items-center justify-center rounded-full bg-brand text-sm font-medium text-brand-foreground shadow-sm shadow-brand/30"
                >
                  {t("Navbar.Contact")}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
