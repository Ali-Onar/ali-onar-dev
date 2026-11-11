"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "905452301849";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const label = t("WhatsApp.label");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t("WhatsApp.message")
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={() =>
        window.dataLayer?.push({
          event: "whatsapp_click",
          click_location: "floating_button",
        })
      }
      className="group fixed bottom-5 right-5 z-40 flex items-center sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none mr-3 hidden translate-x-2 whitespace-nowrap rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
        {label}
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 ring-4 ring-[#25D366]/20 transition-transform duration-200 group-hover:scale-105">
        <FaWhatsapp aria-hidden className="h-7 w-7" />
      </span>
    </a>
  );
};

export default WhatsAppButton;
