declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * The site loads a Google tag, not a Tag Manager container with its own
 * triggers. A Google tag only acts on commands queued the way gtag() queues
 * them, as an `arguments` object; a plain `{ event: ... }` object is ignored.
 */
function gtag(..._command: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer!.push(arguments);
}

/** Sends an event to Google Analytics. */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  gtag("event", name, params);
}
