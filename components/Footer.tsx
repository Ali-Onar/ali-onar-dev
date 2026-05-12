"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Ali Onar logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              Ali Tunacan Onar
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <Link
            href="mailto:alitunacanonar@icloud.com"
            className="hover:text-foreground transition-colors"
          >
            alitunacanonar@icloud.com
          </Link>
          <span className="hidden md:inline">{t("Footer.builtWith")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
