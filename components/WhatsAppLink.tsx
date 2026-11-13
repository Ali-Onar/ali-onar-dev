"use client";

import React from "react";
import { trackEvent } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/site";

type Props = {
  message: string;
  /** Where on the page the link sits; sent with the click event. */
  location: string;
  className?: string;
  "aria-label"?: string;
  children: React.ReactNode;
};

/** Opens a WhatsApp chat and reports the click to Google Analytics. */
const WhatsAppLink = ({ message, location, children, ...rest }: Props) => (
  <a
    href={whatsappUrl(message)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackEvent("whatsapp_click", { click_location: location })}
    {...rest}
  >
    {children}
  </a>
);

export default WhatsAppLink;
