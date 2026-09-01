import { SITE_URL } from "@/lib/config/site";

export function generateSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "TypeIndian",
        url: SITE_URL,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "TypeIndian",
        url: SITE_URL,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };
}