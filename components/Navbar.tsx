"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import LanguageChanger from "./i18n/LanguageChanger";

const navLinks = [
  { key: "About", href: "#about" },
  { key: "Work", href: "#work" },
  { key: "Experience", href: "#experience" },
  { key: "Services", href: "#services" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
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
              <a
                key={link.key}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-brand-deep transition-colors"
              >
                {t(`Navbar.${link.key}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageChanger />
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full bg-brand px-3.5 py-1.5 text-xs font-medium text-brand-foreground shadow-sm shadow-brand/30 hover:bg-brand/90 transition-colors"
            >
              {t("Navbar.Contact")}
            </a>
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
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {t(`Navbar.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
