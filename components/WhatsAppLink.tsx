"use client";

import React from "react";
import { whatsappUrl } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type Props = {
  message: string;
  /** Where on the page the link sits; sent with the click event. */
  location: string;
  className?: string;
  "aria-label"?: string;
  children: React.ReactNode;
};

/** Opens a WhatsApp chat and reports the click to Google Tag Manager. */
const WhatsAppLink = ({ message, location, children, ...rest }: Props) => (
  <a
    href={whatsappUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() =>
      window.dataLayer?.push({
        event: "whatsapp_click",
        click_location: location,
      })
    }
    {...rest}
  >
    {children}
  </a>
);

export default WhatsAppLink;
