import Script from "next/script";

// The Google tag of the GA4 property (G-2EMP65QPG4). Despite the prefix it is
// not a Tag Manager container; events are sent from lib/analytics.ts.
const GTM_ID = "GTM-TDXSQJLP";

// Only load on production builds so local development does not pollute the data.
const enabled = process.env.NODE_ENV === "production";

export const GoogleTagManager = () => {
  if (!enabled) return null;

  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
};

export const GoogleTagManagerNoScript = () => {
  if (!enabled) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
};
