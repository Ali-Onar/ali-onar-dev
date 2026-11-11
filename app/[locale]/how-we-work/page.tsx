import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import ProcessPage, {
  buildProcessMetadata,
} from "@/components/process/ProcessPage";
import { pagePath } from "@/lib/pages";
import { toLocale } from "@/lib/site";

/** Language this address belongs to. */
const PAGE_LOCALE = "en" as const;

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  return buildProcessMetadata(toLocale(params.locale));
}

export default function Page({ params }: Props) {
  // A visitor in the other language is sent to that language's own address.
  const locale = toLocale(params.locale);
  if (locale !== PAGE_LOCALE) permanentRedirect(pagePath(locale, "process"));

  return <ProcessPage locale={locale} />;
}
