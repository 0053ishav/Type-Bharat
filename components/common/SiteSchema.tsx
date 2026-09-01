import Script from "next/script";

import { generateSiteSchema } from "@/lib/seo/siteSchema";

export default function SiteSchema() {
  const schema = generateSiteSchema();

  return (
    <Script
      id="typeindian-site-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}