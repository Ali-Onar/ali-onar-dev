"use client";

import React from "react";
import { trackEvent } from "@/lib/analytics";
import { EMAIL } from "@/lib/site";

type Props = {
  /** Where on the page the link sits; sent with the click event. */
  location: string;
  subject?: string;
  className?: string;
  children: React.ReactNode;
};

/** Opens the mail client and reports the click to Google Analytics. */
const MailLink = ({ location, subject, className, children }: Props) => (
  <a
    href={`mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`}
    onClick={() => trackEvent("mail_click", { click_location: location })}
    className={className}
  >
    {children}
  </a>
);

export default MailLink;
