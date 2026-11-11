import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import ServicePage, {
  buildServiceMetadata,
} from "@/components/service/ServicePage";
import {
  findService,
  serviceKeys,
  servicePath,
  serviceSlugs,
} from "@/lib/services";
import { toLocale } from "@/lib/site";

/** Language whose slugs live under /hizmetler. */
const SEGMENT_LOCALE = "tr" as const;

type Props = { params: { locale: string; slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceKeys.map((key) => ({ slug: serviceSlugs[key][SEGMENT_LOCALE] }));
}

export function generateMetadata({ params }: Props): Metadata {
  const key = findService(SEGMENT_LOCALE, params.slug);
  return key ? buildServiceMetadata(toLocale(params.locale), key) : {};
}

export default function Page({ params }: Props) {
  const key = findService(SEGMENT_LOCALE, params.slug);
  if (!key) notFound();

  // A visitor in the other language is sent to that language's own address.
  const locale = toLocale(params.locale);
  if (locale !== SEGMENT_LOCALE) permanentRedirect(servicePath(locale, key));

  return <ServicePage locale={locale} serviceKey={key} />;
}
